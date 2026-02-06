import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { pageTitleBg, pageTitleShape, uniCrimea, uniDhaka, uniAma, uniAltinbas, uniMasha } from '../../assets/images';
import { BiRightArrowAlt, BiMapPin, BiCheckCircle, BiInfoCircle, BiDetail, BiBuildings, BiMoney, BiUserCheck, BiFile, BiBookOpen, BiGlobe, BiPlus, BiMinus } from 'react-icons/bi';
import { Link } from 'react-router-dom';


const MBBSRussia = () => {
    const [isTocOpen, setIsTocOpen] = useState(false);
    const universities = [
        {
            name: 'Crimea Federal University',
            slug: 'crimea-federal-university',
            img: uniCrimea,
            desc: 'One of the top medical universities in Russia, offering high-quality education and globally recognized degrees.',
            location: 'Simferopol, Russia',
            established: '1918',
            recognition: 'WHO, NMC Recognized'
        },
        {
            name: 'Bashkir State Medical University',
            slug: 'bashkir-state-medical-university',
            img: uniDhaka,
            desc: 'A leading center for medical and pharmaceutical sciences in the Russian Federation.',
            location: 'Ufa, Russia',
            established: '1932',
            recognition: 'WHO, NMC Recognized'
        },
        {
            name: 'Kazan State Medical University',
            slug: 'kazan-state-medical-university',
            img: uniAma,
            desc: 'Multi-functional and multi-level state institution of higher education in medicine in Central Russia.',
            location: 'Kazan, Russia',
            established: '1814',
            recognition: 'WHO, NMC Recognized'
        }
    ];

    const tocSections = [
        { id: 'intro-section', label: '1. Introduction to MBBS in Russia' },
        { id: 'why-russia', label: '2. Why Study in Russia for Indian Students?' },
        { id: 'advantages', label: '3. Advantages of Studying MBBS in Russia' },
        { id: 'eligibility', label: '4. Eligibility Criteria for MBBS in Russia' },
        { id: 'top-universities', label: '5. Top Medical Universities in Russia' },
        ...universities.map((uni, idx) => ({ id: uni.slug, label: `5.${idx + 1}. ${uni.name}` })),
        { id: 'cost', label: '6. Cost of Studying MBBS in Russia' },
        { id: 'admission', label: '7. Admission Process for MBBS in Russia' },
        { id: 'documents', label: '8. Documents Required for MBBS in Russia' },
        { id: 'life', label: '9. Life in Russia for International Students' },
    ];

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, ease: "easeOut" }
    };

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
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-tight">
                            MBBS In <span className="text-brand-secondary">Russia</span>
                        </h2>
                        <ul className="flex items-center justify-center xl:justify-start gap-3 text-slate-400 font-semibold text-xs uppercase tracking-widest">
                            <li><Link to="/" className="hover:text-brand-primary transition-colors">Home</Link></li>
                            <li className="text-slate-600">/</li>
                            <li className="text-brand-secondary">Russia</li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Area */}
            <section className="py-16 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto space-y-20">

                        {/* 1. Introduction Section */}
                        <motion.section id="intro-section" {...fadeInUp} className="scroll-mt-32">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <div className="p-2 bg-brand-primary/10 rounded-lg"><BiInfoCircle className="text-brand-primary" /></div>
                                1. Introduction to MBBS in Russia
                            </h2>
                            <div className="prose prose-slate max-w-none text-slate-600 space-y-6 mb-10">
                                <p className="text-sm md:text-base leading-relaxed">
                                    Russia is one of the most popular destinations for Indian medical students. For decades, it has provided high-quality medical education at a subsidized cost. Russian medical degrees are globally recognized and highly respected.
                                </p>

                                {/* Featured Content Image */}
                                <div className="rounded-[32px] overflow-hidden my-12 shadow-xl border-4 border-white aspect-video relative group">
                                    <img
                                        src={uniDhaka}
                                        alt="Medical Education in Russia"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                                    <div className="absolute bottom-8 left-8 text-white">
                                        <p className="font-bold text-lg">Excellence in Medical Training</p>
                                        <p className="text-slate-200 text-sm">Join over 15,000 Indian students currently studying in Russia.</p>
                                    </div>
                                </div>

                                <p className="text-sm md:text-base leading-relaxed">
                                    With over 50 medical universities that are WHO and NMC recognized, Russia offers a diverse environment and world-class infrastructure for medical aspirants.
                                </p>
                            </div>

                            {/* Collapsible Table of Contents Box */}
                            <div className="mt-12 bg-white rounded-xl p-4 md:p-6 border border-slate-200 shadow-sm transition-all duration-300">
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

                        {/* 2. Why Russia */}
                        <motion.section id="why-russia" {...fadeInUp} className="scroll-mt-32">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <div className="p-2 bg-brand-primary/10 rounded-lg"><BiUserCheck className="text-brand-primary" /></div>
                                2. Why Study in Russia for Indian Students?
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                    <h4 className="font-bold text-slate-900 mb-3">Subsidized Fees</h4>
                                    <p className="text-sm text-slate-600 leading-relaxed">Most Russian medical universities are government-funded, making the tuition fees much lower than private colleges in India.</p>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                    <h4 className="font-bold text-slate-900 mb-3">No Donation</h4>
                                    <p className="text-sm text-slate-600 leading-relaxed">Admission is based strictly on merit and NEET eligibility, with no hidden charges or donation fees.</p>
                                </div>
                            </div>
                        </motion.section>

                        {/* 3. Advantages */}
                        <motion.section id="advantages" {...fadeInUp} className="scroll-mt-32">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <div className="p-2 bg-brand-primary/10 rounded-lg"><BiCheckCircle className="text-brand-primary" /></div>
                                3. Advantages of Studying MBBS in Russia
                            </h2>
                            <ul className="grid sm:grid-cols-2 gap-4">
                                {[
                                    'NMC and WHO recognized degrees.',
                                    'English medium instruction for Indian students.',
                                    'State-of-the-art hospitals for clinical practice.',
                                    'Safe and multi-cultural environment.',
                                    'Easy admission process and high visa success rate.',
                                    'Dual degree opportunities in some universities.'
                                ].map((adv, idx) => (
                                    <li key={idx} className="flex items-start gap-3 p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                                        <BiCheckCircle className="text-green-500 text-xl mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-700 text-sm font-medium">{adv}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.section>

                        {/* 4. Eligibility */}
                        <motion.section id="eligibility" {...fadeInUp} className="scroll-mt-32 bg-slate-50 rounded-[32px] p-8 md:p-12 border border-slate-100 shadow-sm">
                            <h2 className="text-2xl font-bold text-slate-900 mb-8">4. Eligibility Criteria for MBBS in Russia</h2>
                            <div className="space-y-6">
                                {[
                                    { title: 'Academic Requirement', desc: 'At least 50% marks in PCB (Physics, Chemistry, Biology) in 12th standard.' },
                                    { title: 'Entrance Exam', desc: 'NEET qualification is mandatory for Indian students as per NMC guidelines.' },
                                    { title: 'Age Limit', desc: 'Must be at least 17 years old by 31st December of the admission year.' }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-5 p-5 bg-white rounded-2xl border border-slate-50">
                                        <div className="w-12 h-12 bg-brand-primary text-white rounded-xl flex items-center justify-center font-bold text-lg shrink-0 shadow-lg shadow-brand-primary/20">0{idx + 1}</div>
                                        <div>
                                            <h5 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h5>
                                            <p className="text-slate-500 text-xs">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.section>

                        {/* 5. Top Universities */}
                        <div id="top-universities" className="scroll-mt-32">
                            <motion.div {...fadeInUp} className="flex items-center justify-between gap-4 mb-10 border-b border-slate-200 pb-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">5. Top Medical Universities in Russia</h2>
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
                                                    <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest bg-brand-primary/5 px-3 py-1 rounded-full">5.{idx + 1}. University Info</span>
                                                </div>
                                                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-brand-primary transition-colors">{uni.name}</h3>
                                                <p className="text-slate-500 text-sm leading-relaxed mb-8">{uni.desc}</p>
                                                <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-slate-100">
                                                    <div className="flex gap-4">
                                                        <div className="flex items-center gap-2 text-slate-400 text-xs font-bold">
                                                            <BiDetail /> {uni.recognition.split(',')[0]}
                                                        </div>
                                                        <div className="flex items-center gap-2 text-slate-400 text-xs font-bold">
                                                            <BiBuildings /> Est. {uni.established}
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

                        {/* 6. Cost Section Placeholder */}
                        <motion.section id="cost" {...fadeInUp} className="scroll-mt-32">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <div className="p-2 bg-brand-primary/10 rounded-lg"><BiMoney className="text-brand-primary" /></div>
                                6. Cost of Studying MBBS in Russia
                            </h2>
                            <div className="bg-slate-900 rounded-[32px] p-8 md:p-12 text-white relative overflow-hidden">
                                <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
                                    <div>
                                        <p className="text-slate-400 text-sm mb-6 leading-relaxed">Russian medical education is heavily subsidized by the government, ensuring accessibility for international students.</p>
                                        <ul className="space-y-4">
                                            <li className="flex items-center gap-3"><BiCheckCircle className="text-brand-secondary" /> <span className="text-sm">Tuition Fees: $3,000 - $6,000 / Year</span></li>
                                            <li className="flex items-center gap-3"><BiCheckCircle className="text-brand-secondary" /> <span className="text-sm">Average Hostel: $500 - $1,000 / Year</span></li>
                                        </ul>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 text-center">
                                        <span className="text-xs font-bold uppercase tracking-widest text-brand-secondary mb-2 block">Starting From</span>
                                        <div className="text-4xl font-black mb-2">$3,500<span className="text-base text-slate-400 font-normal"> / Year</span></div>
                                    </div>
                                </div>
                            </div>
                        </motion.section>

                        {/* 7. Admission */}
                        <motion.section id="admission" {...fadeInUp} className="scroll-mt-32 bg-white rounded-[32px] p-8 md:p-12 border border-slate-100 shadow-sm">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10">7. Admission Process for MBBS in Russia</h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                {[
                                    { s: '01', t: 'Apply Online', d: 'Submit your 10th & 12th documents online for eligibility verification.' },
                                    { s: '02', t: 'Admission Letter', d: 'Receive your official admission letter from the University.' },
                                    { s: '03', t: 'Visa & Fly', d: 'Get your visa processed and fly to Russia to start your journey.' }
                                ].map((step, idx) => (
                                    <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                        <div className="text-3xl font-black text-brand-primary/20 mb-4">{step.s}</div>
                                        <h5 className="font-bold text-slate-900 mb-2">{step.t}</h5>
                                        <p className="text-slate-500 text-xs">{step.d}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.section>

                        {/* 8. Documents */}
                        <motion.section id="documents" {...fadeInUp} className="scroll-mt-32">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <div className="p-2 bg-brand-primary/10 rounded-lg"><BiFile className="text-brand-primary" /></div>
                                8. Documents Required for MBBS in Russia
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {['Passport Copy', '10th & 12th Marksheets', 'NEET Scorecard', 'Passport Photos', 'Medical Fitness Certificate'].map((doc, idx) => (
                                    <div key={idx} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                        <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
                                        <span className="text-slate-700 font-bold text-xs">{doc}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.section>

                        {/* 9. Life in Russia */}
                        <motion.section id="life" {...fadeInUp} className="scroll-mt-32">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <div className="p-2 bg-brand-primary/10 rounded-lg"><BiGlobe className="text-brand-primary" /></div>
                                9. Life in Russia for International Students
                            </h2>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Russia offers a unique cultural experience. Students enjoy a high standard of living, modern amenities, and the opportunity to interact with people from all over the world in a safe, welcoming environment.
                            </p>
                        </motion.section>

                    </div>
                </div>
            </section>
        </main>
    );
};

export default MBBSRussia;
