import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { pageTitleBg, pageTitleShape } from '../../../assets/images';
import { BiPlus, BiMinus, BiListUl, BiCheckCircle, BiBookBookmark, BiCalendar, BiGlobe, BiIdCard } from 'react-icons/bi';

const FMGE = () => {
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
        { id: 'overview', label: '1. FMGE Overview' },
        { id: 'eligibility', label: '2. Eligibility Criteria' },
        { id: 'pattern', label: '3. Exam Pattern' },
        { id: 'syllabus', label: '4. Syllabus' },
        { id: 'registration', label: '5. Registration Process' },
        { id: 'preparation', label: '6. Preparation Strategy' },
        { id: 'faq', label: '7. FAQs' }
    ];

    const keyHighlights = [
        {
            icon: <BiGlobe className="text-3xl" />,
            title: 'Mandatory for FMGs',
            desc: 'Required for all Indian citizens with foreign medical degrees to practice in India'
        },
        {
            icon: <BiCalendar className="text-3xl" />,
            title: 'Twice Yearly',
            desc: 'Conducted in June and December every year by NBE'
        },
        {
            icon: <BiBookBookmark className="text-3xl" />,
            title: 'MCQ Format',
            desc: '300 Multiple Choice Questions covering all subjects'
        },
        {
            icon: <BiIdCard className="text-3xl" />,
            title: 'MCI Registration',
            desc: 'Successful candidates can register with NMC for practice'
        }
    ];

    const syllabusSubjects = [
        {
            subject: 'Anatomy',
            topics: ['General Anatomy', 'Upper Limb & Lower Limb', 'Thorax & Abdomen', 'Head & Neck', 'Neuroanatomy']
        },
        {
            subject: 'Physiology',
            topics: ['General Physiology', 'Blood & CVS', 'Respiratory System', 'GIT & Nutrition', 'Endocrinology']
        },
        {
            subject: 'Biochemistry',
            topics: ['Biomolecules', 'Enzymes & Metabolism', 'Clinical Biochemistry', 'Molecular Biology', 'Nutrition']
        },
        {
            subject: 'Pathology',
            topics: ['General Pathology', 'Systemic Pathology', 'Clinical Pathology', 'Haematology', 'Microbiology']
        },
        {
            subject: 'Pharmacology',
            topics: ['General Pharmacology', 'Autonomic Drugs', 'CVS & Renal Drugs', 'Antimicrobials', 'CNS Drugs']
        },
        {
            subject: 'Microbiology',
            topics: ['Bacteriology', 'Virology', 'Parasitology', 'Mycology', 'Immunology']
        },
        {
            subject: 'Forensic Medicine',
            topics: ['Medical Jurisprudence', 'Forensic Toxicology', 'Clinical Forensic Medicine', 'Thanatology']
        },
        {
            subject: 'Community Medicine',
            topics: ['Epidemiology', 'Health Programs', 'Biostatistics', 'Environmental Health', 'Occupational Health']
        },
        {
            subject: 'Medicine',
            topics: ['General Medicine', 'Cardiology', 'Respiratory Medicine', 'Gastroenterology', 'Nephrology']
        },
        {
            subject: 'Surgery',
            topics: ['General Surgery', 'Orthopaedics', 'ENT', 'Ophthalmology', 'Emergency Medicine']
        },
        {
            subject: 'Obstetrics & Gynaecology',
            topics: ['Obstetrics', 'Gynaecology', 'Family Planning', 'Infertility', 'High Risk Pregnancy']
        },
        {
            subject: 'Paediatrics',
            topics: ['Neonatology', 'Growth & Development', 'Nutrition', 'Infectious Diseases', 'Systemic Pediatrics']
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
                            FMGE
                        </h1>
                        <ul className="flex items-center justify-center xl:justify-start gap-4 text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                            <li><Link to="/" className="hover:text-brand-primary text-white transition-colors">Home</Link></li>
                            <li className="text-slate-600">/</li>
                            <li><Link to="/exams" className="hover:text-brand-primary text-white transition-colors">Exams</Link></li>
                            <li className="text-slate-600">/</li>
                            <li className="text-brand-secondary">FMGE</li>
                        </ul>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default FMGE;
