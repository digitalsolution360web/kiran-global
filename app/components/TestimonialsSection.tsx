"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-white overflow-hidden" id="testimonials">
      <div className="max-w-[1700px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 rounded bg-primary/10 text-primary font-bold text-[10px] mb-3 uppercase tracking-widest"
          >
            Testimonials
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-dark mb-4 tracking-tight"
          >
            Trusted by Industry Leaders Across the Globe
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 text-base max-w-2xl mx-auto italic opacity-80"
          >
            We take pride in delivering consistent quality, responsive service, and tailored silicate solutions.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="absolute -top-10 -left-10 text-primary/5">
            <Quote size={100} />
          </div>
          
          <div className="relative bg-gray-50 p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
            <p className="text-xl md:text-2xl font-medium text-dark leading-relaxed mb-8 text-center italic">
              “This platform has completely transformed the way we handle our business operations. The support team is fantastic, and the experience is seamless!”
            </p>
            
            <div className="flex flex-col items-center gap-3">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
                <Image src="/john.png" alt="John Doe" fill className="object-cover" />
              </div>
              <div className="text-center">
                <h4 className="text-lg font-bold text-dark uppercase tracking-tight">John Doe</h4>
                <p className="text-primary font-bold text-[10px] uppercase tracking-widest">CEO, BlueOcean Pvt Ltd</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
