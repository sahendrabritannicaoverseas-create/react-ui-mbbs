import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { pageTitleBg, pageTitleShape } from '../../../assets/images';
import { BiPlus, BiMinus, BiListUl, BiRightArrowAlt, BiCheckCircle, BiBookBookmark, BiCalendar, BiGlobe } from 'react-icons/bi';

const USMLE = () => {
    const [isTocOpen, setIsTocOpen] = useState(true);
    const [activeStep, setActiveStep] = useState(null);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 120,
                behavior: 'smooth'
            });
        }
    };

    const sections = [
        { id: 'overview', label: '1. Overview' },
        { id: 'steps', label: '2. USMLE Steps' },
        { id: 'eligibility', label: '3. Eligibility' },
        { id: 'registration', label: '4. Registration Process' },
        { id: 'pattern', label: '5. Exam Pattern' },
        { id: 'preparation', label: '6. Preparation Tips' },
        { id: 'faq', label: '7. FAQs' }
    ];

    const usmleSteps = [
        {
            step: 'Step 1',
            title: 'Basic Science',
            desc: 'Tests foundational medical knowledge from basic sciences, including Anatomy, Biochemistry, Pathology, Pharmacology, Physiology, and Microbiology.',
            duration: '8 hours',
            questions: '280 MCQs',
            color: 'bg-blue-600'
        },
        {
            step: 'Step 2 CK',
            title: 'Clinical Knowledge',
            desc: 'Assesses clinical knowledge and understanding needed for patient care under supervision, focusing on diagnosis and management.',
            duration: '9 hours',
            questions: '318 MCQs',
            color: 'bg-cyan-600'
        },
        {
            step: 'Step 2 CS',
            title: 'Clinical Skills',
            desc: 'Evaluates ability to gather information from patients, perform physical exams, and communicate findings. (Currently suspended)',
            duration: '8 hours',
            questions: '12 Patient Encounters',
            color: 'bg-purple-600'
        },
        {
            step: 'Step 3',
            title: 'Clinical Practice',
            desc: 'Tests ability to apply medical knowledge in ambulatory settings and manage patient care independently.',
            duration: '2 days (16 hours total)',
            questions: '465 MCQs + CCS Cases',
            color: 'bg-slate-700'
        }
    ];

    const keyFeatures = [
        {
            icon: <BiGlobe className="text-3xl" />,
            title: 'Internationally Recognized',
            desc: 'Required for medical licensure to practice in the United States'
        },
        {
            icon: <BiBookBookmark className="text-3xl" />,
            title: 'Comprehensive Assessment',
            desc: 'Covers basic sciences, clinical knowledge, and practical skills'
        },
        {
            icon: <BiCalendar className="text-3xl" />,
            title: 'Flexible Scheduling',
            desc: 'Tests available year-round at Prometric centers worldwide'
        },
        {
            icon: <BiCheckCircle className="text-3xl" />,
            title: 'Multiple Attempts',
            desc: 'Candidates can retake exams with appropriate waiting periods'
        }
    ];

    return (
        <main className="overflow-hidden bg-slate-50 min-h-screen">
            {/* Page Title */}
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
                            USMLE <span className="text-brand-secondary">United States Medical Licensing Examination</span>
                        </h1>
                        <ul className="flex items-center justify-center xl:justify-start gap-4 text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                            <li><Link to="/" className="hover:text-brand-primary text-white transition-colors">Home</Link></li>
                            <li className="text-slate-600">/</li>
                            <li><Link to="/exams" className="hover:text-brand-primary text-white transition-colors">Exams</Link></li>
                            <li className="text-slate-600">/</li>
                            <li className="text-brand-secondary">USMLE</li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            <section className="py-12 relative -mt-10 z-20">
                <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                    <div className="space-y-8">
                        {/* Overview Section */}
                        <motion.div
                            id="overview"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-[40px] p-10 md:p-16 shadow-premium border border-slate-100"
                        >
                            <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">
                                What is <span className="text-brand-primary">USMLE?</span>
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                The United States Medical Licensing Examination (USMLE) is a three-step examination for medical licensure in the United States. It assesses a physician's ability to apply knowledge, concepts, and principles that are important in health and disease and that constitute the basis of safe and effective patient care.
                            </p>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                The USMLE is sponsored by the Federation of State Medical Boards (FSMB) and the National Board of Medical Examiners (NBME). It is required for obtaining a medical license to practice in the United States.
                            </p>
                        </motion.div>

                        {/* Key Features */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {keyFeatures.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-white rounded-[32px] p-8 shadow-premium border border-slate-100 text-center hover:shadow-2xl transition-all"
                                >
                                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-lg font-black text-slate-900 mb-3 uppercase tracking-tight">{feature.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>


                        {/* USMLE Steps */}
                        <div id="steps" className="bg-white rounded-[40px] p-10 md:p-16 shadow-premium border border-slate-100">
                            <h2 className="text-3xl font-black text-slate-900 mb-10 uppercase tracking-tight">
                                USMLE <span className="text-brand-primary">Steps</span>
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {usmleSteps.map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="bg-slate-50 rounded-[32px] p-8 border border-slate-100 hover:shadow-xl transition-all group"
                                    >
                                        <div className={`inline-block ${item.color} text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-wider mb-4`}>
                                            {item.step}
                                        </div>
                                        <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight group-hover:text-brand-primary transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed mb-6">{item.desc}</p>
                                        <div className="flex flex-col gap-2 text-sm">
                                            <div className="flex items-center justify-between">
                                                <span className="text-slate-500 font-bold">Duration:</span>
                                                <span className="text-slate-900 font-black">{item.duration}</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-slate-500 font-bold">Questions:</span>
                                                <span className="text-slate-900 font-black">{item.questions}</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Eligibility */}
                        <div id="eligibility" className="bg-white rounded-[40px] p-10 md:p-16 shadow-premium border border-slate-100">
                            <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">
                                Eligibility <span className="text-brand-primary">Criteria</span>
                            </h2>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4">
                                    <BiCheckCircle className="text-brand-primary text-2xl flex-shrink-0 mt-1" />
                                    <p className="text-slate-600 text-lg">Graduate from a medical school listed in the World Directory of Medical Schools (WDMS)</p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <BiCheckCircle className="text-brand-primary text-2xl flex-shrink-0 mt-1" />
                                    <p className="text-slate-600 text-lg">Currently enrolled in or graduated from an LCME or AOA accredited U.S. or Canadian medical school</p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <BiCheckCircle className="text-brand-primary text-2xl flex-shrink-0 mt-1" />
                                    <p className="text-slate-600 text-lg">Medical degree must be equivalent to an MD or DO degree granted in the U.S.</p>
                                </li>
                            </ul>
                        </div>

                        {/* Registration */}
                        <div id="registration" className="bg-white rounded-[40px] p-10 md:p-16 shadow-premium border border-slate-100">
                            <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">
                                Registration <span className="text-brand-primary">Process</span>
                            </h2>
                            <div className="space-y-6">
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center font-black text-xl flex-shrink-0">1</div>
                                    <div>
                                        <h3 className="text-xl font-black text-slate-900 mb-2">Create USMLE Account</h3>
                                        <p className="text-slate-600">Register at the USMLE website and create your USMLE/ECFMG identification number</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center font-black text-xl flex-shrink-0">2</div>
                                    <div>
                                        <h3 className="text-xl font-black text-slate-900 mb-2">Submit Application</h3>
                                        <p className="text-slate-600">Complete the online application and pay the examination fee</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center font-black text-xl flex-shrink-0">3</div>
                                    <div>
                                        <h3 className="text-xl font-black text-slate-900 mb-2">Schedule Exam</h3>
                                        <p className="text-slate-600">Once approved, schedule your exam at a Prometric testing center</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Exam Pattern */}
                        <div id="pattern" className="bg-white rounded-[40px] p-10 md:p-16 shadow-premium border border-slate-100">
                            <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">
                                Exam <span className="text-brand-primary">Pattern</span>
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                USMLE uses computer-based testing with multiple-choice questions. Each step has different components and formats:
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-brand-secondary"></div>
                                    <span className="text-slate-600">Single one-best-answer multiple choice items</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-brand-secondary"></div>
                                    <span className="text-slate-600">Clinical case scenarios with patient presentations</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-brand-secondary"></div>
                                    <span className="text-slate-600">Computer-based case simulations (Step 3)</span>
                                </li>
                            </ul>
                        </div>

                        {/* Preparation Tips */}
                        <div id="preparation" className="bg-white rounded-[40px] p-10 md:p-16 shadow-premium border border-slate-100">
                            <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">
                                Preparation <span className="text-brand-primary">Tips</span>
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-slate-50 rounded-2xl p-6">
                                    <h4 className="font-black text-slate-900 mb-3 uppercase">Study Resources</h4>
                                    <p className="text-slate-600 text-sm">Use First Aid, UWorld, Pathoma, and official USMLE practice materials</p>
                                </div>
                                <div className="bg-slate-50 rounded-2xl p-6">
                                    <h4 className="font-black text-slate-900 mb-3 uppercase">Practice Tests</h4>
                                    <p className="text-slate-600 text-sm">Take NBME practice exams and analyze your weak areas</p>
                                </div>
                                <div className="bg-slate-50 rounded-2xl p-6">
                                    <h4 className="font-black text-slate-900 mb-3 uppercase">Time Management</h4>
                                    <p className="text-slate-600 text-sm">Plan 3-6 months of dedicated study time for each step</p>
                                </div>
                                <div className="bg-slate-50 rounded-2xl p-6">
                                    <h4 className="font-black text-slate-900 mb-3 uppercase">Join Study Groups</h4>
                                    <p className="text-slate-600 text-sm">Connect with other students for peer learning and support</p>
                                </div>
                            </div>
                        </div>

                        {/* FAQs */}
                        <div id="faq" className="bg-white rounded-[40px] p-10 md:p-16 shadow-premium border border-slate-100">
                            <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tight">
                                Frequently Asked <span className="text-brand-primary">Questions</span>
                            </h2>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-lg font-black text-slate-900 mb-2">Q: Can international medical graduates take USMLE?</h4>
                                    <p className="text-slate-600">A: Yes, international medical graduates (IMGs) can take USMLE if they meet eligibility requirements through ECFMG certification.</p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-black text-slate-900 mb-2">Q: How much does USMLE cost?</h4>
                                    <p className="text-slate-600">A: Step 1 and Step 2 CK cost $1,010 each. Step 3 costs vary by state ($895-$1,375).</p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-black text-slate-900 mb-2">Q: How long are USMLE scores valid?</h4>
                                    <p className="text-slate-600">A: There is no expiration date for USMLE Step scores, but some residency programs may have preferences.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default USMLE;
