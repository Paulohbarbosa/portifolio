export default function Timeline() {
  return (
    <section id="experiencia" className="timeline-section">
      <div className="timeline-container">
        <h2 className="timeline-headline reveal">
          Do pixel à produção: uma <br />
          <span className="text-blue">trajetória construída com grandes empresas.</span>
        </h2>

        <div className="timeline">
          {/* Item 1 */}
          <div className="timeline-item reveal">
            <div className="timeline-year">2020</div>
            <div className="timeline-point"></div>
            <div className="timeline-card">
              <h3 className="company-name text-blue">Nubank</h3>
              <p className="company-desc">
                Desenvolvedor Front-end no time de Design System. Primeiro
                contato com arquitetura web em escala: criação de bibliotecas de
                componentes, foco rigoroso em acessibilidade e interfaces
                fluidas para milhões de usuários.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="timeline-item reveal">
            <div className="timeline-year">2022</div>
            <div className="timeline-point"></div>
            <div className="timeline-card">
              <h3 className="company-name text-purple">Google</h3>
              <p className="company-desc">
                Integrou o time de engenharia de interface de produto. Trabalhou
                diretamente com otimização de Core Web Vitals, performance de
                renderização e desenvolvimento de micro-frontends usados por
                squads globais.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="timeline-item reveal">
            <div className="timeline-year">2024</div>
            <div className="timeline-point"></div>
            <div className="timeline-card">
              <h3 className="company-name text-blue">Asimov Academy</h3>
              <p className="company-desc">
                Lidera o front-end e a experiência do usuário para uma das
                principais edtechs de tecnologia do Brasil. Foco em modernização
                de stack (React/Next.js), animações complexas e criação de
                interfaces de aprendizado altamente imersivas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
