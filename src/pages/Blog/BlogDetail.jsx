import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { blogPosts } from "../../data/blogData";
import { pageTitleBg, pageTitleShape } from "../../assets/images";
import { BiCalendar, BiUser, BiChevronRight, BiTime, BiHash, BiTrendingUp, BiSend } from "react-icons/bi";
import Meta from "../../components/common/Meta";
import TableOfContents from "../../components/common/TableOfContents";

const BlogDetail = () => {
    const { slug } = useParams();
    const post = blogPosts.find((p) => p.slug === slug);
    const recentPosts = blogPosts.filter(p => p.slug !== slug).slice(0, 3);
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, ease: "easeOut" }
    };

    return (
        <main className="pb-10 bg-white">
            <Meta
                title={`${post.title} - MBBS Admission Blog`}
                description={`Read our latest insights on: ${post.title}. Stay updated with MBBS admission news.`}
            />
            {/* Page Title Area */}
            <section className="relative pt-[160px] pb-[120px] bg-slate-700 overflow-hidden mb-16">
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
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-1xl md:text-2xl lg:text-3xl font-black text-white mb-6 uppercase tracking-tight">
                                <span className="text-brand-secondary">Medical </span> University
                            </h2>
                            <ul className="flex items-center justify-center xl:justify-start gap-4 text-slate-400 font-extrabold text-[11px] uppercase tracking-[0.3em]">
                                <li><Link to="/" className="hover:text-brand-secondary text-white transition-colors">Home</Link></li>
                                <li className="text-slate-600">/</li>
                                <li><Link to="/blog" className="hover:text-brand-secondary text-white transition-colors">Blog</Link></li>
                                <li className="text-slate-600">/</li>
                                <li className="text-brand-secondary truncate max-w-[200px] md:max-w-none">{post.title}</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Main Content Area */}
                    <div className="lg:col-span-8">
                        <article>
                            <header className="mb-12">
                                <motion.div {...fadeInUp}>
                                    <h1 className="text-2xl md:text-4xl lg:text-3xl font-black text-slate-900 leading-[1.1] mb-4 uppercase tracking-tighter">
                                        {post.title}
                                    </h1>
                                    <div className="flex flex-wrap items-center gap-4 py-4 border-y border-slate-100">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-brand-primary shadow-sm border border-slate-100">
                                                <BiUser className="text-xl" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Author</p>
                                                <p className="text-sm font-bold text-slate-900">{post.author}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-brand-primary shadow-sm border border-slate-100">
                                                <BiCalendar className="text-xl" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Date</p>
                                                <p className="text-sm font-bold text-slate-900">{post.date}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-brand-primary shadow-sm border border-slate-100">
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
                                {...fadeInUp}
                                className="mb-16 rounded-[48px] overflow-hidden shadow-2xl border-8 border-slate-50 group"
                            >
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-[2s]"
                                />
                            </motion.div>

                            {/* Table of Contents */}
                            {post.tocSections && post.tocSections.length > 0 && (
                                <motion.div {...fadeInUp} className="mb-8">
                                    <TableOfContents sections={post.tocSections} />
                                </motion.div>
                            )}



                            {/* Article Body */}
                            <motion.div
                                {...fadeInUp}
                                className="prose prose-lg prose-slate max-w-none 
                                    prose-headings:text-slate-900 prose-headings:font-black prose-headings:tracking-tighter prose-headings:uppercase
                                    prose-p:text-slate-600 prose-p:leading-relaxed prose-p:text-lg prose-p:font-medium
                                    prose-li:text-slate-600 prose-li:text-lg prose-li:font-medium
                                    prose-strong:text-slate-900 prose-strong:font-black
                                    prose-img:rounded-[32px] prose-img:shadow-xl"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />
                        </article>
                    </div>

                    {/* Right Sidebar */}
                    <aside className="lg:col-span-4 space-y-12">

                        {/* Get in Touch Form Widget */}
                        <div className="bg-white rounded-[40px] p-8 border border-slate-100 shadow-premium relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-bl-full"></div>
                            <h4 className="text-xl font-black text-slate-900 mb-6 uppertolowercase tracking-widest relative pb-4 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-brand-secondary">Get in Touch</h4>
                            <form className="space-y-4">
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-black text-slate-900 uppertolowercase tracking-widest ml-2">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder=""
                                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-3 text-slate-900 focus:border-brand-primary focus:bg-white outline-none transition-all font-bold placeholder:text-slate-300 text-sm"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-black text-slate-900 uppertolowercase tracking-widest ml-2">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder=" "
                                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-3 text-slate-900 focus:border-brand-primary focus:bg-white outline-none transition-all font-bold placeholder:text-slate-300 text-sm"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-black text-slate-900 uppertolowercase tracking-widest ml-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        placeholder=""
                                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-3 text-slate-900 focus:border-brand-primary focus:bg-white outline-none transition-all font-bold placeholder:text-slate-300 text-sm"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-black text-slate-900 uppertolowercase tracking-widest ml-2">City</label>
                                        <input
                                            type="text"
                                            placeholder=""
                                            className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-3 text-slate-900 focus:border-brand-primary focus:bg-white outline-none transition-all font-bold placeholder:text-slate-300 text-sm"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-black text-slate-900 uppertolowercase tracking-widest ml-2">National Name</label>
                                        <input
                                            type="text"
                                            placeholder=""
                                            className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-3 text-slate-900 focus:border-brand-primary focus:bg-white outline-none transition-all font-bold placeholder:text-slate-300 text-sm"
                                        />
                                    </div>
                                </div>
                                {/* Captcha Section */}
                                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 select-none">
                                            <span className="text-brand-primary font-black tracking-[0.3em] text-xs">8 + 4 =</span>
                                        </div>
                                        <input
                                            type="text"
                                            placeholder=" "
                                            className="w-12 bg-slate-50 border border-slate-100 rounded-lg px-2 py-1.5 text-slate-900 text-center focus:border-brand-primary outline-none font-bold text-sm"
                                        />
                                    </div>
                                    <p className="text-[8px] font-bold text-slate-400 uppertolowercase tracking-wider text-right">Human<br />Verification</p>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white font-black py-3 rounded-2xl text-[11px] uppertolowercase tracking-[0.2em] shadow-lg shadow-brand-primary/20 transition-all flex items-center justify-center gap-3 mt-2"
                                >
                                    <BiSend className="text-lg" />
                                    Send Inquiry
                                </motion.button>
                            </form>
                        </div>

                        {/* Recent post Widget */}
                        <div className="bg-slate-50 rounded-[40px] p-10 border border-slate-100 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-bl-full"></div>
                            <h4 className="text-xl font-black text-slate-900 mb-8 uppercase tracking-widest relative pb-4 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-brand-secondary">Recent post</h4>
                            <div className="space-y-8">
                                {recentPosts.map((recent) => (
                                    <Link key={recent.slug} to={`/blog/${recent.slug}`} className="group flex gap-4 no-underline items-start">
                                        <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 shadow-sm transition-transform group-hover:scale-95">
                                            <img src={recent.image} alt={recent.title} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h5 className="text-sm font-black text-slate-900 leading-snug group-hover:text-brand-primary transition-colors line-clamp-2 uppercase tracking-tight">
                                                {recent.title}
                                            </h5>
                                            <p className="text-[10px] text-slate-400 font-bold mt-2 uppercase tracking-widest">{recent.date}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                    </aside>


                </div>
            </div>
        </main>
    );
};

export default BlogDetail;
