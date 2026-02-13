import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { blogPosts } from "../../data/blogData";
import { BiCalendar, BiUser, BiArrowBack, BiChevronRight, BiTime } from "react-icons/bi";

const BlogDetail = () => {
    const { slug } = useParams();
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return (
            <div className="pt-40 pb-20 text-center">
                <h2 className="text-3xl font-bold">Article Not Found</h2>
                <Link to="/blog" className="text-brand-primary mt-4 inline-block hover:underline">
                    Back to Blog
                </Link>
            </div>
        );
    }

    return (
        <main className="pb-20 bg-white">
            {/* Page Title Area (Standard Project Banner Style) */}
            <section className="relative pt-[160px] pb-[120px] bg-slate-900 overflow-hidden mb-16">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40 scale-105"
                    style={{ backgroundImage: `url(${require("../../assets/images").pageTitleBg})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/80 to-slate-900"></div>

                <motion.img
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 0.2, x: 0 }}
                    transition={{ duration: 1.2 }}
                    src={require("../../assets/images").pageTitleShape}
                    alt="shape"
                    className="absolute right-0 bottom-0 pointer-events-none w-1/3"
                />

                <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10 text-center xl:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-white mb-6 uppercase tracking-tight line-clamp-2">
                            {post.category} <span className="text-brand-primary">Insights</span>
                        </h1>
                        <ul className="flex items-center justify-center xl:justify-start gap-4 text-slate-400 font-extrabold text-[11px] uppercase tracking-[0.3em]">
                            <li><Link to="/" className="hover:text-brand-secondary text-white transition-colors">Home</Link></li>
                            <li className="text-slate-600">/</li>
                            <li><Link to="/blog" className="hover:text-brand-secondary text-white transition-colors">Blog</Link></li>
                            <li className="text-slate-600">/</li>
                            <li className="text-brand-primary line-clamp-1">{post.title}</li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            <article className="container mx-auto px-6 md:px-12 max-w-4xl">
                {/* Header */}
                <header className="mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-8">
                            {post.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-8 py-6 border-y border-slate-100">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                                    <BiUser className="text-xl" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Written By</p>
                                    <p className="text-sm font-bold text-slate-900">{post.author}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                                    <BiCalendar className="text-xl" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Published On</p>
                                    <p className="text-sm font-bold text-slate-900">{post.date}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                                    <BiTime className="text-xl" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Read Time</p>
                                    <p className="text-sm font-bold text-slate-900">5 min read</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </header>

                {/* Featured Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-16 rounded-[48px] overflow-hidden shadow-2xl"
                >
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-[500px] object-cover"
                    />
                </motion.div>

                {/* Content */}
                <div
                    className="prose prose-lg prose-slate max-w-none 
                        prose-headings:text-slate-900 prose-headings:font-black prose-headings:tracking-tight
                        prose-p:text-slate-600 prose-p:leading-relaxed prose-p:text-lg
                        prose-li:text-slate-600 prose-li:text-lg
                        prose-strong:text-slate-900 prose-strong:font-bold"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <div className="mt-20 pt-10 border-t border-slate-100 flex items-center justify-between">
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-slate-50 hover:bg-brand-primary hover:text-white rounded-full text-sm font-black transition-all uppercase tracking-widest"
                    >
                        <BiArrowBack className="text-xl" /> Back to Blog
                    </Link>
                </div>
            </article>
        </main>
    );
};

export default BlogDetail;
