import React, { useState, useEffect } from 'react';
import { BiMinus, BiPlus, BiListUl } from 'react-icons/bi';
import { motion, AnimatePresence } from 'framer-motion';

const TableOfContents = ({ sections }) => {
    const [activeSection, setActiveSection] = useState('');
    const [isCollapsed, setIsCollapsed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 150;

            for (const section of sections || []) {
                const element = document.getElementById(section.id);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 120; // Account for fixed header
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    if (!sections || sections.length === 0) return null;

    return (
        <div className="bg-[#f8fbff] border border-[#e1ecf8] rounded-xl overflow-hidden shadow-sm sticky top-32 transition-all duration-300 z-40">
            {/* TOC Header Bar */}
            <div className="bg-[#eff6ff] px-5 py-3 flex items-center justify-between border-b border-[#e1ecf8]">
                <h3 className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    <BiListUl className="text-lg text-brand-primary" />
                    Table of Contents
                </h3>
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="w-6 h-6 border border-brand-primary/30 rounded flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-all bg-white shadow-sm"
                    aria-label={isCollapsed ? "Expand TOC" : "Collapse TOC"}
                >
                    {isCollapsed ? <BiPlus className="text-lg" /> : <BiMinus className="text-lg" />}
                </button>
            </div>

            {/* TOC Content List */}
            <AnimatePresence initial={false}>
                {!isCollapsed && (
                    <motion.nav
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="py-4 px-5 overflow-hidden"
                    >
                        <ul className="space-y-2.5">
                            {sections.map((section, index) => {
                                // Simple check for sub-items: if they start with a decimal or have an extra dot
                                const isSubItem = /^\d+\.\d+/.test(section.label) || (section.label.split('.').length > 2);

                                return (
                                    <li key={section.id} className={`${isSubItem ? 'ml-6' : ''}`}>
                                        <button
                                            onClick={() => scrollToSection(section.id)}
                                            className={`w-full text-left text-[14px] font-bold leading-snug transition-all duration-200 hover:underline ${activeSection === section.id
                                                ? 'text-brand-primary translate-x-1 outline-none'
                                                : 'text-brand-primary/90 hover:text-brand-primary'
                                                }`}
                                        >
                                            {section.label}
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </div>
    );
};

export default TableOfContents;
