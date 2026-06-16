"use client";
import React from "react";
import Image from "next/image";
import LeadershipSection from "../components/LeadershipSection";
import { motion } from "framer-motion";
import {
    ShieldCheck,
    Leaf,
    Users,
    Settings,
    Briefcase,
    Globe,
    Award,
    TrendingUp,
    CheckCircle2,
    Factory,
    Zap,
    FlaskConical,
    HeartHandshake
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";

const AboutPage = () => {
    const { t } = useLanguage();
    const a = t.aboutPage;

    const coreValueIcons = [
        <ShieldCheck className="text-secondary" size={24} />,
        <Leaf className="text-secondary" size={24} />,
        <Settings className="text-secondary" size={24} />,
        <CheckCircle2 className="text-secondary" size={24} />,
        <Award className="text-secondary" size={24} />,
        <TrendingUp className="text-secondary" size={24} />,
        <HeartHandshake className="text-secondary" size={24} />,
        <Users className="text-secondary" size={24} />,
    ];

    const stats = [
        { label: a.stat1Label, value: a.stat1Value, unit: a.stat1Unit },
        { label: a.stat2Label, value: a.stat2Value, unit: a.stat2Unit },
        { label: a.stat3Label, value: a.stat3Value, unit: a.stat3Unit },
        { label: a.stat4Label, value: a.stat4Value, unit: a.stat4Unit },
    ];

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden pt-20">
                <Image
                    src="/about-us-1.webp"
                    alt="Kiran Global Chem Laboratory"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40" />
                <div className="relative z-10 max-w-[1700px] mx-auto px-6 lg:px-12 text-center lg:text-left w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-2xl md:text-4xl font-bold text-white mb-6  tracking-tighter">
                            {a.heroTitle.split(" ").slice(0, -1).join(" ")} <span className="text-secondary">{a.heroTitle.split(" ").slice(-1)}</span>
                        </h1>
                        <div className="w-30 h-1 bg-secondary mb-8 hidden lg:block" />
                        <p className="text-lg md:text-2xl text-white/90 max-w-4xl font-medium leading-relaxed">
                            {a.heroSubtitle}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Our Journey & Founder */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-[1700px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/5 rounded-full text-primary font-bold text-sm  tracking-widest">
                                <TrendingUp size={18} />
                                {a.journeyLabel}
                            </div>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                                {a.journeyTitle.split(" ").slice(0, 2).join(" ")} <span className="text-primary italic">{a.journeyTitle.split(" ").slice(2, 3).join(" ")}</span> {a.journeyTitle.split(" ").slice(3).join(" ")}
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                <span className="font-bold text-gray-900 text-xl block mb-4">{a.journeyText1}</span>
                                {a.journeyText2}
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-primary/10 rounded-[2rem] -rotate-3" />
                            <div className="relative h-[600px] rounded-[2rem] overflow-hidden shadow-2xl border-5 border-white">
                                <Image src="/Founder-Visionary.webp" alt="Mr. MS Jain - Founder" fill className="object-cover" />
                                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-primary p-8 text-white">
                                    <h3 className="text-2xl font-bold">{a.founderName}</h3>
                                    <p className="text-secondary font-bold tracking-widest text-sm">{a.founderRole}</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="py-20 bg-primary">
                <div className="max-w-[1700px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="text-center group"
                            >
                                <h4 className="text-2xl md:text-4xl font-bold text-white mb-2 group-hover:text-secondary transition-colors duration-300">
                                    {stat.value}
                                </h4>
                                <p className="text-white/60 font-bold  tracking-widest text-sm">
                                    {stat.label} <span className="text-secondary italic block text-xs">{stat.unit}</span>
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Capabilities & Infrastructure */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-[1700px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        <div className="lg:col-span-7 space-y-10">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <h2 className="text-4xl font-bold text-gray-900 mb-6  tracking-tight">{a.supplyTitle}</h2>
                                <p className="text-xl text-gray-600 leading-relaxed italic border-l-4 border-secondary pl-6">
                                    &ldquo;{a.supplyQuote}&rdquo;
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="bg-white p-10 rounded-[2rem] shadow-xl border border-gray-100"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                                        <Briefcase size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">{a.productRangeTitle}</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {a.productRangeDesc}
                                </p>
                                <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                                    {a.productCategories.map((item) => (
                                        <div key={item} className="p-3 bg-gray-50 rounded-lg text-center text-xs font-bold text-gray-500  border border-gray-100 tracking-tighter">
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        <div className="lg:col-span-5 relative h-[500px] lg:h-[700px] rounded-[3rem] overflow-hidden group shadow-2xl">
                            <Image src="/Operations-Innovation.webp" alt="Modern Technology" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-12">
                                <h3 className="text-3xl font-black text-white mb-4 ">{a.techTitle}</h3>
                                <p className="text-gray-300 font-medium">{a.techDesc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team & Labs */}
            <section className="py-24 bg-white border-y border-gray-100">
                <div className="max-w-[1700px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-2 lg:order-1"
                        >
                            <div className="relative h-[550px] rounded-[2rem] overflow-hidden shadow-2xl">
                                <Image src="/about-us-1.webp" alt="Laboratory" fill className="object-cover" />
                                <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-lg">
                                    <FlaskConical className="text-primary mb-2" size={32} />
                                    <p className="text-sm font-black text-gray-900 ">{a.rdLabel}</p>
                                    <p className="text-[10px] text-gray-500 font-bold tracking-widest">{a.rdSubLabel}</p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-1 lg:order-2 space-y-8"
                        >
                            <h2 className="text-4xl font-bold text-gray-900 tracking-tight leading-none ">
                                {a.workforceTitle.split("&")[0]}&{" "}
                                <br /> <span className="text-secondary italic">{a.workforceTitle.split("&")[1]}</span>
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {a.workforceDesc}
                            </p>
                            <div className="p-8 bg-primary/5 rounded-[2rem] border-2 border-primary/10">
                                <p className="text-2xl font-bold text-primary italic leading-relaxed">
                                    &ldquo;{a.workforceQuote}&rdquo;
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 bg-gray-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4" />
                <div className="max-w-[1700px] mx-auto px-6 lg:px-12 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 ">
                            {a.coreValuesTitle.split(" ").slice(0, -2).join(" ")} <span className="text-primary italic">{a.coreValuesTitle.split(" ").slice(-2).join(" ")}</span>
                        </h2>
                        <div className="w-20 h-1.5 bg-secondary mx-auto" />
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {a.coreValues.map((value, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.05 }}
                                className="p-8 bg-white rounded-3xl shadow-lg border border-gray-100 hover:border-primary/20 hover:shadow-2xl transition-all duration-300 group text-left"
                            >
                                <div className="mb-6 p-4 bg-primary/5 rounded-2xl w-fit group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    {React.cloneElement(coreValueIcons[idx] as React.ReactElement<any>, {
                                        className: "group-hover:text-white transition-colors"
                                    })}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 leading-tight tracking-tight">
                                    {value}
                                </h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <motion.div>
                <LeadershipSection />
            </motion.div>

            <Footer />
        </main>
    );
};

export default AboutPage;
