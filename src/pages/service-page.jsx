import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./service-page.css";
import Header from "../components/layout/header/header";
import SiteFooterSection from "../components/layout/site-footer/site-footer";
import serviceBanner from "../assets/images/banner.jpg";

const serviceItems = [
  "Comprehensive Audit Support Services",
  "Substantive Audit Procedures",
  "Internal Controls & Financial Reporting",
  "Specialized Support Services",
  "Industry Expertise & Project Management",
  "Compliance, Security & Ethical Standards",
];

const industryCards = [
  {
    id: "01",
    title: "Manufacturing & Trading",
    description:
      "Inventory valuation, costing controls, and revenue recognition across multi-location operations.",
  },
  {
    id: "02",
    title: "Healthcare",
    description:
      "Billing integrity, compliance considerations, and operational ratio analysis.",
  },
  {
    id: "03",
    title: "Real Estate & Property",
    description:
      "Property-level performance testing, compliance checks, and lease analytics.",
  },
  {
    id: "04",
    title: "Not-For-Profit",
    description:
      "Fund accounting workflows, restricted grants, and transparency-focused reporting.",
  },
  {
    id: "05",
    title: "IT & SaaS",
    description:
      "Subscription revenue, ASC 606 compliance, and deferred revenue analytics.",
  },
  {
    id: "06",
    title: "Retail & E-commerce",
    description:
      "High-volume transaction testing, return reserves, and gross margin controls.",
  },
  {
    id: "07",
    title: "Hospitality & Leisure",
    description:
      "Seasonality analytics, occupancy metrics, and operating expense controls.",
  },
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
  const location = useLocation();
  const [hoveredService, setHoveredService] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [slideIndex, setSlideIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const revealedService = hoveredService || selectedService;

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1025) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 769) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % industryCards.length);
    }, 4200);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const requestedService = params.get("service");
    if (!requestedService) return;

    if (!serviceItems.includes(requestedService)) return;

    setHoveredService("");
    setSelectedService(requestedService);

    const section = document.querySelector(".service-main");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.search]);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (target.closest(".service-link-item")) return;
      setHoveredService("");
      setSelectedService("");
    };

    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const visibleIndustryCards = useMemo(() => {
    return Array.from({ length: cardsPerView }, (_, offset) => {
      return industryCards[(slideIndex + offset) % industryCards.length];
    });
  }, [cardsPerView, slideIndex]);

  return (
    <div className="app-sections">
      <Header showHero={false} />
      <section className="service-page-banner" aria-label="Service banner">
        <img src={serviceBanner} alt="Service banner" loading="lazy" />
        <div className="service-page-banner-content">
          <div className="container">
            <h1>Services</h1>
            <nav className="service-page-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span aria-hidden="true">&rsaquo;</span>
              <span>Services</span>
            </nav>
          </div>
        </div>
      </section>
      <section className="service-main">
        <div className="container service-main-grid">
          <aside className="service-sidebar">
            {serviceItems.map((item) => (
              <button
                key={item}
                className={`service-link-item${
                  hoveredService === item || selectedService === item ? " is-reveal-active" : ""
                }`}
                type="button"
                aria-pressed={selectedService === item}
                onMouseEnter={() => setHoveredService(item)}
                onMouseLeave={() => setHoveredService("")}
                onFocus={() => setHoveredService(item)}
                onBlur={() => setHoveredService("")}
                onClick={() => setSelectedService(item)}
              >
                <span className="service-link-left">
                  <span className="service-link-icon">
                    <ServiceIcon />
                  </span>
                  <span>{item}</span>
                </span>
              </button>
            ))}
          </aside>

          <article className={`service-copy ${revealedService ? "is-revealed" : ""}`}>
            {revealedService === "Comprehensive Audit Support Services" ? (
              <>
                <h2>Comprehensive Audit Support Services</h2>
                <p>
                  We deliver end-to-end audit support across the entire
                  engagement lifecycle, from initial planning through final
                  documentation and quality review.
                </p>

                <div className="service-reveal-grid">
                  <article className="service-reveal-card">
                    <span className="service-reveal-icon" aria-hidden="true">
                      <ServiceIcon />
                    </span>
                    <h3>Planning &amp; Risk Assessment</h3>
                    <p>
                      Engagement planning, risk assessment worksheets,
                      materiality computation, internal control walkthroughs,
                      and analytical procedures for unusual fluctuations.
                    </p>
                  </article>

                  <article className="service-reveal-card">
                    <span className="service-reveal-icon" aria-hidden="true">
                      <ServiceIcon />
                    </span>
                    <h3>Workpaper Preparation</h3>
                    <p>
                      PBC request lists, workpaper organization across CCH
                      Axcess, CaseWare, Thomson Reuters, indexing, referencing,
                      and audit program documentation.
                    </p>
                  </article>

                  <article className="service-reveal-card service-reveal-card-wide">
                    <span className="service-reveal-icon" aria-hidden="true">
                      <ServiceIcon />
                    </span>
                    <h3>Substantive Procedures</h3>
                    <p>
                      Comprehensive testing of balance sheet and income
                      statement accounts, including confirmations, analytical
                      reviews, and transaction testing.
                    </p>
                  </article>
                </div>
              </>
            ) : revealedService === "Substantive Audit Procedures" ? (
              <>
                <h2>Substantive Audit Procedures</h2>
                <p>
                  Our team executes detailed substantive audit procedures
                  covering all major financial statement areas, ensuring
                  thorough documentation and compliance.
                </p>

                <div className="service-reveal-grid">
                  <article className="service-reveal-card">
                    <span className="service-reveal-icon" aria-hidden="true">
                      <ServiceIcon />
                    </span>
                    <h3>Balance Sheet Audits</h3>
                    <ul className="service-reveal-list">
                      <li>Cash &amp; Bank: Reconciliations, cutoff testing, confirmations</li>
                      <li>
                        Accounts Receivable: Confirmations, aging analysis,
                        subsequent receipts
                      </li>
                      <li>Inventory: Remote observation, valuation, roll-forward testing</li>
                      <li>
                        Fixed Assets: Depreciation, additions/disposals, CAPEX
                        verification
                      </li>
                      <li>
                        Investments: Fair value testing, market price
                        verification
                      </li>
                      <li>
                        Loans &amp; Debts: Agreement review, interest
                        calculations, covenants
                      </li>
                    </ul>
                  </article>

                  <article className="service-reveal-card">
                    <span className="service-reveal-icon" aria-hidden="true">
                      <ServiceIcon />
                    </span>
                    <h3>Income Statement Audits</h3>
                    <ul className="service-reveal-list">
                      <li>Revenue: ASC 606 contract review and cutoff testing procedures</li>
                      <li>COGS: Expense testing, inventory movement, variance analysis</li>
                      <li>
                        Operating Expenses: Sampling, analytical review
                        procedures
                      </li>
                      <li>
                        Payroll: Register testing, compliance checks, analytical
                        reviews
                      </li>
                    </ul>
                  </article>
                </div>
              </>
            ) : revealedService === "Internal Controls & Financial Reporting" ? (
              <>
                <h2>Internal Controls &amp; Financial Reporting</h2>
                <p>
                  We also prepare audit adjustments (AJE), reclassification
                  entries (RJE), and provide clear explanations to support
                  CPA-client communications.
                </p>

                <div className="service-reveal-grid">
                  <article className="service-reveal-card">
                    <span className="service-reveal-icon" aria-hidden="true">
                      <ServiceIcon />
                    </span>
                    <h3>Internal Control Testing</h3>
                    <p>
                      SOX 404 documentation support, process narratives,
                      flowcharts, control matrices, design and implementation
                      testing, and remediation planning.
                    </p>
                  </article>

                  <article className="service-reveal-card">
                    <span className="service-reveal-icon" aria-hidden="true">
                      <ServiceIcon />
                    </span>
                    <h3>Analytical Review &amp; Ratios</h3>
                    <p>
                      Planning and final analytics, working capital and
                      liquidity ratios, profitability and leverage analysis, and
                      variance identification for audit conclusions.
                    </p>
                  </article>

                  <article className="service-reveal-card">
                    <span className="service-reveal-icon" aria-hidden="true">
                      <ServiceIcon />
                    </span>
                    <h3>Confirmation Management</h3>
                    <p>
                      AR/AP, legal, and bank confirmations through platforms
                      like Confirmation.com with comprehensive response tracking
                      and documentation.
                    </p>
                  </article>

                  <article className="service-reveal-card">
                    <span className="service-reveal-icon" aria-hidden="true">
                      <ServiceIcon />
                    </span>
                    <h3>Financial Statement Preparation</h3>
                    <p>
                      global GAAP/IFRS compliant balance sheets, income statements,
                      cash flow statements, equity statements, and ASC-specific
                      footnote disclosures.
                    </p>
                  </article>
                </div>
              </>
            ) : revealedService === "Specialized Support Services" ? (
              <>
                <h2>Specialized Support Services</h2>
                <div className="service-reveal-grid">
                  <article className="service-reveal-card">
                    <h3>Tax Audit Support</h3>
                    <p>
                      Federal and state tax working papers, book-to-tax
                      reconciliation, support for Forms 1120, 1065, 1040
                      schedules, and IRS provision research assistance.
                    </p>
                  </article>

                  <article className="service-reveal-card">
                    <h3>PCAOB Documentation</h3>
                    <p>
                      Professional skepticism documentation, partner review
                      support, audit sampling methodologies, and evidence trail
                      preparation ensuring workpapers meet PCAOB inspection
                      standards.
                    </p>
                  </article>

                  <article className="service-reveal-card service-reveal-card-wide">
                    <h3>Quality Review &amp; Finalization</h3>
                    <p>
                      Internal review for completeness and accuracy, audit
                      completion checklists, management representation letter
                      drafting, and partner review schedule preparation.
                    </p>
                  </article>
                </div>
              </>
            ) : revealedService === "Industry Expertise & Project Management" ? (
              <>
                <h2>Industry Expertise &amp; Project Management</h2>
                <p>
                  Seamless coordination with global teams ensures efficient
                  workflows and timely deliverables.
                </p>
                <div className="service-reveal-grid">
                  <article className="service-reveal-card service-reveal-card-wide">
                    <h3>Industry-Specific Audit Support</h3>
                    <ul className="service-reveal-list">
                      <li>Manufacturing &amp; Trading - Inventory, supply chain, production cycles</li>
                      <li>Healthcare - Revenue recognition, compliance, patient data</li>
                      <li>Real Estate (REAC) - Property valuations, rental income</li>
                      <li>Not-For-Profit - Grant accounting, donation tracking</li>
                      <li>IT &amp; SaaS - Subscription revenue, ASC 606 compliance</li>
                      <li>Retail &amp; E-commerce - Inventory turnover, omnichannel</li>
                      <li>Hospitality &amp; Leisure - Seasonal variations, revenue streams</li>
                    </ul>
                  </article>
                  <article className="service-reveal-card service-reveal-card-wide">
                    <h3>Project Management</h3>
                    <ul className="service-reveal-list">
                      <li>Deadline management and workflow optimization</li>
                      <li>PBC follow-ups and status updates</li>
                      <li>Variance clarifications and documentation</li>
                      <li>Communication logs with clients</li>
                    </ul>
                  </article>
                </div>
              </>
            ) : revealedService === "Compliance, Security & Ethical Standards" ? (
              <>
                <h2>Compliance, Security &amp; Ethical Standards</h2>
                <p>
                  Your data security and regulatory compliance are our top
                  priorities. We operate under the highest professional and
                  ethical standards.
                </p>
                <div className="service-reveal-grid">
                  <article className="service-reveal-card">
                    <h3>Confidentiality Protocols</h3>
                    <p>
                      Strict NDA compliance, secure data transmission protocols,
                      restricted access controls, and regular security audits to
                      protect sensitive client information.
                    </p>
                  </article>
                  <article className="service-reveal-card">
                    <h3>Professional Standards</h3>
                    <p>
                      Full adherence to AICPA Professional Code of Conduct,
                      PCAOB audit standards, and ICAI ethical guidelines
                      governing chartered accountant practice.
                    </p>
                  </article>
                  <article className="service-reveal-card service-reveal-card-wide">
                    <h3>Technology Infrastructure</h3>
                    <p>
                      Enterprise-grade security systems, encrypted cloud
                      storage, multi-factor authentication, secure VPN access,
                      and regular system vulnerability assessments.
                    </p>
                  </article>
                </div>
              </>
            ) : (
              <>
                <h2>Services</h2>
                <p>
                  We guide our clients through difficult issues, bringing
                  insight and judgement to each situation. Our innovative
                  approaches create original solutions to our clients most
                  complex domestic and multi jurisdictional matters.
                </p>
                <p className="service-highlight">
                  Over the last 35 years we made a strong impact and continue
                  to deliver dependable outcomes.
                </p>
                <p>
                  These concepts shape our distinctive culture and differentiate
                  us from others. We anticipate client needs, provide practical
                  support and build lasting relationships with quality-focused
                  execution.
                </p>
              </>
            )}
          </article>
        </div>
      </section>

      <section className="service-industry-section" aria-label="Industry expertise">
        <div className="container service-industry-layout">
          <div className="service-industry-intro">
            <p className="service-industry-kicker">INDUSTRY EXPERTISE</p>
            <h2>
              Our delivery model adapts to industry-specific risk areas,
              transaction patterns, and reporting issues
              <br className="service-industry-intro-break" />
              so support remains relevant across sectors with different audit
              priorities.
            </h2>
            <span className="service-industry-divider" aria-hidden="true" />
          </div>

          <div className="service-industry-slider">
            <div
              className="service-industry-row"
              style={{
                "--cards-per-view": cardsPerView,
              }}
              key={`${cardsPerView}-${slideIndex}`}
            >
              {visibleIndustryCards.map((item) => (
                <article key={item.id} className="service-industry-card">
                  <div className="service-industry-card-body">
                    <div className="service-industry-card-head">
                      <p className="service-industry-rating">
                        <strong>{item.id}</strong>
                      </p>
                      <span className="service-industry-icon" aria-hidden="true">
                        <ServiceIcon />
                      </span>
                    </div>
                    <div className="service-industry-title-wrap">
                      <h3>{item.title}</h3>
                    </div>
                    <p className="service-industry-quote">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="service-industry-dots" aria-hidden="true">
              {industryCards.map((item, index) => (
                <span
                  key={item.id}
                  className={index === slideIndex % industryCards.length ? "is-active" : ""}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="service-drop-line-section" aria-label="Drop us a line">
        <div className="container service-drop-line-wrap">
          <div className="service-drop-line-header">
            <h2>Drop Us A Line</h2>
            <p>Our team will arrange your first business consultation at no cost.</p>
            <span className="service-drop-line-divider" aria-hidden="true" />
          </div>

          <form className="service-drop-line-grid">
            <input type="text" placeholder="Name*" />
            <input type="text" placeholder="Phone No*" />
            <input type="email" placeholder="E-mail*" />
            <input type="text" placeholder="Subject*" />
            <textarea placeholder="Message*" rows={6} />
            <button type="button">Send Mail</button>
          </form>
        </div>
      </section>

      <SiteFooterSection />
    </div>
  );
};

export default ServicePage;
