import { useEffect } from "react";
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
 
function App() {
  const location = useLocation();

  useEffect(() => {
    const sections = document.querySelectorAll(".app-sections > *");

    sections.forEach((section, index) => {
      section.classList.add("scroll-section");
      section.classList.add("is-visible");
      section.style.setProperty("--reveal-delay", `${index * 1}ms`);
    });
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

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicePage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}
 
export default App;
 
