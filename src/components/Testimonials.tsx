import data from "@/data/portfolio.json";

export default function Testimonials() {
  return (
    <section id="depoimentos" className="testimonials-section">
      <div className="testimonials-header reveal">
        <h2 className="testimonials-headline">
          {data?.testimonialsInfo?.primaryTitle}{" "}
          <span className="text-blue">
            {data?.testimonialsInfo?.secondaryTitle}
          </span>
        </h2>
        <p className="skills-subtitle">{data?.testimonialsInfo?.description}</p>
      </div>

      <div className="marquee-container">
        <div className="marquee-content">
          {data.testimonials.map((report, index) => (
            <div className="testimonial-card glassmorphism" key={index}>
              <p className="testimonial-quote">{report.text}</p>
              <div className="testimonial-author">
                <div className="author-info">
                  <span className="author-name">{report.name}</span>
                  <span className="author-role">{report.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
