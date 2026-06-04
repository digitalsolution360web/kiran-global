"use client";
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import AboutSection from "./components/AboutSection";
import ProductsSection from "./components/ProductsSection";
import IndustriesSection from "./components/IndustriesSection";
import CertificationsSection from "./components/CertificationsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import BlogsSection from "./components/BlogsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSlider />
      <AboutSection />
      <ProductsSection />
      <IndustriesSection />
      <CertificationsSection />
      <TestimonialsSection />
      <BlogsSection />
      <Footer />
    </main>
  );
}
