import React from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { pageTitleBg, pageTitleShape } from "../../assets/images";
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
  "neet-ug-papers": {
    title: "NEET UG Papers",
    subtitle: "Previous Year Question Papers",
    description: "Access a comprehensive collection of previous years' NEET UG question papers with detailed solutions to enhance your preparation.",
    links: [{ name: "Download 2023 Paper", path: "#" }, { name: "Download 2022 Paper", path: "#" }]
  },
  "neet-syllabus": {
    title: "NEET Syllabus",
    subtitle: "Complete Exam Syllabus",
    description: "Detailed breakdown of the NEET UG syllabus covering Physics, Chemistry, and Biology (Botany & Zoology) as per the latest NTA guidelines.",
    links: [{ name: "Physics Syllabus", path: "#" }, { name: "Chemistry Syllabus", path: "#" }, { name: "Biology Syllabus", path: "#" }]
  },
  "neet-date": {
    title: "NEET Exam Date",
    subtitle: "Important Schedule & Timelines",
    description: "Stay updated with the latest exam schedule, registration deadlines, and important dates for the upcoming NEET UG examination.",
    links: [{ name: "Registration Dates", path: "#" }, { name: "Admit Card Date", path: "#" }]
  },
  "neet-admit": {
    title: "NEET Admit Card",
    subtitle: "Download Hall Ticket",
    description: "Information regarding NEET UG admit card release, download procedure, and essential instructions for the exam day.",
    links: [{ name: "Download Guide", path: "#" }, { name: "Forgot Application ID?", path: "#" }]
  },
  "neet-result": {
    title: "NEET Result",
    subtitle: "Scorecards & Rankings",
    description: "Check your NEET UG results, qualifying marks, and All India Rankings. Get guidance on what to do after the results are declared.",
    links: [{ name: "Check Result", path: "#" }, { name: "Rank Predictor", path: "#" }]
  },
  "neet-cutoff": {
    title: "NEET Cut Off",
    subtitle: "Qualifying Marks & Trends",
    description: "Analyze NEET UG cut-off trends for various categories and top medical colleges to set your target score.",
    links: [{ name: "Previous Year Cutoffs", path: "#" }, { name: "Category Wise Cutoff", path: "#" }]
  },
  "neet-pg": {
    title: "NEET PG",
    subtitle: "National Eligibility cum Entrance Test (Postgraduate)",
    description:
      "NEET PG is the single window entrance examination for various MD/MS and PG Diploma courses in India.",
    links: [
      { name: "NEET PG Question Paper", path: "/exams/neet-pg/question-paper" },
      { name: "NEET PG Syllabus", path: "/exams/neet-pg/syllabus" },
      { name: "NEET PG Exam Date", path: "/exams/neet-pg/exam-date" },
      { name: "NEET PG Admit Card", path: "/exams/neet-pg/admit-card" },
      { name: "NEET PG Cut Off", path: "/exams/neet-pg/cutoff" },
      { name: "NEET PG Result", path: "/exams/neet-pg/result" },
    ],
  },
};

const ExamPage = () => {
  const { type } = useParams();
  const data = examData[type] || examData["neet-ug"];

  React.useEffect(() => {
    document.title = `${data.title} Exam Guide | My MBBS Admission`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', `Get detailed information about ${data.title} (${data.subtitle}). Find question papers, syllabus, exam dates, and preparation resources.`);
    }
  }, [data]);

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
          style={{ backgroundImage: `url(${pageTitleBg})` }}
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

        <div className="container mx-auto px-6 relative z-10 text-center xl:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight">
              {data.title}
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
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ExamPage;
