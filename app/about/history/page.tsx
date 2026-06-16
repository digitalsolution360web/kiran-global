"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { History, TrendingUp, Globe, Factory, Award, ShieldCheck, Leaf } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useLanguage } from "../../context/LanguageContext";

const HistoryPage = () => {
    const { t } = useLanguage();
    const h = t.historyPage;

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden pt-20">
                <Image src="/about-us-1.webp" alt="Kiran Global History" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/60" />
                <div className="relative z-10 max-w-[1700px] mx-auto px-6 lg:px-12 text-center lg:text-left w-full">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-xs font-black tracking-[0.3em] mb-6">
                            {h.heroLabel}
                        </span>
                        <h1 className="text-2xl md:text-5xl font-bold text-white mb-6 tracking-tighter">
                            {h.heroTitle.split(" ").slice(0, -1).join(" ")} <span className="text-secondary">{h.heroTitle.split(" ").slice(-1)}</span>
                        </h1>
                        <div className="w-32 h-2 bg-secondary mb-8 hidden lg:block" />
                        <p className="text-xl md:text-2xl text-white/90 max-w-3xl font-medium leading-relaxed italic">
                            &quot;{h.heroQuote}&quot;
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="py-16 bg-white relative overflow-hidden">
                <div className="max-w-[1700px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                        {/* Left Side: Text Content */}
                        <div className="lg:col-span-7 space-y-8">
                            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
                                <div className="inline-flex items-center gap-3 text-primary font-black text-sm tracking-widest ">
                                    <History size={20} className="text-secondary" />
                                    {h.beginningLabel}
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                                    {h.foundingTitle.split(" ").slice(0, 2).join(" ")} <span className="text-primary italic">{h.foundingTitle.split(" ").slice(2).join(" ")}</span>
                                </h2>
                                <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">{h.foundingText}</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                                className="p-10 bg-primary/5 rounded-[3rem] border-2 border-primary/10 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -mr-16 -mt-16 rounded-full" />
                                <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-semibold relative z-10">{h.growthText}</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
                                className="space-y-6"
                            >
                                <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tighter">{h.companyTitle}</h2>
                                <p className="text-lg text-gray-600 leading-relaxed font-medium">{h.companyText1}</p>
                                <p className="text-lg text-gray-600 leading-relaxed font-medium">{h.companyText2}</p>
                            </motion.div>
                        </div>

                        {/* Right Side: Image and Stats */}
                        <div className="lg:col-span-5 space-y-8">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                                className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group"
                            >
                                <Image src="/Founder-Visionary.webp" alt="Founder Mr. MS Jain" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 p-10 text-white">
                                    <h3 className="text-2xl font-bold">Mr. MS Jain</h3>
                                    <p className="text-secondary font-bold tracking-widest text-sm ">Founder &amp; Visionary Leader</p>
                                </div>
                            </motion.div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center">
                                    <p className="text-3xl font-black text-primary mb-1">32</p>
                                    <p className="text-[10px] font-bold text-gray-500  tracking-widest">{h.stat1}</p>
                                </div>
                                <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center">
                                    <p className="text-3xl font-black text-primary mb-1">300K+</p>
                                    <p className="text-[10px] font-bold text-gray-500 tracking-widest">{h.stat2}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Statement Section */}
            <section className="py-16 bg-primary relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[40px] border-white rounded-full" />
                </div>
                <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/10 rounded-full text-secondary font-black text-sm tracking-[0.2em] mb-8">
                            <Leaf size={20} />
                            {h.sustainLabel}
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 leading-tight">{h.sustainTitle}</h2>
                        <div className="w-40 h-1.5 bg-secondary mx-auto" />
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default HistoryPage;
