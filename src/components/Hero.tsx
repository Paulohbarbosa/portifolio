import Image from "next/image";
import data from "@/data/portfolio.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <main className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div
            className="badge fade-in-up flex gap-4"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="badge-pill bg-blue-500/10">
              {data.personalInfo.role}
            </span>
            <span className="badge-text">Portfólio Profissional</span>
          </div>

          <h1
            className="headline fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            {data.heroInfo.primaryTitle}
            <span className="text-blue">{data.heroInfo.secondaryTitle}</span>
          </h1>

          <p className="subtitle fade-in-up" style={{ animationDelay: "0.3s" }}>
            {data.heroInfo.description}
          </p>

          <div
            className="cta-group fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a href="#contato" className="btn-beam">
              <div className="beam-border"></div>
              <div className="btn-content-bg">
                <div className="bottom-glow"></div>
              </div>
              <span
                style={{
                  position: "relative",
                  zIndex: 10,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                Entre em contato
              </span>
            </a>

            <div style={{ display: "flex", gap: "0.5rem" }}>
              {data.personalInfo.social.map((social) => {
                let icon;
                switch (social.name) {
                  case "github":
                    icon = faGithub;
                    break;
                  case "linkedin":
                    icon = faLinkedin;
                    break;
                  case "whatsapp":
                    icon = faWhatsapp;
                    break;
                  case "email":
                    icon = faEnvelope;
                    break;
                  case "curriculo":
                    icon = faFile;
                    break;
                  default:
                    icon = faGithub;
                }

                return (
                  <a
                    key={social.name}
                    href={social.url}
                    className="btn-beam"
                    style={{ padding: "0 1rem" }}
                    aria-label={social.name}
                  >
                    <div className="btn-content-bg" title={social.name}></div>
                    <span
                      style={{
                        position: "relative",
                        zIndex: 10,
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        fontSize: "1.1rem",
                      }}
                    >
                      <FontAwesomeIcon icon={icon} />
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* foto de perfil */}
        <div
          className="hero-visual fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="photo-wrapper">
            <div className="photo-glow"></div>
            {/* Otimização Lighthouse: Usando next/image para otimização automática de imagens,
                como WebP, lazy loading (se não for priority) e redimensionamento.
                Adicionamos 'priority' por ser a imagem principal do Hero (LCP). */}
            <Image
              src={data.personalInfo.photo}
              alt={
                data.personalInfo.firstName + " " + data.personalInfo.lastName
              }
              width={400}
              height={400}
              className="profile-photo"
              priority
            />
            {/* podemos automatizar esse ícones comforme que for adicionado novas tecnologias */}
            {data.heroIcons.map((icon) => (
              <div
                key={icon.key}
                className={`floating-card card-${icon.key} card-icon`}
                style={{
                  background: `rgba(${icon.color}, 0.1)`,
                  borderColor: `rgba(${icon.color}, 0.2)`,
                }}
              >
                {/* Otimização Lighthouse: Imagens menores também ganham com next/image */}
                <Image
                  src={
                    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/" +
                    icon.icon +
                    "/" +
                    icon.icon +
                    "-original.svg"
                  }
                  alt={icon.name}
                  width={24}
                  height={24}
                  style={{ width: "24px", height: "24px" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
