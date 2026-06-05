"use client";
import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden" id="testimonials">
      <div className="absolute inset-0 bg-blue-900/5 clip-path-slant" />
      
      <div className="max-w-[1700px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/3 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-100/80 text-blue-700 font-bold text-xs mb-6 uppercase tracking-widest border border-blue-200"
            >
              Testimonials
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-6 tracking-tight leading-[1.2]"
            >
              Trusted by Industry Leaders Across the Globe
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 text-lg leading-relaxed max-w-md mx-auto lg:mx-0"
            >
              We take pride in delivering consistent quality, responsive service, and tailored silicate solutions.
            </motion.p>
          </div>

          <div className="lg:w-2/3 w-full relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-gray-100"
            >
              <div className="absolute -top-8 -left-8 text-blue-600/10 hidden md:block">
                <Quote size={120} />
              </div>
              
              <div className="relative z-10">
                <p className="text-2xl md:text-3xl font-medium text-gray-800 leading-relaxed mb-12 italic">
                  “This platform has completely transformed the way we handle our business operations. The support team is fantastic, and the experience is seamless!”
                </p>
                
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    JD
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 tracking-tight">John Doe</h4>
                    <p className="text-blue-600 font-medium tracking-wide">CEO, BlueOcean Pvt Ltd</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Design accents */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full border-[10px] border-blue-50 -z-10" />
            <div className="absolute -top-6 -right-12 w-20 h-20 bg-blue-50 rounded-full -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
