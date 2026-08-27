export default function CTA() {
  return (
    <section id="contato" className="cta-section reveal">
      <div className="cta-container">
        <h2 className="cta-headline">
          Seu próximo projeto pode ter uma experiência digital de
          <span className="text-blue">nível mundial.</span>
        </h2>

        <p className="cta-subtitle">
          Se você tem um design incrível ou uma ideia que precisa sair do papel
          e virar um produto web rápido, limpo e escalável, é aqui que a
          conversa começa.
        </p>

        <p className="cta-text">
          Fale com o Paulo e descubra como elevar a interface do seu produto
          para o próximo nível.
        </p>

        <a
          href="#contato"
          className="btn-beam"
          style={{ height: '64px', padding: '0 3rem', fontSize: '1rem' }}
        >
          <div className="beam-border"></div>
          <div className="btn-content-bg">
            <div className="lines-overlay"></div>
            <div className="bottom-glow"></div>
          </div>
          <span
            style={{
              position: 'relative',
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            Entrar em contato
            <svg
              className="icon"
              style={{ width: '1.2rem', height: '1.2rem' }}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
              <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}
