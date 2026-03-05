import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/layout/header/header";
import ServicesSection from "./components/layout/services/services";
import CaseStudiesSection from "./components/layout/case-studies/case-studies";
import WhyChooseUsSection from "./components/layout/why-choose-us/why-choose-us";
import InvestCtaSection from "./components/layout/invest-cta/invest-cta";
import ProcessSection from "./components/layout/process/process";
import GrowthNewsletterSection from "./components/layout/growth-newsletter/growth-newsletter";
import TestimonialSection from "./components/layout/testimonial/testimonial";
import LatestNewsSection from "./components/layout/latest-news/latest-news";
import SiteFooterSection from "./components/layout/site-footer/site-footer";
import ServicePage from "./pages/service-page";
import AboutPage from "./pages/about-page";
 
function App() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fade-in");

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage("fade-out");
    }
  }, [location, displayLocation]);

  useEffect(() => {
    const sections = document.querySelectorAll(".app-sections > *");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );

    sections.forEach((section, index) => {
      section.classList.add("scroll-section");
      section.classList.remove("is-visible");
      section.style.setProperty("--reveal-delay", `${index * 1}ms`);
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  const HomePage = () => (
    <div className="app-sections">
      <Header />
      <ServicesSection />
      <CaseStudiesSection />
      <WhyChooseUsSection />
      <InvestCtaSection />
      <ProcessSection />
      <GrowthNewsletterSection />
      <TestimonialSection />
      <LatestNewsSection />
      <SiteFooterSection />
    </div>
  );

  const handleAnimationEnd = (event) => {
    if (event.target !== event.currentTarget) return;

    if (transitionStage === "fade-out") {
      setDisplayLocation(location);
      setTransitionStage("fade-in");
    }
  };

  return (
    <div className={`page-route-transition ${transitionStage}`} onAnimationEnd={handleAnimationEnd}>
      <Routes location={displayLocation}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}
 
export default App;
 
