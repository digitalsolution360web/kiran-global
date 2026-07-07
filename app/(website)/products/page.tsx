'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductsSection from '../components/ProductsSection';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function ProductsPage() {
  const { t } = useLanguage();

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent blur-3xl transform -translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-2xl lg:text-5xl font-bold text-white mt-10 mb-5">
              {t.products.title.split(" ").slice(0, -1).join(" ")} <span className="text-secondary">{t.products.title.split(" ").slice(-1)}</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              {t.aboutPage.productRangeDesc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Products Section */}
      <div className="py-10">
        <ProductsSection />
      </div>
    </main>
  );
}
