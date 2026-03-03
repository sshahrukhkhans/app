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
 
function App() {
  return (
    <>
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
    </>
  );
}
 
export default App;
 
