import React from "react";
import { motion } from "framer-motion";
import { BiStar } from "react-icons/bi";
import { FaQuoteRight } from "react-icons/fa";

const Testimonials = () => {
    const testimonials = [
        {
            name: "Sneha Patil",
            role: "MBBS Student in Russia",
            text: "Smooth process, clear communication, and genuine counseling. Highly recommended!",
            stars: 5,
            img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800&h=1000",
            flag: "🇷🇺",
        },
    ];

    return (
        <section className="py-8 md:py-12 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                {testimonials.map((testimonial, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white rounded-[64px] overflow-hidden shadow-premium border-8 border-white flex flex-col lg:flex-row items-center max-w-6xl mx-auto"
                    >
                        {/* Image side */}
                        <div className="lg:w-1/2 h-[400px] lg:h-[600px] w-full relative">
                            <img
                                src={testimonial.img}
                                alt={testimonial.name}
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                            />
                            <div className="absolute inset-0 bg-brand-primary/10"></div>
                        </div>

                        {/* Content side */}
                        <div className="lg:w-1/2 p-12 lg:p-20 relative">
                            <FaQuoteRight className="absolute top-10 right-10 text-slate-50 text-8xl" />

                            <div className="flex gap-1 mb-8">
                                {[...Array(testimonial.stars)].map((_, i) => (
                                    <BiStar
                                        key={i}
                                        className="text-[#F5A716] text-2xl fill-current"
                                    />
                                ))}
                            </div>

                            <p className="text-[#212529] text-2xl md:text-[32px] font-medium leading-relaxed mb-12 italic relative z-10">
                                "{testimonial.text}"
                            </p>

                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-slate-100">
                                    <div className="w-full h-full bg-slate-100 flex items-center justify-center text-3xl">
                                        {testimonial.flag}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-2xl font-black text-slate-900 leading-tight">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
