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
        </main>
    );
};

export default USMLE;
