export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="skills-header reveal">
          <h2 className="skills-headline">
            Fundamentos sólidos.
            <br />
            <span className="text-blue">Tecnologias modernas.</span>
          </h2>
          <p className="skills-subtitle">
            O ecossistema web evolui rápido. Minha base técnica garante que os
            projetos utilizem as melhores práticas de performance, arquitetura e
            acessibilidade.
          </p>
        </div>

        <div className="skills-grid">
          {/* Bloco 1: Stack & Especialidades */}
          <div className="skills-card glassmorphism reveal">
            <h3 className="card-title">Stack & Especialidades</h3>

            <div className="skills-group">
              <h4 className="group-title">Foco de atuação</h4>
              <div className="tags-container">
                <span className="tech-tag">Arquitetura Front-end</span>
                <span className="tech-tag">Micro-frontends</span>
                <span className="tech-tag">Web Performance</span>
                <span className="tech-tag">Acessibilidade (a11y)</span>
                <span className="tech-tag">Animações Complexas</span>
              </div>
            </div>

            <div className="skills-group">
              <h4 className="group-title">Tecnologias</h4>
              <div className="tags-container">
                <span className="tech-tag glow-blue">React</span>
                <span className="tech-tag glow-white">Next.js</span>
                <span className="tech-tag glow-blue">TypeScript</span>
                <span className="tech-tag glow-yellow">JavaScript (ES6+)</span>
                <span className="tech-tag glow-cyan">Tailwind CSS</span>
                <span className="tech-tag glow-purple">Framer Motion</span>
                <span className="tech-tag glow-red">Jest</span>
                <span className="tech-tag glow-pink">GraphQL</span>
              </div>
            </div>

            <div className="skills-group">
              <h4 className="group-title">Aptidões</h4>
              <div className="tags-container">
                <span className="tech-tag glow-blue">Criatividade</span>
                <span className="tech-tag glow-white">
                  Resolução de problemas
                </span>
                <span className="tech-tag glow-yellow">Comunicação</span>
                <span className="tech-tag glow-blue">Pensamento analítico</span>
                <span className="tech-tag glow-pink">Empatia</span>
                <span className="tech-tag glow-cyan">Trabalho em equipe</span>
                <span className="tech-tag glow-red">Organização</span>
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
              <li className="edu-item">
                <div className="edu-dot"></div>
                <div className="edu-content">
                  <h4 className="edu-title">
                    Bacharelado em Engenharia de Software
                  </h4>
                  <div className="edu-meta">
                    Universidade XYZ &middot; 2016 - 2020
                  </div>
                  <p className="edu-desc">
                    Base sólida em algoritmos, estrutura de dados e engenharia
                    de sistemas.
                  </p>
                </div>
              </li>

              <li className="edu-item">
                <div className="edu-dot"></div>
                <div className="edu-content">
                  <h4 className="edu-title">
                    Especialização em Arq. Front-end e React
                  </h4>
                  <div className="edu-meta">
                    Rocketseat / Alura &middot; 2021
                  </div>
                  <p className="edu-desc">
                    Foco em componentização, gerenciamento de estado global e
                    clean code no front-end.
                  </p>
                </div>
              </li>

              <li className="edu-item">
                <div className="edu-dot"></div>
                <div className="edu-content">
                  <h4 className="edu-title">
                    Masterclass em UI Engineering e Web Vitals
                  </h4>
                  <div className="edu-meta">
                    Google Developers / Udacity &middot; 2022
                  </div>
                  <p className="edu-desc">
                    Treinamento avançado em otimização de renderização, métricas
                    de performance e acessibilidade web.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
