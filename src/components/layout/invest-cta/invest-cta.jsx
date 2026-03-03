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
            <h2>Ready to enhance your audit efficiency?</h2>
            <p>
              Contact CNR IntelliGrow LLP today to discuss how our India-based
              team can support your accounting firm, CFO office, or finance
              team anywhere in the world with reliable, high-quality audit and
              reporting services.
            </p>
            <a href="/" className="invest-cta-btn">
              Connect With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestCtaSection;
