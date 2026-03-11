import { Link } from "react-router-dom";
import logoCnr from "../../../assets/images/logo.png";

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
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
        </ul>
        <div className="nav-contacts">
          <a className="nav-contact-link" href="tel:+919876543210" aria-label="Call us">
            <svg className="nav-contact-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 4h3l1.2 4-1.8 1.8a14 14 0 0 0 5.8 5.8L16 14l4 1.2v3a2 2 0 0 1-2.1 2A16.9 16.9 0 0 1 4 6.1 2 2 0 0 1 6 4Z" />
            </svg>
          </a>
          <a className="nav-contact-link" href="mailto:info@cnrintelligrow.com" aria-label="Email us">
            <svg className="nav-contact-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 6h16v12H4z" />
              <path d="m4 7 8 6 8-6" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
};
 
export default Navbar;
