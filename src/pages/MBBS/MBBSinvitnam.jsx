import React from 'react';
import { motion } from 'framer-motion';
import { pageTitleBg, pageTitleShape, uniCrimea, uniDhaka, uniAma, uniAltinbas, uniMasha } from '../assets/images';
import { BiChevronRight, BiChat, BiSolidQuoteAltLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const MBBSAbroad = () => {
    const universities = [
        { name: 'Crimea Federal University', img: uniCrimea, desc: 'A top-choice Russian medical university offering globally recognized MBBS programs.' },
        { name: 'Dhaka National Medical College', img: uniDhaka, desc: 'Renowned for high-quality education and clinical exposure in Bangladesh.' },
        { name: 'AMA School of Medicine', img: uniAma, desc: 'Popular among Indian students for its US-pattern medical curriculum.' },
        { name: 'Altinbas University', img: uniAltinbas, desc: 'A prestigious Turkish institution with advanced medical programs.' },
        { name: 'MAHSA University', img: uniMasha, desc: 'Globally respected medical training in Malaysia with world-class facilities.' }
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
                    className="absolute right-0 bottom-0 pointer-events-none w-1/3 opacity-20"
                />

                <div className="container mx-auto px-6 relative z-10 text-center xl:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="flex flex-col items-center xl:items-start mb-10 text-center xl:text-left">
                            <span className="text-2xl sm:text-3xl md:text-4xl text-slate-400 font-medium uppercase tracking-widest mb-2">Study</span>
                            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-none">
                                MBBS  in Vitynam
                            </span>
                        </h1>
                        <ul className="flex items-center justify-center xl:justify-start gap-4 text-slate-500 font-black text-xs uppercase tracking-[0.3em]">
                            <li><Link to="/" className="hover:text-brand-secondary transition-colors">Home</Link></li>
                            <li className="text-slate-700">/</li>
                            <li className="text-brand-secondary">Global Institutions</li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* University Grid */}
            <section className="py-32 bg-slate-50 relative">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
                <div className="container mx-auto px-6">
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                    >
                        {universities.map((uni, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                whileHover={{ y: -10 }}
                                className="group bg-white rounded-[48px] shadow-premium hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white flex flex-col h-full"
                            >
                                <div className="relative h-72 overflow-hidden">
                                    <img
                                        src={uni.img}
                                        alt={uni.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="absolute top-6 right-6">
                                        <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white text-xl">
                                            <BiSolidQuoteAltLeft />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-10 text-center flex-grow flex flex-col items-center">
                                    <span className="text-brand-primary font-black uppercase text-[10px] tracking-[0.3em] mb-4">Elite Partner</span>
                                    <h3 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight group-hover:text-brand-primary transition-colors">{uni.name}</h3>
                                    <p className="text-slate-500 text-base leading-relaxed mb-10 flex-grow font-medium">
                                        {uni.desc}
                                    </p>
                                    <div className="pt-8 border-t border-slate-50 w-full flex justify-center">
                                        <Link
                                            to="#"
                                            className="w-14 h-14 rounded-full bg-slate-50 text-slate-900 flex items-center justify-center hover:bg-brand-primary hover:text-white hover:scale-110 transition-all duration-500 shadow-sm"
                                        >
                                            <BiChevronRight className="text-3xl" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Consultation Card */}
                        <motion.div
                            variants={fadeInUp}
                            className="bg-slate-900 rounded-[48px] p-12 flex flex-col items-center justify-center text-center text-white shadow-2xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-700"></div>
                            <div className="w-20 h-20 bg-brand-primary/10 rounded-[28px] flex items-center justify-center mb-10 text-4xl text-brand-primary border border-white/5 group-hover:rotate-12 transition-all">
                                <BiChat />
                            </div>
                            <h3 className="text-3xl font-black mb-6 uppercase tracking-tight">Confused?</h3>
                            <p className="mb-12 text-slate-400 font-medium text-lg leading-relaxed">Let our professional medical advisors find the perfect institution for your career goals.</p>
                            <Link
                                to="/contact"
                                className="bg-brand-secondary text-white w-full py-5 px-10 rounded-full font-black text-sm uppercase tracking-widest hover:bg-[#1E3A8A] transition-all shadow-xl flex items-center justify-center gap-3"
                            >
                                Free Consultation
                                <BiChevronRight className="text-2xl" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default MBBSAbroad;
