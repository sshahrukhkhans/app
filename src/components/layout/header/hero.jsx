import bannerTwo from "../../../assets/images/h3-banner2.png";
import shapeOne from "../../../assets/images/h3-shape1.png";
 
const leftBannerSrc =
  "https://demo.bravisthemes.com/jackcerra/wp-content/uploads/2023/03/h3-banner1.png";
 
const Hero = () => {
  return (
    <section className="hero">
      <img className="hero-person hero-person-left" src={leftBannerSrc} alt="Consultant portrait" />
      <img className="hero-person hero-person-right" src={bannerTwo} alt="Business expert" />
      <img className="hero-arc hero-arc-left" src={shapeOne} alt="" />
      <img className="hero-arc hero-arc-right" src={shapeOne} alt="" />
      <span className="hero-blob hero-blob-left" />
      <span className="hero-blob hero-blob-right" />
      <span className="hero-ring" />
 
      <div className="container hero-content">
        <div className="hero-copy">
          <span className="hero-tag">GROW YOUR BUSINESS WITH US</span>
          <h1>
            We Provide <span>Investment</span> <br />
            For Great Future
          </h1>
          <p>
            We create relationship of trust with our customer by helping your
            company grow.
          </p>
          <div className="hero-buttons">
            <button className="primary">Learn More</button>
            <button className="secondary">Get Service</button>
          </div>
        </div>
      </div>
    </section>
  );
};
 
export default Hero;