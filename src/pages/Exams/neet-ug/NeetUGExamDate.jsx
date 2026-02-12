import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { pageTitleBg, pageTitleShape } from '../../../assets/images';
import { neetUGLinks, examDateData } from '../../../data/neetUGData';

import { BiChevronRight, BiCalendar, BiDownload, BiPlus, BiMinus, BiListUl, BiRightArrowAlt } from 'react-icons/bi';
import { AnimatePresence } from 'framer-motion';

const NeetUGExamDate = () => {
    const [isTocOpen, setIsTocOpen] = useState(true);
    const examDate = new Date(examDateData.examDateISO);
    const sections = examDateData.tocSections;

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 120,
                behavior: 'smooth'
            });
        }
    };

    const getTimeLeft = () => {
        const now = new Date();
        const diff = examDate - now;
        if (diff <= 0) return { months: 0, days: 0, hours: 0, mins: 0 };
        const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
        const months = Math.floor(totalDays / 30);
        const days = totalDays % 30;
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        return { months, days, hours, mins };
    };

    const [timeLeft, setTimeLeft] = useState(getTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => setTimeLeft(getTimeLeft()), 60000);
        return () => clearInterval(timer);
    }, []);

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
                        <h1 className="text-2xl md:text-3xl font-black text-white mb-5 uppercase tracking-tight">
                            NEET UG <span className="text-brand-secondary">Exam Dates</span>
                        </h1>
                        <ul className="flex items-center justify-center xl:justify-start gap-4 text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                            <li><Link to="/" className="hover:text-brand-primary text-white transition-colors">Home</Link></li>
                            <li className="text-slate-600">/</li>
                            <li><Link to="/exams" className="hover:text-brand-primary text-white transition-colors">Exams</Link></li>
                            <li className="text-slate-600">/</li>
                            <li className="text-brand-secondary">Important Dates</li>
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

                            {/* Exam Date CTA Card */}
                            <motion.div
                                id="exam-cta"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#1e3a8a] via-[#2550b0] to-[#1e3a8a] p-5 md:p-6 shadow-premium border border-blue-700/30"
                            >
                                {/* Background decorations */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                                <div className="absolute top-2 right-4 w-8 h-8 bg-brand-secondary/10 rounded-lg rotate-12"></div>

                                <div className="relative z-10">
                                    {/* Badge */}
                                    <div className="inline-flex items-center gap-1 bg-white/10 backdrop-blur-sm px-2 py-0.5 rounded-full mb-2.5 border border-white/10">
                                        <BiCalendar className="text-brand-secondary text-[10px]" />
                                        <span className="text-white/90 font-black text-[7px] uppercase tracking-[0.2em]">{examDateData.badgeText}</span>
                                    </div>

                                    {/* Main Date Display */}
                                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                                        <div>
                                            <p className="text-blue-200/70 font-bold text-[9px] mb-0.5 uppercase tracking-wider">{examDateData.examName}</p>
                                            <h2 className="text-lg md:text-xl font-black text-white tracking-tight leading-none mb-0.5">
                                                {examDateData.examDay}
                                            </h2>
                                            <h3 className="text-xl md:text-2xl font-black text-brand-secondary tracking-tight leading-none">
                                                {examDateData.examDate}
                                            </h3>
                                        </div>

                                        {/* Countdown */}
                                        <div className="flex gap-1">
                                            {[
                                                { val: timeLeft.months, label: 'Months' },
                                                { val: timeLeft.days, label: 'Days' },
                                                { val: timeLeft.hours, label: 'Hours' },
                                                { val: timeLeft.mins, label: 'Mins' }
                                            ].map((unit, i) => (
                                                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-md px-2 py-1 text-center border border-white/10 min-w-[42px]">
                                                    <span className="block text-sm md:text-base font-black text-white leading-none">{String(unit.val).padStart(2, '0')}</span>
                                                    <span className="block text-[6px] font-black text-blue-200/60 uppercase tracking-[0.1em] mt-0.5">{unit.label}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* CTA Buttons */}
                                    <div className="flex flex-wrap gap-1.5 mt-5">
                                        <button className="inline-flex items-center gap-1 bg-brand-secondary hover:bg-brand-secondary/90 text-slate-900 px-4 py-2 rounded-md font-black text-[8px] uppercase tracking-widest transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                                            <BiDownload className="text-xs" />
                                            Download Schedule
                                        </button>
                                        <button className="inline-flex items-center gap-1 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-md font-black text-[8px] uppercase tracking-widest transition-all border border-white/20 hover:-translate-y-0.5">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Schedule Table */}
                            <motion.div
                                id="schedule"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-[24px] p-6 md:p-8 shadow-premium border border-slate-100"
                            >
                                <h2 className="text-lg font-black text-slate-900 mb-2 uppercase tracking-tight">{examDateData.scheduleTitle} <span className="text-brand-primary">{examDateData.scheduleHighlight}</span></h2>
                                <p className="text-slate-600 text-[11px] font-bold leading-relaxed mb-6">
                                    {examDateData.scheduleDescription}
                                </p>

                                <div className="space-y-2">
                                    {examDateData.schedule.map((item, idx) => (
                                        <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-100 hover:border-brand-primary/30 transition-all group">
                                            <div className="flex items-center gap-2.5 mb-1.5 md:mb-0">
                                                <div className="w-7 h-7 rounded-md bg-white flex items-center justify-center text-brand-primary shadow-sm group-hover:bg-brand-secondary group-hover:text-white transition-all">
                                                    <span className="font-black text-[10px]">{idx + 1}</span>
                                                </div>
                                                <div>
                                                    <h4 className="text-[11px] font-black text-slate-500 capitalize-first-letter tracking-tight">{item.event}</h4>
                                                    <p className="text-[9px] font-black text-slate-700 capitalize-first-letter tracking-[0.2em]">{item.status}</p>
                                                </div>
                                            </div>
                                            <div className="text-brand-primary font-black text-[11px] capitalize-first-letter tracking-tighter">
                                                {item.date}
                                            </div>
                                        </div>
                                    ))}
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

                            <div id="exam-pattern" className="bg-white rounded-[24px] p-6 md:p-8 shadow-premium border border-slate-100">
                                <h2 className="text-lg font-black text-slate-900 mb-2 uppercase tracking-tight">Exam Pattern</h2>
                                <p className="text-slate-600 text-[11px] font-bold leading-relaxed mb-4">NEET UG is a 3-hour 20-minute exam consisting of 200 multiple-choice questions (MCQs), out of which candidates must answer 180.</p>
                            </div>

                            <div id="registration" className="bg-white rounded-[24px] p-6 md:p-8 shadow-premium border border-slate-100">
                                <h2 className="text-lg font-black text-slate-900 mb-2 uppercase tracking-tight">Registration Dates</h2>
                                <p className="text-slate-600 text-[11px] font-bold leading-relaxed mb-4">The registration process usually begins in February and remains open for about a month.</p>
                            </div>

                            <div id="faq" className="bg-white rounded-[24px] p-6 md:p-8 shadow-premium border border-slate-100">
                                <h2 className="text-lg font-black text-slate-900 mb-2 uppercase tracking-tight">Frequently Asked Questions</h2>
                                <p className="text-slate-600 text-[11px] font-bold leading-relaxed mb-1 italic">Q: Is the NEET exam date same for all languages?</p>
                                <p className="text-slate-600 text-[11px] font-bold leading-relaxed">A: Yes, NEET is conducted on the same day across the country for all language mediums.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section >
        </main >
    );
};

export default NeetUGExamDate;
