import logoCnr from "../../../assets/images/logo-cnr.webp";
import "./site-footer.css";

const SiteFooterSection = () => {
  return (
    <footer className="site-footer-section">
      <div className="container site-footer-wrap">
        <div className="site-footer-col site-footer-brand-col">
          <img src={logoCnr} alt="CNR logo" />
          <h3>CNR IntelliGrow LLP</h3>
        </div>

        <div className="site-footer-col">
          <h4>OUR ADDRESS</h4>
          <p>No.14/6M, Dhanrith Villa, Hospital Road,</p>
          <p>Sulur, Coimbatore - 641402</p>
          <p>Tamil Nadu, Southern India</p>
        </div>

        <div className="site-footer-col">
          <h4>HOURS</h4>
          <p>Mon - Fri: 9am - 5:30pm</p>
          <p>Sat & Sun: Closed</p>
        </div>

        <div className="site-footer-col">
          <h4>FOLLOW US</h4>
          <div className="site-footer-socials">
            <a href="/" aria-label="Instagram">
              ig
            </a>
            <a href="/" aria-label="Facebook">
              fb
            </a>
            <a href="/" aria-label="X">
              x
            </a>
            <a href="/" aria-label="LinkedIn">
              in
            </a>
            <a href="/" aria-label="TikTok">
              tk
            </a>
          </div>
        </div>
      </div>

      <div className="container site-footer-bottom">
        <p>© 2026 CNR IntelliGrow LLP. All rights reserved.</p>
        <p>A Division of Chithiraipandian and Co., Chartered Accountants</p>
      </div>
    </footer>
  );
};

export default SiteFooterSection;
