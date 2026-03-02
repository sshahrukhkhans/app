import Header from "./components/layout/header/header";
import ServicesSection from "./components/layout/services/services";
import CaseStudiesSection from "./components/layout/case-studies/case-studies";
import WhyChooseUsSection from "./components/layout/why-choose-us/why-choose-us";
import InvestCtaSection from "./components/layout/invest-cta/invest-cta";
import ProcessSection from "./components/layout/process/process";
import GrowthNewsletterSection from "./components/layout/growth-newsletter/growth-newsletter";
 
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
    </>
  );
}
 
export default App;
 
