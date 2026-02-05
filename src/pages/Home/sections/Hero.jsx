import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { heroBg } from "../../../assets/images";
import { BiPlayCircle } from "react-icons/bi";

const Hero = () => {
    return (
        <section className="relative min-h-[70vh] md:min-h-[90vh] flex flex-col justify-center items-center text-white pt-[120px] pb-[100px] md:pt-[140px] md:pb-[160px] overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-1"
                style={{
                    backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.95)), url(${heroBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            ></div>

            <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="flex items-center justify-center gap-4 mb-10 overflow-hidden">
                        <div className="w-12 h-px bg-slate-500"></div>
                        <span className="text-[12px] md:text-[16px] font-medium text-slate-300 tracking-wide text-center">
                            Trusted MBBS Abroad Guidance You Can Rely On
                        </span>
                        <div className="w-12 h-px bg-slate-500"></div>
                    </div>

                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[72px] font-semibold leading-[1.2] mb-6 md:mb-8 text-white max-w-4xl mx-auto px-4">
                        Study MBBS Abroad with Confidence
                    </h1>

                    <p className="text-base sm:text-xl md:text-2xl lg:text-[28px] max-w-3xl mx-auto mb-10 md:mb-14 text-white/70 font-medium leading-relaxed px-4">
                        From university selection to visa approval, we provide complete
                        end-to-end support to help you secure your MBBS seat abroad with
                        confidence.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-8">
                        <Link
                            to="/contact"
                            className="bg-[#F5A716] text-white px-10 py-4 rounded-[35px] font-bold text-base hover:bg-[#1E3A8A] transition-all shadow-xl"
                        >
                            Book a Consultation
                        </Link>
                        <button className="flex items-center gap-4 bg-white text-slate-900 rounded-full pl-8 pr-2 py-2 font-bold text-base hover:bg-[#F5A716] hover:text-white transition-all shadow-xl group">
                            Watch now
                            <div className="w-12 h-12 rounded-full bg-[#1E3A8A] group-hover:bg-white group-hover:text-[#1E3A8A] flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform">
                                <BiPlayCircle />
                            </div>
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px] active animate-pulse"></div>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-secondary/5 rounded-full blur-[120px]"></div>
        </section>
    );
};

export default Hero;
