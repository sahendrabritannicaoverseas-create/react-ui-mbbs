import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { pageTitleBg, pageTitleShape } from '../../../assets/images';
import { neetUGLinks, pyqData } from '../../../data/neetUGData';
import { BiPlus, BiMinus, BiChevronRight } from 'react-icons/bi';

const NeetUGPYQ = () => {
    const [isTocOpen, setIsTocOpen] = useState(true);
    const [selectedYears, setSelectedYears] = useState([]);

    const years = pyqData.years;
    const sections = pyqData.tocSections;

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 120,
                behavior: 'smooth'
            });
        }
    };

    const toggleYear = (year) => {
        setSelectedYears(prev =>
            prev.includes(year)
                ? prev.filter(y => y !== year)
                : [...prev, year]
        );
    };

    const filteredPapers = years.filter(year =>
        selectedYears.length === 0 || selectedYears.includes(year)
    );

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

                <div className="container mx-auto px-5 lg:px-12 max-w-7xl relative z-10 text-center xl:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-3xl md:text-2xl font-black text-white mb-3 uppercase tracking-tight">
                            NEET UG <span className="text-brand-secondary">Previous question Papers</span>
                        </h1>
                        <ul className="flex items-center justify-center xl:justify-start gap-4 text-slate-400 font-bold text-[8px] uppercase tracking-widest">
                            <li><Link to="/" className="hover:text-brand-primary text-white transition-colors">Home</Link></li>
                            <li className="text-slate-600">/</li>
                            <li><Link to="/exams" className="hover:text-brand-primary text-white transition-colors">Exams</Link></li>
                            <li className="text-slate-600">/</li>
                            <li className="text-brand-secondary">Previous Year Questions</li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            <section className="py-12 relative -mt-10 z-20">
                <div className="container mx-auto px-5 lg:px-12 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Left Sidebar - Filter Section */}
                        <aside className="lg:col-span-3 space-y-6">
                            {/* Exam Navigation Widget */}
                            <div className="bg-white rounded-2xl shadow-premium border border-slate-100 overflow-hidden">
                                <div className="p-5 border-b border-slate-50 bg-slate-50/50">
                                    <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-2">
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

                            {/* Year Filter Widget */}
                            <div className="bg-white rounded-2xl shadow-premium border border-slate-100 overflow-hidden">
                                <div className="p-5 border-b border-slate-50 bg-slate-50/50 flex items-center justify-between">
                                    <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider">
                                        Filter by Year
                                    </h4>
                                    {selectedYears.length > 0 && (
                                        <button
                                            onClick={() => setSelectedYears([])}
                                            className="text-[10px] font-black text-brand-primary uppercase tracking-widest hover:underline"
                                        >
                                            Clear
                                        </button>
                                    )}
                                </div>
                                <div className="p-5 max-h-[300px] overflow-y-auto custom-scrollbar">
                                    <div className="space-y-3">
                                        {years.map((year) => (
                                            <label key={year} className="flex items-center gap-3 group cursor-pointer">
                                                <div className="relative flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedYears.includes(year)}
                                                        onChange={() => toggleYear(year)}
                                                        className="w-5 h-5 rounded border-slate-300 text-brand-primary focus:ring-brand-primary cursor-pointer transition-all"
                                                    />
                                                </div>
                                                <span className={`text-sm font-bold transition-colors ${selectedYears.includes(year) ? 'text-brand-primary' : 'text-slate-600 group-hover:text-brand-primary'}`}>
                                                    NEET UG {year}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* Right Content */}
                        <div className="lg:col-span-9 space-y-10">
                            {/* Question Papers Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                id="practice-papers"
                                className="bg-white rounded-[32px] p-8 md:p-12 shadow-premium border border-slate-100"
                            >
                                <div className="flex items-center justify-between mb-8">
                                    <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Question <span className="text-brand-primary">Papers</span></h2>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                                        Showing {filteredPapers.length} Papers
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                    {filteredPapers.map((year) => (
                                        <motion.div
                                            key={year}
                                            layout
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="bg-slate-50 p-6 rounded-2xl border border-slate-100 group hover:border-brand-secondary hover:shadow-xl transition-all duration-300"
                                        >
                                            <h4 className="text-lg font-black text-slate-900 mb-1">NEET UG {year}</h4>
                                            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-6 border-b border-slate-200 pb-4">Question Paper with Solutions</p>
                                            <button className="w-full bg-brand-primary text-white py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-brand-secondary transition-all shadow-md active:scale-95">
                                                Download PDF
                                            </button>
                                        </motion.div>
                                    ))}
                                    {filteredPapers.length === 0 && (
                                        <div className="col-span-full py-20 text-center">
                                            <p className="text-slate-400 font-bold">No papers found for selected years.</p>
                                            <button onClick={() => setSelectedYears([])} className="mt-4 text-brand-primary font-black uppercase tracking-widest text-xs hover:underline">Reset Filters</button>
                                        </div>
                                    )}
                                </div>
                            </motion.div>

                            <div id="importance" className="bg-white rounded-[32px] p-10 md:p-16 shadow-premium border border-slate-100">
                                <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">Why Solve NEET UG Previous Year Papers?</h2>
                                <p className="text-slate-600">Solving previous year papers helps in identifying repeat questions and understanding the focus areas of the NTA.</p>
                            </div>

                            <div id="pattern" className="bg-white rounded-[32px] p-10 md:p-16 shadow-premium border border-slate-100">
                                <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">NEET UG Exam Pattern</h2>
                                <p className="text-slate-600">Candidates can analyze the distribution of questions across Physics, Chemistry, and Biology from past papers.</p>
                            </div>

                            <div id="tips" className="bg-white rounded-[32px] p-10 md:p-16 shadow-premium border border-slate-100">
                                <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">Preparation Tips</h2>
                                <p className="text-slate-600">Analyze your mistakes in each paper and focus on improving those specific topics before the next practice session.</p>
                            </div>

                            <div id="faq" className="bg-white rounded-[32px] p-10 md:p-16 shadow-premium border border-slate-100">
                                <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">Frequently Asked Questions</h2>
                                <p className="text-slate-600 font-bold mb-4 italic">Q: Are previous year questions repeated in NEET?</p>
                                <p className="text-slate-600">A: While direct questions may not repeat, the concepts and patterns often do.</p>
                            </div>

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

export default NeetUGPYQ;
