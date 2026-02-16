import React from 'react';
import { motion } from 'framer-motion';
import { BiSend, BiUser, BiPhone, BiEnvelope, BiMessageDetail } from 'react-icons/bi';

const ContactForm = ({ title = "Get In Touch", className = "" }) => {
    return (
        <div className={`bg-white rounded-2xl shadow-premium border border-slate-100 p-6 ${className}`}>
            <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-6">
                {title}
            </h4>
            <form className="space-y-4">
                <div className="relative group">
                    <BiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg group-focus-within:text-brand-primary transition-colors" />
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-12 pr-4 text-sm font-bold text-slate-700 focus:bg-white focus:border-brand-primary outline-none transition-all placeholder:text-slate-400"
                    />
                </div>

                <div className="relative group">
                    <BiEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg group-focus-within:text-brand-primary transition-colors" />
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-12 pr-4 text-sm font-bold text-slate-700 focus:bg-white focus:border-brand-primary outline-none transition-all placeholder:text-slate-400"
                    />
                </div>

                <div className="relative group">
                    <BiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg group-focus-within:text-brand-primary transition-colors" />
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-12 pr-4 text-sm font-bold text-slate-700 focus:bg-white focus:border-brand-primary outline-none transition-all placeholder:text-slate-400"
                    />
                </div>

                <div className="relative group">
                    <BiMessageDetail className="absolute left-4 top-4 text-slate-400 text-lg group-focus-within:text-brand-primary transition-colors" />
                    <textarea
                        rows="3"
                        placeholder="Your Message..."
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-12 pr-4 text-sm font-bold text-slate-700 focus:bg-white focus:border-brand-primary outline-none transition-all placeholder:text-slate-400 resize-none"
                    ></textarea>
                </div>

                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-brand-primary text-white py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-brand-secondary transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform"
                >
                    <BiSend className="text-lg" />
                    Send Message
                </motion.button>
            </form>
        </div>
    );
};

export default ContactForm;
