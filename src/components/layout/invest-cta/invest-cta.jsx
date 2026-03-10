import { Link } from "react-router-dom";
import "./invest-cta.css";

const InvestCtaSection = () => {
  return (
    <section className="invest-cta-section">
      <div className="container invest-cta-wrap">
        <div className="invest-cta-panel">
          <span className="invest-glow invest-glow-left" aria-hidden="true" />
          <span className="invest-glow invest-glow-bottom" aria-hidden="true" />
          <span className="invest-dot invest-dot-one" aria-hidden="true" />
          <span className="invest-dot invest-dot-two" aria-hidden="true" />
          <span className="invest-dot invest-dot-three" aria-hidden="true" />

          <div className="invest-ring-layer" aria-hidden="true" />

          <div className="invest-cta-content">
            <h2>
              From SOX narratives to final analytics and reporting packages, we
              help firms maintain control precision, documentation quality, and
              reviewer-ready presentation.
            </h2>

            <div className="invest-cta-pill-grid" aria-label="Audit support highlights">
              <span className="invest-cta-pill">SOX narratives and matrices</span>
              <span className="invest-cta-pill">Analytical review support</span>
              <span className="invest-cta-pill">Confirmations and tracking</span>
              <span className="invest-cta-pill">Financial statement drafting</span>
            </div>

            <p className="invest-cta-support">
              Control precision and reporting discipline with documentation
              support spanning narratives, analytics, confirmations, and
              financial statement output.
            </p>
            <Link to="/contact-us" className="invest-cta-btn">
              Connect With Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestCtaSection;
