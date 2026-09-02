export interface GithubProject {
  title: string;
  description: string;
  github: string;
  techs: string[];
  img: string;
  year: string;
  badge: string;
  isFeatured: boolean;
}

export async function getGithubProjects(username: string): Promise<GithubProject[]> {
  try {
    const res = await fetch(
      `https://api.github.com/search/repositories?q=user:${username}+topic:portfolio-project`,
      {
        next: { revalidate: 10 },
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      }
    );

    if (!res.ok) {
      console.error("Failed to fetch Github projects:", await res.text());
      return [];
    }

    const data = await res.json();

    const projects = await Promise.all(
      data.items.map(async (repo: any) => {
        let description = repo.description || "Projeto desenvolvido e disponibilizado no GitHub.";
        let techs = repo.topics.filter((topic: string) => topic !== "portfolio-project");

        try {
          const readmeRes = await fetch(
            `https://raw.githubusercontent.com/${username}/${repo.name}/${repo.default_branch}/README.md`,
            { next: { revalidate: 10 } }
          );

          if (readmeRes.ok) {
            const readmeText = await readmeRes.text();
            
            // 1. Extrair Apenas a Descrição
            let combinedDesc = "";
            
            const descMatch = readmeText.match(/##[^#]*Descrição[\s\S]*?(?=##|$)/i);
            if (descMatch) {
              let text = descMatch[0].replace(/##.*?Descrição.*/i, "").trim();
              combinedDesc = text;
            }

            if (combinedDesc.trim()) {
              combinedDesc = combinedDesc
                .replace(/!\[.*?\]\(.*?\)/g, "")  // Remove imagens
                .replace(/<img[^>]*>/g, "")       // Remove tags de imagem HTML
                .replace(/\[([^\]]+)\]\([^)]+\)/g, "<b>$1</b>") // Converte links [texto](url) para <b>texto</b>
                .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>") // Converte **texto** para <b>texto</b>
                .trim();
              
              // Remove múltiplos <br> vazios resultantes de quebras de linha
              combinedDesc = combinedDesc.replace(/\n{3,}/g, '\n\n').replace(/\n/g, '<br/>');
              description = combinedDesc;
            }

            // 2. Extrair Tecnologias
            const techMatch = readmeText.match(/##[^#]*Tecnologias[\s\S]*?(?=##|$)/i);
            if (techMatch) {
              const lines = techMatch[0].split('\n');
              const extractedTechs = [];
              
              for (const line of lines) {
                // Procurar linhas de lista que comecem com "-", "*" ou "+" (com ou sem espaços antes)
                const match = line.match(/^\s*[-\*\+]\s+(.*)/);
                if (match) {
                  let text = match[1];
                  
                  // Se tiver link [Nome](URL), pega o nome
                  const linkMatch = text.match(/\[(.*?)\]/);
                  if (linkMatch) {
                    text = linkMatch[1];
                  } else {
                    // Se tiver negrito **Nome**
                    const boldMatch = text.match(/\*\*(.*?)\*\*/);
                    if (boldMatch) {
                      text = boldMatch[1];
                    } else {
                      // Pega apenas a primeira parte antes do traço "-" ou ":"
                      text = text.split(/[-:]/)[0];
                    }
                  }
                  
                  text = text.replace(/[*:]/g, '').trim();
                  
                  if (text && text.length < 30) { // Ignora descrições longas que vazaram
                    extractedTechs.push(text);
                  }
                }
              }
              
              if (extractedTechs.length > 0) {
                techs = extractedTechs;
              }
            }
          }
        } catch (e) {
          console.error("Failed to parse README for", repo.name, e);
        }

        // Tentar buscar a imagem oficial exata que o GitHub está usando (isso resolve o cache e imagens customizadas!)
        let img = `https://opengraph.githubassets.com/1/${username}/${repo.name}`;
        
        try {
          // Acessamos a página do repositório no GitHub para ler a tag <meta property="og:image">
          const htmlRes = await fetch(repo.html_url, { next: { revalidate: 10 } });
          if (htmlRes.ok) {
            const htmlText = await htmlRes.text();
            // Expressão regular para pegar a imagem exata do Social Preview oficial da página
            const ogImageMatch = htmlText.match(/<meta property="og:image" content="([^"]+)"/);
            if (ogImageMatch && ogImageMatch[1]) {
              img = ogImageMatch[1];
            }
          }
        } catch (e) {
          console.error("Failed to fetch og:image for", repo.name, e);
        }

        return {
          title: repo.name.replace(/-/g, " "),
          description,
          github: repo.html_url,
          techs,
          img,
          year: new Date(repo.created_at).getFullYear().toString(),
          badge: "GitHub Repo",
          isFeatured: repo.stargazers_count > 0 || repo.topics.includes("featured"),
        };
      })
    );

    return projects;
  } catch (error) {
    console.error("Error fetching github projects:", error);
    return [];
  }
}
