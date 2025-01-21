import CTASection from "@/components/CtaSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
// import Solutions from "@/components/solutions/page";
import WorkProcessSection from "@/components/WorkProcessSection";
import AboutUs from "@/components/about/page";
import { WorkExperience } from "@/components/WorkExperience";
import { RecentWorks } from "@/components/RecentWorks";
// import ContactForm from "@/components/ContactForm";
import { Contact } from "@/components/contact/page";

export default function Home() {
  return (
      
      <div>
      {/* Hero Section */}
      <HeroSection/>

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

      {/* about Ua */}
      <AboutUs/>
      {/* <ContactForm/> */}
      <Contact/>
    </div>
  );
}