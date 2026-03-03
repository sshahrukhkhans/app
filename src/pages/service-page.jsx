import "../components/layout/header/header.css";
import "./service-page.css";
import Topbar from "../components/layout/header/topbar";
import Navbar from "../components/layout/header/navbar";
import SiteFooterSection from "../components/layout/site-footer/site-footer";

const serviceItems = [
  "Comprehensive Audit Support Services",
  "Substantive Audit Procedures",
  "Internal Controls & Financial Reporting",
  "Specialized Support Services",
  "Industry Expertise & Project Management",
  "Compliance, Security & Ethical Standards",
];

const ServiceIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M4 19h16M7 16V9m5 7V6m5 10v-4M7 4l3 2 4-3 3 2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ServicePage = () => {
  return (
    <div className="app-sections">
      <Topbar />
      <Navbar />
      <section className="service-main">
        <div className="container service-main-grid">
          <aside className="service-sidebar">
            {serviceItems.map((item) => (
              <button
                key={item}
                className={`service-link-item${item === "Market Research" ? " is-active" : ""}`}
                type="button"
              >
                <span className="service-link-left">
                  <span className="service-link-icon">
                    <ServiceIcon />
                  </span>
                  <span>{item}</span>
                </span>
                <span className="service-link-arrow">&rsaquo;</span>
              </button>
            ))}
          </aside>

          <article className="service-copy">
            <h2>Market Research</h2>
            <p>
              We guide our clients through difficult issues, bringing insight
              and judgement to each situation. Our innovative approaches create
              original solutions to our clients most complex domestic and multi
              jurisdictional matters.
            </p>
            <p className="service-highlight">
              Over the last 35 years we made a strong impact and continue to
              deliver dependable outcomes.
            </p>
            <p>
              These concepts shape our distinctive culture and differentiate us
              from others. We anticipate client needs, provide practical support
              and build lasting relationships with quality-focused execution.
            </p>
          </article>
        </div>
      </section>
      <SiteFooterSection />
    </div>
  );
};

export default ServicePage;
