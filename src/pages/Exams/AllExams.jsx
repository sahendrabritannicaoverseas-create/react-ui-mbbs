import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { pageTitleBg, pageTitleShape } from '../../assets/images';
import { BiChevronRight, BiRightArrowAlt } from 'react-icons/bi';

const examsList = [
    {
        id: 'neet-ug',
        title: 'NEET UG 2026',
        subtitle: 'National Eligibility cum Entrance Test',
        category: 'NEET UG',
        banner: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1cb9?auto=format&fit=crop&q=80&w=800',
        bgColor: 'bg-indigo-600',
        btnColor: 'bg-indigo-700'
    },
    {
        id: 'fmge',
        title: 'FMGE Screening Test',
        subtitle: 'Foreign Medical Graduate Exam',
        category: 'FMGE',
        banner: 'https://images.unsplash.com/photo-1584982324559-6e3e5c010664?auto=format&fit=crop&q=80&w=800',
        bgColor: 'bg-teal-600',
        btnColor: 'bg-teal-700'
    },
    {
        id: 'next',
        title: 'NExT Exam',
        subtitle: 'National Exit Test (Proposed)',
        category: 'NEXT',
        banner: 'https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?auto=format&fit=crop&q=80&w=800',
        bgColor: 'bg-purple-600',
        btnColor: 'bg-purple-700'
    },
    {
        id: 'usmle',
        title: 'USMLE Exam',
        subtitle: 'USA Licensing Exam',
        category: 'USMLE',
        banner: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=800',
        bgColor: 'bg-slate-700',
        btnColor: 'bg-slate-800'
    },
    {
        id: 'plab',
        title: 'PLAB Exam',
        subtitle: 'UK Medical Licensing',
        category: 'PLAB',
        banner: 'https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&q=80&w=800',
        bgColor: 'bg-blue-600',
        btnColor: 'bg-blue-700'
    },
    {
        id: 'plab-2025',
        title: 'PLAB 2025',
        subtitle: 'Upcoming UK Licensing',
        category: 'PLAB',
        banner: 'https://images.unsplash.com/photo-1505751172107-573225a94501?auto=format&fit=crop&q=80&w=800',
        bgColor: 'bg-sky-600',
        btnColor: 'bg-sky-700'
    }
];

const AllExams = () => {
    const [activeFilter, setActiveFilter] = useState('All Exams');
    const [searchQuery, setSearchQuery] = useState('');

    React.useEffect(() => {
        document.title = "Medical Entrance Exams | My MBBS Admission";
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Explore comprehensive information about medical entrance exams including NEET UG, NEET PG, FMGE, USMLE, and PLAB. Get the latest updates and resources.');
        }
    }, []);

    const filters = ['All Exams', 'NEET UG', 'FMGE', 'NEXT', 'USMLE', 'PLAB'];

    const filteredExams = examsList.filter(exam => {
        const matchesCategory = activeFilter === 'All Exams' || exam.category === activeFilter;
        const matchesSearch = exam.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            exam.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut" }
    };

    return (
        <main className="overflow-hidden bg-[#F8FAFC]">
            {/* Page Title */}
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

                <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10 text-center xl:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-tight">
                            Medical Entrance <span className="text-brand-secondary">Exams</span>
                        </h1>
                        <ul className="flex items-center justify-center xl:justify-start gap-4 text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                            <li><Link to="/" className="hover:text-brand-primary text-white transition-colors">Home</Link></li>
                            <li className="text-slate-600">/</li>
                            <li className="text-brand-secondary ">All Exams</li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            <section className="py-12 relative -mt-10 z-20">
                <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                        {/* Left Sidebar - Filter Section */}
                        <aside className="lg:col-span-3 space-y-6">
                            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                                <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-white group cursor-pointer">
                                    <h4 className="text-[14px] font-bold text-slate-900 flex items-center gap-2">
                                        Exam Category
                                    </h4>
                                    <BiChevronRight className="text-xl text-slate-400 group-hover:rotate-90 transition-transform" />
                                </div>
                                <div className="p-4">
                                    <div className="space-y-2">
                                        {filters.map((filter) => (
                                            <button
                                                key={filter}
                                                onClick={() => { setActiveFilter(filter); setSearchQuery(''); }}
                                                className={`w-full text-left px-4 py-3 rounded-lg text-[13px] font-semibold transition-all flex items-center justify-between group ${activeFilter === filter
                                                    ? 'bg-brand-primary text-white shadow-md'
                                                    : 'text-slate-600 hover:bg-slate-50 hover:text-brand-primary'
                                                    }`}
                                            >
                                                {filter}
                                                {activeFilter === filter && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* Right Content - Main Section */}
                        <div className="lg:col-span-9 space-y-3">

                            {/* Summary & Search bar */}
                            <div className="space-y-4">
                                <div className="flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-2 text-slate-900">
                                        <span className="text-sm">Found <span className="font-black text-brand-primary text-base">{filteredExams.length}</span> Medical Entrance Exams</span>
                                    </div>
                                    {(activeFilter !== 'All Exams' || searchQuery) && (
                                        <button
                                            onClick={() => { setActiveFilter('All Exams'); setSearchQuery(''); }}
                                            className="text-xs font-bold text-brand-primary hover:underline"
                                        >
                                            Clear All Filters
                                        </button>
                                    )}
                                </div>

                                <div className="flex flex-col md:flex-row gap-3">
                                    <div className="flex-grow relative">
                                        <input
                                            type="text"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            placeholder="Search by exam name (e.g. NEET)..."
                                            className="w-full h-14 pl-6 pr-12 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary text-sm font-medium transition-all shadow-sm"
                                        />
                                    </div>
                                    <button
                                        onClick={() => { setActiveFilter('All Exams'); setSearchQuery(''); }}
                                        className="h-14 px-8 bg-brand-primary text-white font-bold rounded-xl hover:bg-brand-secondary transition-all shadow-md active:scale-95"
                                    >
                                        Reset
                                    </button>
                                </div>
                            </div>

                            {/* Exams Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                <AnimatePresence mode="popLayout">
                                    {filteredExams.length > 0 ? (
                                        filteredExams.map((exam) => (
                                            <motion.div
                                                key={exam.id}
                                                layout
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.9 }}
                                                className={`rounded-3xl overflow-hidden shadow-sm border border-slate-100 group relative h-[400px] flex flex-col bg-white hover:shadow-xl hover:border-brand-secondary/30 transition-all duration-500`}
                                            >
                                                {/* Header Color Strip */}
                                                <div className={`h-2 w-full ${exam.bgColor}`}></div>

                                                <div className="p-6 flex flex-col items-center flex-grow text-center">
                                                    <div className="mb-4">
                                                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{exam.category}</span>
                                                    </div>

                                                    <h3 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-tight leading-tight group-hover:text-brand-primary transition-colors">
                                                        {exam.title}
                                                    </h3>
                                                    <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-6">
                                                        {exam.subtitle}
                                                    </p>

                                                    <div className="w-full relative flex-grow flex items-center justify-center mb-6 overflow-hidden rounded-2xl bg-slate-50 p-4">
                                                        <img
                                                            src={exam.banner}
                                                            alt={exam.title}
                                                            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                                                        />
                                                    </div>

                                                    <div className="w-full">
                                                        <Link
                                                            to={`/exams/${exam.id}`}
                                                            className={`w-full inline-flex items-center justify-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all hover:bg-brand-secondary hover:shadow-lg active:scale-95`}
                                                        >
                                                            Learn More <BiRightArrowAlt className="text-lg" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))
                                    ) : (
                                        <div className="col-span-full bg-white rounded-3xl p-16 text-center border border-slate-100">
                                            <p className="text-slate-400 font-bold text-lg mb-4">No exams found matching your selection.</p>
                                            <button
                                                onClick={() => { setActiveFilter('All Exams'); setSearchQuery(''); }}
                                                className="text-brand-primary font-black uppercase tracking-widest text-sm hover:underline"
                                            >
                                                Show All Exams
                                            </button>
                                        </div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </main>
    );
};

export default AllExams;
