import data from "@/data/portfolio.json";

const badgeStyleMap: Record<string, string> = {
  blue: "bg-blue-500/10",
  yellow: "bg-yellow-500/10",
  purple: "bg-purple-500/10",
};

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
            {data.radarInfo.primaryTitle}{" "}
            <span className="text-blue">{data.radarInfo.secondaryTitle}</span>
          </h2>
          <p className="skills-subtitle">{data.radarInfo.description}</p>
        </div>

        <div className="flex flex-col">
          {data.radar.map((item, index) => (
            <div
              className="skills-card glassmorphism reveal relative overflow-hidden group"
              style={{
                transitionDelay: "0.1s",
                padding: "2rem",
                marginBottom: "1.5rem",
              }}
              key={index}
            >
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 w-1/2 group-hover:w-full transition-all duration-500"></div>

              <div className="badge mb-6">
                <span
                  className={`badge-pill ${badgeStyleMap[item.badgeStyle] || "bg-gray-500/20"}`}
                >
                  {item.badge}
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
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {item.description}
              </p>
              <div className="text-xs text-blue-400 uppercase tracking-wider font-semibold">
                {item.source}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
