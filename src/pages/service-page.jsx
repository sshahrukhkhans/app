import { useState } from "react";
import { Link } from "react-router-dom";
import "../components/layout/header/header.css";
import "./service-page.css";
import Topbar from "../components/layout/header/topbar";
import Navbar from "../components/layout/header/navbar";
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
  const [hoveredService, setHoveredService] = useState("");

  return (
    <div className="app-sections">
      <Topbar />
      <Navbar />
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
            {serviceItems.map((item, index) => (
              <button
                key={item}
                className={`service-link-item${
                  hoveredService === item ? " is-reveal-active" : ""
                }`}
                type="button"
                onMouseEnter={() => setHoveredService(item)}
                onMouseLeave={() => setHoveredService("")}
                onFocus={() => setHoveredService(item)}
                onBlur={() => setHoveredService("")}
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

          <article className={`service-copy ${hoveredService ? "is-revealed" : ""}`}>
            {hoveredService === "Comprehensive Audit Support Services" ? (
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
            ) : hoveredService === "Substantive Audit Procedures" ? (
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
            ) : hoveredService === "Internal Controls & Financial Reporting" ? (
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
                      US GAAP/IFRS compliant balance sheets, income statements,
                      cash flow statements, equity statements, and ASC-specific
                      footnote disclosures.
                    </p>
                  </article>
                </div>
              </>
            ) : hoveredService === "Specialized Support Services" ? (
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
            ) : hoveredService === "Industry Expertise & Project Management" ? (
              <>
                <h2>Industry Expertise &amp; Project Management</h2>
                <p>
                  Seamless coordination with US teams ensures efficient
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
            ) : hoveredService === "Compliance, Security & Ethical Standards" ? (
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
      <SiteFooterSection />
    </div>
  );
};

export default ServicePage;
