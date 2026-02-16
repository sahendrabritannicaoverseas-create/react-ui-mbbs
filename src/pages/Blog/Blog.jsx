import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { blogPosts } from "../../data/blogData";
import { pageTitleBg, pageTitleShape } from "../../assets/images";
import { BiUser, BiRightArrowAlt, BiSearch, BiChevronRight, BiListUl } from "react-icons/bi";

const Blog = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [currentPage, setCurrentPage] = React.useState(1);
    const itemsPerPage = 6;

    const filteredPosts = blogPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesSearch;
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
        <main className="pb-20 bg-slate-25 min-h-screen">
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
                        <h1 className="text-1xl md:text-2xl font-black text-white mb-6 tracking-tight">
                            Latest
                        </h1>
                        <ul className="flex items-center justify-center xl:justify-start gap-4 text-slate-400 font-extrabold text-[11px] tracking-widest">
                            <li><Link to="/" className="hover:text-brand-secondary text-white transition-colors">Home</Link></li>
                            <li className="text-slate-600">/</li>
                            <li className="text-brand-secondary">Blogs</li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            <section className="container mx-auto px-6 lg:px-12 max-w-7xl">
                <div className="flex flex-col gap-10">

                    {/* Main Content Area */}
                    <div className="w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {currentPosts.map((post, idx) => (
                                <motion.div
                                    key={post.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="group flex flex-col bg-white rounded-[32px] overflow-hidden shadow-premium border border-slate-100 hover:shadow-2xl hover:border-brand-primary/20 transition-all duration-500"
                                >
                                    <Link to={`/blog/${post.slug}`} className="block relative h-52 overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-40"></div>
                                    </Link>

                                    <div className="p-8 flex flex-col flex-grow text-left">
                                        <h3 className="text-lg font-black text-slate-900 mb-6 group-hover:text-brand-primary transition-colors leading-snug line-clamp-2 min-h-[48px]">
                                            <Link to={`/blog/${post.slug}`} className="no-underline text-inherit">
                                                {post.title}
                                            </Link>
                                        </h3>

                                        <p className="text-slate-500 text-sm leading-relaxed mb-auto line-clamp-2 font-medium">
                                            {post.excerpt}
                                        </p>

                                        <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-end">
                                            <span className="text-[10px] font-black text-slate-400 tracking-widest uppercase">{post.date}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {currentPosts.length === 0 && (
                            <div className="text-center py-20 bg-white rounded-[40px] shadow-premium border border-slate-50">
                                <p className="text-slate-400 font-bold text-lg mb-4 tracking-widest">No articles found</p>
                                <button
                                    onClick={() => { setSearchQuery(""); }}
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
                                        className={`w-12 h-12 flex items-center justify-center rounded-2xl font-black text-xs transition-all ${currentPage === i + 1
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
