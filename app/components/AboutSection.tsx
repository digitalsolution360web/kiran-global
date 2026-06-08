"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Factory } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-16 bg-[#f8fafc] relative overflow-hidden" id="about">
      {/* Background Decorative Text */}
      <div className="absolute top-1/4 -right-10 text-[200px] font-black text-gray-50/80 select-none pointer-events-none uppercase leading-none hidden lg:block tracking-tighter rotate-90 origin-right">
        GLOBAL
      </div>

      <div className="max-w-[1700px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* Left: Premium Image Collage */}
          <div className="lg:w-1/2 relative w-full h-[600px] lg:h-[800px] flex items-center">
            
            {/* Background elements */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-50 to-transparent rounded-[3rem] -z-10 rotate-6" />

            <motion.div
                initial={{ opacity: 0, x: -50, y: -20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute top-0 right-0 w-3/4 h-[60%] rounded-[3rem] overflow-hidden shadow-2xl border-[8px] border-white z-10"
            >
                <Image src="/new30.webp" alt="Kiran Global Factory Facility" fill className="object-cover" />
                <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: -30, y: 50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                className="absolute bottom-10 left-0 w-2/3 h-[50%] rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] border-[8px] border-white z-20"
            >
                <Image src="/new20.webp" alt="Production Pipeline" fill className="object-cover" />
            </motion.div>

            {/* Floating Info card */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 p-8 rounded-[2rem] shadow-2xl z-30 text-center w-48 h-48 flex flex-col items-center justify-center border-4 border-white"
            >
                <span className="text-4xl font-bold text-white leading-none mb-1">1979</span>
                <span className="block w-8 h-1 bg-white/30 my-2 rounded-full" />
                <span className="text-white/90 font-bold uppercase tracking-widest text-xs">Est. Year</span>
            </motion.div>
          </div>
          
          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "circOut" }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-blue-50/80 backdrop-blur-sm text-blue-700 font-bold text-xs mb-8 uppercase tracking-[0.2em] border border-blue-100 shadow-sm">
              <Factory size={16} className="text-blue-600" />
              <span>About Kiran Global</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-[1.15] tracking-tight">
              One of India's largest manufacturers of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-400">
                Sodium & Potassium Silicate
              </span>
            </h2>

            <div className="space-y-5 text-gray-700 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl font-medium">
              <p>
                Kiran Global Chems Limited is one of India's largest manufacturers of Sodium Silicate and Potassium Silicate solutions. Established in 1979, the company has grown from a single manufacturing unit into a globally recognized chemical enterprise serving customers across multiple continents.
              </p>
              <div className="pl-6 border-l-4 border-blue-600 bg-blue-50/50 p-4 rounded-r-2xl">
                <p className="text-blue-900 font-bold text-lg italic leading-relaxed">
                  "Our commitment to quality, innovation, and sustainability enables us to deliver reliable chemical solutions for diverse industrial applications."
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 mt-12">
              {[
                "45+ Years of Industry Experience",
                "Global Manufacturing Presence",
                "Advanced Production Facilities",
                "Customer-Centric Approach",
              ].map((text, index) => (
                <motion.div 
                  key={index} 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-5 group cursor-default"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm border border-blue-200">
                    <CheckCircle2 size={20} strokeWidth={3} />
                  </div>
                  <span className="font-bold text-gray-800 text-lg leading-tight pt-1.5">{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
