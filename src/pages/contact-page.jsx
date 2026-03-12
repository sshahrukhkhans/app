import { Link } from "react-router-dom";
import "./contact-page.css";
import Header from "../components/layout/header/header";
import SiteFooterSection from "../components/layout/site-footer/site-footer";
import ContactEmailForm from "../components/forms/contact-email-form";
import serviceBanner from "../assets/images/banner.jpg";
import project01 from "../assets/images/project-01.jpg";
import project02 from "../assets/images/project-02.jpg";
import project03 from "../assets/images/project-03.jpg";

const contactCards = [
  {
    title: "Send Us Mail",
    lines: ["Write to our support desk", "General queries and onboarding"],
    image: project01,
    icon: "✉",
  },
  {
    title: "Call Us Anytime",
    lines: ["Available during business hours", "Mon - Fri: 9am - 5:30pm"],
    image: project02,
    icon: "☎",
  },
  {
    title: "Visit Our Office",
    lines: [
      "No.14/6M, Dhanrith Villa, Hospital Road,",
      "Sulur, Coimbatore - 641402",
    ],
    image: project03,
    icon: "⌖",
  },
];

const ContactPage = () => {
  return (
    <div className="app-sections">
      <Header showHero={false} />

      <section id="contact-top" className="contact-page-hero" aria-label="Contact us banner">
        <img src={serviceBanner} alt="Contact us banner" loading="lazy" />
        <div className="contact-page-hero-overlay">
          <div className="container">
            <h1>
              Contact <span className="page-title-mobile-break">Us</span>
            </h1>
            <nav className="contact-page-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span aria-hidden="true">&rsaquo;</span>
              <span>Contact Us</span>
            </nav>
          </div>
        </div>
      </section>

      <section className="contact-info-section" aria-label="Contact information">
        <div className="container contact-info-grid">
          {contactCards.map((item) => (
            <article key={item.title} className="contact-info-card">
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="contact-info-body">
                <span className="contact-info-icon" aria-hidden="true">
                  {item.icon}
                </span>
                <h3>{item.title}</h3>
                {item.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-form-section" aria-label="Contact form">
        <div className="container contact-form-wrap">
          <div className="contact-form-header">
            <h2>Drop Us A Line</h2>
            <p>Our team will arrange your first business consultation at no cost.</p>
            <span className="contact-form-divider" aria-hidden="true" />
          </div>

          <ContactEmailForm className="contact-form-grid" sourcePage="Contact Page" />
        </div>
      </section>

      <SiteFooterSection />
    </div>
  );
};

export default ContactPage;
