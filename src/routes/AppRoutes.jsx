import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import MBBSVietnam from "../pages/MBBS/MBBSVietnam";
import MBBSRussia from "../pages/MBBS/MBBSRussia";
import MBBSUzbekistan from "../pages/MBBS/MBBSUzbekistan";
import Universities from "../pages/Universities/Universities";
import AllExams from "../pages/Exams/AllExams";
import ExamPage from "../pages/Exams/ExamPage";
import ExamsLayout from "../pages/Exams/ExamsLayout";

import NeetUGSyllabus from "../pages/Exams/neet-ug/NeetUGSyllabus";
import NeetUGExamDate from "../pages/Exams/neet-ug/NeetUGExamDate";
import NeetUGAdmitCard from "../pages/Exams/neet-ug/NeetUGAdmitCard";
import NeetUGResult from "../pages/Exams/neet-ug/NeetUGResult";
import NeetUGCutoff from "../pages/Exams/neet-ug/NeetUGCutoff";
import NeetUGPYQ from "../pages/Exams/neet-ug/NeetUGPYQ";
import FMGE from "../pages/Exams/medical-licensing/FMGE";
import NEXT from "../pages/Exams/medical-licensing/NEXT";
import PLAB from "../pages/Exams/medical-licensing/PLAB";
import PLAB2025 from "../pages/Exams/medical-licensing/PLAB2025";
import PLABSyllabus from "../pages/Exams/medical-licensing/PLABSyllabus";
import USMLE from "../pages/Exams/medical-licensing/USMLE";
import Countries from "../pages/Countries";
import Team from "../pages/Team";
import Contact from "../pages/Contact/Contact";
import UniversityDetail from "../pages/Universities/UniversityDetail";
import AdmissionProcess from "../pages/AdmissionProcess";
import NeetPGQuestionPaper from "../pages/Exams/neet-pg/NeetPGQuestionPaper";
import Blog from "../pages/Blog/Blog";
import BlogDetail from "../pages/Blog/BlogDetail";
import ServiceDetail from "../pages/ServiceDetail";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/mbbs-vietnam" element={<MBBSVietnam />} />
            <Route path="/mbbs-vietnam/:slug" element={<UniversityDetail />} />
            <Route path="/mbbs-russia" element={<MBBSRussia />} />
            <Route path="/mbbs-russia/:slug" element={<UniversityDetail />} />
            <Route path="/mbbs-uzbekistan" element={<MBBSUzbekistan />} />
            <Route path="/mbbs-uzbekistan/:slug" element={<UniversityDetail />} />
            <Route path="/universities" element={<Universities />} />
            <Route path="/university/:slug" element={<UniversityDetail />} />

            {/* Exams Section */}
            <Route path="/exams" element={<ExamsLayout />}>
                <Route index element={<AllExams />} />
                <Route path=":type" element={<ExamPage />} />

                {/* NEET UG Nested Routes */}

                <Route path="neet-ug/syllabus" element={<NeetUGSyllabus />} />
                <Route path="neet-ug/exam-date" element={<NeetUGExamDate />} />
                <Route path="neet-ug/admit-card" element={<NeetUGAdmitCard />} />
                <Route path="neet-ug/result" element={<NeetUGResult />} />
                <Route path="neet-ug/cutoff" element={<NeetUGCutoff />} />
                <Route path="neet-ug/previous-year-question" element={<NeetUGPYQ />} />

                {/* NEET PG Nested Routes */}
                <Route path="neet-pg/question-paper" element={<NeetPGQuestionPaper />} />

                {/* Medical Licensing */}
                <Route path="fmge" element={<FMGE />} />
                <Route path="next" element={<NEXT />} />
                <Route path="usmle" element={<USMLE />} />
                <Route path="plab" element={<PLAB />} />
                <Route path="plab-2025" element={<PLAB2025 />} />
                <Route path="plab/syllabus" element={<PLABSyllabus />} />
            </Route>

            <Route path="/countries" element={<Countries />} />
            <Route path="/countries/:id" element={<Countries />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admission-process" element={<AdmissionProcess />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
        </Routes>
    );
};

export default AppRoutes;
