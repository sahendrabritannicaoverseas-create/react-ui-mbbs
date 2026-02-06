import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { logo } from "../../assets/images";
import { BiMenu, BiX, BiRightArrowAlt, BiChevronDown, BiBookOpen } from "react-icons/bi";
import { PiBuildingsBold } from "react-icons/pi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const vietnamUnis = [
    { name: 'Hanoi Medical University', slug: 'hanoi-medical-university', desc: 'Oldest prestigious medical institution in Vietnam.' },
    { name: 'HCMC University of Medicine', slug: 'hcmc-university-medicine-pharmacy', desc: 'Leading medical hub in Southern Vietnam.' },
    { name: 'Hue University of Medicine', slug: 'hue-university-medicine-pharmacy', desc: 'Historic excellence in medical training.' },
    { name: 'Can Tho University of Medicine', slug: 'can-tho-university-medicine-pharmacy', desc: 'Prominent education center in Mekong Delta.' }
  ];

  const moreVietnamUnis = [
    { name: 'Thai Binh Medical University', slug: 'thai-binh-university-medicine-pharmacy', desc: 'Prominent medical school in Northern Vietnam.' },
    { name: 'Hai Phong University of Medicine', slug: 'hai-phong-university-medicine-pharmacy', desc: 'Leading maritime and medical training center.' },
    { name: 'Vinh Medical University', slug: 'vinh-medical-university', desc: 'Renowned for healthcare training in Central Vietnam.' },
    { name: 'Phan Chau Trinh University', slug: 'phan-chau-trinh-medical-university', desc: 'Focused on modern medicine and research.' }
  ];

  return (
    <>
      <header className="fixed top-2 md:top-8 left-1/2 -translate-x-1/2 w-[95%] sm:w-[90%] max-w-[1280px] bg-white rounded-full shadow-xl z-[1000] px-4 md:px-10 py-3 md:py-4 flex items-center justify-between transition-all duration-300">
        {/* Logo Section */}
        <div className="flex items-center min-w-fit pr-4">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="Header-logo" className="h-[35px] md:h-[40px] block" />
          </Link>
        </div>

        {/* Navigation Menu Section - Desktop */}
        <nav className="hidden lg:block flex-grow px-4">
          <ul className="flex items-center justify-center gap-6 m-0 p-0 list-none font-semibold text-[15px]">
            <li>
              <Link
                to="/"
                className="text-[#212529] hover:text-brand-primary no-underline transition-colors capitalize whitespace-nowrap"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/mbbs-vietnam"
                className="text-[#212529] hover:text-brand-primary no-underline transition-colors capitalize whitespace-nowrap"
              >
                MBBS in Vietnam
              </Link>
            </li>
            <li
              className="relative group py-4"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <Link
                to="/universities"
                className={`text-[#212529] hover:text-brand-primary no-underline transition-colors capitalize whitespace-nowrap flex items-center gap-1 ${isDropdownOpen ? 'text-brand-primary' : ''}`}
              >
                Medical Universities <BiChevronDown className={`text-lg transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </Link>

              {/* Mega Menu Dropdown */}
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[680px] bg-white rounded-[28px] shadow-premium border border-slate-50 p-8 z-[100] mt-1"
                  >
                    <div className="grid grid-cols-2 gap-8">
                      {/* Top Universities (Vietnam) */}
                      <div>
                        <div className="flex items-center gap-2.5 mb-6 pb-3 border-b border-slate-100">
                          <div className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                            <BiBookOpen className="text-xl" />
                          </div>
                          <div>
                            <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-widest">Top Universities</h4>
                            <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">MBBS in Vietnam</p>
                          </div>
                        </div>
                        <div className="space-y-4">
                          {vietnamUnis.map((uni, idx) => (
                            <Link
                              key={idx}
                              to={`/university/${uni.slug}`}
                              onClick={closeMenu}
                              className="group/item flex items-start gap-3 hover:bg-slate-50 p-2 rounded-xl transition-all"
                            >
                              <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 group-hover/item:bg-brand-primary group-hover/item:text-white transition-all mt-0.5">
                                <PiBuildingsBold className="text-sm" />
                              </div>
                              <div>
                                <h5 className="text-[13px] font-bold text-slate-900 group-hover/item:text-brand-primary transition-colors leading-tight">{uni.name}</h5>
                                <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">{uni.desc}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* International Universities */}
                      <div>
                        <div className="flex items-center gap-2.5 mb-6 pb-3 border-b border-slate-100">
                          <div className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                            <BiBookOpen className="text-xl" />
                          </div>
                          <div>
                            <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-widest">Top more universities</h4>
                            <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">MBBS in Vietnam</p>
                          </div>
                        </div>
                        <div className="space-y-4">
                          {moreVietnamUnis.map((uni, idx) => (
                            <Link
                              key={idx}
                              to={`/university/${uni.slug}`}
                              onClick={closeMenu}
                              className="group/item flex items-start gap-3 hover:bg-slate-50 p-2 rounded-xl transition-all"
                            >
                              <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 group-hover/item:bg-brand-primary group-hover/item:text-white transition-all mt-0.5">
                                <PiBuildingsBold className="text-sm" />
                              </div>
                              <div>
                                <h5 className="text-[13px] font-bold text-slate-900 group-hover/item:text-brand-primary transition-colors leading-tight">{uni.name}</h5>
                                <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">{uni.desc}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-100 text-center">
                      <Link
                        to="/universities"
                        onClick={closeMenu}
                        className="inline-flex items-center gap-2 text-[11px] font-black text-slate-900 hover:text-brand-primary transition-all uppercase tracking-[0.2em]"
                      >
                        Explore All Universities <BiRightArrowAlt className="text-lg" />
                      </Link>
                    </div>
                  </motion.div>

                )}
              </AnimatePresence>
            </li>
            <li>
              <Link
                to="/exams"
                className="text-[#212529] hover:text-brand-primary no-underline transition-colors capitalize whitespace-nowrap"
              >
                Exams
              </Link>
            </li>
            <li>
              <Link
                to="/admission-process"
                className="text-[#212529] hover:text-brand-primary no-underline transition-colors capitalize whitespace-nowrap"
              >
                Admission Process
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-[#212529] hover:text-brand-primary no-underline transition-colors capitalize whitespace-nowrap"
              >
                Services
              </Link>
            </li>
          </ul>
        </nav>

        {/* Action Button Section */}
        <div className="flex items-center justify-end min-w-fit">
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="bg-[#1E3A8A] text-white py-3 px-6 rounded-full text-[15px] font-bold hover:bg-[#F5A716] transition-all shadow-md whitespace-nowrap"
            >
              Free Counselling
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div
            className="lg:hidden w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-900 text-[20px] md:text-[24px] cursor-pointer hover:bg-brand-primary hover:text-white transition-all shadow-sm"
            onClick={toggleMenu}
          >
            {isMobileMenuOpen ? <BiX /> : <BiMenu />}
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[999] pt-28 px-8 lg:hidden flex flex-col"
          >
            <div className="flex flex-col gap-6 text-lg font-bold uppercase tracking-[0.2em] overflow-y-auto pb-10">
              <Link
                to="/"
                onClick={closeMenu}
                className="text-slate-900 hover:text-brand-primary border-b border-slate-50 pb-5 flex justify-between items-center"
              >
                Home <BiRightArrowAlt className="text-slate-300" />
              </Link>
              <Link
                to="/mbbs-vietnam"
                onClick={closeMenu}
                className="text-slate-900 hover:text-brand-primary border-b border-slate-50 pb-5 flex justify-between items-center"
              >
                MBBS Abroad <BiRightArrowAlt className="text-slate-300" />
              </Link>
              <Link
                to="/universities"
                onClick={closeMenu}
                className="text-slate-900 hover:text-brand-primary border-b border-slate-50 pb-5 flex justify-between items-center"
              >
                Medical Universities{" "}
                <BiRightArrowAlt className="text-slate-300" />
              </Link>
              <Link
                to="/admission-process"
                onClick={closeMenu}
                className="text-slate-900 hover:text-brand-primary border-b border-slate-50 pb-5 flex justify-between items-center"
              >
                Admission Process{" "}
                <BiRightArrowAlt className="text-slate-300" />
              </Link>
              <Link
                to="/services"
                onClick={closeMenu}
                className="text-slate-900 hover:text-brand-primary border-b border-slate-50 pb-5 flex justify-between items-center"
              >
                Services <BiRightArrowAlt className="text-slate-300" />
              </Link>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="bg-brand-primary text-white text-center py-4 mt-2 text-sm rounded-full tracking-widest uppercase font-black"
              >
                Book Free Counselling
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
