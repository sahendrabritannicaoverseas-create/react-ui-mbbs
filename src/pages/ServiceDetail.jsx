import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { pageTitleBg, pageTitleShape, iconStudent, iconTourist, iconWorking, iconVisa, iconCounselling, iconDestinations } from '../assets/images';
import { BiChevronRight, BiCheck, BiCalendarCheck } from 'react-icons/bi';

const servicesData = {
    'student-visa': {
        title: 'Student Visa Assistance',
        icon: iconStudent,
        desc: 'Comprehensive support for obtaining a student visa for your MBBS journey abroad.',
        longDesc: 'Our Student Visa Assistance service is designed to take the stress out of the visa application process. We provide step-by-step guidance on documentation, interview preparation, and submission procedures. With a high success rate, we ensure that students can focus on their studies while we handle the complexities of visa procurement for countries like Vietnam, Russia, Uzbekistan, and more.',
        highlights: [
            'Personalized document checklist for each country',
            'Expert interview coaching and mock sessions',
            'Direct coordination with embassies and consulates',
            'Regular updates on visa status and processing times',
            'Guidance on financial proof and sponsorship requirements',
            'Post-visa briefing for travel and arrival'
        ]
    },
    'tourist-visa': {
        title: 'Tourist Visa Support',
        icon: iconTourist,
        desc: 'Simplified tourist visa processing for parents and family visiting students.',
        longDesc: 'We understand the importance of family support during your medical studies. Our Tourist Visa Support service assists parents and family members in visiting their children studying abroad. We handle everything from invitation letters to document verification, making the visitation process seamless and worry-free.',
        highlights: [
            'Quick processing for family visitations',
            'Assistance with invitation letters from universities',
            'Simplified document verification process',
            'Flight and accommodation booking guidance',
            'Comprehensive travel insurance support',
            'High approval rate for visiting relatives'
        ]
    },
    'working-visa': {
        title: 'Working Visa Services',
        icon: iconWorking,
        desc: 'Professional assistance for graduates seeking work permits and legal employment.',
        longDesc: 'For medical graduates looking to practice or specialize in their host country or elsewhere, we offer Working Visa Services. We provide legal and administrative support to secure work permits, ensuring you meet all local regulations and professional licensing requirements to begin your medical career globally.',
        highlights: [
            'Guidance on local medical council registrations',
            'Work permit application and renewal support',
            'Legal consultation on employment contracts',
            'Documentation support for professional licensing',
            'Assistance in job search within partner networks',
            'Support for permanent residency applications'
        ]
    },
    'visa-application': {
        title: 'Full Visa Application Support',
        icon: iconVisa,
        desc: 'Complete end-to-end filing for all types of visa requirements.',
        longDesc: 'Our Full Visa Application Support covers every aspect of the visa lifecycle. From the initial inquiry to final approval, our team of experts manages the entire application. Whether it is a student, transit, or temporary residence visa, we ensure every detail is handled with precision to avoid delays or rejections.',
        highlights: [
            'End-to-end management of the filing process',
            'Thorough audit of all application documents',
            'Expert advice on visa category selection',
            'Fast-track options for urgent requirements',
            '24/7 support for application-related queries',
            'Secure handling of sensitive personal documents'
        ]
    },
    'free-counselling': {
        title: 'Free Career Counselling',
        icon: iconCounselling,
        desc: 'Expert guidance to help you choose the right path for your medical career.',
        longDesc: 'Choosing where to study MBBS is a life-changing decision. Our Free Career Counselling sessions are led by experienced education consultants who provide unbiased advice based on your academic background, budget, and career goals. We help you compare different countries and universities to find the perfect fit for your medical future.',
        highlights: [
            'One-on-one sessions with expert consultants',
            'Comparative analysis of global medical universities',
            'Financial planning and budget optimization',
            'Assessment of career prospects post-MBBS',
            'Guidance on NEET and licensing exams (FMGE/NEXT)',
            'Virtual and in-person counselling options'
        ]
    },
    'mbbs-destinations': {
        title: 'MBBS Destinations Guide',
        icon: iconDestinations,
        desc: 'Deep insights into the best countries and universities for medical studies.',
        longDesc: 'We provide detailed insights into the top MBBS destinations worldwide. Our guide highlights the benefits of studying in countries like Vietnam, Russia, and Uzbekistan, covering everything from climate and culture to the standard of medical education and clinical exposure. We help you understand the landscape of global medical education before you make your choice.',
        highlights: [
            'Detailed profiles of top medical universities',
            'Insights into clinical exposure and equipment',
            'Information on student life and campus facilities',
            'Analysis of local healthcare systems',
            'Success stories of Indian students in each region',
            'Regular updates on intake and admission cycles'
        ]
    }
};

const ServiceDetail = () => {
    const { slug } = useParams();
    const service = servicesData[slug];

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, ease: "easeOut" }
    };

    if (!service) {
        return <div className="py-20 text-center">Service not found.</div>;
    }

    return (
        <div className="main-page-wrapper bg-white">
            {/* Page Title Area */}
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

                <div className="container mx-auto px-6 relative z-10 text-center xl:text-left">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <ul className="flex items-center justify-center xl:justify-start gap-4 text-slate-400 font-black text-xs uppercase tracking-[0.2em] mb-6">
                                <li><Link to="/" className="hover:text-brand-primary text-white transition-colors">Home</Link></li>
                                <li><BiChevronRight className="text-slate-300" /></li>
                                <li><Link to="/services" className="hover:text-brand-primary text-white transition-colors">Services</Link></li>
                                <li><BiChevronRight className="text-slate-300" /></li>
                                <li className="text-brand-secondary">{service.title}</li>
                            </ul>
                            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
                                {service.title.split(' ')[0]} <span className="text-brand-primary">{service.title.split(' ').slice(1).join(' ')}</span>
                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-2 rounded-full shadow-sm border border-white/20"
                        >
                            <div className="bg-brand-primary text-white w-12 h-12 rounded-full flex items-center justify-center">
                                <BiCalendarCheck className="text-2xl" />
                            </div>
                            <div className="pr-6 text-left">
                                <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Support</p>
                                <p className="text-sm font-black text-white uppercase tracking-tight">Available 24/7</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        <motion.div
                            {...fadeInUp}
                            className="lg:col-span-8"
                        >
                            <div className="bg-slate-50 rounded-[48px] p-1 shadow-sm mb-12 border-8 border-slate-50 relative overflow-hidden group">
                                <div className="bg-white rounded-[40px] p-12 md:p-16 relative z-10">
                                    <div className="bg-brand-primary/10 w-24 h-24 rounded-[32px] flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                                        <img src={service.icon} alt={service.title} className="w-12 h-12" />
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 uppercase tracking-tighter">
                                        Professional <span className="text-brand-primary">{service.title}</span> for Students
                                    </h2>
                                    <p className="text-slate-600 text-lg leading-relaxed mb-6 font-medium">
                                        {service.longDesc}
                                    </p>
                                </div>
                                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl"></div>
                            </div>

                            <div className="bg-slate-50 rounded-[40px] p-12 border border-slate-100 mb-12 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-bl-full"></div>
                                <h3 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tight">Service Highlights</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {service.highlights.map((item, idx) => (
                                        <div key={idx} className="flex gap-4 items-center bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:border-brand-primary/30 transition-colors">
                                            <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                                                <BiCheck className="text-brand-primary text-xl font-black" />
                                            </div>
                                            <span className="text-slate-800 font-bold text-sm uppercase tracking-tight">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-4"
                        >
                            <aside className="sticky top-32 space-y-10">
                                <div className="bg-white rounded-[40px] p-10 shadow-premium border border-slate-50">
                                    <h4 className="text-xl font-black text-slate-900 mb-8 uppercase tracking-widest relative pb-4 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-brand-secondary">Other Services</h4>
                                    <div className="flex flex-col gap-5">
                                        {Object.entries(servicesData).filter(([key]) => key !== slug).map(([key, item]) => (
                                            <Link
                                                key={key}
                                                to={`/services/${key}`}
                                                className="flex items-center gap-5 p-4 rounded-2xl hover:bg-slate-50 transition-all no-underline group border border-transparent hover:border-slate-100"
                                            >
                                                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-brand-primary transition-all">
                                                    <img src={item.icon} alt={item.title} className="w-6 h-6 group-hover:invert transition-all" />
                                                </div>
                                                <span className="font-black text-slate-800 uppercase tracking-tight text-xs group-hover:text-brand-primary transition-colors">{item.title}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </aside>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetail;
