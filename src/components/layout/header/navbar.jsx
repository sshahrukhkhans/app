const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a className="logo" href="/">
          Jackcerra
        </a>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/">Pages</a></li>
          <li><a href="/">Services</a></li>
          <li><a href="/">Portfolio</a></li>
          <li><a href="/">Blog</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
        <div className="nav-actions">
          <button className="quote-btn">Get Free Quote</button>
          <div className="hamburger">☰</div>
        </div>
      </div>
    </nav>
  );
};
 
export default Navbar;