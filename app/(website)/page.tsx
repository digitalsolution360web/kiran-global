"use client";
import HeroSlider from "./components/HeroSlider";
import AboutSection from "./components/AboutSection";
import ProductsSection from "./components/ProductsSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import SolidLiquidSection from "./components/SolidLiquidSection";
import IndustriesSection from "./components/IndustriesSection";
import AdvancedChemicalsSection from "./components/AdvancedChemicalsSection";
// import InfrastructureGallery from "./components/InfrastructureGallery";

// import GlobalNetwork from "./components/GlobalNetwork";
import LocationsGlobe from "./components/LocationsGlobe";
import VisionMissionSection from "./components/VisionMissionSection";
import LeadershipSection from "./components/LeadershipSection";
import SustainabilitySection from "./components/SustainabilitySection";
import CertificationsSection from "./components/CertificationsSection";
import ClientTestimonials from "./components/ClientTestimonials";
import BlogsSection from "./components/BlogsSection";
import FAQSection from "./components/FAQSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSlider />
      <AboutSection />
      <ProductsSection />
      <WhyChooseUsSection />
      <SolidLiquidSection />
      <IndustriesSection />
      <AdvancedChemicalsSection />
      {/* <InfrastructureGallery /> */}

      {/* <GlobalNetwork /> */}
      <LocationsGlobe />
      <VisionMissionSection />
      <LeadershipSection />
      <SustainabilitySection />
      <CertificationsSection />
      <ClientTestimonials />
      <BlogsSection />
      <FAQSection />
    </main>
  );
}
