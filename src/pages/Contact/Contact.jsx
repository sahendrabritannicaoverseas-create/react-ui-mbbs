import React from 'react';
import { motion } from 'framer-motion';
import { pageTitleBg, pageTitleShape, shape10 } from '../../assets/images';
import { BiMapPin, BiPhone, BiMailSend, BiSend, BiCheck } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Contact = () => {
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
            <section className="relative pt-[100px] pb-[30px] md:pt-[140px] md:pb-[40px] bg-slate-900 overflow-hidden">
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
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
                            Contact <span className="text-brand-primary">Us</span>
                        </h2>
                        <ul className="flex items-center justify-center xl:justify-start gap-4 text-slate-400 font-black text-xs uppercase tracking-[0.3em]">
                            <li><Link to="/" className="hover:text-brand-secondary transition-colors">Home</Link></li>
                            <li className="text-slate-600">/</li>
                            <li className="text-brand-primary">Get In Touch</li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* Info Boxes Section */}
            <section className="py-32 relative">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
                <div className="container mx-auto px-6">
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                    >
                        {[
                            {
                                icon: <BiMapPin />,
                                title: 'Our Location',
                                content: 'B-16 Ground Floor, Mayfield Garden, Sector 50, Gurugram, Haryana',
                                color: 'text-brand-primary',
                                bg: 'bg-brand-primary/10'
                            },
                            {
                                icon: <BiPhone />,
                                title: '24/7 Support',
                                content: '+91-9818 560 331 / +91-9818 560 332',
                                color: 'text-brand-secondary',
                                bg: 'bg-brand-secondary/10'
                            },
                            {
                                icon: <BiMailSend />,
                                title: 'Email Info',
                                content: 'info@mymbbsadmission.com / admission@mymbbsadmission.com',
                                color: 'text-brand-primary',
                                bg: 'bg-brand-primary/10'
                            }
                        ].map((box, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                whileHover={{ y: -10 }}
                                className="bg-white rounded-[40px] p-12 border border-slate-100 shadow-premium hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center group"
                            >
                                <div className={`${box.bg} ${box.color} w-20 h-20 rounded-[28px] flex items-center justify-center text-4xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                    {box.icon}
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">{box.title}</h3>
                                <p className="text-slate-500 leading-relaxed font-medium">
                                    {box.content}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="pb-32 overflow-hidden">
                <div className="container mx-auto px-6">
                    <motion.div
                        {...fadeInUp}
                        className="bg-slate-50 rounded-[64px] overflow-hidden lg:flex border-8 border-white shadow-premium"
                    >
                        {/* Left Side: Image/CTA */}
                        <div className="lg:w-[40%] p-16 lg:p-24 bg-slate-900 text-white relative">
                            <div className="relative z-10 h-full flex flex-col justify-center">
                                <span className="inline-block bg-brand-primary/20 text-brand-primary px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-8">Let's Talk</span>
                                <h2 className="text-5xl md:text-6xl font-black mb-10 leading-[1] uppercase tracking-tighter">Have a <span className="text-brand-secondary">Question?</span></h2>
                                <p className="text-slate-400 text-lg mb-12 font-medium">
                                    Whether you're just starting to explore MBBS abroad or ready to apply, our expert counsellors are here to guide you through every choice.
                                </p>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                            <BiCheck className="text-brand-secondary text-xl" />
                                        </div>
                                        <span className="text-sm font-black uppercase tracking-widest">Free Consultation</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                            <BiCheck className="text-brand-secondary text-xl" />
                                        </div>
                                        <span className="text-sm font-black uppercase tracking-widest">Global Support</span>
                                    </div>
                                </div>
                                <img src={shape10} alt="shape" className="absolute bottom-0 right-0 opacity-10 pointer-events-none scale-150" />
                            </div>
                        </div>

                        {/* Right Side: Form */}
                        <div className="lg:w-[60%] p-10 md:p-16 lg:p-24 bg-white">
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="flex flex-col gap-3 group">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-2">Your Name</label>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="bg-slate-50 border-2 border-transparent rounded-[24px] px-8 py-5 focus:border-brand-primary focus:bg-white focus:ring-0 outline-none transition-all font-bold placeholder:text-slate-300"
                                    />
                                </div>
                                <div className="flex flex-col gap-3 group">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-2">Phone No</label>
                                    <input
                                        type="tel"
                                        placeholder="+91 XXX XXX XXXX"
                                        className="bg-slate-50 border-2 border-transparent rounded-[24px] px-8 py-5 focus:border-brand-primary focus:bg-white focus:ring-0 outline-none transition-all font-bold placeholder:text-slate-300"
                                    />
                                </div>
                                <div className="flex flex-col gap-3 group md:col-span-2 text-left">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-2">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="bg-slate-50 border-2 border-transparent rounded-[24px] px-8 py-5 focus:border-brand-primary focus:bg-white focus:ring-0 outline-none transition-all font-bold placeholder:text-slate-300"
                                    />
                                </div>
                                <div className="flex flex-col gap-3 md:col-span-2 text-left">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-2">Write Your Message</label>
                                    <textarea
                                        placeholder="Message..."
                                        rows="5"
                                        className="bg-slate-50 border-2 border-transparent rounded-[32px] px-8 py-6 focus:border-brand-primary focus:bg-white focus:ring-0 outline-none transition-all font-bold placeholder:text-slate-300 resize-none"
                                    ></textarea>
                                </div>
                                <div className="md:col-span-2">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        className="btn-primary w-full py-6 flex items-center justify-center gap-4 !text-sm"
                                    >
                                        <BiSend className="text-2xl" />
                                        Send Application Query
                                    </motion.button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Map Section */}
            <section className="pb-32">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        {...fadeInUp}
                        className="rounded-[64px] overflow-hidden shadow-2xl border-[12px] border-slate-50 grayscale hover:grayscale-0 transition-all duration-700 h-[500px]"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.3871624641573!2d77.06526831508603!3d28.43778558249615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1964f43f0533%3A0xc3fec2b55f1f7ca8!2sMayfield%20Garden%20Sector%2050%2C%20Gurugram!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
