import data from "@/data/portfolio.json";
import { getGithubProjects } from "@/lib/github";
import PrintButton from "./PrintButton";
import "./cv.css";

export const metadata = {
  title: "Currículo - Paulo Barbosa",
  description: "Versão para impressão do currículo de Paulo Barbosa.",
};

export default async function CVPage() {
  const githubProjects = await getGithubProjects("paulohbarbosa");

  return (
    <div className="cv-container">
      <PrintButton />

      <header className="cv-header">
        <h1 className="cv-name">
          {data.personalInfo.firstName} {data.personalInfo.lastName}
        </h1>
        <div className="cv-role">{data.personalInfo.role}</div>
        <div className="cv-contact">
          {data.personalInfo.social.map((social) => {
            if (social.name === "curriculo") return null;

            let url = social.url;
            let displayText =
              social.name.charAt(0).toUpperCase() + social.name.slice(1);

            if (social.name === "whatsapp") {
              url = process.env.NEXT_PUBLIC_WHATSAPP_LINK || url;
              displayText = "WhatsApp";
            } else if (social.name === "email") {
              url = "/?tab=email#contato"; // Redireciona para o formulário na página inicial
              displayText = "E-mail";
            }

            return (
              <a
                key={social.name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {displayText}
              </a>
            );
          })}
        </div>
      </header>

      <section className="cv-section">
        <h2 className="cv-section-title">Resumo Profissional</h2>
        <p className="cv-text">
          {data.personalInfo.shortBio} {data.heroInfo.description}
        </p>
      </section>

      <section className="cv-section">
        <h2 className="cv-section-title">Habilidades Técnicas</h2>
        <div className="cv-skills-list">
          {data.skills.technologies.map((tech) => (
            <span key={tech.name} className="cv-skill-tag">
              {tech.name}
            </span>
          ))}
        </div>
      </section>

      <section className="cv-section">
        <h2 className="cv-section-title">Foco Profissional</h2>
        <div className="cv-skills-list">
          {data.skills.focus.map((focus) => (
            <span key={focus.name} className="cv-skill-tag">
              {focus.name}
            </span>
          ))}
        </div>
      </section>

      <section className="cv-section">
        <h2 className="cv-section-title">Aptidões</h2>
        <div className="cv-skills-list">
          {data.skills.aptitudes.map((aptitude) => (
            <span key={aptitude.name} className="cv-skill-tag">
              {aptitude.name}
            </span>
          ))}
        </div>
      </section>

      <section className="cv-section">
        <h2 className="cv-section-title">Experiência Profissional</h2>
        {data.timelineExperiences.map((exp, idx) => (
          <div key={idx} className="cv-item">
            <div className="cv-item-header">
              <span className="cv-item-title">{exp.company}</span>
              <span className="cv-item-date">{exp.year}</span>
            </div>
            <p className="cv-item-desc">{exp.description}</p>
          </div>
        ))}
      </section>

      <section className="cv-section">
        <h2 className="cv-section-title">Principais Projetos</h2>
        {githubProjects.slice(0, 4).map((project, idx) => (
          <div key={idx} className="cv-item">
            <div className="cv-item-header">
              <span className="cv-item-title ">{project.title}</span>
              <span className="cv-item-date">{project.year}</span>
            </div>
            {project.techs && (
              <p
                className="cv-text"
                style={{
                  fontSize: "0.85rem",
                  color: "#6b7280",
                  marginBottom: "4px",
                }}
              >
                Stack: {project.techs.join(", ")}
              </p>
            )}
            <div
              className="cv-item-desc"
              dangerouslySetInnerHTML={{ __html: project.description }}
            />
          </div>
        ))}
      </section>

      <section className="cv-section">
        <h2 className="cv-section-title">Formação Acadêmica e Cursos</h2>
        {data.education.map((edu, idx) => (
          <div key={idx} className="cv-item">
            <div className="cv-item-header">
              <span className="cv-item-title">{edu.title}</span>
              <span className="cv-item-date">{edu.period}</span>
            </div>
            <div className="cv-item-subtitle">{edu.institution}</div>
            <p className="cv-item-desc">{edu.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
