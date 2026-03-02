import { useEffect, useState } from "react";
import "./case-studies.css";
import project01 from "../../../assets/images/project-01.jpg";
import project02 from "../../../assets/images/project-02.jpg";
import project03 from "../../../assets/images/project-03.jpg";
import project04 from "../../../assets/images/project-04.jpg";
import project05 from "../../../assets/images/project-05.jpg";
import project06 from "../../../assets/images/project-06.jpg";
 
const cases = [
  {
    title: "Market Expansion",
    category: "Management",
    image: project01,
  },
  {
    title: "Consumer Products",
    category: "Investment",
    image: project02,
  },
  {
    title: "Artboard Studio",
    category: "Business",
    image: project03,
  },
  {
    title: "Business Branding",
    category: "Consultancy",
    image: project04,
  },
  {
    title: "Startup Business",
    category: "Consultancy",
    image: project05,
  },
  {
    title: "Business Growth",
    category: "Business",
    image: project06,
  },
];
 
const CaseStudiesSection = () => {
  const [start, setStart] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
 
  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth <= 780) setVisibleCount(1);
      else if (window.innerWidth <= 1200) setVisibleCount(2);
      else setVisibleCount(3);
    };
 
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);
 
  const visibleCases = Array.from({ length: visibleCount }, (_, i) => {
    return cases[(start + i) % cases.length];
  });
 
  const handlePrev = () =>
    setStart((prev) => (prev - 1 + cases.length) % cases.length);
  const handleNext = () => setStart((prev) => (prev + 1) % cases.length);
 
  return (
    <section className="case-studies-section">
      <div className="container case-wrap">
        <span className="case-deco-ring" aria-hidden="true" />
        <span className="case-deco-dot" aria-hidden="true" />
        <span className="case-deco-grid" aria-hidden="true" />
 
        <header className="case-header">
          <div className="case-kicker-wrap">
            <span className="case-kicker-line" />
            <span className="case-kicker">CASE STUDIES</span>
          </div>
 
          <h2>
            Explore Our Top <span>Cases</span>
          </h2>
          <p>
            As a business firm our main goal is to provide best services to our
            customers &amp; create best ideas to help grow our clients.
          </p>
        </header>
 
        <div className="case-viewport">
          <div className="case-track">
            {visibleCases.map((item, index) => (
              <article className="case-card" key={`${item.title}-${index}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />
                <div className="case-card-caption">
                  <h3>{item.title}</h3>
                  <span className="case-card-category">{item.category}</span>
                  <span className="case-card-corner" aria-hidden="true" />
                  <span className="case-card-action" aria-hidden="true">↗</span>
                </div>
              </article>
            ))}
          </div>
        </div>
 
        <div className="case-slider-nav">
          <span className="case-slider-line" />
          <button
            type="button"
            className="case-arrow"
            onClick={handlePrev}
            aria-label="Previous cases"
          >
            ‹
          </button>
          <button
            type="button"
            className="case-arrow"
            onClick={handleNext}
            aria-label="Next cases"
          >
            ›
          </button>
          <span className="case-slider-line" />
        </div>
      </div>
    </section>
  );
};
 
export default CaseStudiesSection;
