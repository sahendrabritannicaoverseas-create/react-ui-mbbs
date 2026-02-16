import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { pageTitleBg, pageTitleShape } from '../../../assets/images';
import { BiPlus, BiMinus, BiListUl, BiCheckCircle, BiBookBookmark, BiCalendar, BiGlobe, BiIdCard } from 'react-icons/bi';

const NEXT = () => {
    const [isTocOpen, setIsTocOpen] = useState(true);

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
        { id: 'overview', label: '1. NExT Overview' },
        { id: 'purpose', label: '2. Purpose & Objectives' },
        { id: 'components', label: '3. Exam Components' },
        { id: 'eligibility', label: '4. Eligibility Criteria' },
        { id: 'pattern', label: '5. Exam Pattern' },
        { id: 'implementation', label: '6. Implementation Timeline' },
        { id: 'preparation', label: '7. How to Prepare' },
        { id: 'faq', label: '8. FAQs' }
    ];

    const keyHighlights = [
        {
            icon: <BiGlobe className="text-3xl" />,
            title: 'Single Exit Exam',
            desc: 'Unified examination for medical licensure and PG admissions in India'
        },
        {
            icon: <BiBookBookmark className="text-3xl" />,
            title: 'Two-Step Process',
            desc: 'Step 1 for final year, Step 2 after internship completion'
        },
        {
            icon: <BiCalendar className="text-3xl" />,
            title: 'Multiple Attempts',
            desc: 'Conducted multiple times a year for greater flexibility'
        },
        {
            icon: <BiIdCard className="text-3xl" />,
            title: 'National Licensing',
            desc: 'Mandatory for practicing medicine anywhere in India'
        }
    ];

    const examComponents = [
        {
            step: 'NExT Step 1',
            title: 'Theory Assessment',
            desc: 'Conducted during the final year of MBBS. Tests theoretical knowledge across all medical subjects including basic sciences and clinical subjects.',
            when: 'Final Year MBBS',
            format: 'Computer-based MCQs',
            color: 'bg-blue-600'
        },
        {
            step: 'NExT Step 2',
            title: 'Clinical Skills & Practical',
            desc: 'Conducted after completion of internship. Assesses clinical skills, practical knowledge, and ability to apply medical knowledge in real scenarios.',
            when: 'Post-Internship',
            format: 'OSCE + Clinical Cases',
            color: 'bg-purple-600'
        }
    ];

    const objectives = [
        'Replace multiple entrance exams (NEET PG, FMGE) with a single unified examination',
        'Ensure uniform assessment standards for all medical graduates in India',
        'Test both theoretical knowledge and practical clinical skills comprehensively',
        'Enable license to practice and eligibility for postgraduate courses through one exam',
        'Reduce the burden of multiple examinations on medical students',
        'Maintain high standards of medical education and practice in India'
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
                            NExT <span className="text-brand-secondary">National Exit Test</span>
                        </h1>
                        <ul className="flex items-center justify-center xl:justify-start gap-4 text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                            <li><Link to="/" className="hover:text-brand-primary text-white transition-colors">Home</Link></li>
                            <li className="text-slate-600">/</li>
                            <li><Link to="/exams" className="hover:text-brand-primary text-white transition-colors">Exams</Link></li>
                            <li className="text-slate-600">/</li>
                            <li className="text-brand-secondary">NExT</li>
                        </ul>
                    </motion.div>
                </div>
            </section>

        </main>
    );
};

export default NEXT;
