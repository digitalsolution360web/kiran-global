"use client";
import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is Kiran Global's primary area of expertise?",
    answer: "Kiran Global specializes in the manufacturing and distribution of high-quality industrial silicates, including Sodium and Potassium Silicates, catering to various industries such as detergents, construction, and water treatment."
  },
  {
    question: "How do I request a custom formulation?",
    answer: "You can request a custom formulation by contacting our technical team through the 'Request a Quote' form on our contact page or by emailing us directly with your specific requirements."
  },
  {
    question: "Are your products eco-friendly and sustainable?",
    answer: "Yes, sustainability is at our core. We implement advanced manufacturing processes that minimize environmental impact and focus on developing eco-friendly silicate solutions."
  },
  {
    question: "What is the typical lead time for large industrial orders?",
    answer: "Lead times vary based on the order volume and customization requirements, but typically range from 2 to 4 weeks. Our logistics team works closely with clients to ensure timely delivery."
  },
  {
    question: "Do you provide technical support for product application?",
    answer: "Absolutely. Our expert technical support team is available to assist you with product selection, application methods, and troubleshooting to ensure optimal results."
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-light relative overflow-hidden" id="faq">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-[1700px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column: Heading & Info */}
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[2px] bg-secondary" />
                <span className="text-secondary font-bold uppercase tracking-[0.2em] text-xs">Knowledge Base</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-black text-dark leading-none mb-8 tracking-tighter uppercase">
                Frequently Asked <span className="text-primary">Questions</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Find answers to common questions about our products, services, and industrial solutions. If you need further assistance, our team is always ready to help.
              </p>
              <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 text-primary">
                  <HelpCircle size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-dark mb-1">Still have questions?</h4>
                  <p className="text-gray-500 text-sm mb-4">Can't find the answer you're looking for?</p>
                  <a href="/contact" className="text-primary font-bold text-sm flex items-center gap-2 group hover:gap-3 transition-all">
                    Contact Our Support
                    <Plus size={16} className="rotate-45" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="lg:w-2/3">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group rounded-3xl border transition-all duration-500 ${
                    activeIndex === index 
                      ? "bg-white border-primary/20 shadow-2xl shadow-primary/5" 
                      : "bg-gray-50 border-transparent hover:border-gray-200 hover:bg-white"
                  }`}
                >
                  <button
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    className="w-full text-left px-8 py-7 flex items-center justify-between gap-6"
                  >
                    <span className={`text-xl font-bold transition-colors duration-300 ${
                      activeIndex === index ? "text-primary" : "text-dark"
                    }`}>
                      {faq.question}
                    </span>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                      activeIndex === index ? "bg-primary text-white rotate-180" : "bg-white text-gray-400 group-hover:bg-gray-100"
                    }`}>
                      {activeIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-7">
                          <div className="h-[1px] w-full bg-gray-100 mb-6" />
                          <p className="text-gray-600 text-lg leading-relaxed">
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
