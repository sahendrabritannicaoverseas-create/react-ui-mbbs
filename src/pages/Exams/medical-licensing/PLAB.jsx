import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { pageTitleBg, pageTitleShape } from '../../../assets/images';
import { BiPlus, BiMinus, BiListUl, BiCheckCircle, BiBookBookmark, BiCalendar, BiGlobe, BiRightArrowAlt } from 'react-icons/bi';

const PLAB = () => {
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
        { id: 'overview', label: '1. PLAB Overview' },
        { id: 'components', label: '2. PLAB Components' },
        { id: 'eligibility', label: '3. Eligibility Criteria' },
        { id: 'registration', label: '4. Registration Process' },
        { id: 'pattern', label: '5. Exam Pattern' },
        { id: 'preparation', label: '6. Preparation Strategy' },
        { id: 'costs', label: '7. Costs & Fees' },
        { id: 'faq', label: '8. FAQs' }
    ];

    const keyHighlights = [
        {
            icon: <BiGlobe className="text-3xl" />,
            title: 'UK Medical Licensing',
            desc: 'Required for international medical graduates to practice in the UK'
        },
        {
            icon: <BiBookBookmark className="text-3xl" />,
            title: 'Two-Part Exam',
            desc: 'PLAB 1 (Knowledge) and PLAB 2 (Clinical Skills)'
        },
        {
            icon: <BiCalendar className="text-3xl" />,
            title: 'Multiple Attempts',
            desc: 'Up to 4 attempts for PLAB 1 and 4 attempts for PLAB 2'
        },
        {
            icon: <BiCheckCircle className="text-3xl" />,
            title: 'GMC Registration',
            desc: 'Successful candidates can register with General Medical Council'
        }
    ];

    const plabComponents = [
        {
            name: 'PLAB 1',
            title: 'Knowledge Assessment',
            desc: 'A computer-based test that assesses your knowledge and understanding of medicine in 12 clinical areas. Tests the application of knowledge to clinical situations.',
            format: '180 Multiple Choice Questions',
            duration: '3 Hours',
            locations: 'Multiple international centers',
            color: 'bg-blue-600'
        },
        {
            name: 'PLAB 2',
            title: 'Clinical & Communication Skills',
            desc: 'An Objective Structured Clinical Examination (OSCE) that tests your clinical and communication skills through practical scenarios with simulated patients.',
            format: '16 OSCE Stations',
            duration: '3.5 Hours (approx)',
            locations: 'Manchester, UK only',
            color: 'bg-purple-600'
        }
    ];

    const clinicalAreas = [
        'Cardiovascular System',
        'Respiratory System',
        'Gastroenterology & Nutrition',
        'Renal & Urology',
        'Endocrine System',
        'Neurological System',
        'Musculoskeletal System',
        'Dermatology',
        'Eyes & ENT',
        'Reproductive System',
        'Psychiatry',
        'Children & Young People'
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
                            PLAB
                        </h1>
                        <ul className="flex items-center justify-center xl:justify-start gap-4 text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                            <li><Link to="/" className="hover:text-brand-primary text-white transition-colors">Home</Link></li>
                            <li className="text-slate-600">/</li>
                            <li><Link to="/exams" className="hover:text-brand-primary text-white transition-colors">Exams</Link></li>
                            <li className="text-slate-600">/</li>
                            <li className="text-brand-secondary">PLAB</li>
                        </ul>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default PLAB;
