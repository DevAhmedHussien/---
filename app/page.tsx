import CTASection from "../components/CtaSection";
import HeroSection from "../components/HeroSection";
import PlumbingElectricServices from "../components/PlumbingElectricServices";
import { RecentWorks } from "../components/RecentWorks";
import CustomerReviews from "../components/Review";
import ServicesSection from "../components/ServicesSection";
import { WorkExperience } from "../components/WorkExperience";
import WorkProcessSection from "../components/WorkProcessSection";
import AboutUs from "../components/about/page";
import { Contact } from "../components/contact/page";
import FAQSection from "./faq/FAQSection";


export default function Home() {
  return (
      <div>
      {/* Hero Section */}
      <HeroSection/>

      <PlumbingElectricServices/>
      {/* services section */}
      <ServicesSection/>

      {/* soultion */}
      {/* <Solutions/> */}

      {/* work Poccess */}
      <WorkProcessSection/>

      {/* recent work */}
      <RecentWorks/>
      <WorkExperience/>


      {/* feature solution */}
      {/* <FeaturesSection/> */}


      {/* Cta  */}
      <CTASection/>

<CustomerReviews/>
      {/* about Ua */}
      <AboutUs/>
      {/* <ContactForm/> */}
      <Contact/>
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8 text-blue-800">
            <span className="font-bold text-3xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Часто задаваемые вопросы</span>
          </h3>
          <FAQSection/>
        </div>
      </div>
    </div>
  );
}