import React from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { pageTitleBg, pageTitleShape } from "../assets/images";
import {
  BiRightArrowAlt,
  BiCheck,
  BiChevronRight,
  BiHelpCircle,
} from "react-icons/bi";

const examData = {
  "neet-ug": {
    title: "NEET UG",
    subtitle: "National Eligibility Entrance Test (Undergraduate)",
    description:
      "NEET UG is the primary entrance exam for students aspiring to pursue MBBS and BDS courses in India.",
    links: [
      { name: "NEET UG Question Paper", path: "/exams/neet-ug-papers" },
      { name: "NEET Mock Test", path: "/exams/neet-mock" },
      { name: "NEET Syllabus", path: "/exams/neet-syllabus" },
      { name: "NEET Exam Date", path: "/exams/neet-date" },
      { name: "NEET Admit Card", path: "/exams/neet-admit" },
      { name: "NEET Cut Off", path: "/exams/neet-cutoff" },
      { name: "NEET Result", path: "/exams/neet-result" },
    ],
  },
  "neet-pg": {
    title: "NEET PG",
    subtitle: "Postgraduate Medical Entrance",
    description:
      "NEET PG is the single window entrance examination for PG courses like MD/MS and PG Diploma.",
    links: [
      { name: "NEET PG Information", path: "#" },
      { name: "Question Papers", path: "#" },
      { name: "Exam Dates", path: "#" },
    ],
  },
  fmge: {
    title: "FMGE",
    subtitle: "Foreign Medical Graduate Exam",
    description:
      "FMGE is a screening test for Indian citizens with foreign medical degrees to practice in India.",
    links: [
      { name: "FMGE Syllabus", path: "#" },
      { name: "MCI Screening", path: "#" },
    ],
  },
  next: {
    title: "NExT Exam",
    subtitle: "National Exit Test",
    description:
      "NExT is the proposed common final year undergraduate exam for MBBS students in India.",
    links: [
      { name: "NExT Exam Overview", path: "#" },
      { name: "Implementation Updates", path: "#" },
    ],
  },
  usmle: {
    title: "USMLE",
    subtitle: "USA Licensing Exam",
    description:
      "The United States Medical Licensing Examination is a three-step examination for medical licensure in the U.S.",
    links: [
      { name: "Step 1 Preparation", path: "#" },
      { name: "Step 2 CK & CS", path: "#" },
      { name: "Step 3", path: "#" },
    ],
  },
  plab: {
    title: "PLAB",
    subtitle: "UK Medical Licensing",
    description:
      "The Professional and Linguistic Assessments Board test helps the GMC ensure doctors have the right skills and knowledge.",
    links: [
      { name: "PLAB Part 1", path: "#" },
      { name: "PLAB Part 2", path: "#" },
    ],
  },
};

const ExamPage = () => {
  //   const { type } = useParams();
  const data = examData[type] || examData["neet-ug"];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <main className="overflow-hidden bg-white">
      {/* Page Title Area */}
      <section className="relative pt-[160px] pb-[120px] bg-slate-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 scale-105"
          //   style={{ backgroundImage: `url(${pageTitleBg})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/80 to-slate-900"></div>

        <motion.img
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 0.2, x: 0 }}
          transition={{ duration: 1.2 }}
          //   src={pageTitleShape}
          alt="shape"
          className="absolute right-0 bottom-0 pointer-events-none w-1/3 opacity-20"
        />

        <div className="container mx-auto px-6 relative z-10 text-center xl:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight">
              {data.title} <span className="text-brand-primary">Portal</span>
            </h1>
            <ul className="flex items-center justify-center xl:justify-start gap-4 text-slate-400 font-black text-xs uppercase tracking-[0.3em]">
              <li>
                <Link
                  to="/"
                  className="hover:text-brand-secondary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li className="text-slate-600">/</li>
              <li className="text-brand-primary">Exam Preparation</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Content */}
            <motion.div {...fadeInUp} className="lg:col-span-8">
              <div className="bg-white rounded-[48px] p-12 md:p-16 border border-slate-100 shadow-premium group">
                <div className="inline-block bg-brand-primary/10 text-brand-primary px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-8">
                  Educational Overview
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 uppercase tracking-tighter leading-[1.1]">
                  {data.subtitle}
                </h2>
                <p className="text-slate-500 text-lg leading-relaxed mb-12 font-medium">
                  {data.description} Our portal provides comprehensive resources
                  and guidance for your success in this critical examination.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {data.links.map((link, idx) => (
                    <Link
                      key={idx}
                      to={link.path}
                      className="bg-slate-50 border border-slate-50 p-8 rounded-[32px] hover:bg-white hover:border-brand-primary hover:shadow-xl transition-all duration-500 group/link flex flex-col gap-4 text-left"
                    >
                      <div className="w-10 h-10 rounded-full bg-white group-hover/link:bg-brand-primary group-hover/link:text-white flex items-center justify-center shadow-sm transition-all duration-500">
                        <BiChevronRight className="text-2xl" />
                      </div>
                      <span className="text-slate-900 font-black uppercase text-xs tracking-[0.2em]">
                        {link.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 space-y-10">
              {/* Categories Widget */}
              <motion.div
                {...fadeInUp}
                className="bg-white rounded-[48px] p-10 border border-slate-100 shadow-premium"
              >
                <h4 className="text-xl font-black text-slate-900 mb-8 uppercase tracking-tight flex items-center gap-3">
                  <div className="w-1.5 h-6 bg-brand-secondary rounded-full"></div>
                  Other Exams
                </h4>
                <ul className="space-y-4">
                  {Object.keys(examData).map((key) => (
                    <li key={key}>
                      <Link
                        to={`/exams/${key}`}
                        className={`flex items-center justify-between p-6 rounded-[24px] transition-all duration-500 group ${type === key ? "bg-slate-900 text-white" : "bg-slate-50 text-slate-600 hover:bg-slate-100"}`}
                      >
                        <span className="font-black uppercase text-xs tracking-[0.2em]">
                          {examData[key].title}
                        </span>
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${type === key ? "bg-brand-primary" : "bg-white shadow-sm"}`}
                        >
                          {type === key ? (
                            <BiCheck className="text-white" />
                          ) : (
                            <BiChevronRight className="text-lg" />
                          )}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Consultation Card */}
              <motion.div
                {...fadeInUp}
                className="bg-slate-900 rounded-[48px] p-10 text-white relative overflow-hidden flex flex-col items-center text-center group"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-brand-primary/10 rounded-full blur-3xl -mr-24 -mt-24 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="w-20 h-20 rounded-[28px] bg-brand-primary/10 flex items-center justify-center text-4xl text-brand-primary mb-8 border border-white/5">
                  <BiHelpCircle />
                </div>
                <h4 className="text-2xl font-black mb-4 uppercase tracking-tight relative z-10">
                  Confused?
                </h4>
                <p className="text-slate-400 mb-10 relative z-10 leading-relaxed font-medium">
                  Get a professional consultation with our medical advisors for
                  clear paths.
                </p>
                <Link
                  to="/contact"
                  className="btn-primary w-full py-5 !px-10 flex items-center justify-center gap-3 !text-sm"
                >
                  Free Counselling
                  <BiRightArrowAlt className="text-xl" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ExamPage;
