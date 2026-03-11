import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./about-page.css";
import Header from "../components/layout/header/header";
import SiteFooterSection from "../components/layout/site-footer/site-footer";
import serviceBanner from "../assets/images/banner.jpg";
import aboutBanner from "../assets/images/about-banner.jpg";
import sectionBg from "../assets/images/project-02.jpg";
import profileImage from "../assets/images/profile.jpg";

const testimonialSeed = [
  {
    quote:
      "A trust is an ideal way for individuals to transfer assets either during life or after their passing. At a basic level, a trust is a separate.",
    name: "Julie Sweet",
    role: "Finance Consultant",
  },
  {
    quote:
      "Most designers live in some sort of alternate reality, creating unnecessary things for each other. Then they become trends.",
    name: "Rachel Ballinger",
    role: "CEO, Bizzbreak Inc.",
  },
  {
    quote:
      "Our engagement quality improved after standardizing planning, documentation, and review handoff with clear milestones.",
    name: "Martin Cole",
    role: "Audit Partner",
  },
  {
    quote:
      "The team delivered disciplined support in testing and controls, helping us close reviews faster with stronger evidence mapping.",
    name: "Annie Parker",
    role: "Compliance Lead",
  },
  {
    quote:
      "Communication was precise and response times were reliable across time zones, which made execution smooth for our global workflow.",
    name: "Daniel Scott",
    role: "Controller",
  },
  {
    quote:
      "Their structured approach reduced reviewer friction and gave our firm consistent turnaround across complex reporting cycles.",
    name: "Olivia James",
    role: "Senior Manager",
  },
];

const AboutPage = () => {
  const statsRef = useRef(null);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const testimonials = useMemo(() => {
    const items = [...testimonialSeed];
    for (let i = items.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    return items;
  }, []);

  useEffect(() => {
    const targets = [25, 20, 250, 40];
    let started = false;

    const animate = () => {
      const start = performance.now();
      const duration = 1200;

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        setCounts(
          targets.map((target) => Math.max(1, Math.floor(progress * target)))
        );
        if (progress < 1) {
          requestAnimationFrame(tick);
        }
      };

      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!started && entry.isIntersecting) {
          started = true;
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [testimonials.length]);

  const visibleTestimonials = [
    testimonials[testimonialIndex],
    testimonials[(testimonialIndex + 1) % testimonials.length],
  ];

  return (
    <div className="app-sections">
      <Header showHero={false} />

      <section id="about-top" className="about-page-hero" aria-label="About us banner">
        <img src={serviceBanner} alt="About us banner" loading="lazy" />
        <div className="about-page-hero-overlay">
          <div className="container">
            <h1>About Us</h1>
            <nav className="about-page-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span aria-hidden="true">&rsaquo;</span>
              <span>About Us</span>
            </nav>
          </div>
        </div>
      </section>

      <section className="about-page-main">
        <div className="container about-page-grid">
          <article className="about-page-intro">
            <p className="about-page-kicker">ABOUT COMPANY</p>
            <h2>
              Welcoming you
              <br />
              to <span>Consulting</span>
              <br />
              Agency
            </h2>
          </article>

          <article className="about-page-copy">
            <p>
              CNR IntelliGrow LLP provides structured India-based support for
              accounting firms and finance teams operating across global
              reporting environments. We support planning, documentation,
              testing, controls, and final review workflows with delivery
              discipline. Our teams align to client processes and reviewer
              expectations so engagements move faster with consistent quality.
              We focus on practical execution, clear communication, and
              dependable outcomes.
            </p>
          </article>
        </div>
        <div className="container about-page-next-image">
          <img src={aboutBanner} alt="About section team" loading="lazy" />
        </div>
      </section>

      <section className="about-cta-visual" aria-label="Consulting support section">
        <img className="about-cta-visual-bg" src={sectionBg} alt="Consulting background" loading="lazy" />
        <div className="about-cta-visual-overlay" />
        <div className="container about-cta-visual-content">
          <p>
            We <span>consult</span> our clients to <span>strengthen</span>
            <br />
            decision making &amp; <span>understanding</span> for their
            <br />
            upcoming ventures
          </p>
        </div>
      </section>

      <section className="about-team-section" aria-label="Our team">
        <div className="container">
          <p className="about-team-kicker">OUR TEAM</p>
          <h2>Meet Our Consultants</h2>
          <span className="about-team-divider" aria-hidden="true" />

          <div className="about-team-grid">
            {[
              { name: "Jackson Miller", role: "Consultant" },
              { name: "Soamson Doglus", role: "Consultant" },
              { name: "Garrison Hall", role: "Consultant" },
            ].map((member) => (
              <article key={member.name} className="about-team-card">
                <img src={profileImage} alt={member.name} loading="lazy" />
                <div className="about-team-meta">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-stats-strip" ref={statsRef} aria-label="Company stats">
        <img className="about-stats-bg" src={sectionBg} alt="Stats background" loading="lazy" />
        <div className="about-stats-overlay" />
        <div className="container about-stats-grid">
          {[
            { label: "Team Members" },
            { label: "Years Experience" },
            { label: "Happy Clients" },
            { label: "Successful Campaigns" },
          ].map((item, index) => (
            <article key={`${item.label}-${index}`} className="about-stat-item">
              <h3>{counts[index]}+</h3>
              <p>{item.label}</p>
              <span className="about-stat-line" aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className="about-testimonial-section" aria-label="Client testimonial">
        <div className="container about-testimonial-layout">
          <div className="about-testimonial-intro">
            <p className="about-testimonial-kicker">CLIENTS TESTIMONIAL</p>
            <h2>
              What our Clients
              <br />
              say about Us
            </h2>
            <span className="about-testimonial-divider" aria-hidden="true" />
          </div>

          <div className="about-testimonial-cards">
            {visibleTestimonials.map((item, index) => (
              <article key={item.name} className="about-testimonial-card">
                <div className="about-testimonial-card-body">
                  <p className="about-testimonial-rating">
                    <strong>Rating:</strong> <span>★★★★★</span>
                  </p>
                  <p className="about-testimonial-quote">“{item.quote}”</p>
                </div>
                <div className="about-testimonial-author">
                  <img src={profileImage} alt={item.name} loading="lazy" />
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.role}</p>
                  </div>
                </div>
                <span className="about-testimonial-bottom-line" aria-hidden="true" />
              </article>
            ))}
            <div className="about-testimonial-dots" aria-hidden="true">
              {testimonials.map((item, index) => (
                <span
                  key={item.name}
                  className={index === testimonialIndex ? "is-active" : ""}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooterSection />
    </div>
  );
};

export default AboutPage;
