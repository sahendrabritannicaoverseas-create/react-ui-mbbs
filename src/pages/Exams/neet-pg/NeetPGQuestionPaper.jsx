import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { pageTitleBg, pageTitleShape } from '../../../assets/images';
import { neetPGLinks, pyqData } from '../../../data/neetPGData';
import { BiPlus, BiMinus, BiChevronRight, BiSend, BiUser, BiPhone, BiEnvelope, BiMap, BiGlobe, BiLockAlt } from 'react-icons/bi';
import TableOfContents from '../../../components/common/TableOfContents';

const NeetPGQuestionPaper = () => {
    const [isTocOpen, setIsTocOpen] = useState(true);
    const [selectedYears, setSelectedYears] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
    const [selectedCity, setSelectedCity] = useState("");
    const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);

    const countries = [
        "India", "United States", "United Kingdom", "Canada", "Australia",
        "Germany", "France", "Japan", "China", "Brazil"
    ];

    const cities = {
        "India": ["New Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata"],
        "United States": ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"],
        "United Kingdom": ["London", "Birmingham", "Manchester", "Glasgow", "Liverpool"],
        "Canada": ["Toronto", "Montreal", "Vancouver", "Calgary", "Edmonton"],
        "Australia": ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"],
        "Germany": ["Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt"],
        "France": ["Paris", "Marseille", "Lyon", "Toulouse", "Nice"],
        "Japan": ["Tokyo", "Yokohama", "Osaka", "Nagoya", "Sapporo"],
        "China": ["Shanghai", "Beijing", "Guangzhou", "Shenzhen", "Chengdu"],
        "Brazil": ["Sao Paulo", "Rio de Janeiro", "Brasilia", "Salvador", "Fortaleza"]
    };

    const handleCountrySelect = (country) => {
        setSelectedCountry(country);
        setIsCountryDropdownOpen(false);
        setSelectedCity(""); // Reset city when country changes
    };

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
                            {pyqData.heroTitle} <span className="text-brand-secondary">{pyqData.heroHighlight}</span>
                        </h1>
                        <ul className="flex items-center justify-center xl:justify-start gap-4 text-slate-400 font-bold text-[8px] uppercase tracking-widest">
                            <li><Link to="/" className="hover:text-brand-primary text-white transition-colors">Home</Link></li>
                            <li className="text-slate-600">/</li>
                            <li><Link to="/exams" className="hover:text-brand-primary text-white transition-colors">Exams</Link></li>
                            <li className="text-slate-600">/</li>
                            <li className="text-brand-secondary">{pyqData.breadcrumbLabel}</li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            <section className="py-8 relative -mt-8 z-20">
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
                                        {neetPGLinks.map((link) => (
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
                                                    NEET PG {year}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Get in Touch Form Widget */}
                            <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-premium relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-bl-full transition-transform group-hover:scale-110 duration-700"></div>
                                <h4 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-widest relative pb-4 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-brand-secondary after:rounded-full">Get in Touch</h4>
                                <form className="space-y-5 relative z-10">
                                    <div className="relative group">
                                        <BiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg group-focus-within:text-brand-primary transition-colors duration-300" />
                                        <input
                                            type="text"
                                            placeholder="Full Name"
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-12 pr-4 text-sm font-bold text-slate-700 focus:bg-white focus:border-brand-primary outline-none transition-all duration-300 placeholder:text-slate-400 shadow-sm focus:shadow-md"
                                        />
                                    </div>
                                    <div className="relative group">
                                        <BiEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg group-focus-within:text-brand-primary transition-colors duration-300" />
                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-12 pr-4 text-sm font-bold text-slate-700 focus:bg-white focus:border-brand-primary outline-none transition-all duration-300 placeholder:text-slate-400 shadow-sm focus:shadow-md"
                                        />
                                    </div>
                                    <div className="relative group">
                                        <BiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg group-focus-within:text-brand-primary transition-colors duration-300" />
                                        <input
                                            type="tel"
                                            placeholder="Phone Number"
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-12 pr-4 text-sm font-bold text-slate-700 focus:bg-white focus:border-brand-primary outline-none transition-all duration-300 placeholder:text-slate-400 shadow-sm focus:shadow-md"
                                        />
                                    </div>
                                    <div className="relative group">
                                        <BiGlobe className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-slate-400 text-lg group-focus-within:text-brand-primary transition-colors duration-300" />
                                        <div className="relative">
                                            <input
                                                type="text"
                                                value={selectedCountry}
                                                onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                                                readOnly
                                                placeholder="Select Country"
                                                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-12 pr-4 text-sm font-bold text-slate-700 focus:bg-white focus:border-brand-primary outline-none transition-all duration-300 placeholder:text-slate-400 shadow-sm focus:shadow-md cursor-pointer"
                                            />
                                            {isCountryDropdownOpen && (
                                                <div className="absolute top-full left-0 w-full bg-white border border-slate-200 rounded-xl mt-2 max-h-48 overflow-y-auto shadow-xl z-50">
                                                    {countries.map((country, index) => (
                                                        <div
                                                            key={index}
                                                            onClick={() => handleCountrySelect(country)}
                                                            className="px-4 py-3 hover:bg-slate-50 text-sm font-bold text-slate-700 cursor-pointer transition-colors border-b border-slate-50 last:border-none"
                                                        >
                                                            {country}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="relative group">
                                        <BiMap className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-slate-400 text-lg group-focus-within:text-brand-primary transition-colors duration-300" />
                                        <div className="relative">
                                            <input
                                                type="text"
                                                value={selectedCity}
                                                onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
                                                readOnly
                                                placeholder={selectedCountry ? "Select City" : "Select Country First"}
                                                disabled={!selectedCountry}
                                                className={`w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-12 pr-4 text-sm font-bold text-slate-700 focus:bg-white focus:border-brand-primary outline-none transition-all duration-300 placeholder:text-slate-400 shadow-sm focus:shadow-md ${!selectedCountry ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}`}
                                            />
                                            {isCityDropdownOpen && selectedCountry && (
                                                <div className="absolute top-full left-0 w-full bg-white border border-slate-200 rounded-xl mt-2 max-h-48 overflow-y-auto shadow-xl z-50">
                                                    {cities[selectedCountry]?.map((city, index) => (
                                                        <div
                                                            key={index}
                                                            onClick={() => {
                                                                setSelectedCity(city);
                                                                setIsCityDropdownOpen(false);
                                                            }}
                                                            className="px-4 py-3 hover:bg-slate-50 text-sm font-bold text-slate-700 cursor-pointer transition-colors border-b border-slate-50 last:border-none"
                                                        >
                                                            {city}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    {/* Captcha Section */}
                                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                                        <div className="flex items-center gap-1  bg-slate-50 p-1.5 rounded-lg border border-slate-100 shadow-inner">
                                            <div className="bg-white px-2 py-1.5 rounded-md border border-slate-200 select-none shadow-sm">
                                                <span className="text-brand-primary font-black tracking-[0.2em] text-[10px]">8 + 4 =</span>
                                            </div>
                                            <input
                                                type="text"
                                                placeholder=" "
                                                className="w-8 bg-transparent border-none text-slate-900 text-center focus:ring-0 outline-none font-black text-sm p-0 placeholder:text-slate-300"
                                            />
                                        </div>
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full bg-brand-primary hover:bg-brand-secondary text-white font-black py-4 rounded-xl text-xs uppercase tracking-[0.2em] shadow-lg shadow-brand-primary/25 hover:shadow-brand-secondary/25 transition-all duration-300 flex items-center justify-center gap-3 mt-4 group"
                                    >
                                        <BiSend className="text-lg group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                                        Send Inquiry
                                    </motion.button>
                                </form>
                            </div>
                        </aside>

                        {/* Right Content */}
                        <div className="lg:col-span-9 space-y-6">
                            {/* Question Papers Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                id="papers"
                                className="bg-white rounded-[24px] p-6 md:p-10 shadow-premium border border-slate-100"
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
                                            <h4 className="text-lg font-black text-slate-900 mb-1">NEET PG {year}</h4>
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

                            {/* Table of Contents */}
                            <div className="mb-8">
                                <TableOfContents sections={sections} />
                            </div>


                            <div id="importance" className="bg-white rounded-[24px] p-8 md:p-12 shadow-premium border border-slate-100">
                                <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">Why Solve NEET PG Previous Year Papers?</h2>
                                <p className="text-slate-600">Solving previous year papers for NEET PG is essential to understand the complex clinical MCQ patterns, image-based questions, and the distribution of various pre-clinical, para-clinical, and clinical subjects.</p>
                                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        'Identify high-yield topics',
                                        'Practice time management',
                                        'Analyze clinical case patterns',
                                        'Boost confidence for CBT mode'
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                            <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
                                            <span className="text-sm font-bold text-slate-700">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div id="pattern" className="bg-white rounded-[24px] p-8 md:p-12 shadow-premium border border-slate-100">
                                <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">NEET PG Exam Pattern</h2>
                                <p className="text-slate-600">Candidates can analyze the distribution of questions across Clinical, Pre-Clinical, and Para-Clinical subjects from past papers. The exam consists of 200 multiple-choice questions.</p>
                            </div>

                            <div id="tips" className="bg-white rounded-[24px] p-8 md:p-12 shadow-premium border border-slate-100">
                                <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">Preparation Tips</h2>
                                <p className="text-slate-600">Focus on clinical case-based questions and image-based identification. Regular revision of high-yield topics from past papers is key to success.</p>
                            </div>

                            <div id="faq" className="bg-white rounded-[24px] p-8 md:p-12 shadow-premium border border-slate-100">
                                <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">Frequently Asked Questions</h2>
                                <p className="text-slate-600 font-bold mb-4 italic italic">Q: How many questions are asked in NEET PG?</p>
                                <p className="text-slate-600">A: There are 200 MCQs to be solved in 3 hours and 30 minutes.</p>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default NeetPGQuestionPaper;
