import React, { useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { pageTitleBg, pageTitleShape } from '../../assets/images';
import { BiChevronRight, BiMapPin, BiCalendar, BiCheckShield, BiBuildings, BiBookOpen, BiMoney, BiTime, BiGlobe, BiPhone, BiListUl, BiInfoCircle, BiPlus, BiMinus, BiSend } from 'react-icons/bi';
import Meta from '../../components/common/Meta';
import TableOfContents from '../../components/common/TableOfContents';
import { universitiesData } from '../../data/universityData';

const UniversityDetail = () => {
    const { slug } = useParams();
    const location = useLocation();
    const [isTocOpen, setIsTocOpen] = useState(false);


    const university = universitiesData[slug];

    const getBackLink = () => {
        if (location.pathname.startsWith('/university/')) return "/universities";
        if (location.pathname.startsWith('/mbbs/vietnam/')) return "/mbbs/vietnam";
        if (location.pathname.startsWith('/mbbs/russia/')) return "/mbbs/russia";
        if (location.pathname.startsWith('/mbbs/uzbekistan/')) return "/mbbs/uzbekistan";

        // Fallback
        if (!university) return "/universities";
        if (university.location.toLowerCase().includes('vietnam')) return "/mbbs/vietnam";
        if (university.location.toLowerCase().includes('russia')) return "/mbbs/russia";
        if (university.location.toLowerCase().includes('uzbekistan')) return "/mbbs/uzbekistan";
        return "/universities";
    };

    const getUniversityLink = (slug, universityLocation) => {
        // Respect the current context if possible
        if (location.pathname.startsWith('/university/')) return `/university/${slug}`;
        if (location.pathname.startsWith('/mbbs/vietnam/')) return `/mbbs/vietnam/${slug}`;
        if (location.pathname.startsWith('/mbbs/russia/')) return `/mbbs/russia/${slug}`;
        if (location.pathname.startsWith('/mbbs/uzbekistan/')) return `/mbbs/uzbekistan/${slug}`;

        // Fallback to regional if location provided
        if (!universityLocation) return `/university/${slug}`;
        const country = universityLocation.toLowerCase();
        if (country.includes('vietnam')) return `/mbbs/vietnam/${slug}`;
        if (country.includes('russia')) return `/mbbs/russia/${slug}`;
        if (country.includes('uzbekistan')) return `/mbbs/uzbekistan/${slug}`;
        return `/university/${slug}`;
    };

    const tocSections = [
        { id: 'about', label: `1. About ${university.name}` },
        { id: 'highlights', label: `2. Why Choose ${university.name}` },
        { id: 'eligibility', label: `3. Eligibility Criteria for MBBS` },
        { id: 'fees', label: '4. Fee Structure 2026' },
        { id: 'admission', label: '5. Admission Process' },
        { id: 'documents', label: '6. Documents Required' },
        { id: 'facilities', label: '7. Campus Facilities' },
        { id: 'quick-info', label: '8. Quick Information' },
    ];

    // Prepare for API integration

    React.useEffect(() => {
        const fetchUniversity = async () => {
            try {
                // When API is ready:
                // const response = await getUniversityBySlug(slug);
                // setUniversity(response.data);
                console.log(`Fetching university data for: ${slug}`);
            } catch (error) {
                console.error("Error fetching university:", error);
            }
        };
        fetchUniversity();
    }, [slug]);

    if (!university) {
        return (
            <main className="overflow-hidden bg-white min-h-screen flex items-center justify-center">
                <Meta title="University Not Found" />
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">University Not Found</h1>
                    <p className="text-slate-600 mb-8">The university you're looking for doesn't exist.</p>
                    <Link to="/mbbs/vietnam" className="btn-primary px-8 py-4 rounded-full">
                        Back to Universities
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="overflow-hidden bg-white">
            <Meta
                title={`${university.name} - MBBS Abroad`}
                description={`Get full details about ${university.name}, including fee structure, eligibility, and admission process for international students.`}
            />
            {/* Hero Banner */}
            <section className="relative pt-[120px] pb-[60px] md:pt-[160px] md:pb-[80px] bg-slate-900 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-30 scale-105"
                    style={{ backgroundImage: `url(${university.bannerImg})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/70 to-slate-900"></div>

                <motion.img
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 0.15, x: 0 }}
                    transition={{ duration: 1.2 }}
                    src={pageTitleShape}
                    alt="shape"
                    className="absolute right-0 bottom-0 pointer-events-none w-1/3 z-10"
                />

                <div className="container mx-auto px-6 relative z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center xl:text-left xl:max-w-4xl"
                    >
                        <ul className="flex flex-wrap items-center justify-center xl:justify-start gap-3 text-slate-400 font-black text-[10px] uppercase tracking-[0.3em] mb-8">
                            <li><Link to="/" className="hover:text-brand-secondary transition-colors">Home</Link></li>
                            <li className="text-slate-700">/</li>
                            <li><Link to={getBackLink()} className="hover:text-brand-secondary transition-colors">{getBackLink() === '/universities' ? 'Medical Universities' : `MBBS in ${university.location.split(',').pop().trim()}`}</Link></li>
                            <li className="text-slate-700">/</li>
                            <li className="text-brand-primary">{university.name}</li>
                        </ul>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-8 uppercase tracking-tighter">
                            {university.name}
                        </h1>
                        <div className="flex flex-wrap items-center justify-center xl:justify-start gap-4 md:gap-8 text-white/80 text-xs font-bold uppercase tracking-widest">
                            <span className="flex items-center gap-2.5 bg-white/5 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/10">
                                <BiMapPin className="text-brand-secondary text-lg" />
                                {university.location}
                            </span>
                            <span className="flex items-center gap-2.5 bg-white/5 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/10">
                                <BiCalendar className="text-brand-secondary text-lg" />
                                Est. {university.established}
                            </span>
                            <span className="flex items-center gap-2.5 bg-white/5 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/10">
                                <BiCheckShield className="text-brand-secondary text-lg" />
                                {university.recognition}
                            </span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Left Content */}
                        <div className="lg:col-span-2">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 id="about" className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                    <div className="p-2 bg-brand-primary/10 rounded-lg shrink-0">
                                        <BiInfoCircle className="text-brand-primary" />
                                    </div>
                                    About {university.name}
                                </h2>
                                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-10">
                                    {university.description}
                                </p>


                                {/* University Image */}
                                <div className="rounded-[32px] overflow-hidden mb-12 shadow-xl border-4 border-white">
                                    <img
                                        src={university.img}
                                        alt={university.name}
                                        className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>

                                {/* Table of Contents */}
                                <div className="mb-12">
                                    <TableOfContents sections={tocSections} />
                                </div>



                                {/* Highlights */}
                                <div id="highlights" className="scroll-mt-32 mb-12">
                                    <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                                            <BiCheckShield className="text-xl" />
                                        </div>
                                        Why Choose {university.name}?
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {university.highlights.map((highlight, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                                className="flex items-start gap-3 p-4 bg-slate-50 rounded-[20px] border border-slate-100 hover:border-brand-primary/30 transition-colors"
                                            >
                                                <div className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <BiChevronRight className="text-brand-primary text-sm" />
                                                </div>
                                                <span className="text-slate-700 text-sm font-medium">{highlight}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Eligibility Section */}
                                <div id="eligibility" className="scroll-mt-32 mb-12">
                                    <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                                            <BiListUl className="text-xl" />
                                        </div>
                                        Eligibility Criteria for MBBS
                                    </h3>
                                    <div className="bg-white rounded-[24px] border border-slate-100 overflow-hidden shadow-sm">
                                        <div className="p-6 bg-slate-50 border-b border-slate-100">
                                            <p className="text-sm text-slate-600 leading-relaxed italic">
                                                To secure admission at {university.name}, candidates must fulfill the following regulatory requirements:
                                            </p>
                                        </div>
                                        <div className="p-6 space-y-4">
                                            <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-slate-50">
                                                <div className="w-10 h-10 rounded-xl bg-brand-primary/5 flex items-center justify-center text-brand-primary font-bold flex-shrink-0">01</div>
                                                <p className="text-slate-700 text-sm">Minimum 50% marks in Physics, Chemistry, and Biology (PCB) in 12th Standard boards.</p>
                                            </div>
                                            <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-slate-50">
                                                <div className="w-10 h-10 rounded-xl bg-brand-primary/5 flex items-center justify-center text-brand-primary font-bold flex-shrink-0">02</div>
                                                <p className="text-slate-700 text-sm">Candidate must have qualified the NEET-UG entrance exam as per the current year's cutoff.</p>
                                            </div>
                                            <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-slate-50">
                                                <div className="w-10 h-10 rounded-xl bg-brand-primary/5 flex items-center justify-center text-brand-primary font-bold flex-shrink-0">03</div>
                                                <p className="text-slate-700 text-sm">The student must be at least 17 years old on or before 31st December of the admission year.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Fee Structure Section */}
                                <div id="fees" className="scroll-mt-32 mb-12">
                                    <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                                            <BiMoney className="text-xl" />
                                        </div>
                                        Fee Structure 2026
                                    </h3>
                                    <div className="bg-white rounded-[24px] border border-slate-100 overflow-hidden shadow-sm">
                                        <table className="w-full text-left border-collapse">
                                            <thead>
                                                <tr className="bg-slate-900 text-white">
                                                    <th className="p-4 text-xs font-bold uppercase tracking-widest">Year</th>
                                                    <th className="p-4 text-xs font-bold uppercase tracking-widest">Tuition Fee (Approx)</th>
                                                    <th className="p-4 text-xs font-bold uppercase tracking-widest">Hostel & Food</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-sm">
                                                <tr className="border-b border-slate-50">
                                                    <td className="p-4 font-bold text-slate-900">1st Year</td>
                                                    <td className="p-4 text-slate-600">{university.tuitionFee.split('-')[0]}</td>
                                                    <td className="p-4 text-slate-600">$1,000</td>
                                                </tr>
                                                <tr className="border-b border-slate-50 bg-slate-50/50">
                                                    <td className="p-4 font-bold text-slate-900">2nd - 6th Year</td>
                                                    <td className="p-4 text-slate-600">{university.tuitionFee.split('-')[0]} / Year</td>
                                                    <td className="p-4 text-slate-600">$1,000 / Year</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className="p-4 bg-brand-primary/5">
                                            <p className="text-[10px] text-brand-primary font-bold uppercase text-center">Note: Fees are subject to change based on university regulations and currency exchange rates.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Admission Process Section */}
                                <div id="admission" className="scroll-mt-32 mb-12">
                                    <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                                            <BiBuildings className="text-xl" />
                                        </div>
                                        Admission Process
                                    </h3>
                                    <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                                        {[
                                            { step: 'Step 1', title: 'Consultation & Registration', desc: 'Expert counselling session to understand your goals and register for the program.' },
                                            { step: 'Step 2', title: 'Document Verification', desc: 'Submission of academic marksheets and passport for eligibility check.' },
                                            { step: 'Step 3', title: 'Admission Letter', desc: 'Secure the official admission letter from the university within 7-10 working days.' },
                                            { step: 'Step 4', title: 'Visa Processing', desc: 'Our team handles the end-to-end student visa application and documentation.' }
                                        ].map((item, idx) => (
                                            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-200 group-[.is-active]:bg-brand-primary text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors duration-500">
                                                    <BiCheckShield />
                                                </div>
                                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-[20px] bg-white border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-md">
                                                    <div className="flex items-center justify-between space-x-2 mb-1">
                                                        <div className="font-bold text-brand-primary">{item.step}</div>
                                                    </div>
                                                    <div className="text-slate-900 font-bold mb-1">{item.title}</div>
                                                    <div className="text-slate-500 text-xs leading-relaxed">{item.desc}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Documents Section */}
                                <div id="documents" className="scroll-mt-32 mb-12">
                                    <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                                            <BiBookOpen className="text-xl" />
                                        </div>
                                        Documents Required
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {[
                                            'Valid Passport (Original)',
                                            '10th & 12th Passing Certificates',
                                            'NEET Scorecard (Current Year)',
                                            'Birth Certificate (English)',
                                            '10 Passport size photos',
                                            'Medical Fitness Certificate'
                                        ].map((doc, idx) => (
                                            <div key={idx} className="flex items-center gap-3 p-4 bg-white border border-slate-50 rounded-2xl shadow-sm">
                                                <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
                                                <span className="text-slate-700 font-semibold text-xs">{doc}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Facilities */}
                                <div id="facilities" className="scroll-mt-32 mb-12">
                                    <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                                            <BiBuildings className="text-xl" />
                                        </div>
                                        Campus Facilities
                                    </h3>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                        {university.facilities.map((facility, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-center justify-center p-4 bg-brand-primary/5 border border-brand-primary/10 text-brand-primary font-bold rounded-2xl text-[10px] uppercase tracking-widest text-center"
                                            >
                                                {facility}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Sidebar */}
                        <div className="lg:col-span-1">
                            <aside className="sticky top-32 space-y-8">

                                {/* Other Universities Card */}
                                <div className="bg-white rounded-[24px] border border-slate-100 p-6 shadow-sm overflow-hidden">
                                    <h3 className="text-base font-bold text-slate-900 mb-6 pb-2 border-b border-slate-100 flex items-center justify-between">
                                        Other Universities <span className="text-brand-primary text-[10px] bg-brand-primary/5 px-2 py-0.5 rounded-full uppercase">{university.location.split(',')[1]?.trim() || 'Global'}</span>
                                    </h3>
                                    <div className="space-y-3">
                                        {Object.entries(universitiesData)
                                            .filter(([key]) => key !== slug)
                                            .slice(0, 5) // Limit to 5 for cleaner sidebar
                                            .map(([key, uni]) => (
                                                <Link
                                                    key={key}
                                                    to={getUniversityLink(key, uni.location)}
                                                    className="block p-4 rounded-xl border border-slate-50 bg-slate-50/30 hover:bg-white hover:border-brand-primary/30 hover:shadow-md transition-all group"
                                                >
                                                    <div className="flex items-center justify-between gap-3">
                                                        <span className="text-xs font-bold text-slate-700 group-hover:text-brand-primary transition-colors line-clamp-1">{uni.name}</span>
                                                        <BiChevronRight className="text-brand-primary text-lg flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                                                    </div>
                                                </Link>
                                            ))}
                                    </div>

                                </div>

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

                                {/* Quick Info Card */}
                                <div id="quick-info" className="bg-white rounded-[24px] border border-slate-100 p-6 shadow-sm">
                                    <h3 className="text-base font-bold text-slate-900 mb-4 pb-3 border-b">
                                        Quick Information
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-primary shadow-sm">
                                                <BiMoney className="text-xl" />
                                            </div>
                                            <div>
                                                <span className="text-slate-500 text-xs font-semibold uppercase tracking-wide">Tuition Fee</span>
                                                <p className="text-slate-900 font-semibold text-sm">{university.tuitionFee}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-primary shadow-sm">
                                                <BiTime className="text-xl" />
                                            </div>
                                            <div>
                                                <span className="text-slate-500 text-xs font-semibold uppercase tracking-wide">Duration</span>
                                                <p className="text-slate-900 font-semibold text-sm">{university.duration}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-primary shadow-sm">
                                                <BiGlobe className="text-xl" />
                                            </div>
                                            <div>
                                                <span className="text-slate-500 text-xs font-semibold uppercase tracking-wide">Medium</span>
                                                <p className="text-slate-900 font-semibold text-sm">{university.medium}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-primary shadow-sm">
                                                <BiCalendar className="text-xl" />
                                            </div>
                                            <div>
                                                <span className="text-slate-500 text-xs font-semibold uppercase tracking-wide">Intake</span>
                                                <p className="text-slate-900 font-semibold text-sm">{university.intake}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-primary shadow-sm">
                                                <BiBookOpen className="text-xl" />
                                            </div>
                                            <div>
                                                <span className="text-slate-500 text-xs font-semibold uppercase tracking-wide">Eligibility</span>
                                                <p className="text-slate-900 font-semibold text-[11px] leading-tight">{university.eligibility}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>

            {/* Back to Universities */}
            <section className="py-8 bg-slate-50">
                <div className="container mx-auto px-6 text-center">
                    <Link
                        to={getBackLink()}
                        className="inline-flex items-center gap-2 bg-brand-primary px-6 py-3 rounded-full font-semibold text-sm text-white hover:bg-[#1E3A8A] transition-all shadow-md"
                    >
                        <BiChevronRight className="text-xl rotate-180  group-hover:text-brand-primary" />
                        Back to All {university.location.split(',')[1]?.trim() || ''} Universities
                    </Link>
                </div>
            </section>

        </main>
    );
};

export default UniversityDetail;
