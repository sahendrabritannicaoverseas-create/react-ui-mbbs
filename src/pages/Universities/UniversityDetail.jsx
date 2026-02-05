import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { pageTitleBg, pageTitleShape, uniCrimea, uniDhaka, uniAma, uniAltinbas, uniMasha } from '../../assets/images';
import { BiChevronRight, BiMapPin, BiCalendar, BiCheckShield, BiBuildings, BiBookOpen, BiMoney, BiTime, BiGlobe, BiPhone } from 'react-icons/bi';

const UniversityDetail = () => {
    const { slug } = useParams();

    // University data - this could be moved to a separate data file or fetched from API
    const universitiesData = {
        'hanoi-medical-university': {
            name: 'Hanoi Medical University',
            img: uniCrimea,
            bannerImg: uniCrimea,
            location: 'Hanoi, Vietnam',
            established: '1902',
            recognition: 'WHO, NMC, FAIMER Listed',
            description: 'Hanoi Medical University (HMU) is one of Vietnam\'s oldest and most prestigious medical institutions. Established in 1902, it has been at the forefront of medical education and research in Southeast Asia for over a century.',
            highlights: [
                'Over 120 years of excellence in medical education',
                'WHO and NMC recognized degrees',
                'English-medium MBBS program available',
                'Modern laboratories and teaching hospitals',
                'Affordable tuition fees for international students',
                'Strong focus on clinical training and research'
            ],
            tuitionFee: '$3,500 - $4,500 per year',
            duration: '6 years (including internship)',
            medium: 'English / Vietnamese',
            intake: 'September',
            eligibility: '50% in PCB for General, 40% for Reserved categories, NEET qualified',
            facilities: ['Teaching Hospital', 'Research Labs', 'Library', 'Hostel', 'Sports Complex', 'Cafeteria']
        },
        'hcmc-university-medicine-pharmacy': {
            name: 'Ho Chi Minh City University of Medicine and Pharmacy',
            img: uniDhaka,
            bannerImg: uniDhaka,
            location: 'Ho Chi Minh City, Vietnam',
            established: '1947',
            recognition: 'WHO, NMC, FAIMER Listed',
            description: 'Ho Chi Minh City University of Medicine and Pharmacy is a leading medical university in Southern Vietnam. It offers world-class MBBS programs with modern facilities and experienced faculty.',
            highlights: [
                'Premier medical institution in Southern Vietnam',
                'State-of-the-art medical simulation center',
                'International exchange programs',
                'Strong alumni network globally',
                'Research-oriented curriculum',
                'Clinical rotations at top hospitals'
            ],
            tuitionFee: '$4,000 - $5,000 per year',
            duration: '6 years (including internship)',
            medium: 'English / Vietnamese',
            intake: 'September',
            eligibility: '50% in PCB for General, 40% for Reserved categories, NEET qualified',
            facilities: ['University Hospital', 'Simulation Center', 'Digital Library', 'International Hostel', 'Research Center']
        },
        'hue-university-medicine-pharmacy': {
            name: 'Hue University of Medicine and Pharmacy',
            img: uniAma,
            bannerImg: uniAma,
            location: 'Hue, Vietnam',
            established: '1957',
            recognition: 'WHO, NMC Listed',
            description: 'Located in the historic city of Hue, this university offers comprehensive medical education with strong clinical training. The serene environment provides an ideal setting for focused learning.',
            highlights: [
                'Located in UNESCO World Heritage city',
                'Peaceful learning environment',
                'Strong practical training focus',
                'Affordable cost of living',
                'Experienced international faculty',
                'Modern medical equipment'
            ],
            tuitionFee: '$3,000 - $4,000 per year',
            duration: '6 years (including internship)',
            medium: 'English / Vietnamese',
            intake: 'September',
            eligibility: '50% in PCB for General, 40% for Reserved categories, NEET qualified',
            facilities: ['Teaching Hospital', 'Anatomy Lab', 'Library', 'Student Dormitory', 'Sports Facilities']
        },
        'can-tho-university-medicine-pharmacy': {
            name: 'Can Tho University of Medicine and Pharmacy',
            img: uniAltinbas,
            bannerImg: uniAltinbas,
            location: 'Can Tho, Vietnam',
            established: '2002',
            recognition: 'WHO, NMC Listed',
            description: 'A prominent institution in the Mekong Delta region, Can Tho University of Medicine and Pharmacy is known for quality medical education and affordable tuition, making it an attractive choice for international students.',
            highlights: [
                'Most affordable MBBS option in Vietnam',
                'Growing international student community',
                'Modern campus infrastructure',
                'Strong community medicine focus',
                'Supportive learning environment',
                'Easy visa processing'
            ],
            tuitionFee: '$2,500 - $3,500 per year',
            duration: '6 years (including internship)',
            medium: 'English / Vietnamese',
            intake: 'September',
            eligibility: '50% in PCB for General, 40% for Reserved categories, NEET qualified',
            facilities: ['Medical Center', 'Laboratories', 'E-Library', 'Hostel', 'Canteen']
        },
        'thai-binh-university-medicine-pharmacy': {
            name: 'Thai Binh University of Medicine and Pharmacy',
            img: uniMasha,
            bannerImg: uniMasha,
            location: 'Thai Binh, Vietnam',
            established: '1968',
            recognition: 'WHO, NMC Listed',
            description: 'A well-established medical university offering MBBS programs with excellent practical training opportunities. Thai Binh University has produced thousands of successful medical professionals.',
            highlights: [
                'Over 55 years of medical education',
                'Strong emphasis on practical skills',
                'Collaborative research programs',
                'Safe and student-friendly city',
                'Experienced teaching staff',
                'Quality clinical exposure'
            ],
            tuitionFee: '$3,000 - $4,000 per year',
            duration: '6 years (including internship)',
            medium: 'English / Vietnamese',
            intake: 'September',
            eligibility: '50% in PCB for General, 40% for Reserved categories, NEET qualified',
            facilities: ['Teaching Hospital', 'Research Labs', 'Central Library', 'Student Housing', 'Recreation Center']
        }
    };

    const university = universitiesData[slug];

    if (!university) {
        return (
            <main className="overflow-hidden bg-white min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">University Not Found</h1>
                    <p className="text-slate-600 mb-8">The university you're looking for doesn't exist.</p>
                    <Link to="/mbbs-vietnam" className="btn-primary px-8 py-4 rounded-full">
                        Back to Universities
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="overflow-hidden bg-white">
            {/* Hero Banner */}
            <section className="relative pt-[140px] pb-[60px] bg-slate-900 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40 scale-105"
                    style={{ backgroundImage: `url(${university.bannerImg})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/80 to-slate-900"></div>

                <motion.img
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 0.2, x: 0 }}
                    transition={{ duration: 1.2 }}
                    src={pageTitleShape}
                    alt="shape"
                    className="absolute right-0 bottom-0 pointer-events-none w-1/3 opacity-20"
                />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center xl:text-left"
                    >
                        <ul className="flex items-center justify-center xl:justify-start gap-3 text-slate-500 font-semibold text-[10px] uppercase tracking-widest mb-4">
                            <li><Link to="/" className="hover:text-brand-secondary transition-colors">Home</Link></li>
                            <li className="text-slate-700">/</li>
                            <li><Link to="/mbbs-vietnam" className="hover:text-brand-secondary transition-colors">MBBS Vietnam</Link></li>
                            <li className="text-slate-700">/</li>
                            <li className="text-brand-secondary">{university.name}</li>
                        </ul>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                            {university.name}
                        </h1>
                        <div className="flex flex-wrap items-center justify-center xl:justify-start gap-4 text-white/70 text-sm">
                            <span className="flex items-center gap-1.5">
                                <BiMapPin className="text-brand-secondary text-base" />
                                {university.location}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <BiCalendar className="text-brand-secondary text-base" />
                                Est. {university.established}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <BiCheckShield className="text-brand-secondary text-base" />
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
                                <h2 className="text-xl font-bold text-slate-900 mb-4">About the University</h2>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                    {university.description}
                                </p>

                                {/* University Image */}
                                <div className="rounded-[20px] overflow-hidden mb-8 shadow-lg">
                                    <img
                                        src={university.img}
                                        alt={university.name}
                                        className="w-full h-[250px] object-cover"
                                    />
                                </div>

                                {/* Highlights */}
                                <h3 className="text-lg font-bold text-slate-900 mb-4">Why Choose {university.name}?</h3>
                                <div className="grid md:grid-cols-2 gap-3 mb-8">
                                    {university.highlights.map((highlight, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                                            className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl"
                                        >
                                            <div className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                                                <BiChevronRight className="text-brand-primary text-sm" />
                                            </div>
                                            <span className="text-slate-700 text-sm">{highlight}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Facilities */}
                                <h3 className="text-lg font-bold text-slate-900 mb-4">Campus Facilities</h3>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {university.facilities.map((facility, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1.5 bg-brand-primary/5 text-brand-primary font-semibold rounded-full text-xs"
                                        >
                                            {facility}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Sidebar */}
                        <div className="lg:col-span-1">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="sticky top-32"
                            >
                                {/* Quick Info Card */}
                                <div className="bg-slate-50 rounded-[20px] p-6 mb-6">
                                    <h3 className="text-base font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200">
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
                                                <p className="text-slate-900 font-semibold text-xs">{university.eligibility}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Back to Universities */}
            <section className="py-8 bg-slate-50">
                <div className="container mx-auto px-6 text-center">
                    <Link
                        to="/mbbs-vietnam"
                        className="inline-flex items-center gap-2 bg-brand-primary px-6 py-3 rounded-full font-semibold text-sm text-white hover:bg-[#1E3A8A] transition-all shadow-md"
                    >
                        <BiChevronRight className="text-xl rotate-180" />
                        Back to All Vietnam Universities
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default UniversityDetail;
