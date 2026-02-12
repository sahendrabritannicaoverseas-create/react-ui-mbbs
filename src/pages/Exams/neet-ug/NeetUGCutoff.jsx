import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { pageTitleBg, pageTitleShape } from '../../../assets/images';
import { neetUGLinks, cutoffData } from '../../../data/neetUGData';

import { BiChevronRight, BiPlus, BiMinus, BiCalendar, BiListUl, BiRightArrowAlt } from 'react-icons/bi';
import { AnimatePresence } from 'framer-motion';

const NeetUGCutoff = () => {
    const [isTocOpen, setIsTocOpen] = useState(true);
    const sections = cutoffData.tocSections;

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
                        <h1 className="text-2xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight">
                            NEET UG <span className="text-brand-secondary">Cutoff</span>
                        </h1>
                        <ul className="flex items-center justify-center xl:justify-start gap-4 text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                            <li><Link to="/" className="hover:text-brand-primary text-white transition-colors">Home</Link></li>
                            <li className="text-slate-600">/</li>
                            <li><Link to="/exams" className="hover:text-brand-primary text-white transition-colors">Exams</Link></li>
                            <li className="text-slate-600">/</li>
                            <li className="text-brand-secondary">Exam Cutoff</li>
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
                                <div className="p-5 border-b border-slate-50 bg-slate-50/50">
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
                                className="bg-white rounded-[32px] p-10 md:p-12 shadow-premium border border-slate-100"
                                id="cutoff-overview"
                            >
                                <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">{cutoffData.sectionTitle} <span className="text-brand-primary">{cutoffData.sectionHighlight}</span></h2>
                                <p className="text-slate-600 text-lg leading-relaxed mb-10">
                                    {cutoffData.description}
                                </p>

                                {/* Cutoff Year Cards */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {cutoffData.cards.map((card, idx) => (
                                        <div
                                            key={idx}
                                            className="bg-slate-50 p-6 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-md transition-all group cursor-pointer"
                                        >
                                            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-primary/10 transition-colors shadow-sm">
                                                <BiCalendar className="text-xl text-brand-primary" />
                                            </div>
                                            <h4 className="text-[10px] font-black text-slate-500 mb-1 uppercase tracking-widest">{card.title}</h4>
                                            <p className="text-xl font-black text-[#1e3a8a]">{card.year}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-[32px] p-10 md:p-16 shadow-premium border border-slate-100"
                                id="cutoff-table"
                            >
                                <h2 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tight">Qualifying <span className="text-brand-primary">Marks</span></h2>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="border-b-2 border-slate-100">
                                                {cutoffData.tableHeaders.map((header, idx) => (
                                                    <th key={idx} className="py-6 px-4 text-xs font-black text-slate-400 uppercase tracking-widest">{header}</th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cutoffData.tableRows.map((row, idx) => (
                                                <tr key={idx} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                                                    <td className="py-6 px-4 text-sm font-black text-slate-900">{row.category}</td>
                                                    <td className="py-6 px-4 text-sm font-bold text-slate-600">{row.percentile}</td>
                                                    <td className="py-6 px-4 text-sm font-black text-brand-primary">{row.range}</td>
                                                    <td className="py-6 px-4 text-sm font-bold text-slate-600">{row.candidates}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </motion.div>

                            {/* Premium Collapsible Table of Contents */}
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-[40px] p-6 lg:p-10 border border-slate-100 shadow-premium transition-all duration-500 overflow-hidden relative"
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none"></div>

                                <div className="relative z-10">
                                    <div
                                        className="flex items-center justify-between cursor-pointer group"
                                        onClick={() => setIsTocOpen(!isTocOpen)}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary shadow-inner group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
                                                <BiListUl className="text-2xl" />
                                            </div>
                                            <div>
                                                <h2 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight">
                                                    Table of <span className="text-brand-primary uppercase">Contents</span>
                                                </h2>
                                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mt-1">Quick Navigation Guide</p>
                                            </div>
                                        </div>
                                        <div className="w-10 h-10 bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 rounded-xl transition-all group-hover:bg-brand-primary group-hover:text-white group-hover:border-transparent group-hover:shadow-lg">
                                            {isTocOpen ? <BiMinus className="text-xl" /> : <BiPlus className="text-xl" />}
                                        </div>
                                    </div>

                                    <AnimatePresence>
                                        {isTocOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pt-8 mt-8 border-t border-slate-100">
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                                                        {sections.map((section, idx) => (
                                                            <div key={section.id} className="flex items-start gap-4 group">
                                                                <span className="text-brand-primary/40 font-black text-sm mt-1">0{idx + 1}.</span>
                                                                <button
                                                                    onClick={() => scrollToSection(section.id)}
                                                                    className="text-slate-700 hover:text-brand-primary hover:translate-x-1 transition-all text-left text-[15px] font-bold tracking-tight py-1"
                                                                >
                                                                    {section.label.includes('. ') ? section.label.split('. ')[1] : section.label}
                                                                </button>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.section>

                            <div id="factors" className="bg-white rounded-[32px] p-10 md:p-16 shadow-premium border border-slate-100">
                                <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">Factors Affecting Cutoff</h2>
                                <p className="text-slate-600">Several factors influence the  each year, including:</p>
                                <ul className="list-disc ml-6 mt-4 space-y-2 text-slate-600">
                                    <li>Total number of candidates appearing for the exam</li>
                                    <li>The difficulty level of the question paper</li>
                                    <li>Number of seats available in medical and dental colleges</li>
                                    <li>Performance of candidates in the exam</li>
                                </ul>
                            </div>

                            <div id="previous-years" className="bg-white rounded-[32px] p-10 md:p-16 shadow-premium border border-slate-100">
                                <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">Previous Years Comparison</h2>
                                <p className="text-slate-600">Comparing cutoff trends over the last few years helps students estimate the target score needed for admission into their desired colleges.</p>
                            </div>

                            <div id="faq" className="bg-white rounded-[32px] p-10 md:p-16 shadow-premium border border-slate-100">
                                <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">Frequently Asked Questions</h2>
                                <p className="text-slate-600 font-bold mb-4 italic">Q: Is the cutoff same for all states?</p>
                                <p className="text-slate-600">A: No, the cutoff for the 85% State Quota varies from state to state, while the 15% All India Quota cutoff is uniform across the country.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default NeetUGCutoff;
