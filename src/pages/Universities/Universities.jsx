import React from 'react';
import { motion } from 'framer-motion';
import { pageTitleBg, pageTitleShape, uniCrimea, uniDhaka, uniAma, uniAltinbas, uniMasha } from '../../assets/images';
import { BiRightArrowAlt, BiMapPin, BiCheckCircle, BiPlusCircle, BiChevronRight, BiChevronLeft, BiBookOpen, BiDetail, BiBuildings } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Universities = () => {
    const [selectedUniversities, setSelectedUniversities] = React.useState([]);
    const [searchQuery, setSearchQuery] = React.useState('');
    const [currentPage, setCurrentPage] = React.useState(1);
    const itemsPerPage = 6;

    const categories = [
        {
            country: 'Vietnam',
            unis: [
                { name: 'Hanoi Medical University', slug: 'hanoi-medical-university', img: uniCrimea, desc: 'One of Vietnam\'s oldest and most prestigious medical institutions.', location: 'Hanoi, Vietnam', established: '1902', recognition: 'WHO, NMC Recognized' },
                { name: 'Ho Chi Minh City University of Medicine and Pharmacy', slug: 'hcmc-university-medicine-pharmacy', img: uniDhaka, desc: 'A leading medical center in Southern Vietnam with cutting-edge research.', location: 'Ho Chi Minh City, Vietnam', established: '1947', recognition: 'WHO, NMC Recognized' },
                { name: 'Hue University of Medicine and Pharmacy', slug: 'hue-university-medicine-pharmacy', img: uniAma, desc: 'Renowned for its clinical training and historical significance in Central Vietnam.', location: 'Hue, Vietnam', established: '1957', recognition: 'WHO, NMC Recognized' },
                { name: 'Can Tho University of Medicine and Pharmacy', slug: 'can-tho-university-medicine-pharmacy', img: uniAltinbas, desc: 'Known for its medical training excellence in the Mekong Delta region.', location: 'Can Tho, Vietnam', established: '2002', recognition: 'WHO, NMC Recognized' },
                { name: 'Thai Binh University of Medicine and Pharmacy', slug: 'thai-binh-university-medicine-pharmacy', img: uniMasha, desc: 'A well-established institution with a strong emphasis on practical skills.', location: 'Thai Binh, Vietnam', established: '1968', recognition: 'WHO, NMC Recognized' }
            ]
        },
        {
            country: 'Russia',
            unis: [
                { name: 'Crimea Federal University', slug: 'crimea-federal-university', img: uniCrimea, desc: 'Globally recognized degree with top-tier infrastructure and modern labs.', location: 'Simferopol, Russia', established: '1918', recognition: 'WHO, NMC Recognized' },
                { name: 'Bashkir State Medical University', slug: 'bashkir-state-medical-university', img: uniMasha, desc: 'One of the oldest and most respected universities in Russia.', location: 'Ufa, Russia', established: '1932', recognition: 'WHO, NMC Recognized' }
            ]
        },
        {
            country: 'Uzbekistan',
            unis: [
                { name: 'Tashkent Medical Academy', slug: 'tashkent-medical-academy', img: uniMasha, desc: 'The leading medical educational institution in Republic of Uzbekistan.', location: 'Tashkent, Uzbekistan', established: '1920', recognition: 'WHO, NMC Recognized' },
                { name: 'Samarkand State Medical University', slug: 'samarkand-state-medical-university', img: uniCrimea, desc: 'The oldest medical university in Uzbekistan with a rich historical legacy.', location: 'Samarkand, Uzbekistan', established: '1930', recognition: 'WHO, NMC Recognized' }
            ]
        },
        {
            country: 'Bangladesh',
            unis: [
                { name: 'Dhaka National Medical College', slug: 'dhaka-national-medical', img: uniDhaka, desc: 'High clinical exposure and affordable medical education for international students.', location: 'Dhaka, Bangladesh', established: '1925', recognition: 'WHO, NMC Recognized' }
            ]
        },
        {
            country: 'Philippines',
            unis: [
                { name: 'AMA School of Medicine', slug: 'ama-school-of-medicine', img: uniAma, desc: 'English medium US-pattern curriculum popular with Indian medical aspirants.', location: 'Manila, Philippines', established: '1980', recognition: 'WHO, NMC Recognized' }
            ]
        },
        {
            country: 'Georgia',
            unis: [
                { name: 'Tbilisi State University', slug: 'tbilisi-state-university', img: uniCrimea, desc: 'A leading global research university offering top-tier medical education.', location: 'Tbilisi, Georgia', established: '1918', recognition: 'WHO, NMC Recognized' }
            ]
        },
        {
            country: 'Malaysia',
            unis: [
                { name: 'MAHSA University', slug: 'mahsa-university', img: uniMasha, desc: 'Renowned for healthcare education with a vibrant international student community.', location: 'Selangor, Malaysia', established: '2005', recognition: 'WHO, NMC Recognized' }
            ]
        }
    ];

    const allUnis = categories.flatMap(cat => cat.unis);

    const toggleUniversity = (uniName) => {
        setSelectedUniversities(prev =>
            prev.includes(uniName)
                ? prev.filter(u => u !== uniName)
                : [...prev, uniName]
        );
        setCurrentPage(1);
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
        setCurrentPage(1);
    };

    const filteredUnis = allUnis.filter(uni => {
        const matchesSearch = uni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            uni.location.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesFilter = selectedUniversities.length === 0 || selectedUniversities.includes(uni.name);
        return matchesSearch && matchesFilter;
    });

    const totalPages = Math.ceil(filteredUnis.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredUnis.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 300, behavior: 'smooth' });
    };

    const getUniversityLink = (uni) => {
        return `/university/${uni.slug}`;
    };

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, ease: "easeOut" }
    };

    return (
        <main className="overflow-hidden bg-slate-50 min-h-screen">
            {/* Page Title Area / Banner */}
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
                        <h1 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight">
                            Medical <span className="text-brand-secondary">Universities</span>
                        </h1>
                        <ul className="flex items-center justify-center xl:justify-start gap-4 text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                            <li><Link to="/" className="hover:text-brand-primary text-white transition-colors">Home</Link></li>
                            <li className="text-slate-600">/</li>
                            <li className="text-brand-secondary">Medical Universities</li>
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
                                        {allUnis.map((uni) => (
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
                                            onChange={(e) => handleSearch(e.target.value)}
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
                                        onClick={() => { setSelectedUniversities([]); setSearchQuery(''); setCurrentPage(1); }}
                                        className="h-14 px-8 bg-brand-primary text-white font-bold rounded-xl hover:bg-brand-secondary transition-all shadow-md active:scale-95"
                                    >
                                        Reset
                                    </button>
                                </div>
                            </div>

                            {/* University Cards Horizontal List */}
                            <div className="space-y-4">
                                {currentItems.length > 0 ? (
                                    currentItems.map((uni, idx) => (
                                        <motion.div
                                            key={uni.slug}
                                            {...fadeInUp}
                                            className="bg-white rounded-xl border border-slate-100 p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 group"
                                        >
                                            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                                                {/* University Logo/Image */}
                                                <Link to={getUniversityLink(uni)} className="w-32 h-32 md:w-36 md:h-36 rounded-xl border border-slate-100 p-3 bg-white flex-shrink-0 flex items-center justify-center overflow-hidden shadow-sm hover:border-brand-primary/30 transition-all">
                                                    <img
                                                        src={uni.img}
                                                        alt={uni.name}
                                                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                                    />
                                                </Link>

                                                {/* University Details (Center) */}
                                                <div className="flex-grow text-center md:text-left">
                                                    <Link to={getUniversityLink(uni)}>
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
                                                        to={getUniversityLink(uni)}
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
                                        <p className="text-slate-400 font-bold text-lg">No universities found matching your search or filters.</p>
                                        <button
                                            onClick={() => { setSelectedUniversities([]); setSearchQuery(''); setCurrentPage(1); }}
                                            className="mt-4 text-brand-primary font-bold hover:underline"
                                        >
                                            Clear all filters
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Premium Pagination */}
                            {totalPages > 1 && (
                                <div className="flex items-center justify-center gap-2 pt-8">
                                    <button
                                        onClick={() => paginate(Math.max(1, currentPage - 1))}
                                        disabled={currentPage === 1}
                                        className={`w-12 h-12 flex items-center justify-center rounded-xl border transition-all ${currentPage === 1 ? 'border-slate-100 text-slate-300 cursor-not-allowed' : 'border-slate-200 text-slate-600 hover:border-brand-primary hover:text-brand-primary shadow-sm hover:shadow-md'}`}
                                    >
                                        <BiChevronLeft className="text-2xl" />
                                    </button>

                                    <div className="flex items-center gap-2">
                                        {[...Array(totalPages)].map((_, i) => (
                                            <button
                                                key={i + 1}
                                                onClick={() => paginate(i + 1)}
                                                className={`w-12 h-12 flex items-center justify-center rounded-xl font-bold text-sm transition-all ${currentPage === i + 1 ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/30' : 'bg-white border border-slate-200 text-slate-600 hover:border-brand-primary hover:text-brand-primary shadow-sm'}`}
                                            >
                                                {i + 1}
                                            </button>
                                        ))}
                                    </div>

                                    <button
                                        onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                                        disabled={currentPage === totalPages}
                                        className={`w-12 h-12 flex items-center justify-center rounded-xl border transition-all ${currentPage === totalPages ? 'border-slate-100 text-slate-300 cursor-not-allowed' : 'border-slate-200 text-slate-600 hover:border-brand-primary hover:text-brand-primary shadow-sm hover:shadow-md'}`}
                                    >
                                        <BiChevronRight className="text-2xl" />
                                    </button>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </section>

            {/* Floating WhatsApp */}
            <div className="fixed bottom-10 right-10 z-[100] group">
                <a href="https://wa.me/yournumber" target="_blank" rel="noreferrer" className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                </a>
            </div>
        </main>
    );
};

export default Universities;
