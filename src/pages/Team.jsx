import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { pageTitleBg, pageTitleShape, team7, team8, team9, team13, team14, team15 } from '../assets/images';
import { BiRightArrowAlt, BiCalendarCheck } from 'react-icons/bi';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const teamMembers = [
    { name: 'Brooklyn Simmons', role: 'Legal Advisor', img: team7 },
    { name: 'Savannah Nguyen', role: 'Visa Coordinator', img: team8 },
    { name: 'Ronald Richards', role: 'General Manager', img: team9 },
    { name: 'Robert Fox', role: 'Visa Specialist', img: team13 },
    { name: 'Marvin McKinney', role: 'Immigration Expert', img: team14 },
    { name: 'Jane Cooper', role: 'Educational Consultant', img: team15 },
];

const Team = () => {
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
                    className="absolute left-0 bottom-0 pointer-events-none w-1/3 opacity-20"
                />

                <div className="container mx-auto px-6 relative z-10 text-center xl:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight">
                            Our <span className="text-brand-primary">Expert Team</span>
                        </h1>
                        <ul className="flex items-center justify-center xl:justify-start gap-4 text-slate-400 font-black text-xs uppercase tracking-[0.3em]">
                            <li><Link to="/" className="hover:text-brand-secondary transition-colors">Home</Link></li>
                            <li className="text-slate-600">/</li>
                            <li className="text-brand-primary">Advisors</li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            <section className="py-32 bg-slate-50 relative">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
                <div className="container mx-auto px-6">
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
                    >
                        {teamMembers.map((member, idx) => (
                            <motion.div key={idx} variants={fadeInUp} className="group relative">
                                <div className="relative overflow-hidden rounded-[48px] shadow-premium aspect-[4/5] bg-slate-200 border-8 border-white group">
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    <div className="absolute bottom-10 left-10 right-10 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                        <div className="flex gap-4">
                                            {[
                                                { icon: <FaFacebookF />, href: '#' },
                                                { icon: <FaInstagram />, href: '#' },
                                                { icon: <FaTwitter />, href: '#' }
                                            ].map((social, sIdx) => (
                                                <a key={sIdx} href={social.href} className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand-secondary hover:text-slate-900 transition-all">
                                                    {social.icon}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-10 text-center">
                                    <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tight group-hover:text-brand-primary transition-colors">{member.name}</h3>
                                    <p className="text-brand-primary font-black uppercase text-[10px] tracking-[0.3em]">{member.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Join Team CTA */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        {...fadeInUp}
                        className="bg-slate-900 rounded-[56px] p-16 md:p-24 text-center relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-8 uppercase tracking-tighter">Want to Join <span className="text-brand-secondary">Our Mission?</span></h2>
                        <p className="text-slate-400 max-w-2xl mx-auto mb-12 font-medium">
                            We are always looking for passionate medical consultants and education experts to help students achieve their global career dreams.
                        </p>
                        <Link
                            to="/contact"
                            className="btn-primary py-5 !px-12 flex items-center gap-3 w-fit mx-auto !text-sm"
                        >
                            <BiCalendarCheck className="text-2xl" />
                            Apply for Career
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default Team;
