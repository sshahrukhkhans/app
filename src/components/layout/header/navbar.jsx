import { Link } from "react-router-dom";
import logoCnr from "../../../assets/images/logo-cnr.webp";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link className="logo" to="/">
          <img className="logo-mark" src={logoCnr} alt="CNR logo" />
          <span className="logo-copy">
            <span className="logo-title">CNR IntelliGrowth LLP</span>
          </span>
        </Link>
        <ul className="nav-links">
          <li><Link to="/services">Services</Link></li>
          <li><a href="/">Controls</a></li>
          <li><a href="/">Industries</a></li>
          <li><Link to="/about-us">About Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};
 
export default Navbar;
