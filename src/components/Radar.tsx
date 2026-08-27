export default function Radar() {
  return (
    <section
      id="radar"
      className="skills-section"
      style={{ paddingTop: "2rem" }}
    >
      <div className="skills-container">
        <div className="skills-header reveal">
          <h2 className="skills-headline">
            Explorando a <span className="text-purple">próxima fronteira.</span>
          </h2>
          <p className="skills-subtitle">
            O ecossistema web não para de evoluir, e eu também não. Aqui está o
            que está no meu radar de estudos agora para elevar ainda mais a
            barra dos meus próximos projetos.
          </p>
        </div>

        <div className="flex flex-col">
          {/* Card 1 */}
          <div
            className="skills-card glassmorphism reveal relative overflow-hidden group"
            style={{ transitionDelay: "0.1s", padding: "2rem", marginBottom: "1.5rem" }}
          >
            <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 w-1/2 group-hover:w-full transition-all duration-500"></div>

            <div className="badge mb-6">
              <span className="badge-pill">Em andamento</span>
            </div>

            <h3
              className="card-title"
              style={{
                fontSize: "1.3rem",
                borderBottom: "none",
                paddingBottom: "0",
                marginBottom: "1rem",
              }}
            >
              Experiências Imersivas com Three.js e WebGL
            </h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Estudando a criação de interfaces 3D renderizadas no navegador
              para trazer um novo nível de interatividade aos produtos.
            </p>
            <div className="text-xs text-blue-400 uppercase tracking-wider font-semibold">
              Three.js Journey por Bruno Simon
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="skills-card glassmorphism reveal relative overflow-hidden group"
            style={{ transitionDelay: "0.2s", padding: "2rem", marginBottom: "1.5rem" }}
          >
            <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 w-1/3 group-hover:w-full transition-all duration-500"></div>

            <div className="badge mb-6">
              <span className="badge-pill">Praticando</span>
            </div>

            <h3
              className="card-title"
              style={{
                fontSize: "1.3rem",
                borderBottom: "none",
                paddingBottom: "0",
                marginBottom: "1rem",
              }}
            >
              Server Components e Next.js App Router
            </h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Aprofundando em arquiteturas híbridas de renderização para
              entregar aplicações que combinam SEO perfeito com a velocidade do
              React.
            </p>
            <div className="text-xs text-blue-400 uppercase tracking-wider font-semibold">
              Epic Web Dev / Documentação Oficial
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="skills-card glassmorphism reveal relative overflow-hidden group"
            style={{ transitionDelay: "0.3s", padding: "2rem" }}
          >
            <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 w-1/4 group-hover:w-full transition-all duration-500"></div>

            <div className="badge mb-6">
              <span
                className="badge-pill"
                style={{
                  background: "rgba(139, 92, 246, 0.2)",
                  color: "var(--accent-purple)",
                }}
              >
                Explorando
              </span>
            </div>

            <h3
              className="card-title"
              style={{
                fontSize: "1.3rem",
                borderBottom: "none",
                paddingBottom: "0",
                marginBottom: "1rem",
              }}
            >
              Integração de IA no Front-end (LLMs)
            </h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Entendendo como criar interfaces conversacionais modernas e
              integrar APIs de Inteligência Artificial para gerar experiências
              de usuário mais espertas e preditivas.
            </p>
            <div className="text-xs text-purple-400 uppercase tracking-wider font-semibold">
              Pesquisa e Projetos Pessoais
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
