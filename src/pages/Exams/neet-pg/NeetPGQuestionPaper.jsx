import React from 'react';
import { motion } from 'framer-motion';

const NeetPGQuestionPaper = () => {
    return (
        <main className="pt-32 pb-20 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-[32px] p-10 shadow-sm border border-slate-100"
                >
                    <h1 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">NEET PG <span className="text-brand-primary">Question Papers</span></h1>
                    <p className="text-slate-600 leading-relaxed">Resources and question papers for NEET PG preparation.</p>
                </motion.div>
            </div>
        </main>
    );
};

export default NeetPGQuestionPaper;
