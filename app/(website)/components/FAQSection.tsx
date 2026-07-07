"use client";
import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const FAQSection = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-14 bg-[#f8fbff] relative overflow-hidden" id="faq">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 opacity-60" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3 opacity-60" />

      <div className="max-w-[1700px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left Column: Heading & Info */}
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="sticky top-32"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[1px] bg-secondary" />
                <span className="text-secondary font-bold  tracking-[0.2em] text-xs">{t.faq.label}</span>
              </div>
              <h2 className="text-2xl lg:text-5xl font-black text-dark leading-[0.9] mb-8 tracking-tighter uppercase">
                {t.faq.titleStart}<span className="text-primary italic">{t.faq.titleHighlight}</span><br />
                {t.faq.titleEnd}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10 opacity-80">
                {t.faq.description}
              </p>

              <div className="p-8 bg-white rounded-[2.5rem] border border-blue-50 shadow-2xl shadow-blue-900/5 flex items-start gap-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 text-primary relative z-10">
                  <HelpCircle size={28} />
                </div>
                <div className="relative z-10">
                  <h4 className="font-bold text-dark text-xl mb-2">{t.faq.supportTitle}</h4>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed">{t.faq.supportDesc}</p>
                  <a href="/contact" className="inline-flex items-center gap-3 px-6 py-3 bg-dark text-white rounded-xl font-bold text-sm hover:bg-primary transition-all duration-300">
                    {t.faq.supportBtn}
                    <Plus size={16} className="rotate-45" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="lg:w-2/3">
            <div className="space-y-2">
              {t.faq.items.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`group rounded-[2rem] border transition-all duration-500 overflow-hidden ${activeIndex === index
                    ? "bg-white border-primary/30 shadow-[0_30px_60px_-15px_rgba(10,77,162,0.15)] ring-1 ring-primary/5"
                    : "bg-white border-gray-100 hover:border-primary/20 hover:shadow-xl hover:shadow-gray-200/40"
                    }`}
                >
                  <button
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    className="w-full text-left px-10 py-5 flex items-center justify-between gap-6"
                  >
                    <span className={`text-xl lg:text-2xl font-bold transition-all duration-300 tracking-tight ${activeIndex === index ? "text-primary" : "text-dark group-hover:text-primary"
                      }`}>
                      {faq.question}
                    </span>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-500 ${activeIndex === index
                      ? "bg-primary text-white rotate-180 shadow-lg shadow-primary/30"
                      : "bg-gray-50 text-gray-400 group-hover:bg-primary/5 group-hover:text-primary"
                      }`}>
                      {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-10 pb-10">
                          <div className="h-[2px] w-full bg-gradient-to-r from-primary/10 via-primary/5 to-transparent mb-2" />
                          <p className="text-gray-600 text-lg lg:text-xl leading-relaxed max-w-3xl">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
