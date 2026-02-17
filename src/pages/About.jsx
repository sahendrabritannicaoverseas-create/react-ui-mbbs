import React from 'react';
import { motion } from 'framer-motion';
import {
    pageTitleBg, pageTitleShape, aboutMainImg, iconFinished, shape44,
    media5, media6, media7, media8,
    flagAustria, flagNewZealand, flagChina, flagAfghanistan, flagBrazil, flagAustralia, flagColombia,
    team7, team8, team9
} from '../assets/images';
import { BiPlus, BiCheckCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Meta from '../components/common/Meta';

const About = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, ease: "easeOut" }
    };

    const staggerContainer = {
        initial: {},
        whileInView: { transition: { staggerChildren: 0.15 } }
    };

    return (
        <main className="overflow-hidden bg-white">
            <Meta
                title="About Us - 14+ Years of Excellence"
                description="We are a trusted educational consultancy with 14+ years of experience in guiding students for MBBS admission abroad."
            />
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

                <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <h2 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight">
                            About <span className="text-brand-primary">Us</span>
                        </h2>
                        <ul className="flex items-center gap-4 text-slate-400 font-black text-xs uppercase tracking-[0.3em]">
                            <li><Link to="/" className="hover:text-brand-secondary transition-colors">Home</Link></li>
                            <li className="text-slate-600">/</li>
                            <li className="text-brand-primary">Our Story</li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-8 md:py-12 relative">
                <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                        {/* Image Column */}
                        <motion.div
                            {...fadeInUp}
                            className="w-full lg:w-1/2 relative"
                        >
                            <div className="relative z-10 rounded-[48px] overflow-hidden shadow-2xl border-8 border-white group">
                                <img src={aboutMainImg} alt="About Us" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -z-10 -top-10 -left-10 w-40 h-40 bg-brand-primary/10 rounded-full blur-3xl"></div>
                            <div className="absolute -z-10 -bottom-10 -right-10 w-60 h-60 bg-brand-secondary/10 rounded-full blur-3xl"></div>

                            {/* Floating Stats */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                className="absolute -bottom-12 -right-8 bg-white shadow-premium rounded-[32px] p-8 flex items-center gap-6 border border-slate-50 hidden md:flex"
                            >
                                <div className="bg-brand-secondary/10 text-brand-secondary rounded-2xl w-16 h-16 flex items-center justify-center">
                                    <BiCheckCircle className="text-4xl" />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-black text-slate-900 leading-tight tracking-tight uppercase">14+ Years</h3>
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">Excellence in Admission</p>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Content Column */}
                        <div className="w-full lg:w-1/2">
                            <motion.div {...fadeInUp} className="mb-8">
                                <span className="inline-block bg-brand-primary/10 text-brand-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                                    Who We Are
                                </span>
                                <h2 className="text-3xl md:text-[56px] font-black text-slate-900 leading-[1] mb-8 uppercase tracking-tighter">
                                    Pioneering <span className="gradient-text">Medical Education</span> Abroad
                                </h2>
                                <p className="text-slate-600 text-lg leading-relaxed font-medium">
                                    Since our establishment, we've been dedicated to guiding aspiring medical professionals toward prestigious international universities. Our mission is to simplify the complex process of studying MBBS abroad, ensuring every student finds their perfect path to success.
                                </p>
                            </motion.div>

                            <motion.div
                                variants={staggerContainer}
                                initial="initial"
                                whileInView="whileInView"
                                viewport={{ once: true }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
                            >
                                {[
                                    { title: 'Global Recognition', desc: 'NMC & WHO Approved' },
                                    { title: '99% Success', desc: 'Visa Approval Rate' }
                                ].map((item, i) => (
                                    <motion.div key={i} variants={fadeInUp} className="bg-slate-50 rounded-[32px] p-8 border border-white hover:border-brand-primary/20 transition-colors shadow-sm">
                                        <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tight">{item.title}</h3>
                                        <p className="text-brand-primary font-black uppercase text-[10px] tracking-[0.2em]">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </motion.div>

                            <motion.div {...fadeInUp} className="flex flex-col md:flex-row items-center gap-8 pt-8 border-t border-slate-100">
                                <div className="flex -space-x-4">
                                    {[media5, media6, media7, media8].map((img, i) => (
                                        <div key={i} className="w-14 h-14 rounded-full border-4 border-white overflow-hidden shadow-lg">
                                            <img src={img} alt="user" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                    <div className="w-14 h-14 rounded-full border-4 border-white bg-brand-primary flex items-center justify-center shadow-lg text-white">
                                        <BiPlus className="text-xl" />
                                    </div>
                                </div>
                                <div className="text-center md:text-left">
                                    <h4 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">15k+ Students</h4>
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">Placed in Top Universities Globally</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Countries Section */}
            <section className="py-8 md:py-12 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary/5 -skew-x-12 translate-x-1/2 blur-3xl"></div>
                <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
                    <motion.div {...fadeInUp} className="text-center mb-12">
                        <span className="inline-block bg-brand-secondary/10 text-brand-secondary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                            Global Reach
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-tight">Our Destination Network</h2>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className="flex flex-wrap justify-center gap-6"
                    >
                        {[
                            { name: 'Austria', img: flagAustria },
                            { name: 'New Zealand', img: flagNewZealand },
                            { name: 'China', img: flagChina },
                            { name: 'Afghanistan', img: flagAfghanistan },
                            { name: 'Brazil', img: flagBrazil },
                            { name: 'Australia', img: flagAustralia },
                            { name: 'Colombia', img: flagColombia }
                        ].map(country => (
                            <motion.div
                                key={country.name}
                                variants={fadeInUp}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="bg-white px-10 py-6 rounded-[24px] shadow-sm flex items-center gap-5 border border-white hover:border-brand-primary/20 transition-all min-w-[220px]"
                            >
                                <img
                                    src={country.img}
                                    alt={country.name}
                                    className="w-10 h-10 rounded-full object-cover shadow-md border-2 border-slate-50"
                                />
                                <span className="font-black text-slate-900 uppercase tracking-wider text-sm">{country.name}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Simple Team Section */}
            <section className="py-8 md:py-12">
                <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-12">
                        <motion.div {...fadeInUp}>
                            <span className="inline-block bg-brand-primary/10 text-brand-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                                Expert Advisors
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-slate-900 uppercase tracking-tighter leading-none">Our Support <span className="text-brand-primary">Team</span></h2>
                        </motion.div>
                        <motion.p {...fadeInUp} transition={{ delay: 0.2 }} className="text-slate-500 text-lg leading-relaxed font-medium">
                            Our team of experienced counsellors and legal experts walk with you through every step of your international medical education journey.
                        </motion.p>
                    </div>

                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-10"
                    >
                        {[
                            { name: 'Brooklyn Simmons', role: 'Legal Advisor', id: 7, img: team7 },
                            { name: 'Savannah Nguyen', role: 'Visa Coordinator', id: 8, img: team8 },
                            { name: 'Ronald Richards', role: 'General Manager', id: 9, img: team9 }
                        ].map(member => (
                            <motion.div
                                key={member.id}
                                variants={fadeInUp}
                                className="group relative overflow-hidden rounded-[40px] bg-slate-50 border border-slate-100 hover:shadow-2xl transition-all duration-500"
                            >
                                <div className="h-[480px] overflow-hidden relative">
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                                <div className="p-10 text-center bg-white relative z-10 -mt-20 mx-10 rounded-[32px] shadow-lg group-hover:-translate-y-4 transition-transform duration-500 border border-slate-50">
                                    <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tight">{member.name}</h3>
                                    <p className="text-brand-primary font-black uppercase text-[10px] tracking-[0.2em]">{member.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default About;
