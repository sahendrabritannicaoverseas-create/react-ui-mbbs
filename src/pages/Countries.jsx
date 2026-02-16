import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { pageTitleBg, pageTitleShape, imgKazakhstan, imgRussia, imgUzbekistan, imgPhilippines, imgGeorgia, imgEgypt, flagBangladeshIcon } from '../assets/images';
import { BiRightArrowAlt, BiCheck, BiChevronRight, BiCalendarCheck } from 'react-icons/bi';

const countriesData = [
    { id: 'vietnam', name: 'Vietnam', img: imgKazakhstan },
    { id: 'kazakhstan', name: 'Kazakhstan', img: imgKazakhstan },
    { id: 'russia', name: 'Russia', img: imgRussia },
    { id: 'uzbekistan', name: 'Uzbekistan', img: imgUzbekistan },
    { id: 'philippines', name: 'Philippines', img: imgPhilippines },
    { id: 'georgia', name: 'Georgia', img: imgGeorgia },
    { id: 'egypt', name: 'Egypt', img: imgEgypt },
    { id: 'bangladesh', name: 'Bangladesh', img: flagBangladeshIcon },
];

const Countries = () => {
    const { id } = useParams();

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

    // If no ID, show the list
    if (!id) {
        return (
            <div className="main-page-wrapper bg-white">
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

                    <div className="container mx-auto px-6 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-3xl"
                        >
                            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight">
                                Top <span className="text-brand-primary">Destinations</span>
                            </h1>
                            <ul className="flex items-center gap-4 text-slate-400 font-black text-xs uppercase tracking-[0.3em]">
                                <li><Link to="/" className="hover:text-brand-secondary transition-colors text-white">Home</Link></li>
                                <li className="text-slate-600">/</li>
                                <li className="text-brand-primary font-black">Choose Country</li>
                            </ul>
                        </motion.div>
                    </div>
                </section>

                <section className="py-32 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <motion.div
                            variants={staggerContainer}
                            initial="initial"
                            whileInView="whileInView"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
                        >
                            {countriesData.map((country) => (
                                <motion.div key={country.id} variants={fadeInUp}>
                                    <Link
                                        to={`/countries/${country.id}`}
                                        className="group relative h-[450px] rounded-[48px] overflow-hidden shadow-premium hover:shadow-2xl transition-all duration-700 block bg-slate-200 border-8 border-white"
                                    >
                                        <img
                                            src={country.img}
                                            alt={country.name}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent group-hover:from-brand-primary/90 transition-all duration-500"></div>

                                        <div className="absolute bottom-10 left-10 right-10">
                                            <span className="inline-block bg-brand-secondary text-slate-900 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.2em] mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                                Best Choice
                                            </span>
                                            <h3 className="text-3xl font-black text-white mb-2 uppercase tracking-tighter">{country.name}</h3>
                                            <div className="flex items-center gap-2 text-white/70 font-black text-[10px] uppercase tracking-[0.2em] translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                                <span>View Details</span>
                                                <BiRightArrowAlt className="text-lg text-brand-secondary" />
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>
            </div>
        );
    }

    // If ID exists, show details
    return (
        <div className="main-page-wrapper bg-white">
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

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <ul className="flex items-center gap-3 text-slate-400 font-black text-[10px] uppercase tracking-[0.2em] mb-6">
                                <li><Link to="/" className="hover:text-brand-primary text-white transition-colors">Home</Link></li>
                                <li><BiChevronRight className="text-slate-300" /></li>
                                <li><Link to="/countries" className="hover:text-brand-primary text-white transition-colors">Countries</Link></li>
                                <li><BiChevronRight className="text-slate-300" /></li>
                                <li className="text-brand-secondary">{id}</li>
                            </ul>
                            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">MBBS in <span className="text-brand-primary">{id}</span></h1>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-2 rounded-full shadow-sm border border-white/20"
                        >
                            <div className="bg-brand-primary text-white w-12 h-12 rounded-full flex items-center justify-center">
                                <BiCalendarCheck className="text-2xl" />
                            </div>
                            <div className="pr-6">
                                <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Admissions</p>
                                <p className="text-sm font-black text-white uppercase tracking-tight">Open for 2025</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        <motion.div
                            {...fadeInUp}
                            className="lg:col-span-8"
                        >
                            <div className="rounded-[48px] overflow-hidden mb-12 shadow-2xl border-8 border-slate-50 group relative">
                                <img src={imgKazakhstan} alt="hero" className="w-full h-[550px] object-cover transition-transform duration-1000 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                                <div className="absolute bottom-10 left-10">
                                    <span className="bg-brand-secondary text-slate-900 px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest">Featured Destination</span>
                                </div>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Why Choose <span className="text-brand-primary">{id}</span> for MBBS?</h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-12 font-medium">
                                Studying MBBS in {id} is a premier choice for students seeking international standards of medical education. With world-class infrastructure, English-taught programs, and globally recognized degrees (NMC, WHO approved), {id} offers an unparalleled learning environment.
                            </p>

                            <div className="bg-slate-50 rounded-[40px] p-12 border border-slate-100 mb-12 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-bl-full"></div>
                                <h3 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tight">Key Program Highlights</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        'Globally Recognized Degrees',
                                        'Direct Hospital Affiliations',
                                        'English Medium Curriculum',
                                        'High FMGE Success Rate',
                                        'Advanced Labs & Research',
                                        'Secure Campus Life'
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex gap-4 items-center bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:border-brand-primary/30 transition-colors">
                                            <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                                                <BiCheck className="text-brand-primary text-xl font-black" />
                                            </div>
                                            <span className="text-slate-800 font-bold text-sm uppercase tracking-tight">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-4"
                        >
                            <aside className="sticky top-32 space-y-10">
                                <div className="bg-white rounded-[40px] p-10 shadow-premium border border-slate-50">
                                    <h4 className="text-xl font-black text-slate-900 mb-8 uppercase tracking-widest relative pb-4 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-brand-secondary">Other Countries</h4>
                                    <div className="flex flex-col gap-5">
                                        {countriesData.filter(c => c.id !== id).slice(0, 5).map(country => (
                                            <Link
                                                key={country.id}
                                                to={`/countries/${country.id}`}
                                                className="flex items-center gap-5 p-3 rounded-2xl hover:bg-slate-50 transition-all no-underline group border border-transparent hover:border-slate-100"
                                            >
                                                <div className="w-14 h-14 rounded-xl overflow-hidden shadow-sm group-hover:scale-95 transition-transform">
                                                    <img src={country.img} alt={country.name} className="w-full h-full object-cover" />
                                                </div>
                                                <span className="font-black text-slate-800 uppercase tracking-tight text-sm group-hover:text-brand-primary transition-colors">{country.name}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </aside>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Countries;
