import logoCnr from "../../../assets/images/logo-cnr.webp";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a className="logo" href="/">
          <img className="logo-mark" src={logoCnr} alt="CNR logo" />
          <span className="logo-copy">
            <span className="logo-title">CNR IntelliGrowth Solutions</span>
          </span>
        </a>
        <ul className="nav-links">
          <li><a href="/">Services</a></li>
          <li><a href="/">Controls</a></li>
          <li><a href="/">Industries</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};
 
export default Navbar;
