import React from 'react';
import { Link } from 'react-router-dom';
import { BiMapPin, BiGlobe, BiPhone, BiRightArrowAlt } from 'react-icons/bi';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { logo } from '../../assets/images';

const Footer = () => {
    return (
        <footer className="bg-[#081843] text-white pt-24 pb-12 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary"></div>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Widget */}
                    <div className="space-y-8">
                        <Link to="/" className="inline-block transition-transform hover:scale-105">
                            <img
                                src={logo}
                                alt="logo"
                                className="h-14"
                            />
                        </Link>
                        <p className="text-white text-sm leading-relaxed max-w-xs font-medium">
                            Empowering future doctors with world-class education opportunities abroad. Your trusted partner in MBBS admissions since 2012.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: <FaFacebookF />, link: '#' },
                                { icon: <FaInstagram />, link: '#' },
                                { icon: <FaTwitter />, link: '#' },
                                { icon: <FaLinkedinIn />, link: '#' }
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.link}
                                    className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-white hover:bg-[#F5A716] transition-all duration-300 shadow-lg border border-slate-700"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-black uppercase tracking-widest mb-8 text-white relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-brand-secondary rounded-full"></span>
                        </h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'About Us', link: '/about' },
                                { name: 'Medical Universities', link: '/universities' },
                                { name: 'MBBS in Vietnam', link: '/mbbs-vietnam' },
                                { name: 'Services', link: '/services' },
                                { name: 'Contact Us', link: '/contact' }
                            ].map((item, idx) => (
                                <li key={idx}>
                                    <Link
                                        to={item.link}
                                        className="text-white hover:text-[#F5A716] transition-colors flex items-center gap-2 group text-sm font-bold uppercase tracking-wider"
                                    >
                                        <BiRightArrowAlt className="group-hover:translate-x-1 transition-transform text-[#F5A716]" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Exams Info */}
                    <div>
                        <h4 className="text-lg font-black uppercase tracking-widest mb-8 text-white relative inline-block">
                            Medical Exams
                            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-brand-secondary rounded-full"></span>
                        </h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'NEET UG', link: '/exams/neet-ug' },
                                { name: 'FMGE Exam', link: '/exams/fmge' },
                                { name: 'USMLE Prep', link: '/exams/usmle' },
                                { name: 'PLAB Guide', link: '/exams/plab' },
                                { name: 'NExT Exam', link: '/exams/next' }
                            ].map((item, idx) => (
                                <li key={idx}>
                                    <Link
                                        to={item.link}
                                        className="text-white hover:text-[#F5A716] transition-colors flex items-center gap-2 group text-sm font-bold uppercase tracking-wider"
                                    >
                                        <BiRightArrowAlt className="group-hover:translate-x-1 transition-transform text-[#F5A716]" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Widget */}
                    <div>
                        <h4 className="text-lg font-black uppercase tracking-widest mb-8 text-white relative inline-block">
                            Get In Touch
                            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-brand-secondary rounded-full"></span>
                        </h4>
                        <ul className="space-y-6">
                            <li className="flex gap-4 group cursor-pointer">
                                <div className="w-10 h-10 rounded-xl bg-slate-800 flex flex-shrink-0 items-center justify-center text-brand-primary group-hover:bg-[#F5A716] group-hover:text-white transition-all border border-slate-700 shadow-md">
                                    <BiMapPin className="text-xl" />
                                </div>
                                <span className="text-white text-sm font-medium leading-relaxed group-hover:text-[#F5A716] transition-colors">
                                    B-16 Ground Floor, Mayfield Garden, Sector 50, Gurugram, Haryana 122002
                                </span>
                            </li>
                            <li className="flex gap-4 group cursor-pointer">
                                <div className="w-10 h-10 rounded-xl bg-slate-800 flex flex-shrink-0 items-center justify-center text-brand-primary group-hover:bg-[#F5A716] group-hover:text-white transition-all border border-slate-700 shadow-md">
                                    <BiPhone className="text-xl" />
                                </div>
                                <a href="tel:+919818560331" className="text-white text-sm font-bold group-hover:text-[#F5A716] transition-colors uppercase tracking-wider pt-2">
                                    +91-9818 560 331
                                </a>
                            </li>
                            <li className="flex gap-4 group cursor-pointer">
                                <div className="w-10 h-10 rounded-xl bg-slate-800 flex flex-shrink-0 items-center justify-center text-brand-primary group-hover:bg-[#F5A716] group-hover:text-white transition-all border border-slate-700 shadow-md">
                                    <BiGlobe className="text-xl" />
                                </div>
                                <a href="#" className="text-white text-sm font-bold group-hover:text-[#F5A716] transition-colors uppercase tracking-wider pt-2">
                                    mymbbsadmission.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-white text-[11px] font-black uppercase tracking-[0.2em] text-center md:text-left">
                        © {new Date().getFullYear()} MY MBBS ADMISSION. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex gap-8">
                        <Link to="/privacy" className="text-white hover:text-[#F5A716] text-[10px] font-black uppercase tracking-widest transition-colors">Privacy Policy</Link>
                        <Link to="/cookies" className="text-white hover:text-[#F5A716] text-[10px] font-black uppercase tracking-widest transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
