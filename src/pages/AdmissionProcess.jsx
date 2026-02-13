import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    BiSend,
    BiListUl,
    BiPlus,
    BiMinus,
    BiBadgeCheck
} from 'react-icons/bi';
import { Link } from 'react-router-dom';

const AdmissionProcess = () => {
    const [isTocOpen, setIsTocOpen] = React.useState(true);
    const [formData, setFormData] = React.useState({
        fullName: '',
        email: '',
        mobile: '',
        neetScore: '',
        pcbPercentage: '',
        passport: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        alert("Success! We will contact you soon.");
    };

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, ease: "easeOut" }
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 120;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
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
            <section className="relative pt-[120px] pb-[40px] md:pt-[160px] md:pb-[60px] bg-slate-900 overflow-hidden text-left">
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

                <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-2xl md:text-4xl lg:text-4xl font-black text-white mb-6 uppercase tracking-tight leading-none">
                            Admission <span className="text-brand-secondary">Process</span>
                        </h1>
                        <ul className="flex items-center gap-3 text-slate-400 font-black text-xs uppercase tracking-[0.3em]">
                            <li><Link to="/" className="hover:text-brand-secondary transition-colors">Home</Link></li>
                            <li className="text-slate-400">/</li>
                            <li className="text-brand-secondary">Step-by-Step Guide</li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Area */}
            <section className="py-8 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Full Width Content Area */}
                        <div className="lg:col-span-12 space-y-8 relative">

                            {/* Dynamic Apply for MBBS in Vietnam Hero Section */}
                            <motion.section
                                {...fadeInUp}
                                className="bg-white rounded-[40px] shadow-premium border border-slate-50 overflow-hidden relative group/hero"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[500px]">
                                    {/* Left Side Content */}
                                    <div className="p-6 lg:p-10 flex flex-col justify-center bg-gradient-to-br from-white via-slate-50 to-brand-primary/5 relative overflow-hidden">
                                        <div className="relative z-10">
                                            <motion.div
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                className="flex items-center gap-3 mb-6"
                                            >
                                                <span className="w-12 h-[2px] bg-brand-primary"></span>
                                                <span className="text-brand-primary font-black uppercase tracking-[0.4em] text-[10px]">Direct Admission 2026</span>
                                            </motion.div>

                                            <h2 className="text-2xl md:text-5xl font-black text-slate-900 mb-6 leading-[1.1]">
                                                Apply for <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">MBBS in Vietnam</span>
                                            </h2>

                                            <div className="inline-block bg-brand-secondary text-white px-6 py-2.5 rounded-xl text-xs md:text-sm font-black mb-8 shadow-xl shadow-brand-secondary/30 transform -rotate-1 group-hover/hero:rotate-0 transition-all duration-500 uppercase tracking-widest">
                                                Start Your Medical Career Abroad!
                                            </div>

                                            <div className="space-y-5">
                                                {[
                                                    { text: "NEET Score 137+", icon: <BiBadgeCheck className="text-2xl" /> },
                                                    { text: "50% in PCB", icon: <BiBadgeCheck className="text-2xl" /> },
                                                    { text: "No Entrance Exam", icon: <BiBadgeCheck className="text-2xl" /> }
                                                ].map((item, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        whileHover={{ x: 10 }}
                                                        className="flex items-center gap-4 group/item"
                                                    >
                                                        <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-brand-primary group-hover/item:bg-brand-primary group-hover/item:text-white transition-all duration-300">
                                                            <div className="text-xl">
                                                                {item.icon}
                                                            </div>
                                                        </div>
                                                        <span className="text-base font-bold text-slate-700 group-hover/item:text-brand-primary transition-colors">{item.text}</span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>

                                        <BiSolidPlane className="absolute -bottom-10 -left-10 text-[250px] text-slate-100 -rotate-12 pointer-events-none opacity-50" />
                                    </div>

                                    {/* Right Side Form */}
                                    <div className="bg-white p-6 lg:p-10 relative overflow-hidden flex items-center justify-center border-t lg:border-t-0 lg:border-l border-slate-100">
                                        <div className="relative z-10 w-full">
                                            <div className="bg-white rounded-[32px] p-6 lg:p-8 shadow-premium border border-slate-50">
                                                <form onSubmit={handleSubmit} className="space-y-4">
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                        <input
                                                            name="fullName"
                                                            value={formData.fullName}
                                                            onChange={handleInputChange}
                                                            type="text"
                                                            required
                                                            placeholder="Full Name"
                                                            className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-brand-primary/50 transition-all font-medium"
                                                        />
                                                        <input
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleInputChange}
                                                            type="email"
                                                            required
                                                            placeholder="Email Address"
                                                            className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-brand-primary/50 transition-all font-medium"
                                                        />
                                                    </div>
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                        <input
                                                            name="mobile"
                                                            value={formData.mobile}
                                                            onChange={handleInputChange}
                                                            type="tel"
                                                            required
                                                            placeholder="Mobile Number"
                                                            className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-brand-primary/50 transition-all font-medium"
                                                        />
                                                        <input
                                                            name="neetScore"
                                                            value={formData.neetScore}
                                                            onChange={handleInputChange}
                                                            type="text"
                                                            placeholder="NEET Score"
                                                            className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-brand-primary/50 transition-all font-medium"
                                                        />
                                                    </div>
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                        <input
                                                            name="pcbPercentage"
                                                            value={formData.pcbPercentage}
                                                            onChange={handleInputChange}
                                                            type="text"
                                                            placeholder="12th PCB %"
                                                            className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-brand-primary/50 transition-all font-medium"
                                                        />
                                                        <input
                                                            name="passport"
                                                            value={formData.passport}
                                                            onChange={handleInputChange}
                                                            type="text"
                                                            placeholder="Passport (Opt)"
                                                            className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-brand-primary/50 transition-all font-medium"
                                                        />
                                                    </div>
                                                    <textarea
                                                        name="message"
                                                        value={formData.message}
                                                        onChange={handleInputChange}
                                                        placeholder="Additional Message"
                                                        rows="2"
                                                        className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-brand-primary/50 transition-all font-medium mt-2"
                                                    ></textarea>
                                                    <button
                                                        type="submit"
                                                        className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-brand-primary to-brand-primary/80 hover:from-brand-secondary hover:to-brand-secondary text-white font-black uppercase tracking-[0.2em] shadow-xl shadow-brand-primary/20 transform hover:-translate-y-1 transition-all active:scale-95 group flex items-center justify-center gap-4 text-xs mt-6"
                                                    >
                                                        Submit Application
                                                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/40 transition-colors">
                                                            <BiSend className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                        </div>
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.section>

                            {/* Premium Collapsible Table of Contents Section */}
                            <motion.section
                                {...fadeInUp}
                                className="bg-white rounded-[32px] p-6 lg:p-8 border-color-brand-secondary border-slate-100 shadow-premium transition-all duration-500 overflow-hidden relative"
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none"></div>

                                <div className="relative z-10">
                                    <div
                                        className="flex items-center justify-between cursor-pointer group"
                                        onClick={() => setIsTocOpen(!isTocOpen)}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary shadow-inner group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
                                                <BiListUl className="text-2xl" />
                                            </div>
                                            <div>
                                                <h2 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight">
                                                    Table of <span className="text-brand-primary uppercase">Contents</span>
                                                </h2>
                                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mt-1">Quick Navigation Guide</p>
                                            </div>
                                        </div>
                                        <div className="w-10 h-10 bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 rounded-xl transition-all group-hover:bg-brand-primary group-hover:text-white group-hover:border-transparent group-hover:shadow-lg">
                                            {isTocOpen ? <BiMinus className="text-xl" /> : <BiPlus className="text-xl" />}
                                        </div>
                                    </div>

                                    <AnimatePresence>
                                        {isTocOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pt-8 mt-8 border-t border-slate-100">
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                                                        {sections.map((section, idx) => (
                                                            <div key={section.id} className="flex items-start gap-4 group">
                                                                <span className="text-brand-primary/40 font-black text-sm mt-1">0{idx + 1}.</span>
                                                                <button
                                                                    onClick={() => scrollToSection(section.id)}
                                                                    className="text-slate-700 hover:text-brand-primary hover:translate-x-1 transition-all text-left text-[15px] font-bold tracking-tight py-1"
                                                                >
                                                                    {section.label.includes('. ') ? section.label.split('. ')[1] : section.label}
                                                                </button>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.section>

                            <div className="relative">
                                {/* Process Thread Line (Desktop) */}
                                <div className="absolute left-[3.5rem] top-10 bottom-24 w-0.5 bg-slate-200 hidden md:block"></div>

                                {/* Steps Mapping */}
                                <div className="space-y-6">
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
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AdmissionProcess;
