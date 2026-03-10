import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./why-choose-us.css";
import bannerMain from "../../../assets/images/h3-banner-main.png";

const reasons = [
  {
    title: "Creating New Ventures",
    desc: "Our main goal is to provide best services to our customers & to help grow",
    icon: "globe",
  },
  {
    title: "Investment Opportunity",
    desc: "We help business bring ideas to life in the digital world by the use of technology",
    icon: "team",
  },
];

const ReasonIcon = ({ type }) => {
  if (type === "team") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <g fill="none" stroke="#32bafd" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="20" cy="22" r="7" />
          <path d="M9 38c0-6.1 4.9-11 11-11s11 4.9 11 11" />
          <circle cx="44" cy="20" r="6" />
          <path d="M35 34.5c0-5 4-9 9-9s9 4 9 9" />
          <circle cx="38" cy="44" r="7" />
          <path d="M27 58c0-6.1 4.9-11 11-11s11 4.9 11 11" />
        </g>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <g fill="none" stroke="#32bafd" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="32" cy="32" r="20" />
        <path d="M12 32h40M32 12c5.8 6.3 9 12.9 9 20s-3.2 13.7-9 20M32 12c-5.8 6.3-9 12.9-9 20s3.2 13.7 9 20" />
      </g>
    </svg>
  );
};

const WhyChooseUsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    let rafId = 0;

    const updateParallax = () => {
      rafId = 0;
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
      const clampedProgress = Math.min(Math.max(progress, 0), 1);
      const shift = (clampedProgress - 0.5) * 36;

      section.style.setProperty("--why-parallax", `${shift.toFixed(2)}px`);
      section.style.setProperty("--why-parallax-soft", `${(shift * 0.55).toFixed(2)}px`);
    };

    const onScroll = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(updateParallax);
      }
    };

    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="why-section">
      <div className="container why-layout">
        <div className="why-panel">
          <div className="why-content">
            <div className="why-kicker-wrap">
              <span className="why-kicker-line" />
              <span className="why-kicker">COMPREHENSIVE AUDIT SUPPORT</span>
            </div>

            <h2>Main Reasons To Choose Us</h2>

            <div className="why-list">
              {reasons.map((item) => (
                <article key={item.title} className="why-item">
                  <span className="why-item-icon" aria-hidden="true">
                    <ReasonIcon type={item.icon} />
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="why-actions">
              <Link to="/about-us" className="why-btn-primary">
                Learn More
              </Link>
            </div>
          </div>

          <div className="why-media" aria-hidden="true">
            <img
              className="why-team"
              src={bannerMain}
              alt=""
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
