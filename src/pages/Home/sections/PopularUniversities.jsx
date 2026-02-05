import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BiMapPin, BiStar, BiCalendar, BiRightArrowAlt } from "react-icons/bi";
import {
    uniCrimea,
    uniDhaka,
    uniAma,
    uniAltinbas,
    uniMasha,
} from "../../../assets/images";

const PopularUniversities = () => {
    const universities = [
        {
            name: "Crimea Federal University",
            location: "Russia",
            img: uniCrimea,
        },
        {
            name: "Dhaka National Medical",
            location: "Bangladesh",
            img: uniDhaka,
        },
        {
            name: "AMA School of Medicine",
            location: "Philippines",
            img: uniAma,
        },
        {
            name: "Altinbas University",
            location: "Turkey",
            img: uniAltinbas,
        },
        { name: "MAHSA University", location: "Malaysia", img: uniMasha },
        {
            name: "Tbilisi State University",
            location: "Georgia",
            img: uniCrimea,
        },
    ];

    return (
        <section className="py-12 md:py-16 bg-slate-50">
            <div className="container mx-auto px-4 md:px-4 text-center">
                <h2 className="text-4xl md:text-[60px] font-semibold text-[#212529] mb-8">
                    Popular MBBS Universities
                </h2>
                <p className="text-[#212529]/70 text-[22px] leading-relaxed max-w-3xl mx-auto mb-20">
                    Discover top-ranked institutions offering world-class medical
                    education at affordable costs.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {universities.map((uni, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="premium-card group !p-0 overflow-hidden"
                        >
                            <div className="relative h-80 overflow-hidden">
                                <div className="absolute top-6 left-6 glass-card text-white text-xs font-black px-5 py-2.5 rounded-full z-10 uppercase tracking-widest flex items-center gap-2">
                                    <BiMapPin className="text-lg text-brand-secondary" />
                                    {uni.location}
                                </div>
                                <img
                                    src={uni.img}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                    alt={uni.name}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-10"></div>
                            </div>
                            <div className="p-5">
                                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-brand-primary transition-colors leading-tight line-clamp-2 min-h-[25px]">
                                    {uni.name}
                                </h3>

                                <div className="flex items-center gap-1 text-brand-secondary mb-8">
                                    {[...Array(5)].map((_, i) => (
                                        <BiStar key={i} className="fill-current text-xl" />
                                    ))}
                                    <span className="text-slate-400 ml-2 text-sm font-black tracking-widest">
                                        5.0 RATING
                                    </span>
                                </div>

                                <div className="flex justify-between items-center pt-8 border-t border-slate-100">
                                    <span className="text-slate-500 text-sm font-black flex items-center gap-3 tracking-widest">
                                        <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-brand-primary shadow-sm">
                                            <BiCalendar className="text-xl" />
                                        </div>
                                        SEPT INTAKE
                                    </span>
                                    <Link
                                        to="#"
                                        className="text-slate-300 hover:text-brand-primary transition-colors"
                                    >
                                        <BiRightArrowAlt className="bg-slate-50 rounded-full w-12 h-12 p-3 shadow-sm hover:scale-110 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-20">
                    <Link
                        to="/universities"
                        className="btn-primary px-10 py-4 font-bold text-base uppercase tracking-widest shadow-lg hover:bg-[#F5A716] hover:border-[#F5A716] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-full"
                    >
                        VIEW ALL UNIVERSITIES
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PopularUniversities;
