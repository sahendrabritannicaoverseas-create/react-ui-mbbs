import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { pageTitleBg, pageTitleShape, uniCrimea, uniDhaka, uniAma, uniAltinbas, uniMasha } from '../../assets/images';
import { BiRightArrowAlt, BiMapPin, BiCheckCircle, BiInfoCircle, BiPlusCircle, BiPlus, BiMinus, BiUserCheck, BiDetail, BiBuildings, BiMoney, BiFile, BiBookOpen, BiGlobe } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const MBBSVietnam = () => {
    const [isTocOpen, setIsTocOpen] = useState(false);
    const universities = [
        {
            name: 'Hanoi Medical University',
            slug: 'hanoi-medical-university',
            img: uniCrimea,
            desc: 'One of Vietnam\'s oldest and most prestigious medical institutions, known for excellence in medical education and research.',
            location: 'Hanoi, Vietnam',
            established: '1902',
            recognition: 'WHO, NMC, FAIMER Listed'
        },
        {
            name: 'Ho Chi Minh City University of Medicine and Pharmacy',
            slug: 'hcmc-university-medicine-pharmacy',
            img: uniDhaka,
            desc: 'A leading medical university in Southern Vietnam offering world-class MBBS programs with modern facilities.',
            location: 'Ho Chi Minh City, Vietnam',
            established: '1947',
            recognition: 'WHO, NMC, FAIMER Listed'
        },
        {
            name: 'Hue University of Medicine and Pharmacy',
            slug: 'hue-university-medicine-pharmacy',
            img: uniAma,
            desc: 'Located in the historic city of Hue, offering comprehensive medical education with strong clinical training.',
            location: 'Hue, Vietnam',
            established: '1957',
            recognition: 'WHO, NMC Listed'
        },
        {
            name: 'Can Tho University of Medicine and Pharmacy',
            slug: 'can-tho-university-medicine-pharmacy',
            img: uniAltinbas,
            desc: 'A prominent institution in the Mekong Delta region, known for quality medical education and affordable tuition.',
            location: 'Can Tho, Vietnam',
            established: '2002',
            recognition: 'WHO, NMC Listed'
        },
        {
            name: 'Thai Binh University of Medicine and Pharmacy',
            slug: 'thai-binh-university-medicine-pharmacy',
            img: uniMasha,
            desc: 'A well-established medical university offering MBBS programs with excellent practical training opportunities.',
            location: 'Thai Binh, Vietnam',
            established: '1968',
            recognition: 'WHO, NMC Listed'
        }
    ];

    const tocSections = [
        { id: 'intro-section', label: '1. Introduction to MBBS in Vietnam' },
        { id: 'best-choice', label: '2. Why Vietnam is the Best Choice for Students?' },
        { id: 'advantages', label: '3. Advantages of Studying MBBS in Vietnam' },
        { id: 'eligibility', label: '4. Eligibility Criteria for MBBS in Vietnam' },
        { id: 'universities', label: '5. Top Medical Universities in Vietnam' },
        ...universities.map((uni, idx) => ({ id: uni.slug, label: `5.${idx + 1}. ${uni.name}` })),
        { id: 'cost', label: '6. Cost of Studying MBBS in Vietnam' },
        { id: 'admission', label: '7. Admission Process for MBBS in Vietnam' },
        { id: 'documents', label: '8. Documents Required for MBBS in Vietnam' },
        { id: 'curriculum', label: '9. MBBS Curriculum in Vietnam' },
        { id: 'life', label: '10. Life in Vietnam for Indian Students' },
        { id: 'accommodation', label: '11. Accommodation & Food Options' },
        { id: 'visa', label: '12. Visa Process & Travel Guidelines' },
    ];

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, ease: "easeOut" }
    };

    const staggerContainer = {
        initial: {},
        whileInView: { transition: { staggerChildren: 0.1 } }
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
                        <h2 className="text-2xl mt-5 text-3xl font-bold text-white mb-5 uppercase tracking-tight">
                            MBBS Vietnam
                        </h2>
                        <ul className="flex items-center justify-center xl:justify-start gap-3 text-slate-400 font-semibold text-xs uppercase tracking-widest">
                            <li><Link to="/" className="hover:text-brand-primary transition-colors">Home</Link></li>
                            <li className="text-slate-600">/</li>
                            <li className="text-brand-secondary">Vietnam Universities</li>
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
                                1. Introduction to MBBS in Vietnam
                            </h2>
                            <div className="prose prose-slate max-w-none text-slate-600 space-y-6 mb-10">
                                <p className="text-sm md:text-base leading-relaxed">
                                    Vietnam is rapidly becoming a top destination for Indian medical students seeking high-quality education at affordable costs. With several WHO-recognized universities, Vietnam offers a robust medical curriculum that aligns with global standards.
                                </p>

                                {/* Featured Content Image */}
                                <div className="rounded-[32px] overflow-hidden my-12 shadow-xl border-4 border-white aspect-video relative group">
                                    <img
                                        src={uniCrimea}
                                        alt="Medical Education in Vietnam"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                                    <div className="absolute bottom-8 left-8 text-white">
                                        <p className="font-bold text-lg">World Class Medical Infrastructure</p>
                                        <p className="text-slate-200 text-sm">Experience hands-on clinical training in leading Vietnamese hospitals.</p>
                                    </div>
                                </div>

                                <p className="text-sm md:text-base leading-relaxed">
                                    The Vietnamese medical education system focuses on practical clinical exposure, ensuring students gain hands-on experience in leading government hospitals from their early years of study.
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

                        {/* 2. Why Vietnam */}
                        <motion.section id="best-choice" {...fadeInUp} className="scroll-mt-32">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <div className="p-2 bg-brand-primary/10 rounded-lg"><BiUserCheck className="text-brand-primary" /></div>
                                2. Why Vietnam is the Best Choice for Students?
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                    <h4 className="font-bold text-slate-900 mb-3">Global Recognition</h4>
                                    <p className="text-sm text-slate-600 leading-relaxed">Vietnamese medical degrees are recognized by WHO, NMC (India), and FAIMER, making graduates eligible to practice worldwide after qualifying exams.</p>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                    <h4 className="font-bold text-slate-900 mb-3">English Medium</h4>
                                    <p className="text-sm text-slate-600 leading-relaxed">The entire MBBS program is taught in English, specifically tailored for international students, removing any language barrier in learning.</p>
                                </div>
                            </div>
                        </motion.section>

                        {/* 3. Advantages */}
                        <motion.section id="advantages" {...fadeInUp} className="scroll-mt-32">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <div className="p-2 bg-brand-primary/10 rounded-lg"><BiCheckCircle className="text-brand-primary" /></div>
                                3. Advantages of Studying MBBS in Vietnam
                            </h2>
                            <ul className="grid sm:grid-cols-2 gap-4">
                                {[
                                    'Affordable tuition fees and low cost of living.',
                                    'High clinical exposure in multi-specialty hospitals.',
                                    'Safe and welcoming environment for international students.',
                                    'Similar disease patterns to India, aiding clinical practice.',
                                    'Modern campus infrastructure and high-tech labs.',
                                    'Direct flights from India with easy visa processing.'
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
                            <h2 className="text-2xl font-bold text-slate-900 mb-8">4. Eligibility Criteria for MBBS in Vietnam</h2>
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
                        <div id="universities" className="scroll-mt-32">
                            <motion.div {...fadeInUp} className="flex items-center justify-between gap-4 mb-10 border-b border-slate-200 pb-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">5. Top Medical Universities in Vietnam</h2>
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

                        {/* 6. Cost of Study */}
                        <motion.section id="cost" {...fadeInUp} className="scroll-mt-32">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <div className="p-2 bg-brand-primary/10 rounded-lg"><BiMoney className="text-brand-primary" /></div>
                                6. Cost of Studying MBBS in Vietnam
                            </h2>
                            <div className="bg-slate-900 rounded-[32px] p-8 md:p-12 text-white relative overflow-hidden">
                                <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
                                    <div>
                                        <p className="text-slate-400 text-sm mb-6 leading-relaxed">Study MBBS in Vietnam at a fraction of the cost in India. The total package includes tuition fees, hostel, and food expenses, making it an ideal choice for budget-conscious families.</p>
                                        <ul className="space-y-4">
                                            <li className="flex items-center gap-3"><BiCheckCircle className="text-brand-secondary" /> <span className="text-sm">Tuition Fees: $2,500 - $4,500 / Year</span></li>
                                            <li className="flex items-center gap-3"><BiCheckCircle className="text-brand-secondary" /> <span className="text-sm">Hostel & Food: $1,000 / Year</span></li>
                                            <li className="flex items-center gap-3"><BiCheckCircle className="text-brand-secondary" /> <span className="text-sm">Low Cost of Living in Major Cities</span></li>
                                        </ul>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 text-center">
                                        <span className="text-xs font-bold uppercase tracking-widest text-brand-secondary mb-2 block">Starting From</span>
                                        <div className="text-4xl font-black mb-2">$3,500<span className="text-base text-slate-400 font-normal"> / Year</span></div>
                                        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Comprehensive Package</p>
                                    </div>
                                </div>
                                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary opacity-20 blur-[100px] -mr-32 -mt-32"></div>
                            </div>
                        </motion.section>

                        {/* 7. Admission Process */}
                        <motion.section id="admission" {...fadeInUp} className="scroll-mt-32 bg-white rounded-[32px] p-8 md:p-12 border border-slate-100 shadow-sm relative overflow-hidden">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10">7. Admission Process for MBBS in Vietnam</h2>
                            <div className="grid md:grid-cols-3 gap-6 relative z-10">
                                {[
                                    { s: '01', t: 'Registration', d: 'Register with us and submit your 10th & 12th marksheets for eligibility check.' },
                                    { s: '02', t: 'Admission Letter', d: 'Receive the official admission letter from your chosen university within 2 weeks.' },
                                    { s: '03', t: 'Visa & Departure', d: 'Our team handles your visa processing and organizes your travel to Vietnam.' }
                                ].map((step, idx) => (
                                    <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 group hover:border-brand-primary transition-colors">
                                        <div className="text-3xl font-black text-brand-primary/20 group-hover:text-brand-primary/40 transition-colors mb-4">{step.s}</div>
                                        <h5 className="font-bold text-slate-900 mb-2">{step.t}</h5>
                                        <p className="text-slate-500 text-xs leading-relaxed">{step.d}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.section>

                        {/* 8. Documents Required */}
                        <motion.section id="documents" {...fadeInUp} className="scroll-mt-32">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <div className="p-2 bg-brand-primary/10 rounded-lg"><BiFile className="text-brand-primary" /></div>
                                8. Documents Required for MBBS in Vietnam
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    'Valid Passport (Original)',
                                    '10th & 12th Marksheets',
                                    'NEET Qualification Result',
                                    'Birth Certificate in English',
                                    '10-12 Passport size photos',
                                    'Medical Check-up Certificate',
                                    'Bank Statement for Visa'
                                ].map((doc, idx) => (
                                    <div key={idx} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 transition-all hover:bg-white hover:shadow-md">
                                        <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
                                        <span className="text-slate-700 font-bold text-xs">{doc}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.section>

                        {/* 9. Curriculum */}
                        <motion.section id="curriculum" {...fadeInUp} className="scroll-mt-32 bg-white rounded-[32px] p-8 md:p-12 border border-slate-100 shadow-sm">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <div className="p-2 bg-brand-primary/10 rounded-lg"><BiBookOpen className="text-brand-primary" /></div>
                                9. MBBS Curriculum in Vietnam
                            </h2>
                            <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                The MBBS curriculum in Vietnam is designed to meet international standards (WFME). It spans 6 years and is divided into Pre-clinical and Clinical phases, with a strong focus on hands-on hospital training.
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <h5 className="font-bold text-brand-primary text-xs uppercase mb-2">Phase 1: Pre-Clinical</h5>
                                    <p className="text-xs text-slate-500">Anatomy, Physiology, Biochemistry, and Basic Medical Sciences.</p>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <h5 className="font-bold text-brand-primary text-xs uppercase mb-2">Phase 2: Clinical</h5>
                                    <p className="text-xs text-slate-500">Surgery, Internal Medicine, Pediatrics, and Hospital Rotations.</p>
                                </div>
                            </div>
                        </motion.section>

                        {/* 10. Life in Vietnam */}
                        <motion.section id="life" {...fadeInUp} className="scroll-mt-32">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <div className="p-2 bg-brand-primary/10 rounded-lg"><BiGlobe className="text-brand-primary" /></div>
                                10. Life in Vietnam for Indian Students
                            </h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
                                    <div className="text-slate-900 font-bold mb-2">Safe Cities</div>
                                    <p className="text-[11px] text-slate-500">Vietnam is known for its low crime rate and peaceful atmosphere.</p>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
                                    <div className="text-slate-900 font-bold mb-2">Cultural Link</div>
                                    <p className="text-[11px] text-slate-500">Students find similarities in family values and social respect.</p>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
                                    <div className="text-slate-900 font-bold mb-2">Easy Travel</div>
                                    <p className="text-[11px] text-slate-500">Multiple direct flights from India make it easy for students to visit home.</p>
                                </div>
                            </div>
                        </motion.section>

                        {/* 11. Accommodation */}
                        <motion.section id="accommodation" {...fadeInUp} className="scroll-mt-32 bg-slate-900 rounded-[32px] p-8 md:p-12 text-white overflow-hidden relative">
                            <div className="relative z-10">
                                <h2 className="text-2xl md:text-3xl font-bold mb-8">11. Accommodation & Food Options</h2>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <h4 className="text-brand-secondary font-bold">University Hostels</h4>
                                        <p className="text-slate-400 text-sm">Most universities provide on-campus furniture-inclusive dormitories with high security and Wi-Fi access.</p>
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="text-brand-secondary font-bold">Indian Food</h4>
                                        <p className="text-slate-400 text-sm">Indian mess facilities are available in major universities, providing healthy Veg and Non-Veg Indian meals.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary opacity-10 blur-3xl -mr-32 -mt-32"></div>
                        </motion.section>

                        {/* 12. Visa Process */}
                        <motion.section id="visa" {...fadeInUp} className="scroll-mt-32">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <div className="p-2 bg-brand-primary/10 rounded-lg"><BiBuildings className="text-brand-primary" /></div>
                                12. Visa Process & Travel Guidelines
                            </h2>
                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    The visa process for Vietnam is straightforward. Once the student receives the Invitation Letter from the university, our team assists in applying for the Student Visa (DH Visa) through the Vietnamese Embassy.
                                </p>
                                <div className="mt-6 flex items-center gap-4 text-brand-primary font-bold text-sm">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">01</div>
                                    <span>Invitation Letter</span>
                                    <BiRightArrowAlt />
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">02</div>
                                    <span>Visa Filing</span>
                                    <BiRightArrowAlt />
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">03</div>
                                    <span>Sticker Visa</span>
                                </div>
                            </div>
                        </motion.section>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default MBBSVietnam;
