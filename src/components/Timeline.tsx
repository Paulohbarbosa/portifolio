import data from "../data/portfolio.json";

export default function Timeline() {
  return (
    <section id="experiencia" className="timeline-section">
      <div className="timeline-container">
        <div className="section-header reveal">
          <h2 className="title-section ">
            {data.experienceInfo.primaryTitle} <br />
            <span className="text-blue">
              {data.experienceInfo.secondaryTitle}
            </span>
          </h2>
          <p className="description-section">
            {data.experienceInfo.description}
          </p>
        </div>

        <div className="timeline">
          {/* Ordenar por ano, decrescente, o mais recente primeiro */}
          {data.timelineExperiences
            .sort((a, b) => {
              if (a.year < b.year) return 1;
              if (a.year > b.year) return -1;
              return 0;
            })
            .map((experience, index) => (
              <div key={index} className="timeline-item reveal">
                <div className="timeline-year">{experience.year}</div>
                <div className="timeline-point"></div>
                <div className="timeline-card">
                  <h3 className={`company-name text-${experience.color}`}>
                    {experience.company}
                  </h3>
                  <p className="company-desc">{experience.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
