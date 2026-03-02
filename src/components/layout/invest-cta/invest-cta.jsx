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
            <h2>Invest In Our Company We will help you grow Big</h2>
            <p>
              We create relationship of trust with our customer by helping your
              company grow by investing.
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
