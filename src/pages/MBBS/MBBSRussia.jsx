import React from 'react';
import { motion } from 'framer-motion';
import { pageTitleBg, pageTitleShape, uniCrimea, uniDhaka, uniAma, uniAltinbas, uniMasha } from '../../assets/images';
import { BiRightArrowAlt, BiMapPin, BiDetail, BiBuildings, BiChevronRight, BiBookOpen } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Meta from '../../components/common/Meta';

const MBBSRussia = () => {
    const [selectedUniversities, setSelectedUniversities] = React.useState([]);
    const [searchQuery, setSearchQuery] = React.useState('');
    const [currentPage, setCurrentPage] = React.useState(1);
    const itemsPerPage = 3;

    const universities = [
        {
            name: 'Crimea Federal University',
            slug: 'crimea-federal-university',
            img: uniCrimea,
            desc: 'One of the top medical universities in Russia, offering high-quality education and globally recognized degrees.',
            location: 'Simferopol, Russia',
            established: '1918',
            recognition: 'WHO, NMC Recognized'
        },
        {
            name: 'Bashkir State Medical University',
            slug: 'bashkir-state-medical-university',
            img: uniDhaka,
            desc: 'A leading center for medical and pharmaceutical sciences in the Russian Federation.',
            location: 'Ufa, Russia',
            established: '1932',
            recognition: 'WHO, NMC Recognized'
        },
        {
            name: 'Kazan State Medical University',
            slug: 'kazan-state-medical-university',
            img: uniAma,
            desc: 'Multi-functional and multi-level state institution of higher education in medicine in Central Russia.',
            location: 'Kazan, Russia',
            established: '1814',
            recognition: 'WHO, NMC Recognized'
        }
    ];

    const toggleUniversity = (uniName) => {
        setSelectedUniversities(prev =>
            prev.includes(uniName)
                ? prev.filter(u => u !== uniName)
                : [...prev, uniName]
        );
    };

    const filteredUnis = universities.filter(uni => {
        const matchesSearch = uni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            uni.location.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesFilter = selectedUniversities.length === 0 || selectedUniversities.includes(uni.name);
        return matchesSearch && matchesFilter;
    });

    // Pagination Logic
    const totalPages = Math.ceil(filteredUnis.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentUnis = filteredUnis.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 400, behavior: 'smooth' });
    };

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, ease: "easeOut" }
    };

    return (
        <main className="overflow-hidden bg-slate-50 min-h-screen">
            <Meta
                title="Study MBBS in Russia 2026 - Top Medical Universities"
                description="Apply for MBBS in Russia 2026. Affordable tuition, globally recognized degrees (WHO, NMC), and world-class medical education infrastructure."
            />
            {/* Page Title Area */}
            <section id="intro" className="relative pt-[100px] pb-[30px] md:pt-[140px] md:pb-[40px] bg-slate-900 overflow-hidden">
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
                        <h1 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight">
                            MBBS In <span className="text-brand-secondary">Russia</span>
                        </h1>
                        <ul className="flex items-center justify-center xl:justify-start gap-4 text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                            <li><Link to="/" className="hover:text-brand-primary text-white transition-colors">Home</Link></li>
                            <li className="text-slate-600">/</li>
                            <li className="text-brand-secondary">Russia</li>
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
                                        Select University
                                    </h4>
                                    <BiChevronRight className="text-xl text-slate-400 group-hover:rotate-90 transition-transform" />
                                </div>
                                <div className="p-4 max-h-[400px] overflow-y-auto custom-scrollbar">
                                    <div className="space-y-3">
                                        {universities.map((uni) => (
                                            <label key={uni.slug} className="flex items-center gap-3 group cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedUniversities.includes(uni.name)}
                                                    onChange={() => toggleUniversity(uni.name)}
                                                    className="w-4 h-4 rounded border-slate-300 text-brand-primary focus:ring-brand-primary cursor-pointer"
                                                />
                                                <span className={`text-[12px] font-semibold transition-colors ${selectedUniversities.includes(uni.name) ? 'text-brand-primary' : 'text-slate-600 group-hover:text-brand-primary'}`}>
                                                    {uni.name}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* Right Content - Main Section */}
                        <div className="lg:col-span-9 space-y-6">

                            {/* Summary & Search Bar */}
                            <div className="space-y-4">
                                <div className="flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-2 text-slate-900">
                                        <span className="text-sm">Found <span className="font-black text-brand-primary text-base">{filteredUnis.length}</span> Medical Universities</span>
                                    </div>
                                    {(selectedUniversities.length > 0 || searchQuery) && (
                                        <button
                                            onClick={() => { setSelectedUniversities([]); setSearchQuery(''); }}
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
                                            placeholder="Search by university name or location..."
                                            className="w-full h-14 pl-6 pr-12 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary text-sm font-medium transition-all shadow-sm"
                                        />
                                    </div>
                                    <button
                                        className="h-14 px-8 bg-brand-primary text-white font-bold rounded-xl hover:bg-brand-secondary transition-all shadow-md active:scale-95"
                                    >
                                        Search
                                    </button>
                                    <button
                                        onClick={() => { setSelectedUniversities([]); setSearchQuery(''); }}
                                        className="h-14 px-8 bg-brand-primary text-white font-bold rounded-xl hover:bg-brand-secondary transition-all shadow-md active:scale-95"
                                    >
                                        Reset
                                    </button>
                                </div>
                            </div>

                            {/* University Cards Horizontal List */}
                            <div className="space-y-4">
                                {currentUnis.length > 0 ? (
                                    currentUnis.map((uni, idx) => (
                                        <motion.div
                                            key={uni.slug}
                                            {...fadeInUp}
                                            className="bg-white rounded-xl border border-slate-100 p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 group"
                                        >
                                            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                                                {/* University Logo/Image */}
                                                <Link to={`/mbbs/russia/${uni.slug}`} className="w-32 h-32 md:w-36 md:h-36 rounded-xl border border-slate-100 p-3 bg-white flex-shrink-0 flex items-center justify-center overflow-hidden shadow-sm hover:border-brand-primary/30 transition-all">
                                                    <img
                                                        src={uni.img}
                                                        alt={uni.name}
                                                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                                    />
                                                </Link>

                                                {/* University Details (Center) */}
                                                <div className="flex-grow text-center md:text-left">
                                                    <Link to={`/mbbs/russia/${uni.slug}`}>
                                                        <h3 className="text-lg md:text-xl font-black text-brand-navy mb-2 hover:text-brand-primary transition-colors cursor-pointer">
                                                            {uni.name}
                                                        </h3>
                                                    </Link>
                                                    <div className="flex items-center justify-center md:justify-start gap-2 text-slate-500 text-sm font-bold mb-2">
                                                        <BiMapPin className="text-brand-primary" />
                                                        <span>{uni.location}</span>
                                                    </div>
                                                    <div className="flex items-center justify-center md:justify-start gap-2 text-slate-500 text-sm font-bold">
                                                        <div className="flex items-center gap-4">
                                                            <div className="flex items-center gap-2">
                                                                <BiDetail className="text-brand-primary" />
                                                                <span>{uni.recognition.split(',')[0]}</span>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <BiBuildings className="text-brand-primary" />
                                                                <span>Est. {uni.established}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Action Button (Right) */}
                                                <div className="flex-shrink-0 w-full md:w-auto">
                                                    <Link
                                                        to={`/mbbs/russia/${uni.slug}`}
                                                        className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-lg text-sm font-bold hover:bg-brand-secondary transition-all shadow-sm active:scale-95"
                                                    >
                                                        <BiBookOpen className="text-lg" />
                                                        Request Info
                                                    </Link>
                                                </div>






                                            </div>
                                        </motion.div>
                                    ))
                                ) : (
                                    <div className="bg-white rounded-xl p-20 text-center border border-slate-100">
                                        <p className="text-slate-400 font-bold text-lg">No universities found matching your criteria.</p>
                                        <button
                                            onClick={() => { setSelectedUniversities([]); setSearchQuery(''); }}
                                            className="mt-4 text-brand-primary font-bold hover:underline"
                                        >
                                            Clear all filters
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Premium Pagination Section */}
                            {totalPages > 1 && (
                                <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
                                    <p className="text-sm font-bold text-slate-500 order-2 md:order-1">
                                        Showing <span className="text-brand-primary">{indexOfFirstItem + 1}</span> to <span className="text-brand-primary">{Math.min(indexOfLastItem, filteredUnis.length)}</span> of <span className="text-brand-primary">{filteredUnis.length}</span> Results
                                    </p>

                                    <div className="flex items-center gap-2 order-1 md:order-2">
                                        <button
                                            onClick={() => handlePageChange(currentPage - 1)}
                                            disabled={currentPage === 1}
                                            className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:border-brand-primary hover:text-brand-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
                                        >
                                            <BiChevronRight className="text-xl rotate-180" />
                                        </button>

                                        {[...Array(totalPages)].map((_, i) => (
                                            <button
                                                key={i + 1}
                                                onClick={() => handlePageChange(i + 1)}
                                                className={`w-10 h-10 rounded-xl font-black text-sm transition-all shadow-sm ${currentPage === i + 1
                                                    ? 'bg-brand-primary text-white shadow-brand-primary/20'
                                                    : 'bg-white border border-slate-200 text-slate-600 hover:border-brand-primary hover:text-brand-primary'
                                                    }`}
                                            >
                                                {i + 1}
                                            </button>
                                        ))}

                                        <button
                                            onClick={() => handlePageChange(currentPage + 1)}
                                            disabled={currentPage === totalPages}
                                            className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:border-brand-primary hover:text-brand-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
                                        >
                                            <BiChevronRight className="text-xl" />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
};

export default MBBSRussia;
