import React from 'react';
import { motion } from 'framer-motion';

const PLAB = () => {
    return (
        <main className="pt-32 pb-20 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-[32px] p-10 shadow-sm border border-slate-100"
                >
                    <h1 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">PLAB <span className="text-brand-primary">Exam</span></h1>
                    <p className="text-slate-600 leading-relaxed">The Professional and Linguistic Assessments Board (PLAB) test provides the main route for international medical graduates to demonstrate they have the necessary skills and knowledge to practice medicine in the United Kingdom.</p>
                </motion.div>
            </div>
        </main>
    );
};

export default PLAB;
