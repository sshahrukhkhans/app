import { useEffect, useRef, useState } from "react";
import "./services.css";
 
const services = [
  {
    title: "Planning to execution continuity",
    desc:
      "Early-stage planning support that strengthens scope, risk, and control understanding before fieldwork begins.",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <defs>
          <linearGradient id="grad-growth" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#38ccff" />
            <stop offset="100%" stopColor="#285ed2" />
          </linearGradient>
        </defs>
        <rect x="10" y="34" width="8" height="16" rx="2" fill="#9bd6ff" />
        <rect x="24" y="26" width="8" height="24" rx="2" fill="#e8f2ff" />
        <rect x="38" y="18" width="8" height="32" rx="2" fill="#9bd6ff" />
        <path d="M12 44L28 28L42 34L54 20" fill="none" stroke="url(#grad-growth)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M50 20H54V24" fill="none" stroke="url(#grad-growth)" strokeWidth="4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Firm-ready documentation structure",
    desc:
      "Structured workpaper preparation aligned to firm conventions, indexing discipline, and reviewer expectations.",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <defs>
          <linearGradient id="grad-case" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#38ccff" />
            <stop offset="100%" stopColor="#285ed2" />
          </linearGradient>
        </defs>
        <rect x="14" y="22" width="36" height="26" rx="4" fill="url(#grad-case)" opacity="0.95" />
        <rect x="18" y="27" width="28" height="18" rx="3" fill="#f2f7ff" opacity="0.9" />
        <path d="M24 22V18C24 15.8 25.8 14 28 14H36C38.2 14 40 15.8 40 18V22" fill="none" stroke="#39c7fb" strokeWidth="3" />
      </svg>
    ),
  },
  {
    title: "Testing support built for review",
    desc:
      "Focused testing support across balances, transactions, analytics, and external confirmation workflows.",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <defs>
          <linearGradient id="grad-chart" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#38ccff" />
            <stop offset="100%" stopColor="#285ed2" />
          </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="18" fill="#f1f6ff" opacity="0.95" />
        <path d="M32 14A18 18 0 0 1 50 32H32V14Z" fill="url(#grad-chart)" />
        <circle cx="32" cy="32" r="10" fill="#9fb2d8" />
        <circle cx="32" cy="32" r="8" fill="#eef4ff" />
      </svg>
    ),
  },
];
 
const ServicesSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
 
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
 
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.22 },
    );
 
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
 
  return (
    <section
      ref={sectionRef}
      className={`services-section${isVisible ? " is-visible" : ""}`}
    >
      <div className="container services-layout">
        <div className="services-intro">
          <div className="services-kicker-wrap">
            <span className="services-kicker-line" />
            <span className="services-kicker">COMPREHENSIVE AUDIT SUPPORT</span>
          </div>

          <h2>Core Services</h2>
          <p>
            Our team supports US CPA firms with structured planning, disciplined
            documentation, and audit-ready execution that integrates smoothly
            into established engagement workflows.
          </p>
          <button className="services-btn">Discuss your workflow</button>
        </div>
 
        <div className="services-grid">
          {services.map((item, index) => (
            <article
              key={item.title}
              className="service-card"
              style={{ "--delay": `${index * 130}ms` }}
            >
              <div className="service-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              {item.desc ? <p>{item.desc}</p> : null}
            </article>
          ))}
        </div>
      </div>
      <span className="services-dot" aria-hidden="true" />
    </section>
  );
};
 
export default ServicesSection;
