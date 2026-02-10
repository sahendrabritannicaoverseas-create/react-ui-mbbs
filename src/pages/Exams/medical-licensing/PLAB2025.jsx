import React from 'react';
import { motion } from 'framer-motion';

const PLAB2025 = () => {
    return (
        <main className="pt-32 pb-20 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-[32px] p-10 shadow-sm border border-slate-100"
                >
                    <h1 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">PLAB Exam <span className="text-brand-primary">2025</span></h1>
                    <p className="text-slate-600 leading-relaxed">Important updates, dates, and changes for the PLAB examination scheduled for the year 2025.</p>
                </motion.div>
            </div>
        </main>
    );
};

export default PLAB2025;
