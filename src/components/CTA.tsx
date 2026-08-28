import data from "@/data/portfolio.json";

export default function CTA() {
  return (
    <section id="contato" className="cta-section reveal">
      <div className="cta-container">
        <h2 className="cta-headline">
          {data?.ctaInfo.primaryTitle}{" "}
          <span className="text-blue">{data?.ctaInfo.secondaryTitle}</span>
        </h2>

        <p className="cta-subtitle">{data?.ctaInfo.description}</p>

        <a
          href="#contato"
          className="btn-beam"
          style={{ height: "64px", padding: "0 3rem", fontSize: "1rem" }}
        >
          <div className="beam-border"></div>
          <div className="btn-content-bg">
            <div className="lines-overlay"></div>
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
            {data?.ctaInfo.buttonText}
          </span>
        </a>
      </div>
    </section>
  );
}
