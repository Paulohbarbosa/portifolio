import data from "@/data/portfolio.json";
import { GithubProject } from "@/lib/github";

export default function Skills({ githubProjects = [] }: { githubProjects?: GithubProject[] }) {
  const currentYear = new Date().getFullYear();

  // Filtra os projetos (até 5 anos) e ordena do mais novo para o mais antigo
  const recentProjects = [...githubProjects]
    .filter((p) => currentYear - parseInt(p.year) <= 5)
    .sort((a, b) => parseInt(b.year) - parseInt(a.year));

  // Extrai as tecnologias sem repetição, mantendo a ordem do mais recente
  const githubTechsSet = new Set<string>();
  const githubTechs: { name: string; glow: string }[] = [];

  recentProjects.forEach((p) => {
    p.techs.forEach((tech) => {
      // Verificação ignorando maiúsculas e minúsculas (case-insensitive)
      const techLower = tech.toLowerCase();
      const alreadyAdded = Array.from(githubTechsSet).some(
        (t) => t.toLowerCase() === techLower
      );

      if (!alreadyAdded) {
        githubTechsSet.add(tech);
        // Busca a tecnologia nos dados originais para manter o estilo 'glow' (brilho)
        const originalTech = data.skills.technologies.find(
          (t) => t.name.toLowerCase() === techLower
        );
        githubTechs.push({
          name: tech,
          glow: originalTech?.glow || "",
        });
      }
    });
  });

  // Usa as tecnologias extraídas se existirem, caso contrário usa do JSON
  const displayTechs =
    githubTechs.length > 0 ? githubTechs : data.skills.technologies;

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="skills-header reveal">
          <h2 className="skills-headline">
            {data.skillsInfo.primaryTitle} <br />
            <span className="text-blue">{data.skillsInfo.secondaryTitle}</span>
          </h2>
          <p className="skills-subtitle">{data.skillsInfo.description}</p>
        </div>

        <div className="skills-grid">
          {/* Bloco 1: Stack & Especialidades */}
          <div className="skills-card glassmorphism reveal">
            <h3 className="card-title">Stack & Especialidades</h3>
            {/* Foco de atuação */}
            <div className="skills-group">
              <h4 className="group-title">Foco de atuação</h4>
              <div className="tags-container">
                {data.skills.focus.map((skill) => (
                  <span className="tech-tag" key={skill.name}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
            {/* Tecnologias */}
            <div className="skills-group">
              <h4 className="group-title">Tecnologias</h4>
              <div className="tags-container">
                {displayTechs.map((skill) => (
                  <span
                    className={`tech-tag ${skill.glow ? `glow-${skill.glow}` : ""}`}
                    key={skill.name}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
            {/* Aptidões */}
            <div className="skills-group">
              <h4 className="group-title">Aptidões</h4>
              <div className="tags-container">
                {data.skills.aptitudes.map((skill) => (
                  <span
                    className={`tech-tag ${skill.glow ? `glow-${skill.glow}` : ""}`}
                    key={skill.name}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bloco 2: Formação & Cursos */}
          <div
            className="skills-card glassmorphism reveal"
            style={{ transitionDelay: "0.2s" }}
          >
            <h3 className="card-title">Formação & Cursos</h3>

            <ul className="education-list">
              {data.education.map((edu) => (
                <li className="edu-item" key={edu.title}>
                  <div className="edu-dot"></div>
                  <div className="edu-content">
                    <h4 className="edu-title">{edu.title}</h4>
                    <div className="edu-meta">
                      {edu.institution} &middot; {edu.period}
                    </div>
                    <p className="edu-desc">{edu.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
