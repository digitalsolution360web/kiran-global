"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Box } from "lucide-react";

const products = [
  {
    image: "/sodium-silicate-solidd.webp",
    name: "Sodium Silicate Lumps",
    description: "At Kiran Global Chems Ltd. we produce sodium silicate lumps that are manufactured using top grade raw materials and have superior properties, both physical and chemical. We are the market leader in India and our brand is recognized globally for its high performance"
  },
  {
    image: "/sodium-silicate-liquidd.webp",
    name: "Sodium Silicate Liquid",
    description: "At Kiran Global Chem Ltd. we offer sodium silicate in liquid form for specific industrial application where the liquid property of the chemical is highly effective. We manufacture high quality silicates that are produced to match our customer’s expectations."
  },
  {
    image: "/potas-sili-solidd.webp",
    name: "Potassium Silicate Lumps",
    description: "At Kiran Global Chem Ltd. we manufacture potassium silicate lumps of the highest quality. Our product is recognized industry-wide for its high performance and seamless integration."
  },
  {
    image: "/potas-sili-liqq.webp",
    name: "Potassium Silicate Liquid",
    description: "Kiran Global Chems Ltd. is a leading brand name in India in the manufacture and supply of potassium silicate liquid. Our industry-grade potassium silicate liquid is available in a range of ratios and concentrations based on the specific business requirements of our clients."
  },
];

const ProductsSection = () => {
  return (
    <section className="py-32 bg-[#e8eef3] relative overflow-hidden" id="products">
      <div className="max-w-[1700px] mx-auto px-6 lg:px-12 relative z-10">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-black/5 text-gray-800 font-black text-xs mb-8 uppercase tracking-[0.2em] border border-black/10 shadow-sm"
          >
            <Box size={16} className="text-primary" />
            <span>Our Portfolio</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight leading-[1.1]">
            Our <span className="text-primary italic">Products</span>
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-28">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col w-full"
            >
              {/* Product Title */}
              <h3 className="text-3xl md:text-[34px] font-bold text-[#111] mb-10 font-serif text-center tracking-wide">
                {product.name}
              </h3>

              {/* Product Image: Centered, specific width, unrounded like screenshot */}
              <div className="relative w-11/12 md:w-5/6 mx-auto aspect-[4/3] mb-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] bg-white hover:scale-[1.02] transition-transform duration-700 ease-out z-10">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Description Text: Full width of the column, independent of image width */}
              <p className="text-[#444] text-base md:text-[17px] leading-[1.5]  text-center font-medium px-2 md:px-0">
                {product.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
