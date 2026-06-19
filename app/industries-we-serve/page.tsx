'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function IndustriesPage() {
  const { language, t } = useLanguage();

  const industries = [
    { title: t.navbar.indDropdown.soap, image: "/2.webp" },
    { title: t.industries.items.water.name, image: "/3.webp" },
    { title: t.navbar.indDropdown.cosmetics, image: "/4.webp" },
    { title: t.industries.items.agriculture.name, image: "/12.webp" },
    { title: t.navbar.indDropdown.timber, image: "/6.webp" },
    { title: t.navbar.indDropdown.adhesives, image: "/5.webp" },
    { title: t.navbar.indDropdown.petroleum, image: "/8.webp" },
    { title: t.navbar.indDropdown.foundries, image: "/9.webp" },
    { title: t.navbar.indDropdown.food, image: "/10.webp" },
    { title: t.navbar.indDropdown.metals, image: "/11.webp" },
    { title: t.navbar.indDropdown.mining, image: "/7.webp" },
    { title: t.industries.items.construction.name, image: "/1.webp" },
  ];

  const title = language === 'en' ? "INDUSTRIES WE SERVE" : "INDUSTRIE CHE SERVIAMO";
  const subtitle = language === 'en' ? "Our Products are using various industries" : "I nostri prodotti sono utilizzati in varie industrie";

  return (
    <main className="bg-[#fcfcfd] min-h-screen pt-40 pb-24">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-widest text-gray-400 mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="text-gray-300">/</span>
          <span className="text-gray-500">Industries we serve</span>
        </nav>

        {/* Header */}
        <div className="mb-16">
          <h1 className="text-3xl md:text-4xl font-semibold text-[#06101f] leading-snug tracking-tight mb-4 flex items-center gap-4">
            <div className="w-1 h-8 bg-secondary/30 rounded-full" />
            {title}
          </h1>
          <p className="text-gray-500 text-lg font-medium text-center italic mt-10">
            {subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center group"
            >
              <h2 className="text-lg font-semibold text-[#06101f] mb-4 group-hover:text-primary transition-colors">
                {industry.title}
              </h2>
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-500">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
