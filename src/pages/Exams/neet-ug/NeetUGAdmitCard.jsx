import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { pageTitleBg, pageTitleShape } from '../../../assets/images';
import { neetUGLinks, admitCardData } from '../../../data/neetUGData';

import { BiChevronRight, BiCalendarCheck, BiDownload, BiUser, BiTime, BiMap, BiCheckCircle, BiListCheck, BiBookContent, BiPlus, BiMinus, BiListUl, BiRightArrowAlt } from 'react-icons/bi';
import { AnimatePresence } from 'framer-motion';

const NeetUGAdmitCard = () => {
    const [isTocOpen, setIsTocOpen] = useState(true);

    const sections = admitCardData.tocSections;

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
                            NEET UG <span className="text-brand-secondary">Admit Card</span>
                        </h1>
                        <ul className="flex items-center justify-center xl:justify-start gap-4 text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                            <li><Link to="/" className="hover:text-brand-primary text-white transition-colors">Home</Link></li>
                            <li className="text-slate-600">/</li>
                            <li><span className="text-brand-secondary">Exam Preparation</span></li>
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

                            {/* Admit Card Preview CTA */}
                            <motion.div
                                id="admit-card-preview"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="relative overflow-hidden rounded-[24px] bg-brand-primary p-5 md:p-6 shadow-premium border border-blue-700/30"
                            >
                                {/* Background decorations */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                                <div className="relative z-10">
                                    {/* Badge */}
                                    <div className="inline-flex items-center gap-1 bg-white/10 backdrop-blur-sm px-2 py-0.5 rounded-full mb-3 border border-white/10">
                                        <BiCalendarCheck className="text-brand-secondary text-[10px]" />
                                        <span className="text-white/90 font-black text-[7px] uppercase tracking-[0.2em]">{admitCardData.badgeText}</span>
                                    </div>

                                    {/* Mock Admit Card */}
                                    <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/15 p-3 md:p-4 mb-4">
                                        {/* Card Header */}
                                        <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10">
                                            <div>
                                                <h3 className="text-xs md:text-sm font-black text-white tracking-tight">{admitCardData.examName}</h3>
                                                <p className="text-blue-200/60 text-[7px] font-black uppercase tracking-[0.2em]">{admitCardData.agencyName}</p>
                                            </div>
                                            <div className="w-7 h-7 bg-white/10 rounded-md flex items-center justify-center border border-white/10">
                                                <BiUser className="text-sm text-white/60" />
                                            </div>
                                        </div>

                                        {/* Card Details */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                            <div className="space-y-2">
                                                <div>
                                                    <p className="text-blue-200/50 text-[7px] font-black uppercase tracking-[0.15em] mb-0.5">Registration ID</p>
                                                    <p className="text-white font-black text-[11px]">{admitCardData.candidate.registrationId}</p>
                                                </div>
                                                <div>
                                                    <p className="text-blue-200/50 text-[7px] font-black uppercase tracking-[0.15em] mb-0.5">Candidate Name</p>
                                                    <p className="text-white font-black text-[11px]">{admitCardData.candidate.name}</p>
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-1.5">
                                                    <BiCalendarCheck className="text-brand-secondary text-xs" />
                                                    <div>
                                                        <p className="text-blue-200/50 text-[7px] font-black uppercase tracking-[0.15em] mb-0.5">Exam Date</p>
                                                        <p className="text-white font-black text-[11px]">{admitCardData.candidate.examDate}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <BiTime className="text-brand-secondary text-xs" />
                                                    <div>
                                                        <p className="text-blue-200/50 text-[7px] font-black uppercase tracking-[0.15em] mb-0.5">Time</p>
                                                        <p className="text-white font-black text-[11px]">{admitCardData.candidate.time}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Venue */}
                                        <div className="flex items-center gap-1.5 mt-2.5 pt-2.5 border-t border-white/10">
                                            <BiMap className="text-brand-secondary text-xs flex-shrink-0" />
                                            <div>
                                                <p className="text-blue-200/50 text-[7px] font-black uppercase tracking-[0.15em] mb-0.5">Venue</p>
                                                <p className="text-white/80 font-bold text-[10px]">{admitCardData.candidate.venue}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* CTA Button */}
                                    <button className="inline-flex items-center gap-1.5 bg-brand-secondary hover:bg-brand-secondary/90 text-slate-900 px-4 py-2 rounded-md font-black text-[8px] uppercase tracking-widest transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full md:w-auto justify-center">
                                        <BiDownload className="text-xs" />
                                        Download Admit Card
                                    </button>

                                    {/* Quick Action Cards */}
                                    <div className="grid grid-cols-3 gap-1.5 mt-4">
                                        {[
                                            { icon: BiCheckCircle, label: 'Check Eligibility' },
                                            { icon: BiListCheck, label: 'Verify Details' },
                                            { icon: BiBookContent, label: 'Follow Instructions' }
                                        ].map((action, idx) => (
                                            <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-md px-2 py-1.5 flex items-center gap-1 border border-white/10 hover:bg-white/15 transition-all cursor-pointer group">
                                                <action.icon className="text-brand-secondary text-xs flex-shrink-0" />
                                                <span className="text-white/90 font-bold text-[8px] tracking-tight group-hover:text-white transition-colors">{action.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* How to Download Section */}
                            <motion.div
                                id="how-to-download"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-[28px] p-8 md:p-10 shadow-premium border border-slate-100"
                            >
                                <h2 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tight">{admitCardData.downloadSectionTitle} <span className="text-brand-primary">{admitCardData.downloadSectionHighlight}</span></h2>
                                <p className="text-slate-600 text-xs font-bold leading-relaxed mb-8">
                                    {admitCardData.downloadSectionDescription}
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-5">
                                        {admitCardData.downloadSteps.map((item, idx) => (
                                            <div key={idx} className="flex gap-4">
                                                <div className="text-2xl font-black text-brand-primary/20">{item.step}</div>
                                                <div>
                                                    <h4 className="text-xs font-black text-slate-900 uppercase tracking-tight mb-1">{item.title}</h4>
                                                    <p className="text-slate-500 text-[11px] font-medium leading-relaxed">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
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

                            <div id="eligibility" className="bg-white rounded-[28px] p-8 md:p-10 shadow-premium border border-slate-100">
                                <h2 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tight">Eligibility Criteria</h2>
                                <p className="text-slate-600 text-[11px] font-medium leading-relaxed">Only candidates who have successfully registered and paid the application fee are eligible to download the admit card.</p>
                            </div>

                            <div id="instructions" className="bg-white rounded-[28px] p-8 md:p-10 shadow-premium border border-slate-100">
                                <h2 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tight">Instructions for Exam Day</h2>
                                <p className="text-slate-600 text-[11px] font-medium leading-relaxed">Candidates must carry a printed copy of their admit card, a valid photo ID, and a recent passport-size photograph to the exam center.</p>
                            </div>

                            <div id="admit-info" className="bg-white rounded-[28px] p-8 md:p-10 shadow-premium border border-slate-100">
                                <h2 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tight">Information Stated</h2>
                                <p className="text-slate-600 text-[11px] font-medium leading-relaxed">The admit card contains important details like candidate name, roll number, exam center address, and reporting time.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default NeetUGAdmitCard;
