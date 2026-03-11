import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logoFooter from "../../../assets/images/footer_logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link className="logo" to="/">
          <img className="logo-mark" src={logoFooter} alt="CNR logo" />
        </Link>

        <button
          className={`nav-toggle${isMenuOpen ? " is-open" : ""}`}
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="site-nav-links"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="nav-toggle-line" />
          <span className="nav-toggle-line" />
          <span className="nav-toggle-line" />
        </button>

        <ul id="site-nav-links" className={`nav-links${isMenuOpen ? " is-open" : ""}`}>
          <li>
            <NavLink
              to="/about-us"
              end
              className={({ isActive }) => (isActive ? "is-active" : "")}
              onClick={closeMenu}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              end
              className={({ isActive }) => (isActive ? "is-active" : "")}
              onClick={closeMenu}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact-us"
              end
              className={({ isActive }) => (isActive ? "is-active" : "")}
              onClick={closeMenu}
            >
              Contact Us
            </NavLink>
          </li>
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
