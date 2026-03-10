import "./header.css";
import Topbar from "./topbar";
import Navbar from "./navbar";
import Hero from "./hero";
 
const Header = ({ showHero = true }) => {
  return (
    <div className="header-stack">
      <Topbar />
      <Navbar />
      {showHero ? <Hero /> : null}
    </div>
  );
};
 
export default Header;
