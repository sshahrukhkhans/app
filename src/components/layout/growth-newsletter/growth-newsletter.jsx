import "./growth-newsletter.css";

const businessSeries = [5000, 7500, 4200, 14000, 9200, 24000, 30000];
const financeSeries = [12500, 11000, 22000, 17000, 27000, 26500, 31000];
const years = ["2023", "2020", "2019", "2018", "2017", "2016", "2015"];

const GrowthNewsletterSection = () => {
  return (
    <section className="growth-news-section">
      <div className="container growth-wrap">
        <div className="growth-top-card">
          <div className="growth-chart-block" aria-label="Growth chart">
            <div className="growth-legend">
              <span><i className="swatch business" />Business</span>
              <span><i className="swatch finance" />Finance</span>
            </div>

            <div className="growth-chart-grid">
              <div className="growth-y-axis">
                {[40000, 35000, 30000, 25000, 20000, 15000, 10000, 5000, 0].map((tick) => (
                  <span key={tick}>{tick}</span>
                ))}
              </div>

              <div className="growth-bars">
                {years.map((year, index) => (
                  <div key={year} className="bar-col">
                    <span className="bar business" style={{ height: `${(businessSeries[index] / 40000) * 100}%` }} />
                    <span className="bar finance" style={{ height: `${(financeSeries[index] / 40000) * 100}%` }} />
                    <small>{year}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="growth-content">
            <div className="growth-kicker-wrap">
              <span className="growth-kicker-line" />
              <span className="growth-kicker">GROWTH</span>
            </div>

            <h2>
              <span className="growth-line">Jackcerra have achieved</span>
              <span className="growth-highlight-row">
                <span className="growth-percent">35%</span>
                <span className="growth-rest">
                  Growth in the
                  <br />
                  First Quarter
                </span>
              </span>
            </h2>

            <a href="/" className="growth-btn">Download Brochure</a>
          </div>
        </div>

        <div className="newsletter-row">
          <h3>Subscribe to our newsletter !</h3>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Email Address" aria-label="Email address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GrowthNewsletterSection;
