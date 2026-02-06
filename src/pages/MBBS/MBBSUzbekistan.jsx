import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { pageTitleBg, pageTitleShape, uniCrimea, uniDhaka, uniAma, uniAltinbas, uniMasha } from '../../assets/images';
import { BiRightArrowAlt, BiChevronRight, BiPlusCircle, BiMapPin, BiListUl, BiCheckCircle, BiInfoCircle, BiPlus, BiMinus } from 'react-icons/bi';
import { Link } from 'react-router-dom';


const MBBSUzbekistan = () => {
    const [isTocOpen, setIsTocOpen] = useState(false);
    const universities = [
        {
            name: 'Tashkent Medical Academy',
            slug: 'tashkent-medical-academy',
            img: uniMasha,
            desc: 'The leading medical educational institution in the Republic of Uzbekistan for training medical personnel.',
            location: 'Tashkent, Uzbekistan',
            established: '1920',
            recognition: 'WHO, NMC Recognized'
        },
        {
            name: 'Samarkand State Medical University',
            slug: 'samarkand-state-medical-university',
            img: uniAltinbas,
            desc: 'One of the oldest and most prestigious medical universities in Central Asia.',
            location: 'Samarkand, Uzbekistan',
            established: '1930',
            recognition: 'WHO, NMC Recognized'
        }
    ];

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, ease: "easeOut" }
    };

    const tocSections = [
        { id: 'intro', label: '1. Introduction to MBBS in Uzbekistan' },
        { id: 'universities', label: '2. Top Medical Universities' },
        { id: 'why-uzbekistan', label: '3. Why Study in Uzbekistan?' },
        { id: 'eligibility', label: '4. Eligibility Criteria' },
        { id: 'documents', label: '5. Required Documents' },
    ];

    return (
        <main className="overflow-hidden bg-white">
            {/* Page Title Area */}
            <section id="intro" className="relative pt-[120px] pb-[80px] bg-slate-900 overflow-hidden">
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

                <div className="container mx-auto px-6 relative z-10 text-center xl:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 uppercase tracking-tight">
                            MBBS Uzbekistan
                        </h2>
                        <ul className="flex items-center justify-center xl:justify-start gap-3 text-slate-400 font-semibold text-xs uppercase tracking-widest">
                            <li><Link to="/" className="hover:text-brand-primary transition-colors">Home</Link></li>
                            <li className="text-slate-600">/</li>
                            <li className="text-brand-secondary">Uzbekistan Universities</li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Area */}
            <section className="py-16 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto space-y-20">

                        {/* 1. Introduction Section */}
                        <motion.section id="intro" {...fadeInUp} className="scroll-mt-32">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <div className="p-2 bg-brand-primary/10 rounded-lg"><BiInfoCircle className="text-brand-primary" /></div>
                                1. Introduction to MBBS in Uzbekistan
                            </h2>
                            <div className="prose prose-slate max-w-none text-slate-600 space-y-6 mb-10">
                                <p>
                                    Uzbekistan has emerged as one of the most promising destinations for Indian students to study MBBS. The country offers a high standard of medical education, modern infrastructure, and a safe environment, all at a very affordable cost.
                                </p>

                                {/* Featured Content Image */}
                                <div className="rounded-[32px] overflow-hidden my-12 shadow-xl border-4 border-white aspect-video relative group">
                                    <img
                                        src={uniAma}
                                        alt="Medical Education in Uzbekistan"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                                    <div className="absolute bottom-8 left-8">
                                        <p className="text-white font-bold text-lg">Leading Medical Universities</p>
                                        <p className="text-slate-200 text-sm">Join a growing community of Indian students in Uzbekistan.</p>
                                    </div>
                                </div>

                                <p>
                                    Medical universities in Uzbekistan are recognized by WHO and NMC, ensuring that the degree obtained is valid for practice in India and globally after clearing the necessary licensing exams.
                                </p>
                            </div>

                            {/* Collapsible Table of Contents Box */}
                            <div className="bg-white rounded-xl p-4 md:p-6 mb-12 border border-slate-200 shadow-sm transition-all duration-300">
                                <div
                                    className="flex items-center justify-between cursor-pointer group"
                                    onClick={() => setIsTocOpen(!isTocOpen)}
                                >
                                    <h2 className="text-xl font-bold text-slate-800">
                                        Table of Contents
                                    </h2>
                                    <div className="w-10 h-10 bg-brand-primary flex items-center justify-center text-white rounded transition-colors hover:bg-brand-primary/90">
                                        {isTocOpen ? <BiMinus className="text-2xl" /> : <BiPlus className="text-2xl" />}
                                    </div>
                                </div>

                                {isTocOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        className="overflow-hidden"
                                    >
                                        <ul className="flex flex-col gap-y-4 pt-8 mt-6 border-t border-slate-100">
                                            {tocSections.map((section, idx) => (
                                                <li key={idx} className="flex items-start gap-2 group">
                                                    <span className="text-slate-400 font-bold text-sm mt-0.5">{idx + 1}.</span>
                                                    <button
                                                        onClick={() => {
                                                            const element = document.getElementById(section.id);
                                                            if (element) {
                                                                window.scrollTo({
                                                                    top: element.offsetTop - 120,
                                                                    behavior: 'smooth'
                                                                });
                                                            }
                                                        }}
                                                        className="text-[#1e3a8a] hover:text-brand-primary hover:translate-x-1 underline decoration-transparent hover:decoration-brand-primary/30 underline-offset-4 text-left text-sm font-bold transition-all"
                                                    >
                                                        {section.label.includes('. ') ? section.label.split('. ')[1] : section.label}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )}
                            </div>
                        </motion.section>
                        {/* 2. Top Universities */}
                        <div id="universities" className="scroll-mt-32">
                            <motion.div {...fadeInUp} className="flex items-center justify-between gap-4 mb-10 border-b border-slate-200 pb-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">2. Top Medical Universities in Uzbekistan</h2>
                                <div className="bg-brand-primary/5 text-brand-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-brand-primary/10">
                                    {universities.length} Institutions
                                </div>
                            </motion.div>

                            <div className="space-y-10">
                                {universities.map((uni, idx) => (
                                    <motion.div
                                        key={idx}
                                        id={uni.slug}
                                        {...fadeInUp}
                                        className="bg-white rounded-[32px] border border-slate-100 p-6 md:p-10 hover:shadow-xl transition-all duration-500 shadow-sm group scroll-mt-32"
                                    >
                                        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">
                                            <div className="xl:col-span-4">
                                                <div className="h-56 rounded-[24px] overflow-hidden relative shadow-lg">
                                                    <img src={uni.img} alt={uni.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                                    <div className="absolute top-4 left-4 bg-slate-900/70 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-[10px] font-bold flex items-center gap-2">
                                                        <BiMapPin className="text-brand-secondary" />
                                                        {uni.location}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="xl:col-span-8">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest bg-brand-primary/5 px-3 py-1 rounded-full">2.{idx + 1}. University Info</span>
                                                </div>
                                                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-brand-primary transition-colors">{uni.name}</h3>
                                                <p className="text-slate-500 text-sm leading-relaxed mb-8">{uni.desc}</p>
                                                <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-slate-100">
                                                    <div className="flex gap-4">
                                                        <div className="flex items-center gap-2 text-slate-400 text-xs font-bold">
                                                            <BiCheckCircle /> {uni.recognition.split(',')[0]}
                                                        </div>
                                                        <div className="flex items-center gap-2 text-slate-400 text-xs font-bold">
                                                            <BiPlusCircle /> Est. {uni.established}
                                                        </div>
                                                    </div>
                                                    <Link
                                                        to={`/university/${uni.slug}`}
                                                        className="text-brand-primary font-bold text-sm inline-flex items-center gap-2 group/btn hover:translate-x-1 transition-transform"
                                                    >
                                                        View Detailed Profile <BiRightArrowAlt className="text-xl group-hover/btn:translate-x-1 transition-transform" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Why Study in Uzbekistan */}
                        <div id="why-uzbekistan" className="mb-20">
                            <motion.div {...fadeInUp} className="mb-8">
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Why Study MBBS in Uzbekistan?</h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        'Extremely affordable tuition fees and living costs.',
                                        'NMC and WHO recognized medical degrees.',
                                        'Safe environment for international students.',
                                        'Modern medical technology and infrastructure.',
                                        'Easy visa process and proximity to India.',
                                        'High quality of education with practical training.'
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                            <BiCheckCircle className="text-green-500 text-xl flex-shrink-0" />
                                            <p className="text-slate-600 text-sm">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Eligibility Section */}
                        <div id="eligibility" className="mb-20">
                            <motion.div {...fadeInUp} className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm">
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Eligibility Criteria</h2>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                                        <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-bold">1</div>
                                        <p className="text-slate-700 font-medium">At least 50% in PCB for General category (40% for SC/ST/OBC).</p>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                                        <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-bold">2</div>
                                        <p className="text-slate-700 font-medium">NEET qualification is a must for Indian students.</p>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                                        <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-bold">3</div>
                                        <p className="text-slate-700 font-medium">Minimum age of 17 years as of 31st December of the admission year.</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Documents Section */}
                        <div id="documents" className="mb-10">
                            <motion.div {...fadeInUp} className="bg-slate-900 rounded-[32px] p-8 text-white relative overflow-hidden">
                                <div className="relative z-10">
                                    <h2 className="text-2xl font-bold mb-6">Required Documents</h2>
                                    <ul className="grid md:grid-cols-2 gap-4">
                                        {[
                                            '10th & 12th Marksheets',
                                            'Valid Passport',
                                            'NEET Result Scorecard',
                                            'Passport size photographs',
                                            'Medical clearance certificate',
                                            'Invitation letter from University'
                                        ].map((doc, idx) => (
                                            <li key={idx} className="flex items-center gap-3">
                                                <BiCheckCircle className="text-brand-secondary text-xl" />
                                                <span className="text-slate-300">{doc}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default MBBSUzbekistan;
