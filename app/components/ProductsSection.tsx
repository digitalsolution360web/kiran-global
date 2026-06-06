"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const products = [
  {
    id: "sodium-lumps",
    name: "Sodium Silicate Lumps",
    fullName: "Sodium Silicate Lumps - Industrial Grade",
    description: "At Kiran Global Chems Ltd. we produce sodium silicate lumps that are manufactured using top grade raw materials and have superior properties, both physical and chemical. We are the market leader in India and our brand is recognized globally for its high performance.",
    image: "/sodium-silicate-solidd.webp",
    features: [
      "High Purity Raw Materials",
      "Superior Chemical Properties",
      "Global Market Recognition"
    ]
  },
  {
    id: "sodium-liquid",
    name: "Sodium Silicate Liquid",
    fullName: "Sodium Silicate Liquid for Industrial Applications",
    description: "At Kiran Global Chem Ltd. we offer sodium silicate in liquid form for specific industrial application where the liquid property of the chemical is highly effective. We manufacture high quality silicates that are produced to match our customer's expectations.",
    image: "/sodium-silicate-liquidd.webp",
    features: [
      "Effective Liquid Properties",
      "Customized Industrial Grades",
      "High Quality Manufacturing"
    ]
  },
  {
    id: "potassium-lumps",
    name: "Potassium Silicate Lumps",
    fullName: "High Performance Potassium Silicate Lumps",
    description: "At Kiran Global Chem Ltd. we manufacture potassium silicate lumps of the highest quality. Our product is recognized industry-wide for its high performance and seamless integration into various industrial processes.",
    image: "/potas-sili-solidd.webp",
    features: [
      "Seamless Process Integration",
      "Industry-Wide Recognition",
      "High Batch Consistency"
    ]
  },
  {
    id: "potassium-liquid",
    name: "Potassium Silicate Liquid",
    fullName: "Premium Potassium Silicate Liquid",
    description: "Kiran Global Chems Ltd. is a leading brand name in India in the manufacture and supply of potassium silicate liquid. Our industry-grade potassium silicate liquid is available in a range of ratios and concentrations.",
    image: "/potas-sili-liqq.webp",
    features: [
      "Versatile Ratios & Concentrations",
      "Leading Indian Brand Quality",
      "Optimized Chemical Solutions"
    ]
  }
];

const ProductsSection = () => {
  const [activeTab, setActiveTab] = useState(products[0]);

  return (
    <section
      className="py-24 bg-blue-50 relative overflow-hidden"
      id="products"
    >
      <div className="max-w-[1700px] mx-auto px-6 lg:px-12">

        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-100 text-blue-800 font-bold text-xs mb-4 uppercase tracking-widest border border-blue-200"
          >
            Our Product Portfolio
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
            Our <span className="text-blue-700 italic">Products</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* ── LEFT: Product Tabs Sidebar ── */}
          <div className="lg:col-span-3 m-auto flex flex-col gap-4">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => setActiveTab(product)}
                className={`flex items-center justify-between px-8 py-5 rounded-2xl text-base font-bold transition-all duration-500 text-left group
                  ${activeTab.id === product.id
                    ? "bg-[#A13133] text-white shadow-[0_20px_40px_-10px_rgba(161,49,51,0.4)] translate-x-3"
                    : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-100 shadow-sm hover:translate-x-1"
                  }`}
              >
                <span className="leading-tight pr-4">{product.name}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 
                  ${activeTab.id === product.id ? "bg-white/20 rotate-0" : "bg-gray-100 -rotate-45 opacity-0 group-hover:opacity-100"}`}>
                  <ArrowRight size={16} />
                </div>
              </button>
            ))}
          </div>

          {/* ── CENTER & RIGHT: Product Display ── */}
          <div className="lg:col-span-9 bg-white rounded-[2.5rem] p-8 lg:p-14 shadow-2xl border border-gray-50 overflow-hidden min-h-[600px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center w-full"
              >
                {/* Product Image Center */}
                <div className="lg:col-span-5 relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)] bg-gray-50 border border-gray-100 group">
                  <Image
                    src={activeTab.image}
                    alt={activeTab.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />
                </div>

                {/* Product Details Right */}
                <div className="lg:col-span-7 flex flex-col">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-3xl lg:text-[48px] font-black text-gray-900 leading-[1.1] mb-8">
                      {activeTab.fullName}
                    </h3>

                    <p className="text-gray-800 leading-relaxed text-lg lg:text-xl mb-10 font-bold opacity-100">
                      {activeTab.description}
                    </p>

                    <div className="flex flex-col gap-6 mb-12">
                      {activeTab.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-5 group">
                          <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 group-hover:bg-[#A13133] transition-colors duration-300 border border-red-200 shadow-sm">
                            <CheckCircle2 size={20} className="text-[#A13133] group-hover:text-white transition-colors duration-300" />
                          </div>
                          <span className="text-gray-900 font-extrabold text-lg tracking-tight">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button className="inline-flex items-center gap-4 bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-[#A13133] transition-all duration-300 group shadow-lg">
                      <span>Get Detailed Specifications</span>
                      <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
