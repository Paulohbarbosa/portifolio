export default function Testimonials() {
  return (
    <section id="depoimentos" className="testimonials-section">
      <div className="testimonials-header reveal">
        <h2 className="testimonials-headline">
          Pessoas com quem <span className="text-blue">trabalhei</span>
        </h2>
      </div>

      <div className="marquee-container">
        <div className="marquee-content">
          {/* Card 1 */}
          <div className="testimonial-card glassmorphism">
            <p className="testimonial-quote">
              "O Paulo transformou completamente a performance da nossa
              aplicação. O dashboard que antes demorava segundos para carregar,
              agora é instantâneo. Uma entrega excepcional."
            </p>
            <div className="testimonial-author">
              <div className="author-info">
                <span className="author-name">Mariana Costa</span>
                <span className="author-role">Product Manager, Nubank</span>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="testimonial-card glassmorphism">
            <p className="testimonial-quote">
              "Trabalhar com o Paulo foi uma aula de front-end avançado. Ele tem
              uma visão de arquitetura e UX que é rara de encontrar. O código
              dele é tão elegante quanto o design final."
            </p>
            <div className="testimonial-author">
              <div className="author-info">
                <span className="author-name">Rafael Almeida</span>
                <span className="author-role">Tech Lead, Google</span>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="testimonial-card glassmorphism">
            <p className="testimonial-quote">
              "Nossa plataforma de ensino nunca foi tão imersiva. A fluidez das
              animações e a qualidade da interação elevaram o nosso produto a um
              nível de classe mundial."
            </p>
            <div className="testimonial-author">
              <div className="author-info">
                <span className="author-name">Diego Fernandes</span>
                <span className="author-role">CTO, Asimov Academy</span>
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="testimonial-card glassmorphism">
            <p className="testimonial-quote">
              "O nível de detalhe e o rigor em acessibilidade no nosso Design
              System foi impressionante. O Paulo não escreve apenas código, ele
              cria experiências impecáveis."
            </p>
            <div className="testimonial-author">
              <div className="author-info">
                <span className="author-name">Camila Santos</span>
                <span className="author-role">UX Designer Senior</span>
              </div>
            </div>
          </div>

          {/* Duplicatas para o efeito infinito (loop suave) */}
          {/* Card 1 Duplicado */}
          <div className="testimonial-card glassmorphism">
            <p className="testimonial-quote">
              "O Paulo transformou completamente a performance da nossa
              aplicação. O dashboard que antes demorava segundos para carregar,
              agora é instantâneo. Uma entrega excepcional."
            </p>
            <div className="testimonial-author">
              <div className="author-info">
                <span className="author-name">Mariana Costa</span>
                <span className="author-role">Product Manager, Nubank</span>
              </div>
            </div>
          </div>
          {/* Card 2 Duplicado */}
          <div className="testimonial-card glassmorphism">
            <p className="testimonial-quote">
              "Trabalhar com o Paulo foi uma aula de front-end avançado. Ele tem
              uma visão de arquitetura e UX que é rara de encontrar. O código
              dele é tão elegante quanto o design final."
            </p>
            <div className="testimonial-author">
              <div className="author-info">
                <span className="author-name">Rafael Almeida</span>
                <span className="author-role">Tech Lead, Google</span>
              </div>
            </div>
          </div>
          {/* Card 3 Duplicado */}
          <div className="testimonial-card glassmorphism">
            <p className="testimonial-quote">
              "Nossa plataforma de ensino nunca foi tão imersiva. A fluidez das
              animações e a qualidade da interação elevaram o nosso produto a um
              nível de classe mundial."
            </p>
            <div className="testimonial-author">
              <div className="author-info">
                <span className="author-name">Diego Fernandes</span>
                <span className="author-role">CTO, Asimov Academy</span>
              </div>
            </div>
          </div>
          {/* Card 4 Duplicado */}
          <div className="testimonial-card glassmorphism">
            <p className="testimonial-quote">
              "O nível de detalhe e o rigor em acessibilidade no nosso Design
              System foi impressionante. O Paulo não escreve apenas código, ele
              cria experiências impecáveis."
            </p>
            <div className="testimonial-author">
              <div className="author-info">
                <span className="author-name">Camila Santos</span>
                <span className="author-role">UX Designer Senior</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
