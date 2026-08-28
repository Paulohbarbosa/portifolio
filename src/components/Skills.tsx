import data from "@/data/portfolio.json";

export default function Skills() {
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

            <div className="skills-group">
              <h4 className="group-title">Tecnologias</h4>
              <div className="tags-container">
                {data.skills.technologies.map((skill) => (
                  <span
                    className={`tech-tag ${skill.glow ? `glow-${skill.glow}` : ""}`}
                    key={skill.name}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

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
                <li className="edu-item">
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
