import { useEffect, useRef, useState } from "react";
import "./services.css";
 
const services = [
  {
    title: "Substantive Audit Procedures",
    desc: "",
  },
  {
    title: "Internal Controls & Financial Reporting",
    desc: "",
  },
  {
    title: "Specialized Support Services",
    desc: "",
  },
  {
    title: "Industry Expertise & Project Management",
    desc: "",
  },
  {
    title: "Compliance",
    desc: "",
  },
  {
    title: "Security & Ethical Standards",
    desc: "",
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
            Our team supports global CPA firms with structured planning, disciplined
            documentation, and audit-ready execution that integrates smoothly
            into established engagement workflows.
          </p>
        </div>
 
        <div className="services-grid">
          {services.map((item, index) => (
            <article
              key={item.title}
              className="service-card"
              style={{ "--delay": `${index * 130}ms` }}
            >
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
