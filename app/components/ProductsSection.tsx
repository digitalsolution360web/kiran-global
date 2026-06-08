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
      className="py-14 bg-gray-100 relative overflow-hidden"
      id="products"
    >
      <div className="max-w-[1700px] mx-auto px-6 lg:px-12">

        {/* Section Title */}
        <div className="mb-16 flex flex-col items-center text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 text-primary font-bold text-xs mb-4 uppercase tracking-widest border border-blue-100"
          >
            Our Product Portfolio
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight text-center">
            Our <span className="text-primary italic">Products</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* ── LEFT: Product Tabs Sidebar ── */}
          <div className="lg:col-span-3 mt-27 gap-5  flex flex-col w-full">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => setActiveTab(product)}
                className={`flex items-center justify-between px-6 py-6 border-b border-r border-l border-gray-100 first:border-t transition-all duration-300 text-left relative overflow-hidden
                  ${activeTab.id === product.id
                    ? "bg-primary text-white border-primary z-10"
                    : "bg-white text-gray-700 hover:bg-gray-50 bg-white"
                  } transition-all duration-300 shadow-[0_10px_20px_rgba(10,77,162,0.1)]`}
              >
                <span className="text-[17px] font-bold leading-tight z-10">{product.name}</span>
                {activeTab.id === product.id && (
                  <ArrowRight size={18} className="text-white z-10" />
                )}
              </button>
            ))}
          </div>

          {/* ── CENTER & RIGHT: Product Display ── */}
          <div className="lg:col-span-9  border border-gray-100 p-6 lg:p-10 min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-11 gap-8 lg:gap-12 items-center"
              >
                {/* Product Image Center */}
                <div className="lg:col-span-5 relative aspect-square rounded-lg overflow-hidden border border-gray-100 shadow-sm">
                  <Image
                    src={activeTab.image}
                    alt={activeTab.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Product Details Right */}
                <div className="lg:col-span-6 flex flex-col">
                  <h3 className="text-2xl lg:text-[40px] font-bold text-gray-900 leading-[1.2] mb-6">
                    {activeTab.fullName}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-base lg:text-lg mb-8">
                    {activeTab.description}
                  </p>

                  <div className="flex flex-col gap-5 mb-10">
                    {activeTab.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 size={12} className="text-primary fill-primary/10" />
                        </div>
                        <span className="text-gray-800 font-semibold text-base lg:text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors group underline underline-offset-8">
                    <span className="text-lg">Read More</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
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
