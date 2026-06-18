"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Award, Target, Rocket, Users } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const valueIcons = [
    <Target size={32} />,
    <Rocket size={32} />,
    <Users size={32} />,
];

const ChairmanMessagePage = () => {
    const { t } = useLanguage();
    const c = t.chairmansMessage;
    const cp = t.chairmanPage;

    const values = [
        { title: cp.value1Title, desc: cp.value1Desc },
        { title: cp.value2Title, desc: cp.value2Desc },
        { title: cp.value3Title, desc: cp.value3Desc },
    ];

    return (
        <main className="min-h-screen bg-white">

            {/* Hero Header */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0 bg-[#06101f]" />
                {/* Abstract Pattern */}
                <div className="absolute inset-0 opacity-20">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="dotGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                <circle cx="2" cy="2" r="1.5" fill="#1e3a8a" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#dotGrid)" />
                    </svg>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#06101f]/50 to-[#06101f]" />

                <div className="relative z-10 text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <span className="inline-block px-5 py-2 bg-secondary/10 border border-secondary/20 text-secondary rounded-full text-xs font-black tracking-[0.4em] uppercase">
                            {c.label}
                        </span>
                        <h1 className="text-2xl md:text-5xl font-bold text-white tracking-tighter leading-tight">
                            {cp.heroSubtitle.split(" ").slice(0, -1).join(" ")} <span className="text-secondary italic">{cp.heroSubtitle.split(" ").slice(-1)}</span>
                        </h1>
                        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto" />
                    </motion.div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="py-24 bg-white relative">
                <div className="max-w-[1700px] mx-auto px-6 lg:px-12">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

                        {/* Chairman's Image Sidebar */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-2/5 sticky top-32"
                        >
                            <div className="relative group">
                                {/* Decorative Background Frame */}
                                <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-secondary rounded-[3rem] opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />

                                <div className="relative aspect-[4/5] rounded-[1rem] overflow-hidden border-2 border-white shadow-2xl z-10">
                                    <Image
                                        src="/chair.webp"
                                        alt="M S Jain - Chairman"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                                    <div className="absolute bottom-8 left-8 right-8 text-white">
                                        <p className="text-3xl font-black tracking-tighter mb-1">{c.name}</p>
                                        <p className="text-secondary font-bold tracking-[0.2em] text-xs uppercase">{c.role}</p>
                                    </div>
                                </div>

                                {/* Floating Stats/Badges */}
                                <div className="absolute -bottom-6 -right-6 z-20 bg-white p-6 rounded-[2rem] shadow-xl border border-gray-100 hidden md:block">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                            <Award size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-black text-gray-900 leading-none">{cp.marketLeaderBadge}</p>
                                            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">{cp.marketLeaderSub}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Message Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-3/5 space-y-12"
                        >
                            <div className="relative">
                                <Quote className="absolute -top-10 -left-10 text-primary/5" size={120} />
                                <div className="relative z-10 space-y-8">
                                    <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-semibold italic border-l-4 border-secondary pl-8 py-2">
                                        &quot;{c.quote1}&quot;
                                    </p>

                                    <p className="text-base md:text-lg text-gray-600 leading-relaxed font-medium">
                                        {c.text1}
                                    </p>
                                </div>
                            </div>

                            {/* Religious Quote Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="p-10 md:p-14 bg-primary/5 rounded-[1rem] border border-primary/10 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl" />
                                <div className="relative z-10 text-center space-y-8">
                                    <p className="text-lg md:text-xl font-bold text-primary leading-relaxed italic tracking-tight">
                                        &quot;{c.gitaQuote}&quot;
                                    </p>
                                    <div className="flex flex-col items-center gap-3">
                                        <div className="h-px w-20 bg-primary/20" />
                                        <p className="text-sm font-black text-secondary tracking-[0.4em] uppercase">
                                            {c.gitaVerse}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Signature Footer */}
                            <div className="pt-8 border-t border-gray-100 flex justify-between items-end">
                                <div className="space-y-1">
                                    <div className="relative inline-block">
                                        <p className="text-2xl font-black text-gray-900 tracking-tighter">{c.name}</p>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "100%" }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.5, duration: 1 }}
                                            className="absolute -bottom-1 left-0 h-0.5 bg-secondary"
                                        />
                                    </div>
                                    <p className="text-sm font-bold text-primary uppercase tracking-[0.2em]">{c.role}</p>
                                </div>
                                <div className="hidden sm:block">
                                    <Image src="/logo.webp" alt="Kiran Italia Chemicals" width={80} height={80} className="opacity-40 grayscale hover:grayscale-0 transition-all cursor-crosshair" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Banner */}
            <section className="py-20 bg-[#0a1628] relative overflow-hidden">
                <div className="max-w-[1700px] mx-auto px-6 lg:px-12 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        {values.map((val, i) => (
                            <div key={i} className="space-y-4">
                                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto text-secondary">
                                    {valueIcons[i]}
                                </div>
                                <h4 className="text-white text-xl font-bold">{val.title}</h4>
                                <p className="text-white/50">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </main>
    );
};

export default ChairmanMessagePage;
