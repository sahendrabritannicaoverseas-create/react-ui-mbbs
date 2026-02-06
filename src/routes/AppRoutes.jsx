import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import MBBSVietnam from "../pages/MBBS/MBBSVietnam";
import MBBSRussia from "../pages/MBBS/MBBSRussia";
import MBBSUzbekistan from "../pages/MBBS/MBBSUzbekistan";
import Universities from "../pages/Universities/Universities";
import ExamPage from "../pages/ExamPage";
import Countries from "../pages/Countries";
import Team from "../pages/Team";
import Contact from "../pages/Contact/Contact";
import UniversityDetail from "../pages/Universities/UniversityDetail";
import AdmissionProcess from "../pages/AdmissionProcess";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/mbbs-vietnam" element={<MBBSVietnam />} />
            <Route path="/mbbs-russia" element={<MBBSRussia />} />
            <Route path="/mbbs-uzbekistan" element={<MBBSUzbekistan />} />
            <Route path="/universities" element={<Universities />} />
            <Route path="/university/:slug" element={<UniversityDetail />} />
            <Route path="/exams/:type" element={<ExamPage />} />
            <Route path="/countries" element={<Countries />} />
            <Route path="/countries/:id" element={<Countries />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admission-process" element={<AdmissionProcess />} />
        </Routes>
    );
};

export default AppRoutes;
