export default function Hero() {
  return (
    <main className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="badge fade-in-up" style={{ animationDelay: "0.1s" }}>
            <span className="badge-pill">Front-end Developer</span>
            <span className="badge-text">Portfólio Profissional</span>
          </div>

          <h1
            className="headline fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Interfaces que engajam.
            <span className="text-blue">Códigos com impacto.</span>
          </h1>

          <p className="subtitle fade-in-up" style={{ animationDelay: "0.3s" }}>
            Eu ajudo a transformar designs complexos em aplicações web rápidas,
            acessíveis e escaláveis para negócios que exigem excelência visual e
            performance.
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

            <div style={{ display: "flex", gap: "1rem" }}>
              <a
                href="#"
                className="btn-beam"
                style={{ padding: "0 1.2rem" }}
                aria-label="GitHub"
              >
                <div className="btn-content-bg"></div>
                <span
                  style={{
                    position: "relative",
                    zIndex: 10,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <svg
                    className="icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: "1.2rem", height: "1.2rem" }}
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76 0-1.5-.5-2.8-1.4-3.8.14-.36.6-1.8-.1-3.7 0 0-1.1-.3-3.7 2a10.8 10.8 0 0 0-6 0c-2.6-2.3-3.7-2-3.7-2-.7 1.9-.2 3.4-.1 3.7C4.5 11.2 4 12.5 4 14c0 5.2 3 6.4 6 6.76a4.8 4.8 0 0 0-1 3.24v4"></path>
                  </svg>
                </span>
              </a>

              <a
                href="#"
                className="btn-beam"
                style={{ padding: "0 1.2rem" }}
                aria-label="LinkedIn"
              >
                <div className="btn-content-bg"></div>
                <span
                  style={{
                    position: "relative",
                    zIndex: 10,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <svg
                    className="icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: "1.2rem", height: "1.2rem" }}
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </span>
              </a>

              <a
                href="mailto:seu-email@exemplo.com"
                className="btn-beam"
                style={{ padding: "0 1.2rem" }}
                aria-label="Email"
              >
                <div className="btn-content-bg"></div>
                <span
                  style={{
                    position: "relative",
                    zIndex: 10,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <svg
                    className="icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: "1.2rem", height: "1.2rem" }}
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div
          className="hero-visual fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="photo-wrapper">
            <div className="photo-glow"></div>
            <img
              src="/paulo-barbosa-foto.png"
              alt="paulo barbosa"
              className="profile-photo"
            />
            {/* podemos automatizar esse ícones comforme que for adicionado novas tecnologias */}
            <div
              className="floating-card card-1 card-icon"
              style={{
                background: "rgba(247, 223, 30, 0.1)",
                borderColor: "rgba(247, 223, 30, 0.2)",
              }}
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                alt="JavaScript"
                style={{ width: "24px", height: "24px" }}
              />
            </div>

            <div
              className="floating-card card-2 card-icon"
              style={{
                background: "rgba(227, 79, 38, 0.1)",
                borderColor: "rgba(227, 79, 38, 0.2)",
              }}
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                alt="HTML5"
                style={{ width: "24px", height: "24px" }}
              />
            </div>

            <div
              className="floating-card card-3 card-icon"
              style={{
                background: "rgba(56, 178, 172, 0.1)",
                borderColor: "rgba(56, 178, 172, 0.2)",
              }}
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                alt="TailwindCSS"
                style={{ width: "24px", height: "24px" }}
              />
            </div>

            <div
              className="floating-card card-4 card-icon"
              style={{
                background: "rgba(51, 153, 51, 0.1)",
                borderColor: "rgba(51, 153, 51, 0.2)",
              }}
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                alt="Node.js"
                style={{ width: "24px", height: "24px" }}
              />
            </div>

            <div
              className="floating-card card-5 card-icon"
              style={{
                background: "rgba(234, 58, 85, 0.1)",
                borderColor: "rgba(234, 58, 85, 0.2)",
                color: "#ea3a55",
                fontWeight: 800,
                fontSize: "1.1rem",
                fontFamily: "Inter, sans-serif",
              }}
            >
              n8n
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
