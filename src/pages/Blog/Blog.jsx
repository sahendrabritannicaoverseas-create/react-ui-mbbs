import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { blogPosts } from "../../data/blogData";
import { pageTitleBg, pageTitleShape } from "../../assets/images";
import { BiUser, BiRightArrowAlt, BiSearch, BiChevronRight, BiListUl } from "react-icons/bi";

const Blog = () => {
    const [activeCategory, setActiveCategory] = React.useState("All");
    const [searchQuery, setSearchQuery] = React.useState('');
    const [currentPage, setCurrentPage] = React.useState(1);
    const itemsPerPage = 6;

    const categories = ["All", ...new Set(blogPosts.map(post => post.category))];

    const filteredPosts = blogPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = activeCategory === "All" || post.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 300, behavior: 'smooth' });
    };

    return (
        <main className="pb-20 bg-slate-50 min-h-screen">
            {/* Page Title Area */}
            <section className="relative pt-[160px] pb-[120px] bg-slate-900 overflow-hidden mb-10">
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
                        <h1 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
                            Latest <span className="text-brand-primary">Insights</span>
                        </h1>
                        <ul className="flex items-center justify-center xl:justify-start gap-4 text-slate-400 font-extrabold text-[11px] tracking-widest">
                            <li><Link to="/" className="hover:text-brand-secondary text-white transition-colors">Home</Link></li>
                            <li className="text-slate-600">/</li>
                            <li className="text-brand-primary">Knowledge Hub</li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            <section className="container mx-auto px-6 lg:px-12 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left Sidebar - Filter */}
                    <aside className="lg:col-span-3 space-y-8">
                        <div className="bg-white rounded-[32px] shadow-premium border border-slate-100 overflow-hidden">
                            <div className="p-6 border-b border-slate-50 flex items-center justify-between">
                                <h4 className="text-sm font-black text-slate-900 tracking-widest flex items-center gap-2">
                                    <BiListUl className="text-brand-primary text-xl" />
                                    Categories
                                </h4>
                            </div>
                            <div className="p-4">
                                <div className="space-y-2">
                                    {categories.map((cat, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => { setActiveCategory(cat); setCurrentPage(1); }}
                                            className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl text-[11px] font-black tracking-widest transition-all ${activeCategory === cat
                                                ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/20"
                                                : "text-slate-600 hover:bg-slate-50 hover:text-brand-primary"
                                                }`}
                                        >
                                            {cat}
                                            <BiChevronRight className={`text-xl transition-transform ${activeCategory === cat ? "rotate-90" : ""}`} />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </aside>
                    {/* Main Content Area */}
                    <div className="lg:col-span-9">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {currentPosts.map((post, idx) => (
                                <motion.div
                                    key={post.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="group flex flex-col bg-white rounded-[40px] overflow-hidden shadow-premium border border-slate-50 hover:shadow-2xl hover:border-brand-primary/20 transition-all duration-500"
                                >
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60"></div>
                                        <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-2xl text-[10px] font-black text-slate-900 shadow-xl tracking-widest">
                                            {post.category}
                                        </div>
                                        <div className="absolute bottom-6 left-6 text-white text-[11px] font-bold tracking-wider">
                                            {post.date}
                                        </div>
                                    </div>

                                    <div className="p-10 flex flex-col flex-grow text-left">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-brand-primary group-hover:text-white transition-all">
                                                <BiUser className="text-lg" />
                                            </div>
                                            <span className="text-xs font-black text-slate-400 tracking-widest">{post.author}</span>
                                        </div>

                                        <h3 className="text-2xl font-black text-slate-900 mb-6 group-hover:text-brand-primary transition-colors leading-tight min-h-[64px]">
                                            <Link to={`/blog/${post.slug}`} className="no-underline text-inherit">
                                                {post.title}
                                            </Link>
                                        </h3>

                                        <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3 font-medium">
                                            {post.excerpt}
                                        </p>

                                        <Link
                                            to={`/blog/${post.slug}`}
                                            className="inline-flex items-center gap-2 text-[10px] font-black text-slate-900 group-hover:text-brand-primary transition-all tracking-widest mt-auto"
                                        >
                                            Read Article <BiRightArrowAlt className="text-xl group-hover:translate-x-2 transition-transform" />
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {currentPosts.length === 0 && (
                            <div className="text-center py-20 bg-white rounded-[40px] shadow-premium border border-slate-50">
                                <p className="text-slate-400 font-bold text-lg mb-4 tracking-widest">No articles found</p>
                                <button
                                    onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
                                    className="text-brand-primary font-black tracking-widest text-xs hover:underline"
                                >
                                    Reset Filters
                                </button>
                            </div>
                        )}

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex items-center justify-center gap-4 mt-16">
                                {[...Array(totalPages)].map((_, i) => (
                                    <button
                                        key={i + 1}
                                        onClick={() => paginate(i + 1)}
                                        className={`w-14 h-14 flex items-center justify-center rounded-[20px] font-black text-xs transition-all ${currentPage === i + 1
                                            ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/30"
                                            : "bg-white border border-slate-100 text-slate-600 hover:border-brand-primary hover:text-brand-primary"
                                            }`}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Blog;
