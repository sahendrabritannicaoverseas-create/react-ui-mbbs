import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BiRightArrowAlt, BiPhone, BiCalendarCheck } from "react-icons/bi";
import {
  pageTitleBg,
  pageTitleShape,
  iconStudent,
  iconTourist,
  iconWorking,
  iconVisa,
  iconCounselling,
  iconDestinations,
} from "../assets/images";

const Services = () => {
  const services = [
    {
      title: "Student Visa",
      slug: "student-visa",
      icon: iconStudent,
      number: "01",
      desc: "Expert guidance for student visa applications for top medical destinations.",
    },
    {
      title: "Tourist Visa",
      slug: "tourist-visa",
      icon: iconTourist,
      number: "02",
      desc: "Hassle-free tourist visa assistance for parents and travelers.",
    },
    {
      title: "Working Visa",
      slug: "working-visa",
      icon: iconWorking,
      number: "03",
      desc: "Professional support for work permits and legal employment abroad.",
    },
    {
      title: "Visa Application",
      slug: "visa-application",
      icon: iconVisa,
      number: "04",
      desc: "Complete documentation and filing support for all types of visas.",
    },
    {
      title: "Free Counselling",
      slug: "free-counselling",
      icon: iconCounselling,
      number: "05",
      desc: "One-on-one sessions to help you choose the best medical career path.",
    },
    {
      title: "MBBS Destinations",
      slug: "mbbs-destinations",
      icon: iconDestinations,
      number: "06",
      desc: "Explore top-ranked medical universities in Russia, Bangladesh, and beyond.",
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <main className="overflow-hidden bg-white">
      {/* Page Title Area */}
      <section className="relative pt-[100px] pb-[30px] md:pt-[140px] md:pb-[40px] bg-slate-900 overflow-hidden">
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-1xl md:text-4xl font-black text-white mb-6 uppercase tracking-tight">
              Our <span className="text-brand-secondary">Services</span>
            </h2>
            <ul className="flex items-center justify-center xl:justify-start gap-4 text-slate-400 font-black text-xs uppercase tracking-[0.3em]">
              <li>
                <a
                  href="/"
                  className="hover:text-brand-secondary transition-colors"
                >
                  Home
                </a>
              </li>
              <li className="text-slate-400">/</li>
              <li className="text-brand-primary">Services</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-2 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-18">
            <span className="inline-block bg-brand-primary/10 text-brand-primary px-6 py-1 rounded-full text-[18px] font-black uppercase tracking-[0.3em] mb-6">
              Our Services
            </span>

            <p className="max-w-[600px] mx-auto text-slate-500 text-lg font-medium">
              End-to-end MBBS abroad assistance including counselling, admissions, visa support, and guidance until you settle at your university.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-[40px] p-12 shadow-premium hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-brand-secondary relative overflow-hidden"
              >
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-slate-50 rounded-bl-full -mr-16 -mt-16 group-hover:bg-brand-primary/5 transition-colors"></div>
                <div className="absolute bottom-10 left-10 w-2 h-2 rounded-full bg-brand-primary/20 group-hover:scale-[10] transition-transform duration-700"></div>

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-10">
                    <div className="bg-slate-50 w-20 h-20 rounded-[24px] flex items-center justify-center p-4 group-hover:bg-brand-secondary group-hover:shadow-lg group-hover:shadow-brand-secondary/30 group-hover:-rotate-6 transition-all duration-500">
                      <img
                        src={service.icon}
                        alt={service.title}
                        className="w-full h-full group-hover:invert transition-all duration-500"
                      />
                    </div>
                    <span className="text-slate-100 text-5xl font-black group-hover:text-brand-secondary/10 transition-colors uppercase tracking-tighter">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 mb-5 group-hover:text-brand-primary transition-colors uppercase tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed mb-10 font-medium">
                    {service.desc}
                  </p>

                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-3 font-black text-[10px] uppercase tracking-[0.2em] text-slate-900 group-hover:text-brand-primary transition-colors"
                  >
                    Details
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all">
                      <BiRightArrowAlt className="text-lg" />
                    </div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Services;
