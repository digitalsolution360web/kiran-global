"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, User, Newspaper } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const BlogsSection = () => {
  const { t } = useLanguage();
  const blogsImages = ["/Exporting-Excellence.webp", "/new32.webp", "/new34.webp"];
  return (
    <section className="py-14 bg-white relative overflow-hidden" id="blogs">
      <div className="max-w-[1700px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-4xl text-center md:text-left mx-auto md:mx-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gray-900 text-white font-bold text-xs mb-6 uppercase tracking-widest"
            >
              <Newspaper size={14} className="text-blue-400" />
              <span>{t.blogs.label}</span>
            </motion.div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight leading-[1.2]">
              {t.blogs.title}
            </h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-6 pb-2"
          >
            <div className="flex flex-col items-end">
              <span className="text-xs font-black tracking-widest text-blue-600 uppercase">{t.blogs.knowledgeHub}</span>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t.blogs.updatedWeekly}</span>
            </div>
            <button className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all group shadow-sm hover:shadow-lg">
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {t.blogs.items.map((blog, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.8, ease: "easeOut" }}
              className="group cursor-pointer flex flex-col h-full bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-64 w-full overflow-hidden p-2">
                <div className="relative h-full w-full rounded-[1.5rem] overflow-hidden">
                  <Image
                    src={blogsImages[idx]}
                    alt="Kiran Global Chems"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-lg text-[10px] font-black text-gray-900 uppercase tracking-widest shadow-lg">
                  {blog.category}
                </div>
              </div>

              <div className="flex-1 flex flex-col p-8 pt-6">
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex items-center gap-2 text-gray-500 text-[10px] font-black uppercase tracking-widest">
                    <Calendar size={14} className="text-blue-500" />
                    {blog.date}
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-[10px] font-black uppercase tracking-widest">
                    <User size={14} className="text-blue-500" />
                    {blog.author}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors duration-300 tracking-tight mb-8">
                  {blog.title}
                </h3>
                <div className="mt-auto flex items-center gap-3 text-gray-900 font-bold text-xs uppercase tracking-widest group-hover:gap-5 transition-all">
                  {t.blogs.readFullArticle}
                  <ArrowRight size={16} className="text-blue-600" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
