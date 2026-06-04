"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Globe2, Layers } from "lucide-react";

const industries = [
  { name: "Detergents & Cleaning", image: "/home5.png", count: "01" },
  { name: "Construction & Cement", image: "/home6.png", count: "02" },
  { name: "Textiles & Paper", image: "/home7.png", count: "03" },
  { name: "Water Treatment", image: "/home8.png", count: "04" },
  { name: "Steel and Foundry", image: "/home9.png", count: "05" },
  { name: "Agriculture & Fertilizers", image: "/home10.png", count: "06" },
  { name: "Speciality Silicate", image: "/home11.png", count: "07" },
  { name: "Petroleum and Oil Drilling", image: "/home12.png", count: "08" },
  { name: "Ceramics and Refractory", image: "/home13.png", count: "09" },
  { name: "Catalyst Industries", image: "/home14.png", count: "10" },
  { name: "Molecular Sieves", image: "/home.png", count: "11" },
];

const IndustriesSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden" id="industries">
       <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50/30 -z-10 skew-x-12 translate-x-20" />
      
      <div className="max-w-[1700px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-16 gap-12 text-center lg:text-left">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/5 text-secondary font-black text-[10px] mb-4 uppercase tracking-[0.3em] border border-secondary/10"
            >
              <Globe2 size={12} />
              <span>Global Reach</span>
            </motion.div>
            <h2 className="text-5xl font-bold text-dark tracking-tighter leading-tight">
              Sectors Empowered by <br/>Our Silicate Compounds
            </h2>
          </div>
          <div className="bg-dark p-6 rounded-3xl shadow-2xl flex items-center gap-6 group cursor-default min-w-[300px]">
             <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <Layers size={24} />
             </div>
             <div>
                <span className="block text-white font-bold text-lg leading-none">11+ Industries</span>
                <span className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mt-1 block">Primary Applications</span>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-8">
          {industries.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.6 }}
              className="group relative h-80 rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-2xl"
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="absolute top-6 left-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white text-[10px] font-black border border-white/20 group-hover:bg-secondary group-hover:border-secondary transition-all">
                 {item.count}
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 text-center sm:text-left">
                <span className="block text-white font-black text-[11px] leading-tight uppercase tracking-[0.2em] group-hover:text-secondary group-hover:translate-x-2 transition-all duration-500">
                  {item.name}
                </span>
                <div className="mt-4 w-6 h-[2px] bg-secondary sm:ml-0 mx-auto transform translate-x-[-100%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
