import logoCnr from "../../../assets/images/logo-cnr.webp";
import "./site-footer.css";

const usefulLinks = [
  "Services",
  "Controls",
  "Industries",
  "Contact",
];

const SiteFooterSection = () => {
  return (
    <section className="site-footer-section">
      <div className="container site-footer-wrap">
        <div className="site-footer-cta">
          <div className="site-footer-brand">
            <img src={logoCnr} alt="CNR logo" />
            <h3>CNR IntelliGrow LLP</h3>
          </div>
          <h2>
            Your Trusted India-Based Audit Support Partner for Global Firms and
            Finance Teams
          </h2>
          <p>
            India-based audit and reporting support for accounting firms and
            finance teams worldwide across planning, documentation, testing,
            controls, and secure engagement delivery.
          </p>
          <p className="site-footer-standards">
            GAAP | IFRS | standards-focused support
          </p>
        </div>

        <div className="site-footer-links">
          <h3>QUICK LINKS</h3>
          <span className="site-footer-links-line" aria-hidden="true" />
          <ul>
            {usefulLinks.map((link) => (
              <li key={link}>
                <a href="/">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer-meta">
          <div className="site-footer-block">
            <h3>CONTACT</h3>
            <a href="mailto:cnrintelligrow@gmail.com">cnrintelligrow@gmail.com</a>
            <a href="tel:+919442580495">+91 9442580495</a>
            <p>
              No.14/6M, Dhanrith Villa, Hospital Road, Sulur, Coimbatore -
              641402
            </p>
          </div>

          <div className="site-footer-block">
            <h3>ORGANIZATION</h3>
            <p>A Division of Chithiraipandian and Co., Chartered Accountants</p>
            <p>Tamil Nadu, Southern India</p>
          </div>
        </div>
      </div>

      <div className="container site-footer-bottom">
        <p>© 2026 CNR IntelliGrow LLP. All rights reserved.</p>
        <p>A Division of Chithiraipandian and Co., Chartered Accountants</p>
      </div>
    </section>
  );
};

export default SiteFooterSection;
