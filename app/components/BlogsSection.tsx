"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, User, Newspaper } from "lucide-react";

const blogs = [
  {
    title: "Exporting Excellence: How Egypt Global Silicates Delivers Quality Worldwide",
    date: "August 23, 2025",
    image: "/home15.png",
    category: "EXPORTS",
    author: "Eng. Samy",
    id: "01"
  },
  {
    title: "Eco-Friendly Engineering: The Role of Silicates in Sustainable Manufacturing",
    date: "November 5, 2025",
    image: "/home16.png",
    category: "SUSTAINABILITY",
    author: "Global Team",
    id: "02"
  },
  {
    title: "Sodium Silicate in Action: How One Compound Powers Multiple Industries",
    date: "September 5, 2025",
    image: "/home17.png",
    category: "APPLICATIONS",
    author: "Research Dept",
    id: "03"
  },
];

const BlogsSection = () => {
  return (
    <section className="py-20 bg-[#fafafa] relative overflow-hidden" id="blogs">
      {/* Decorative vertical lines */}
      <div className="absolute inset-0 flex justify-around pointer-events-none opacity-[0.03]">
        <div className="w-[1px] h-full bg-dark"></div>
        <div className="w-[1px] h-full bg-dark"></div>
        <div className="w-[1px] h-full bg-dark"></div>
        <div className="w-[1px] h-full bg-dark"></div>
      </div>

      <div className="max-w-[1700px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-4xl text-center md:text-left mx-auto md:mx-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded bg-dark text-white font-black text-[10px] mb-4 uppercase tracking-[0.4em]"
            >
              <Newspaper size={12} className="text-secondary" />
              <span>Media Center</span>
            </motion.div>
            <h2 className="text-5xl font-bold text-dark tracking-tighter leading-tight">
              Latest Insights & <br className="hidden md:block" /> Industry Innovations
            </h2>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-6 pb-2"
          >
             <div className="flex flex-col items-end">
                <span className="text-[10px] font-black tracking-widest text-primary">KNOWLEDGE HUB</span>
                <span className="text-[9px] font-bold text-gray-400">UPDATED WEEKLY</span>
             </div>
             <button className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all group">
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
             </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogs.map((blog, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group cursor-pointer flex flex-col h-full overflow-hidden"
            >
              <div className="relative h-80 w-full mb-6 overflow-hidden rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] group-hover:shadow-[0_45px_90px_-20px_rgba(10,77,162,0.2)] transition-shadow duration-700">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-8 left-8 bg-white px-4 py-1.5 rounded-lg text-[9px] font-black text-primary uppercase tracking-[0.3em] shadow-lg">
                  {blog.category}
                </div>
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-dark/80 to-transparent">
                    <div className="text-[50px] font-black text-white/10 leading-none select-none">{blog.id}</div>
                </div>
              </div>
              
              <div className="flex-1 flex flex-col px-4">
                <div className="flex items-center gap-6 mb-4">
                    <div className="flex items-center gap-2 text-gray-400 text-[10px] font-black uppercase tracking-widest">
                    <Calendar size={14} className="text-secondary" />
                    {blog.date}
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-[10px] font-black uppercase tracking-widest">
                        <User size={14} className="text-primary" />
                        {blog.author}
                    </div>
                </div>
                <h3 className="text-2xl font-bold text-dark leading-tight group-hover:text-primary transition-all duration-300 tracking-tight mb-6">
                  {blog.title}
                </h3>
                <div className="mt-auto flex items-center gap-3 text-dark font-black text-[10px] uppercase tracking-[0.3em] group-hover:gap-5 transition-all">
                    Read FULL ARTICLE
                    <ArrowRight size={14} className="text-secondary" />
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
