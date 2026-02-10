import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { pageTitleBg, pageTitleShape } from '../../../assets/images';
import { BiChevronRight, BiPlus, BiMinus } from 'react-icons/bi';
import { neetUGLinks, overviewData } from '../../../data/neetUGData';

const NeetUG = () => {
    const [isTocOpen, setIsTocOpen] = useState(true);
    const sections = [
        { id: 'introduction', label: '1. Introduction' },
        { id: 'highlights', label: '2. Exam Highlights' },
        { id: 'navigation', label: '3. Quick Navigation' },
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 120,
                behavior: 'smooth'
            });
        }
    };

    return (
        <main className="overflow-hidden bg-slate-50 min-h-screen">
            {/* Page Title Area */}
            <section className="relative pt-[160px] pb-[120px] bg-slate-900 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40 scale-105"
                    style={{ backgroundImage: `url(${pageTitleBg})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/80 to-slate-900"></div>

                <motion.img
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 0.2, x: 0 }}
                    transition={{ duration: 1.2 }}
                    src={pageTitleShape}
                    alt="shape"
                    className="absolute right-0 bottom-0 pointer-events-none w-1/3"
                />

                <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10 text-center xl:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
                            NEET UG <span className="text-brand-secondary">Overview</span>
                        </h1>
                        <ul className="flex items-center justify-center xl:justify-start gap-4 text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                            <li><Link to="/" className="hover:text-brand-primary text-white transition-colors">Home</Link></li>
                            <li className="text-slate-600">/</li>
                            <li><Link to="/exams" className="hover:text-brand-primary text-white transition-colors">Exams</Link></li>
                            <li className="text-slate-600">/</li>
                            <li className="text-brand-secondary">NEET UG</li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            <section className="py-12 relative -mt-10 z-20">
                <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Left Sidebar - Navigation */}
                        <aside className="lg:col-span-3 space-y-6">
                            <div className="bg-white rounded-2xl shadow-premium border border-slate-100 overflow-hidden">
                                <div className="p-5 border-b border-slate-50 bg-slate-50/50" id="navigation">
                                    <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider">
                                        Exam Navigation
                                    </h4>
                                </div>
                                <div className="p-4">
                                    <div className="flex flex-col gap-1">
                                        {neetUGLinks.map((link) => (
                                            <Link
                                                key={link.path}
                                                to={link.path}
                                                className={`px-4 py-3 rounded-xl text-[13px] font-bold transition-all flex items-center justify-between group ${window.location.pathname === link.path
                                                    ? 'bg-brand-primary text-white shadow-md'
                                                    : 'text-slate-600 hover:bg-slate-50 hover:text-brand-primary'
                                                    }`}
                                            >
                                                {link.label}
                                                <BiChevronRight className={`text-lg transition-transform ${window.location.pathname === link.path ? 'translate-x-1' : 'group-hover:translate-x-1'}`} />
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* Right Content */}
                        <div className="lg:col-span-9 space-y-10">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-white rounded-[32px] p-10 md:p-16 shadow-premium border border-slate-100"
                                id="introduction"
                            >
                                <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">{overviewData.sectionTitle} <span className="text-brand-primary">{overviewData.sectionHighlight}</span></h2>
                                {overviewData.description.map((para, idx) => (
                                    <p key={idx} className="text-slate-600 text-lg leading-relaxed mb-8">
                                        {para}
                                    </p>
                                ))}
                                <div id="highlights" className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                                    {overviewData.highlights.map((item, idx) => (
                                        <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                            <h4 className="text-brand-primary font-black uppercase tracking-tight mb-4">{item.title}</h4>
                                            <p className="text-slate-700 font-bold">{item.value}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Table of Contents */}
                            <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200 shadow-premium transition-all duration-300">
                                <div
                                    className="flex items-center justify-between cursor-pointer group"
                                    onClick={() => setIsTocOpen(!isTocOpen)}
                                >
                                    <h2 className="text-1xl font-black text-slate-800 flex items-center gap-3 lowercase tracking-tight">
                                        Table of Contents
                                    </h2>
                                    <div className="w-10 h-10 bg-brand-primary flex items-center justify-center text-white rounded-lg transition-colors hover:bg-brand-primary/90 shadow-lg">
                                        {isTocOpen ? <BiMinus className="text-1xl" /> : <BiPlus className="text-1xl" />}
                                    </div>
                                </div>
                                {isTocOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        className="overflow-hidden"
                                    >
                                        <ul className="flex flex-col gap-y-4 pt-8 mt-8 border-t border-slate-100">
                                            {sections.map((section, idx) => (
                                                <li key={idx} className="flex items-start gap-4 group">
                                                    <span className="text-brand-primary/40 font-bold text-sm mt-0.5">{idx + 1}.</span>
                                                    <button
                                                        onClick={() => scrollToSection(section.id)}
                                                        className="text-[#1e3a8a] hover:text-brand-primary hover:translate-x-2 transition-all text-left text-sm font-bold tracking-tight"
                                                    >
                                                        {section.label.includes('. ') ? section.label.split('. ')[1] : section.label}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default NeetUG;
