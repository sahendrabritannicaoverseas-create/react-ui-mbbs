import React from 'react';
import { motion } from 'framer-motion';
import { pageTitleBg, pageTitleShape, uniCrimea, uniDhaka, uniAma, uniAltinbas, uniMasha } from '../../assets/images';
import { BiRightArrowAlt, BiChevronRight, BiPlusCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Universities = () => {
    const categories = [
        {
            country: 'Russia',
            unis: [
                { name: 'Crimea Federal University', img: uniCrimea, desc: 'Globally recognized degree with top-tier infrastructure.' },
                { name: 'Bashkir State Medical University', img: uniCrimea, desc: 'One of the oldest and most respected universities in Russia.' }
            ]
        },
        {
            country: 'Bangladesh',
            unis: [
                { name: 'Dhaka National Medical College', img: uniDhaka, desc: 'High clinical exposure and affordable medical education.' }
            ]
        },
        {
            country: 'Philippines',
            unis: [
                { name: 'AMA School of Medicine', img: uniAma, desc: 'English medium US-pattern curriculum popular with Indians.' }
            ]
        }
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
                    className="absolute right-0 bottom-0 pointer-events-none w-1/3"
                />

                <div className="container mx-auto px-6 relative z-10 text-center xl:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight">
                            Medical <span className="text-brand-primary">Universities</span>
                        </h2>
                        <ul className="flex items-center justify-center xl:justify-start gap-4 text-slate-400 font-black text-xs uppercase tracking-[0.3em]">
                            <li><Link to="/" className="hover:text-brand-secondary transition-colors">Home</Link></li>
                            <li className="text-slate-600">/</li>
                            <li className="text-brand-primary">Our Network</li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* University List */}
            <section className="py-32 bg-slate-50 relative">
                <div className="container mx-auto px-6">
                    {categories.map((cat, idx) => (
                        <div key={idx} className="mb-24 last:mb-0">
                            <motion.div
                                {...fadeInUp}
                                className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16 border-b border-slate-200 pb-10"
                            >
                                <div>
                                    <span className="text-brand-primary font-black text-[10px] uppercase tracking-[0.3em] mb-3 block">Premier Institutions</span>
                                    <h2 className="text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-tighter">MBBS in <span className="gradient-text">{cat.country}</span></h2>
                                </div>
                                <div className="text-slate-400 font-bold bg-white px-6 py-2 rounded-full shadow-sm text-sm uppercase tracking-wide border border-slate-100">
                                    {cat.unis.length} Recognized Universities
                                </div>
                            </motion.div>

                            <motion.div
                                variants={staggerContainer}
                                initial="initial"
                                whileInView="whileInView"
                                viewport={{ once: true }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                            >
                                {cat.unis.map((uni, uIdx) => (
                                    <motion.div
                                        key={uIdx}
                                        variants={fadeInUp}
                                        whileHover={{ y: -10 }}
                                        className="bg-white rounded-[44px] border border-white p-10 hover:shadow-premium transition-all duration-500 shadow-sm group"
                                    >
                                        <div className="h-60 rounded-[32px] overflow-hidden mb-8 relative">
                                            <img src={uni.img} alt={uni.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        </div>
                                        <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight group-hover:text-brand-primary transition-colors">{uni.name}</h3>
                                        <p className="text-slate-500 text-base mb-8 leading-relaxed font-medium">
                                            {uni.desc}
                                        </p>
                                        <div className="flex items-center justify-between pt-8 border-t border-slate-50">
                                            <Link
                                                to="#"
                                                className="text-slate-900 font-black text-[10px] uppercase tracking-[0.3em] inline-flex items-center gap-3 hover:text-brand-primary transition-all group/btn"
                                            >
                                                Inquiry
                                                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover/btn:bg-brand-primary group-hover/btn:text-white transition-all">
                                                    <BiRightArrowAlt className="text-lg" />
                                                </div>
                                            </Link>
                                            <div className="flex gap-1">
                                                <span className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse"></span>
                                                <span className="w-2 h-2 rounded-full bg-brand-secondary opacity-50"></span>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </section>


        </main>
    );
};

export default Universities;
