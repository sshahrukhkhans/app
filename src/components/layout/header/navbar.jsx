import { Link } from "react-router-dom";
import logoCnr from "../../../assets/images/logo-cnr.webp";
import instagramIcon from "../../../assets/images/Instagram.png";
import facebookIcon from "../../../assets/images/Facebook.png";
import xIcon from "../../../assets/images/twitter.jpg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link className="logo" to="/">
          <img className="logo-mark" src={logoCnr} alt="CNR logo" />
          <span className="logo-copy">
            <span className="logo-title">CNR IntelliGrow LLP</span>
          </span>
        </Link>
        <ul className="nav-links">
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
        </ul>
        <div className="nav-socials">
          <a className="nav-social-link" href="/" aria-label="Instagram">
            <img src={instagramIcon} alt="" />
          </a>
          <a className="nav-social-link" href="/" aria-label="Facebook">
            <img src={facebookIcon} alt="" />
          </a>
          <a className="nav-social-link" href="/" aria-label="X">
            <img src={xIcon} alt="" />
          </a>
        </div>
      </div>
    </nav>
  );
};
 
export default Navbar;
