import "./growth-newsletter.css";

const businessSeries = [5000, 7500, 4200, 14000, 9200, 24000, 30000];
const financeSeries = [12500, 11000, 22000, 17000, 27000, 26500, 31000];
const years = ["2023", "2020", "2019", "2018", "2017", "2016", "2015"];
const procedureCards = [
  {
    id: "01",
    title: "Balance Sheet Audits",
    description:
      "Support across cash, receivables, inventory, fixed assets, investments, and financing balances with clear evidential linkage.",
    points: [
      "Cash & Bank - Reconciliations, cutoff testing, confirmations",
      "Accounts Receivable - Confirmations, aging analysis, subsequent receipts",
      "Inventory - Remote observation, valuation, roll-forward testing",
      "Fixed Assets - Depreciation, additions/disposals, CAPEX verification",
      "Investments - Fair value testing, market price verification",
      "Loans & Debts - Agreement review, interest calculations, covenants",
    ],
  },
  {
    id: "02",
    title: "Income Statement Audits",
    description:
      "Substantive testing for revenue, cost drivers, operating expenses, and payroll with cutoff, analytics, and transaction validation.",
    points: [
      "Revenue - ASC 606 contract review, cutoff testing",
      "COGS - Expense testing, inventory movement, variance analysis",
      "Operating Expenses - Sampling, analytical review",
      "Payroll - Register testing, compliance checks",
    ],
  },
];

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
              <span className="growth-kicker">DETAILED EXECUTION</span>
            </div>

            <h2>Substantive Audit Procedures</h2>
            <p className="growth-copy">
              We execute substantive testing with evidence-focused discipline,
              combining detailed account analysis with efficient workpaper
              support to reduce reviewer friction and improve turnaround.
            </p>
          </div>
        </div>

        <div className="growth-procedure-grid">
          {procedureCards.map((card) => (
            <article className="growth-procedure-card" key={card.title}>
              <div className="growth-procedure-head">
                <span className="growth-procedure-id">{card.id}</span>
                <span className="growth-procedure-icon" aria-hidden="true">
                  {card.id === "01" ? (
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M7 3H14L19 8V20C19 20.6 18.6 21 18 21H7C6.4 21 6 20.6 6 20V4C6 3.4 6.4 3 7 3Z" stroke="currentColor" strokeWidth="1.8" />
                      <path d="M14 3V8H19" stroke="currentColor" strokeWidth="1.8" />
                      <path d="M9 13H15M9 17H13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M4 20H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      <path d="M7 18V10M12 18V6M17 18V13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  )}
                </span>
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <ul>
                {card.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrowthNewsletterSection;
