import { useEffect, useState } from "react";
import "./case-studies.css";
 
const cases = [
  {
    title: "Market Expansion",
    category: "Management",
    image:
      "https://demo.bravisthemes.com/jackcerra/wp-content/uploads/2023/03/project-03-740x740.jpg",
    fallback1:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=80",
    fallback2: "https://picsum.photos/seed/project-03/1400/1400",
  },
  {
    title: "Consumer Products",
    category: "Investment",
    image:
      "https://demo.bravisthemes.com/jackcerra/wp-content/uploads/2023/03/project-04-740x740.jpg",
    fallback1:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
    fallback2: "https://picsum.photos/seed/project-04/1400/1400",
  },
  {
    title: "Artboard Studio",
    category: "Business",
    image:
      "https://demo.bravisthemes.com/jackcerra/wp-content/uploads/2023/03/project-05-740x740.jpg",
    fallback1:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1400&q=80",
    fallback2: "https://picsum.photos/seed/project-05/1400/1400",
  },
  {
    title: "Business Branding",
    category: "Consultancy",
    image:
      "https://demo.bravisthemes.com/jackcerra/wp-content/uploads/2023/03/project-06-740x740.jpg",
    fallback1:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1400&q=80",
    fallback2: "https://picsum.photos/seed/project-06/1400/1400",
  },
  {
    title: "Startup Business",
    category: "Consultancy",
    image:
      "https://demo.bravisthemes.com/jackcerra/wp-content/uploads/2023/03/project-07-740x740.jpg",
    fallback1:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
    fallback2: "https://picsum.photos/seed/project-07/1400/1400",
  },
  {
    title: "Business Growth",
    category: "Business",
    image:
      "https://demo.bravisthemes.com/jackcerra/wp-content/uploads/2023/03/project-08-740x740.jpg",
    fallback1:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=80",
    fallback2: "https://picsum.photos/seed/project-08/1400/1400",
  },
];
 
const FINAL_FALLBACK =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='1200'><rect width='100%25' height='100%25' fill='%23cdd8ea'/><text x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='56' fill='%23587095'>Image unavailable</text></svg>";
 
const applyNextFallback = (event, fallbacks) => {
  const img = event.currentTarget;
  const nextIndex = Number(img.dataset.fallbackIndex || "0");
  const nextSrc = fallbacks[nextIndex] || FINAL_FALLBACK;
  img.dataset.fallbackIndex = String(nextIndex + 1);
  if (img.src !== nextSrc) img.src = nextSrc;
};
 
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
                  referrerPolicy="no-referrer"
                  onError={(e) =>
                    applyNextFallback(e, [item.fallback1, item.fallback2])
                  }
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