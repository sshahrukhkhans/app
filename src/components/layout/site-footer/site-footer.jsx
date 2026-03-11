import logoFooter from "../../../assets/images/footer_logo.png";
import instagramIcon from "../../../assets/images/Instagram.png";
import facebookIcon from "../../../assets/images/Facebook.png";
import xIcon from "../../../assets/images/twitter.jpg";
import "./site-footer.css";

const SiteFooterSection = () => {
  return (
    <footer className="site-footer-section">
      <div className="container site-footer-wrap">
        <div className="site-footer-col site-footer-brand-col">
          <img src={logoFooter} alt="CNR logo" />
        </div>

        <div className="site-footer-col">
          <h4>OUR ADDRESS</h4>
          <p>No.14/6M, Dhanrith Villa, Hospital Road,</p>
          <p>Sulur, Coimbatore - 641402</p>
          <p>Tamil Nadu,India</p>
        </div>

        <div className="site-footer-col">
          <h4>HOURS</h4>
          <p>Mon - Fri: 9am - 5:30pm</p>
          <p>Sat & Sun: Closed</p>
        </div>

        <div className="site-footer-col">
          <div className="site-footer-socials">
            <a href="/" aria-label="Instagram">
              <img src={instagramIcon} alt="" />
            </a>
            <a href="/" aria-label="Facebook">
              <img src={facebookIcon} alt="" />
            </a>
            <a href="/" aria-label="X">
              <img src={xIcon} alt="" />
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
