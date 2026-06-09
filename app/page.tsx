"use client";
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import AboutSection from "./components/AboutSection";
import ProductsSection from "./components/ProductsSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import SolidLiquidSection from "./components/SolidLiquidSection";
import IndustriesSection from "./components/IndustriesSection";
import AdvancedChemicalsSection from "./components/AdvancedChemicalsSection";
// import InfrastructureGallery from "./components/InfrastructureGallery";
import GlobalNetwork from "./components/GlobalNetwork";
import VisionMissionSection from "./components/VisionMissionSection";
import LeadershipSection from "./components/LeadershipSection";
import SustainabilitySection from "./components/SustainabilitySection";
import CertificationsSection from "./components/CertificationsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import BlogsSection from "./components/BlogsSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSlider />
      <AboutSection />
      <ProductsSection />
      <WhyChooseUsSection />
      <SolidLiquidSection />
      <IndustriesSection />
      <AdvancedChemicalsSection />
      {/* <InfrastructureGallery /> */}
      <GlobalNetwork />
      <VisionMissionSection />
      <LeadershipSection />
      <SustainabilitySection />
      <CertificationsSection />
      <TestimonialsSection />
      <BlogsSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
