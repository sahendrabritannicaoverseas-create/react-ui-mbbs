import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  aboutMainImg,
  flagRussiaIcon,
  flagUzbekistanIcon,
  flagKazakhstanIcon,
  flagPhilippinesIcon,
  flagGeorgiaIcon,
  flagKyrgyzstanIcon,
  flagEgyptIcon,
} from "../../assets/images";
import blog3 from "../../assets/images/blog/blog-3.jpg";
import blog1 from "../../assets/images/blog/blog-1.jpg";
import blog2 from "../../assets/images/blog/blog-2.jpg";
import {
  BiIdCard,
  BiHeadphone,
  BiRightArrowAlt,
  BiCheckShield,
  BiEnvelope,
  BiSolidPlane,
  BiFile,
  BiGlobe,
  BiUser,
} from "react-icons/bi";
import Hero from "./sections/Hero";
import PopularUniversities from "./sections/PopularUniversities";
import Testimonials from "./sections/Testimonials";

const Home = () => {
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const countries = [
    { name: "MBBS in Russia", flag: flagRussiaIcon, color: "bg-blue-600" },
    {
      name: "MBBS in Uzbekistan",
      flag: flagUzbekistanIcon,
      color: "bg-cyan-500",
    },
    {
      name: "MBBS in Kazakhstan",
      flag: flagKazakhstanIcon,
      color: "bg-blue-400",
    },
    {
      name: "MBBS in Philippines",
      flag: flagPhilippinesIcon,
      color: "bg-blue-700",
    },
    { name: "MBBS in Georgia", flag: flagGeorgiaIcon, color: "bg-red-600" },
    {
      name: "MBBS in Kyrgyzstan",
      flag: flagKyrgyzstanIcon,
      color: "bg-red-500",
    },
    { name: "MBBS in Egypt", flag: flagEgyptIcon, color: "bg-black" },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 },
  };

  return (
    <main className="overflow-hidden bg-white">
      <Hero />

      {/* Feature Cards Section */}
      <section className="relative z-30 -mt-10 md:-mt-32 pb-12 md:pb-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Visa Application",
                icon: <BiIdCard />,
                text: "Complete assistance with student visa documentation and processing.",
                delay: 0,
              },
              {
                title: "Free Counselling",
                icon: <BiHeadphone />,
                text: "Expert guidance to choose the right university and country for you.",
                delay: 0.1,
              },
              {
                title: "MBBS Destinations",
                icon: <BiGlobe />,
                text: "Explore top medical universities across various popular countries.",
                delay: 0.2,
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: item.delay }}
                className="bg-white rounded-[40px] p-6 sm:p-12 shadow-premium border border-slate-50 text-center flex flex-col items-center group hover:shadow-2xl hover:border-brand-secondary transition-all duration-500"
              >
                <div className="w-20 h-20 rounded-full bg-brand-primary flex items-center justify-center text-white text-4xl mb-8 group-hover:scale-110 transition-transform shadow-lg">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-[15px] leading-relaxed font-medium">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-semibold text-[#212529] leading-[1.1] mb-6 md:mb-8">
                Guiding Your MBBS Journey Abroad
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[#212529]/70 text-lg sm:text-xl lg:text-[22px] leading-relaxed mb-8 md:mb-10">
                We are dedicated to bridging the gap between aspiring medical
                students and world-class universities. With years of experience,
                we ensure a hassle-free admission process, from university
                selection to visa approval.
              </p>
              <Link
                to="/about"
                className="bg-[#F5A716] text-white px-12 py-5 rounded-[35px] font-bold text-lg hover:bg-[#1E3A8A] transition-all inline-block shadow-lg"
              >
                About Us
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative rounded-[64px] overflow-hidden shadow-premium group border-8 border-slate-50"
          >
            <img
              src={aboutMainImg}
              alt="About Us"
              className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-[2s]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>

            {/* Experience Badge Floating */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute bottom-12 right-12 bg-white p-10 rounded-[40px] shadow-2xl hidden md:block"
            >
              <h4 className="text-5xl font-black text-brand-primary leading-none mb-2">
                12+
              </h4>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
                Years of Excellence
              </p>
            </motion.div>
          </motion.div>

          {/* Stats bar below image */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-24 max-w-5xl mx-auto"
            ref={statsRef}
          >
            {[
              { label: "Students Assisted", value: 12, suffix: "k+" },
              { label: "Partner Universities", value: 180, suffix: "+" },
              { label: "Expert Advisors", value: 35, suffix: "+" },
              { label: "Countries Covered", value: 15, suffix: "+" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-3 lowercase tracking-tighter">
                  {statsInView ? (
                    <CountUp
                      end={stat.value}
                      duration={3}
                      suffix={stat.suffix}
                    />
                  ) : (
                    "0"
                  )}
                </h3>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PopularUniversities />

      {/* Countries Section */}
      <section className="py-12 md:py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-[60px] font-semibold text-[#212529] mb-4">
              Countries We Offer <br className="hidden md:block" /> MBBS In
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
            {countries.map((country, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-slate-50 border border-slate-100 px-8 py-5 rounded-[40px] flex items-center gap-4 hover:shadow-xl hover:border-[#F5A716] transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm group-hover:scale-110 transition-transform flex-shrink-0">
                  <img
                    src={country.flag}
                    alt={country.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-lg font-bold text-slate-700">
                  {country.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* blog Section */}
      <section className="py-12 md:py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 text-center mb-20">
          <h2 className="text-4xl md:text-[60px] font-semibold text-[#212529] mb-8">
            Latest MBBS Abroad News & Updates
          </h2>
          <p className="text-[#212529]/70 text-[15px] leading-relaxed max-w-2xl mx-auto">
            Stay informed with the newest insights and trends in international
            medical education to shape your future as a healthcare professional.
          </p>
        </div>

        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              id: 1,
              title: "List of Medical Universities in Bangladesh | Government & Private Colleges",
              date: "Feb 10, 2026",
              author: "Admin",
              img: blog1,
              category: "Bangladesh",
              slug: "list-of-medical-universities-in-bangladesh"
            },
            {
              id: 2,
              title: "Why Indian Students Prefer MBBS in Georgia | Complete Guide",
              date: "Feb 08, 2026",
              author: "Admin",
              img: blog2,
              category: "Georgia",
              slug: "why-indian-students-prefer-mbbs-in-georgia"
            },
            {
              id: 3,
              title: "MBBS Admission 2026 – Complete Guide to Study MBBS Abroad",
              date: "Feb 05, 2026",
              author: "Admin",
              img: blog3,
              category: "Admission",
              slug: "mbbs-admission-2026-guide"
            }
          ].map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="premium-card group !p-5 h-full flex flex-col text-left"
            >
              <div className="mb-8 rounded-[30px] overflow-hidden h-72 bg-slate-50 relative">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                <div className="absolute top-6 left-6 glass-card px-5 py-2.5 rounded-2xl text-xs font-black text-white shadow-xl tracking-widest uppercase">
                  {post.date}
                </div>
                <div className="absolute bottom-6 right-6 bg-brand-primary/90 backdrop-blur-sm px-4 py-1.5 rounded-2xl text-[10px] font-black text-white shadow-xl tracking-[0.2em] uppercase">
                  {post.category}
                </div>
              </div>
              <div className="px-5 pb-5 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs font-black text-slate-400 mb-6 uppercase tracking-[0.2em]">
                  <span className="text-brand-primary flex items-center gap-2">
                    <BiUser className="text-lg" /> {post.author}
                  </span>
                  <span className="w-1.5 h-1.5 bg-slate-200 rounded-full"></span>
                  <span>MBBS VITYNAM </span>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-6 group-hover:text-brand-primary transition-colors leading-tight min-h-[96px]">
                  <Link to={`/blog/${post.slug}`} className="no-underline text-inherit">
                    {post.title}
                  </Link>
                </h3>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group inline-flex items-center gap-2 text-sm font-black text-slate-900 hover:text-brand-primary transition-colors tracking-widest mt-auto"
                >
                  READ MORE{" "}
                  <BiRightArrowAlt className="text-xl group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
