import React from 'react';
import { motion } from 'framer-motion';
import { pageTitleBg, pageTitleShape } from '../assets/images';
import { BiRightArrowAlt, BiCheckCircle, BiHeadphone, BiFile, BiIdCard, BiSolidPlane, BiHomeHeart, BiUserCheck } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const AdmissionProcess = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, ease: "easeOut" }
    };

    const steps = [
        {
            icon: <BiHeadphone className="text-4xl" />,
            title: "Expert Counseling",
            desc: "The journey begins with a detailed session where our experts understand your career goals, budget, and academic background to suggest the best countries and universities.",
            color: "bg-blue-500"
        },
        {
            icon: <BiUserCheck className="text-4xl" />,
            title: "University Selection",
            desc: "Shortlist the most suitable universities based on your preferences. We provide in-depth information about rankings, clinical exposure, and student life.",
            color: "bg-cyan-500"
        },
        {
            icon: <BiFile className="text-4xl" />,
            title: "Documentation",
            desc: "Our team assists you in gathering and organizing all necessary documents like mark sheets, passports, and medical certificates required for application.",
            color: "bg-indigo-500"
        },
        {
            icon: <BiCheckCircle className="text-4xl" />,
            title: "Application Submission",
            desc: "We handle the complete application process, ensuring all forms are correctly filled and submitted to your chosen universities within deadlines.",
            color: "bg-teal-500"
        },
        {
            icon: <BiIdCard className="text-4xl" />,
            title: "Visa Assistance",
            desc: "Once you receive your admission letter, we guide you through the visa application process, including file preparation and mock interviews.",
            color: "bg-brand-primary"
        },
        {
            icon: <BiSolidPlane className="text-4xl" />,
            title: "Pre-Departure Orientation",
            desc: "Before you fly, we conduct an orientation session to prepare you for the cultural transition and provide essential travel and packing tips.",
            color: "bg-brand-secondary"
        },
        {
            icon: <BiHomeHeart className="text-4xl" />,
            title: "Post-Arrival Support",
            desc: "Our support doesn't end at the airport. We assist with airport pickup, hostel accommodation, and local registration in the new country.",
            color: "bg-slate-900"
        }
    ];

    return (
        <main className="overflow-hidden bg-white">
            {/* Page Title Area */}
            <section className="relative pt-[120px] pb-[80px] md:pt-[160px] md:pb-[120px] bg-slate-900 overflow-hidden">
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

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <h2 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight leading-none">
                            Admission <span className="text-brand-primary">Process</span>
                        </h2>
                        <ul className="flex items-center gap-4 text-slate-400 font-black text-xs uppercase tracking-[0.3em]">
                            <li><Link to="/" className="hover:text-brand-secondary transition-colors">Home</Link></li>
                            <li className="text-slate-600">/</li>
                            <li className="text-brand-primary">Step-by-Step Guide</li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <motion.div {...fadeInUp}>
                        <span className="inline-block bg-brand-primary/10 text-brand-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                            How it works
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Your Path to Becoming a Doctor</h2>
                        <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium">
                            Starting your medical education abroad can be overwhelming. We've streamlined the entire process into easy steps to ensure you can stay focused on your studies while we handle the rest.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Process Steps Section */}
            <section className="py-20 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-slate-200 -translate-x-1/2 hidden lg:block"></div>

                        <div className="space-y-24">
                            {steps.map((step, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className={`flex flex-col lg:flex-row items-center gap-12 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                                >
                                    {/* Content Side */}
                                    <div className="w-full lg:w-1/2">
                                        <div className={`p-10 md:p-12 rounded-[48px] bg-white shadow-premium border border-white hover:border-brand-primary/20 transition-all group ${idx % 2 !== 0 ? 'lg:text-right' : ''}`}>
                                            <div className={`w-20 h-20 rounded-3xl ${step.color} text-white flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform ${idx % 2 !== 0 ? 'lg:ml-auto' : ''}`}>
                                                {step.icon}
                                            </div>
                                            <h3 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">Step {idx + 1}: {step.title}</h3>
                                            <p className="text-slate-600 text-lg leading-relaxed font-medium">
                                                {step.desc}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Center Point */}
                                    <div className="relative z-10 hidden lg:block">
                                        <div className={`w-12 h-12 rounded-full border-4 border-slate-50 shadow-xl ${step.color} flex items-center justify-center text-white font-black`}>
                                            {idx + 1}
                                        </div>
                                    </div>

                                    {/* Spacer Side */}
                                    <div className="w-full lg:w-1/2 hidden lg:block"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


        </main>
    );
};

export default AdmissionProcess;
