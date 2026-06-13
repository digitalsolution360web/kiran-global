"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    Award,
    ShieldCheck,
    Trophy,
    Train,
    CheckCircle2,
    Star,
    Zap
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const AwardPage = () => {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden pt-20">
                <Image
                    src="/about-us-1.webp"
                    alt="Kiran Global Awards & Achievements"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/60" />
                <div className="relative z-10 max-w-[1700px] mx-auto px-6 lg:px-12 text-center w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-2xl md:text-5xl font-bold text-white mb-6 tracking-tighter">
                            Awards & <span className="text-secondary">Achievements</span>
                        </h1>
                        <div className="w-24 h-1.5 bg-secondary mx-auto mb-8" />
                        <p className="text-xl text-white/90 max-w-3xl mx-auto font-medium leading-relaxed">
                            Recognizing our milestones in technical excellence and global industrial contributions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Highlighted Achievement: Lucknow Metro */}
            <section className="py-16 bg-white relative overflow-hidden">
                <div className="max-w-[1700px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/5 rounded-full text-primary font-bold text-sm tracking-widest ">
                                <Train size={18} className="text-secondary" />
                                Major Project Milestone
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                                LUCKNOW METRO <span className="text-primary italic">RAIL PROJECT</span>
                            </h2>
                            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-bold border-l-4 border-secondary pl-6 ">
                                KIRAN GLOBAL CHEM LIMITED HAS COMMENCED SUPPLIES OF KIRANSIL-SODIUM SILICATE BASED GROUTING SOLUTIONS TO LUCKNOW METRO RAIL PROJECT
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed font-medium">
                                Providing specialized chemical solutions for India's infrastructure development. Our technical expertise in silicate-based grouting solutions ensures structural integrity and safety for high-stakes urban transportation projects.
                            </p>
                            <div className="flex items-center gap-4 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                                <Award className="text-secondary" size={32} />
                                <div>
                                    <h4 className="font-bold text-gray-900">Technical Excellence</h4>
                                    <p className="text-sm text-gray-500 font-medium">Supplying advanced KIRANSIL-SODIUM SILICATE solutions.</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative group lg:h-[600px] h-[400px] flex items-center justify-center"
                        >
                            <div className="absolute -inset-4 bg-primary/10 rounded-[4rem] -rotate-3 group-hover:rotate-0 transition-transform duration-700" />
                            <div className="relative w-full h-full rounded-[4rem] overflow-hidden shadow-2xl border-4 border-white bg-white flex items-center justify-center p-8">
                                <Image
                                    src="/IMRCL-300x300.webp"
                                    alt="Lucknow Metro Project Logo"
                                    width={500}
                                    height={500}
                                    className="object-contain transform group-hover:scale-105 transition-transform duration-1000"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-secondary text-primary p-8 rounded-3xl shadow-xl border-4 border-white hidden md:block">
                                <p className="text-2xl font-black italic">IMRCL</p>
                                <p className="text-[10px] font-bold  tracking-widest">Project Partner</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Other Achievements & Certifications */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-[1700px] mx-auto px-6 lg:px-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Our Standards of <span className="text-primary">Recognition</span></h2>
                        <div className="w-20 h-1 bg-secondary mx-auto" />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: <ShieldCheck className="text-secondary" size={32} />, title: "ISO 9001:2015", desc: "For excellence in quality management systems." },
                            { icon: <Trophy className="text-secondary" size={32} />, title: "Sigma 4 Rating", desc: "High honor for operational efficiency & service quality." },
                            { icon: <Star className="text-secondary" size={32} />, title: "Industry Leader", desc: "India's largest manufacturer of Sodium & Potassium Silicate." },
                            { icon: <Zap className="text-secondary" size={32} />, title: "Eco Innovator", desc: "Recognition for environment-friendly chemical production." }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-8 bg-white rounded-3xl shadow-lg border border-gray-100 hover:border-primary/20 hover:shadow-2xl transition-all group"
                            >
                                <div className="mb-6 p-4 bg-primary/5 rounded-2xl w-fit mx-auto group-hover:bg-primary group-hover:text-white transition-all">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quality Commitment Section */}
            <section className="py-16 bg-white">
                <div className="max-w-[1700px] mx-auto px-6 lg:px-12">
                    <div className="p-12 md:p-20 bg-primary rounded-[4rem] text-white relative overflow-hidden shadow-[0_30px_60px_rgba(10,77,162,0.3)]">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 -mr-48 -mt-48 rounded-full" />
                        <div className="relative z-10 text-center space-y-8">
                            <h2 className="text-2xl md:text-4xl font-bold leading-tight">
                                Delivering market-driven products with <span className="text-secondary">certified quality standards</span> to our global partners.
                            </h2>
                            <div className="flex justify-center gap-4">
                                <CheckCircle2 className="text-secondary" size={40} />
                                <div className="text-left">
                                    <p className="text-2xl font-black">100% Quality Guaranteed</p>
                                    <p className="text-white/60 font-medium tracking-widest  text-xs">Inspected & Verified Batches</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default AwardPage;
