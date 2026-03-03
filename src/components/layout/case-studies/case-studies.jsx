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
    title: "Manufacturing & Trading",
    category: "Inventory valuation and revenue recognition",
    image: project01,
  },
  {
    title: "Healthcare",
    category: "Billing integrity and operational ratio analysis",
    image: project02,
  },
  {
    title: "Real Estate & Property",
    category: "Compliance checks and lease analytics",
    image: project03,
  },
  {
    title: "Not-For-Profit",
    category: "Restricted grants and transparency reporting",
    image: project04,
  },
  {
    title: "IT & SaaS",
    category: "ASC 606 compliance and deferred revenue",
    image: project05,
  },
  {
    title: "Retail & E-commerce",
    category: "Transaction testing and gross margin controls",
    image: project06,
  },
  {
    title: "Hospitality & Leisure",
    category: "Seasonality and occupancy metric analytics",
    image: project01,
  },
];
 
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
          <div className="case-kicker-wrap">
            <span className="case-kicker-line" />
            <span className="case-kicker">INDUSTRY EXPERTISE</span>
          </div>
 
          <h2>Domain-Specific Audit Knowledge</h2>
          <p>
            Our delivery model adapts to industry-specific risk areas, transaction patterns, and reporting issues so support remains relevant across sectors with different audit priorities.
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
              <article className="case-card" key={item.title}>
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
