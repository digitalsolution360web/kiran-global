"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    Target,
    Rocket,
    Zap,
    ShieldCheck,
    Users,
    Truck,
    TrendingUp,
    Handshake,
    CheckCircle2,
    Award
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useLanguage } from "../../context/LanguageContext";

const VisionMissionPage = () => {
    const { t } = useLanguage();
    const v = t.visionMission;

    const missionIcons = [
        <ShieldCheck key="0" className="text-secondary" size={24} />,
        <Award key="1" className="text-secondary" size={24} />,
        <Users key="2" className="text-secondary" size={24} />,
        <Truck key="3" className="text-secondary" size={24} />,
        <TrendingUp key="4" className="text-secondary" size={24} />,
        <Handshake key="5" className="text-secondary" size={24} />,
    ];

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[65vh] flex items-center justify-center overflow-hidden pt-20">
                <Image
                    src="/about-us-1.webp"
                    alt="Vision & Mission"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
                <div className="relative z-10 max-w-[1700px] mx-auto px-6 lg:px-12 w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-xs font-black tracking-[0.3em] uppercase mb-6">
                            {v.label}
                        </span>
                        <h1 className="text-2xl md:text-5xl font-bold text-white mb-6 tracking-tighter leading-none">
                            Our <span className="text-secondary">Vision</span> &  Values
                        </h1>
                        <div className="w-32 h-2 bg-secondary mb-8" />
                        <p className="text-xl md:text-2xl text-white/80 font-medium leading-relaxed max-w-2xl">
                            Driving global industrial excellence through innovation, quality, and unwavering commitment.
                        </p>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block"
                >
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    </div>
                </motion.div>
            </section>

            {/* Vision Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-[1700px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="relative h-[500px] w-full rounded-[4rem] overflow-hidden shadow-2xl z-10 border-4 border-white">
                                <Image
                                    src="/home-ab2.webp"
                                    alt="Vision"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
                            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-primary/5 rounded-full blur-3xl" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div className="inline-flex items-center gap-3 text-secondary font-black text-sm tracking-[0.2em] uppercase">
                                <Target size={24} />
                                {v.visionTitle}
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
                                To become a <span className="text-primary italic">Globally-Renowned</span> Organisation
                            </h2>
                            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium italic border-l-4 border-secondary pl-8 py-4 bg-gray-50 rounded-r-3xl">
                                "{v.visionText}"
                            </p>
                            <div className="grid grid-cols-2 gap-8 pt-6">
                                <div className="space-y-2">
                                    <h4 className="text-primary font-bold text-lg">Skilfully Crafted</h4>
                                    <p className="text-gray-500 text-sm">Products and services designed for excellence.</p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-primary font-bold text-lg">Stakeholder Value</h4>
                                    <p className="text-gray-500 text-sm">Earning highest returns for our partners.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-24 bg-primary relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                    <svg width="100%" height="100%">
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                <div className="max-w-[1700px] mx-auto px-6 lg:px-12 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block px-4 py-2 bg-white/10 text-secondary rounded-full text-xs font-black tracking-[0.3em] uppercase mb-6">
                                OUR PATHWAY
                            </span>
                            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">
                                {v.missionTitle}
                            </h2>
                            <p className="text-white/60 text-lg font-medium">
                                How we execute our vision through daily excellence and strategic focus.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {v.missions.map((mission, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group p-10 bg-white/5 hover:bg-white/[0.08] border border-white/10 rounded-[2.5rem] transition-all duration-500 hover:-translate-y-2"
                            >
                                <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                                    {missionIcons[index]}
                                </div>
                                <p className="text-xl font-bold text-white leading-snug group-hover:text-secondary transition-colors duration-300">
                                    {mission}
                                </p>
                                <div className="mt-6 w-12 h-1 bg-white/20 group-hover:w-20 group-hover:bg-secondary transition-all duration-500" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strength Section */}
            <section className="py-24 bg-gray-50 relative overflow-hidden">
                <div className="max-w-[1700px] mx-auto px-6 lg:px-12">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2 space-y-10"
                        >
                            <div className="space-y-4">
                                <div className="inline-flex items-center gap-3 text-secondary font-black text-sm tracking-[0.2em] uppercase">
                                    <Rocket size={24} />
                                    {v.strengthTitle}
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tighter">
                                    Built on <span className="text-primary italic">Enduring Quality</span>
                                </h2>
                            </div>

                            <div className="space-y-6">
                                <div className="flex gap-6 p-8 bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 hover:border-primary/20 transition-colors">
                                    <div className="flex-shrink-0 w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center">
                                        <CheckCircle2 className="text-primary" size={24} />
                                    </div>
                                    <p className="text-lg text-gray-600 leading-relaxed font-medium">
                                        {v.strengthText1}
                                    </p>
                                </div>

                                <div className="flex gap-6 p-8 bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 hover:border-primary/20 transition-colors">
                                    <div className="flex-shrink-0 w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center">
                                        <CheckCircle2 className="text-primary" size={24} />
                                    </div>
                                    <p className="text-lg text-gray-600 leading-relaxed font-medium">
                                        {v.strengthText2}
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2 relative h-[600px] w-full"
                        >
                            <div className="absolute inset-x-0 bottom-0 h-4/5 bg-primary rounded-[4rem] -rotate-3" />
                            <div className="absolute inset-0 rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white transform rotate-3 hover:rotate-0 transition-transform duration-700">
                                <Image
                                    src="/Why-Choose-Us.webp"
                                    alt="Strengths"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-12 left-12 right-12">
                                    <div className="flex items-center gap-4 text-white">
                                        <div className="w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center shadow-lg">
                                            <TrendingUp size={40} className="text-white" />
                                        </div>
                                        <div>
                                            <p className="text-4xl font-black">Global</p>
                                            <p className="text-secondary font-bold tracking-[.3em] uppercase text-sm">Growth & Innovation</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default VisionMissionPage;
