import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./case-studies.css";
import project01 from "../../../assets/images/project-01.jpg";
import project02 from "../../../assets/images/project-02.jpg";
import project03 from "../../../assets/images/project-03.jpg";
import project04 from "../../../assets/images/project-04.jpg";
import project05 from "../../../assets/images/project-05.jpg";
import project06 from "../../../assets/images/project-06.jpg";
 
const cases = [
  {
    title: "Substantive Audit Procedures",
    image: project01,
  },
  {
    title: "Internal Controls & Financial Reporting",
    image: project02,
  },
  {
    title: "Specialized Support Services",
    image: project03,
  },
  {
    title: "Industry Expertise & Project Management",
    image: project04,
  },
  {
    title: "Compliance",
    image: project05,
  },
  {
    title: "Security & Ethical Standards",
    image: project06,
  },
];

const serviceRouteMap = {
  Compliance: "Compliance, Security & Ethical Standards",
  "Security & Ethical Standards": "Compliance, Security & Ethical Standards",
};
 
const CaseStudiesSection = () => {
  const [start, setStart] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const maxStart = Math.max(0, cases.length - visibleCount);

  useEffect(() => {
    const updateVisible = () => {
      const nextVisible =
        window.innerWidth <= 780 ? 1 : window.innerWidth <= 1200 ? 2 : 3;
      setVisibleCount(nextVisible);
      setStart((prev) => Math.min(prev, Math.max(0, cases.length - nextVisible)));
    };
 
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const handlePrev = () => setStart((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setStart((prev) => Math.min(prev + 1, maxStart));
 
  return (
    <section className="case-studies-section">
      <div className="container case-wrap">
        <span className="case-deco-ring" aria-hidden="true" />
        <span className="case-deco-dot" aria-hidden="true" />
        <span className="case-deco-grid" aria-hidden="true" />
 
        <header className="case-header">
          <h2>Core Services</h2>
          <p>
            Our team supports global CPA firms with structured planning, disciplined documentation, and audit-ready execution that integrates smoothly into established engagement workflows.
          </p>
        </header>
 
        <div className="case-viewport">
          <div
            className="case-track"
            style={{
              "--visible-count": visibleCount,
              transform: `translateX(-${(start * 100) / visibleCount}%)`,
            }}
          >
            {cases.map((item) => (
              <Link
                className="case-card case-card-link"
                key={item.title}
                to={`/services?service=${encodeURIComponent(serviceRouteMap[item.title] || item.title)}`}
                aria-label={`Open ${item.title} details`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />
                <div className="case-card-caption">
                  <h3>{item.title}</h3>
                  <span className="case-card-corner" aria-hidden="true" />
                </div>
              </Link>
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
            disabled={start === 0}
          >
            ‹
          </button>
          <button
            type="button"
            className="case-arrow"
            onClick={handleNext}
            aria-label="Next cases"
            disabled={start >= maxStart}
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
