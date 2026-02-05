import React from 'react';
import { motion } from 'framer-motion';
import { pageTitleBg, pageTitleShape, uniCrimea, uniDhaka, uniAma, uniAltinbas, uniMasha } from '../../assets/images';
import { BiRightArrowAlt, BiChevronRight, BiPlusCircle, BiMapPin } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const MBBSVietnam = () => {
    const universities = [
        {
            name: 'Hanoi Medical University',
            slug: 'hanoi-medical-university',
            img: uniCrimea,
            desc: 'One of Vietnam\'s oldest and most prestigious medical institutions, known for excellence in medical education and research.',
            location: 'Hanoi, Vietnam',
            established: '1902',
            recognition: 'WHO, NMC, FAIMER Listed'
        },
        {
            name: 'Ho Chi Minh City University of Medicine and Pharmacy',
            slug: 'hcmc-university-medicine-pharmacy',
            img: uniDhaka,
            desc: 'A leading medical university in Southern Vietnam offering world-class MBBS programs with modern facilities.',
            location: 'Ho Chi Minh City, Vietnam',
            established: '1947',
            recognition: 'WHO, NMC, FAIMER Listed'
        },
        {
            name: 'Hue University of Medicine and Pharmacy',
            slug: 'hue-university-medicine-pharmacy',
            img: uniAma,
            desc: 'Located in the historic city of Hue, offering comprehensive medical education with strong clinical training.',
            location: 'Hue, Vietnam',
            established: '1957',
            recognition: 'WHO, NMC Listed'
        },
        {
            name: 'Can Tho University of Medicine and Pharmacy',
            slug: 'can-tho-university-medicine-pharmacy',
            img: uniAltinbas,
            desc: 'A prominent institution in the Mekong Delta region, known for quality medical education and affordable tuition.',
            location: 'Can Tho, Vietnam',
            established: '2002',
            recognition: 'WHO, NMC Listed'
        },
        {
            name: 'Thai Binh University of Medicine and Pharmacy',
            slug: 'thai-binh-university-medicine-pharmacy',
            img: uniMasha,
            desc: 'A well-established medical university offering MBBS programs with excellent practical training opportunities.',
            location: 'Thai Binh, Vietnam',
            established: '1968',
            recognition: 'WHO, NMC Listed'
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
            <section className="relative pt-[120px] pb-[80px] bg-slate-900 overflow-hidden">
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
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 uppercase tracking-tight">
                            MBBS Uzbekistan
                        </h2>
                        <ul className="flex items-center justify-center xl:justify-start gap-3 text-slate-400 font-semibold text-xs uppercase tracking-widest">
                            <li><Link to="/" className="hover:text-brand-secondary transition-colors">Home</Link></li>
                            <li className="text-slate-600">/</li>
                            <li className="text-brand-primary">Uzbekistan Universities</li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* University List */}
            <section className="py-16 bg-slate-50 relative">
                <div className="container mx-auto px-6">
                    <motion.div
                        {...fadeInUp}
                        className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 border-b border-slate-200 pb-6"
                    >
                        <div>
                            <span className="text-brand-primary font-bold text-[10px] uppercase tracking-widest mb-2 block">Premier Institutions</span>
                            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 uppercase tracking-tight">Top Medical <span className="gradient-text">Universities</span></h2>
                        </div>
                        <div className="text-slate-500 font-semibold bg-white px-4 py-1.5 rounded-full shadow-sm text-xs uppercase tracking-wide border border-slate-100">
                            {universities.length} Recognized Universities
                        </div>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {universities.map((uni, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-[24px] border border-slate-100 p-5 hover:shadow-lg transition-all duration-300 shadow-sm group"
                            >
                                <div className="h-44 rounded-[16px] overflow-hidden mb-5 relative">
                                    <img src={uni.img} alt={uni.name} className="w-full h-full object-cover" />
                                    <div className="absolute top-3 left-3 bg-slate-900/70 backdrop-blur-sm px-3 py-1 rounded-full text-white text-[10px] font-semibold flex items-center gap-1.5">
                                        <BiMapPin className="text-brand-secondary text-sm" />
                                        {uni.location}
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-brand-primary font-semibold text-[9px] uppercase tracking-wide bg-brand-primary/5 px-2 py-0.5 rounded-full">Est. {uni.established}</span>
                                    <span className="text-green-600 font-semibold text-[9px] uppercase tracking-wide bg-green-50 px-2 py-0.5 rounded-full">{uni.recognition.split(',')[0]}</span>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-brand-primary transition-colors leading-tight">{uni.name}</h3>
                                <p className="text-slate-500 text-sm mb-5 leading-relaxed line-clamp-2">
                                    {uni.desc}
                                </p>
                                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                                    <Link
                                        to={`/university/${uni.slug}`}
                                        className="text-brand-primary font-semibold text-xs uppercase tracking-wide inline-flex items-center gap-2 hover:text-[#1E3A8A] transition-all group/btn"
                                    >
                                        View Details
                                        <div className="w-6 h-6 rounded-full bg-brand-primary text-white flex items-center justify-center group-hover/btn:bg-[#1E3A8A] transition-all">
                                            <BiRightArrowAlt className="text-sm" />
                                        </div>
                                    </Link>
                                    <div className="flex gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary animate-pulse"></span>
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary opacity-50"></span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>


        </main>
    );
};

export default MBBSVietnam;
