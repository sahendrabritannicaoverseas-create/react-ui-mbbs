import React from 'react';
import { motion } from 'framer-motion';
import { pageTitleBg, pageTitleShape } from '../assets/images';
import {
    BiRightArrowAlt,
    BiCheckCircle,
    BiHeadphone,
    BiFile,
    BiIdCard,
    BiSolidPlane,
    BiHomeHeart,
    BiUserCheck,
    BiSend
} from 'react-icons/bi';
import { Link } from 'react-router-dom';
import TableOfContents from '../components/common/TableOfContents';

const AdmissionProcess = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, ease: "easeOut" }
    };

    const sections = [
        { id: 'counseling', label: '1. Expert Counseling' },
        { id: 'selection', label: '2. University Selection' },
        { id: 'documentation', label: '3. Documentation' },
        { id: 'application', label: '4. Application Submission' },
        { id: 'visa', label: '5. Visa Assistance' },
        { id: 'orientation', label: '6. Pre-Departure Orientation' },
        { id: 'support', label: '7. Post-Arrival Support' },
        { id: 'apply', label: '8. Apply Now' },
    ];

    const steps = [
        {
            id: 'counseling',
            icon: <BiHeadphone className="text-3xl" />,
            title: "Expert Counseling",
            desc: "The journey begins with a detailed session where our experts understand your career goals, budget, and academic background to suggest the best countries and universities.",
            color: "bg-blue-500"
        },
        {
            id: 'selection',
            icon: <BiUserCheck className="text-3xl" />,
            title: "University Selection",
            desc: "Shortlist the most suitable universities based on your preferences. We provide in-depth information about rankings, clinical exposure, and student life.",
            color: "bg-cyan-500"
        },
        {
            id: 'documentation',
            icon: <BiFile className="text-3xl" />,
            title: "Documentation",
            desc: "Our team assists you in gathering and organizing all necessary documents like mark sheets, passports, and medical certificates required for application.",
            color: "bg-indigo-500"
        },
        {
            id: 'application',
            icon: <BiCheckCircle className="text-3xl" />,
            title: "Application Submission",
            desc: "We handle the complete application process, ensuring all forms are correctly filled and submitted to your chosen universities within deadlines.",
            color: "bg-teal-500"
        },
        {
            id: 'visa',
            icon: <BiIdCard className="text-3xl" />,
            title: "Visa Assistance",
            desc: "Once you receive your admission letter, we guide you through the visa application process, including file preparation and mock interviews.",
            color: "bg-brand-primary"
        },
        {
            id: 'orientation',
            icon: <BiSolidPlane className="text-3xl" />,
            title: "Pre-Departure Orientation",
            desc: "Before you fly, we conduct an orientation session to prepare you for the cultural transition and provide essential travel and packing tips.",
            color: "bg-brand-secondary"
        },
        {
            id: 'support',
            icon: <BiHomeHeart className="text-3xl" />,
            title: "Post-Arrival Support",
            desc: "Our support doesn't end at the airport. We assist with airport pickup, hostel accommodation, and local registration in the new country.",
            color: "bg-slate-900"
        }
    ];

    return (
        <main className="overflow-hidden bg-white">
            {/* Page Title Area */}
            <section className="relative pt-[100px] pb-[60px] md:pt-[120px] md:pb-[80px] bg-slate-900 overflow-hidden text-left">
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

                <div className="container mx-auto px-4 relative z-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <h2 className="text-1xl md:text-3xl font-black text-white mb-6 uppercase tracking-tight leading-none">
                            Admission <span className="text-brand-secondary">Process</span>
                        </h2>
                        <ul className="flex items-center gap-4 text-slate-400 font-black text-xs uppercase tracking-[0.3em]">
                            <li><Link to="/" className="hover:text-brand-secondary transition-colors">Home</Link></li>
                            <li className="text-slate-600">/</li>
                            <li className="text-brand-secondary">Step-by-Step Guide</li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Area */}
            <section className="py-10 pb-4 bg-slate-50">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                        {/* Sticky Sidebar */}
                        <aside className="lg:col-span-3 hidden lg:block sticky top-32">
                            <TableOfContents sections={sections} />

                        </aside>

                        {/* Content Area */}
                        <div className="lg:col-span-9 space-y-4 relative">
                            {/* Process Thread Line (Desktop) */}
                            <div className="absolute left-[3.5rem] top-10 bottom-24 w-0.5 bg-slate-200 hidden md:block"></div>

                            {/* Steps Mapping */}
                            {steps.map((step, idx) => (
                                <motion.section
                                    id={step.id}
                                    key={idx}
                                    {...fadeInUp}
                                    className="bg-white p-6 md:p-8 rounded-[32px] shadow-premium border border-white relative overflow-hidden group hover:border-brand-primary/20 transition-all text-left"
                                >
                                    <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                                        <div className={`w-14 h-14 md:w-16 md:h-16 rounded-[20px] ${step.color} text-white flex items-center justify-center flex-shrink-0 shadow-xl group-hover:scale-110 transition-transform z-20`}>
                                            {step.icon}
                                        </div>
                                        <div className="pt-2">
                                            <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-3 uppercase tracking-tight">
                                                Step {idx + 1}: {step.title}
                                            </h3>
                                            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                                                {step.desc}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Number Watermark */}
                                    <div className="absolute -bottom-6 -right-2 text-[120px] font-black text-slate-100 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all pointer-events-none select-none italic">
                                        0{idx + 1}
                                    </div>
                                </motion.section>
                            ))}

                        </div>
                    </div>
                </div>
            </section >
        </main >
    );
};

export default AdmissionProcess;
