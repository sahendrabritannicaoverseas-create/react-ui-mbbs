import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { logo } from "../../assets/images";
import { BiMenu, BiX, BiRightArrowAlt } from "react-icons/bi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-2 md:top-8 left-1/2 -translate-x-1/2 w-[95%] sm:w-[90%] max-w-[1280px] bg-white rounded-full shadow-xl z-[1000] px-4 md:px-10 py-3 md:py-4 flex items-center justify-between transition-all duration-300">
        {/* Logo Section */}
        <div className="flex items-center min-w-[200px]">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="Header-logo" className="h-[40px] block" />
          </Link>
        </div>

        {/* Navigation Menu Section - Desktop */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-10 m-0 p-0 list-none font-medium text-[20px]">
            <li>
              <Link
                to="/"
                className="text-[#212529] hover:text-brand-primary no-underline transition-colors capitalize"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/mbbs-vietnam"
                className="text-[#212529] hover:text-brand-primary no-underline transition-colors capitalize"
              >
                MBBS in Vietnam
              </Link>
            </li>
            <li>
              <Link
                to="/universities"
                className="text-[#212529] hover:text-brand-primary no-underline transition-colors capitalize"
              >
                Medical Universities
              </Link>
            </li>
            <li>
              <Link
                to="/exams"
                className="text-[#212529] hover:text-brand-primary no-underline transition-colors capitalize"
              >
                Exams
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-[#212529] hover:text-brand-primary no-underline transition-colors capitalize"
              >
                Services
              </Link>
            </li>
          </ul>
        </nav>

        {/* Action Button Section */}
        <div className="flex items-center justify-end min-w-[200px]">
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="bg-[#1E3A8A] text-white py-4 px-10 rounded-[40px] text-[18px] font-bold hover:bg-[#F5A716] transition-all shadow-md"
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
            <div className="flex flex-col gap-8 text-xl font-black uppercase tracking-widest overflow-y-auto pb-10">
              <Link
                to="/"
                onClick={closeMenu}
                className="text-slate-900 hover:text-brand-primary border-b border-slate-50 pb-6 flex justify-between items-center"
              >
                Home <BiRightArrowAlt className="text-slate-300" />
              </Link>
              <Link
                to="/mbbs-vietnam"
                onClick={closeMenu}
                className="text-slate-900 hover:text-brand-primary border-b border-slate-50 pb-6 flex justify-between items-center"
              >
                MBBS Abroad <BiRightArrowAlt className="text-slate-300" />
              </Link>
              <Link
                to="/universities"
                onClick={closeMenu}
                className="text-slate-900 hover:text-brand-primary border-b border-slate-50 pb-6 flex justify-between items-center"
              >
                Medical Universities{" "}
                <BiRightArrowAlt className="text-slate-300" />
              </Link>
              <Link
                to="/services"
                onClick={closeMenu}
                className="text-slate-900 hover:text-brand-primary border-b border-slate-50 pb-6 flex justify-between items-center"
              >
                Services <BiRightArrowAlt className="text-slate-300" />
              </Link>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="bg-brand-primary text-white text-center py-5 mt-4 text-sm rounded-full"
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
