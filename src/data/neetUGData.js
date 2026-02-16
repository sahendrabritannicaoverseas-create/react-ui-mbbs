// ============================================
// NEET UG Dynamic Data
// All exam page content is managed from here.
// Update this file to change content across
// all NEET UG pages dynamically.
// ============================================

// ---- Sidebar Navigation Links ----
export const neetUGLinks = [
    { label: 'Overview', path: '/exams/neet-ug' },
    { label: 'Syllabus', path: '/exams/neet-ug/syllabus' },
    { label: 'Exam Date', path: '/exams/neet-ug/exam-date' },
    { label: 'Admit Card', path: '/exams/neet-ug/admit-card' },
    { label: 'Result', path: '/exams/neet-ug/result' },
    { label: 'Cutoff', path: '/exams/neet-ug/cutoff' },
    { label: 'Previous Year Question', path: '/exams/neet-ug/previous-year-question' },
];

// ---- Exam Date Page Data ----
export const examDateData = {
    examName: 'NEET UG 2026',
    examDay: 'Sunday',
    examDate: '03 May 2026',
    examDateISO: '2026-05-03T09:00:00',
    badgeText: 'Upcoming Exam Date',
    ctaButtons: [
        { label: 'Download Schedule', type: 'primary', icon: 'download' },
        { label: 'View Details', type: 'secondary', icon: null },
    ],
    schedule: [
        { event: 'Online Registration Start', date: 'February 2026', status: 'Upcoming' },
        { event: 'Last Date of Registration', date: 'March 2026', status: 'Upcoming' },
        { event: 'Admit Card Release', date: 'April 2026', status: 'Tentative' },
        { event: 'NEET UG Exam Day', date: 'May 03, 2026', status: 'Confirmed' },
        { event: 'Result Declaration', date: 'June 2026', status: 'Tentative' },
    ],
    scheduleTitle: 'Important',
    scheduleHighlight: 'Schedule 2026',
    scheduleDescription: 'Stay updated with the latest exam schedule, registration deadlines, and important dates for the upcoming NEET UG examination.',
    tocSections: [
        { id: 'exam-cta', label: '1. Upcoming Exam Date' },
        { id: 'schedule', label: '2. Important Schedule 2026' },
        { id: 'exam-pattern', label: '3. Exam Pattern' },
        { id: 'registration', label: '4. Registration Dates' },
        { id: 'faq', label: '5. Frequently Asked Questions' },
    ],
    pageTitle: 'Exam Date',
    pageBreadcrumbs: [
        { label: 'Home', path: '/' },
        { label: 'Exams', path: '/exams' },
        { label: 'Exam Date', path: null },
    ],
};

// ---- Admit Card Page Data ----
export const admitCardData = {
    examName: 'NEET UG 2026',
    agencyName: 'National Testing Agency',
    badgeText: 'NEET UG 2026 Admit Card',
    candidate: {
        registrationId: '24XXXXXXXX1234',
        name: 'Sahendra yadav',
        examDate: 'May 4, 2026',
        time: '2:00 PM — 5:00 PM',
        venue: 'New Delhi Public School, Vikas Marg, New Delhi',
    },
    quickActions: [
        { key: 'check-eligibility', label: 'Check Eligibility', iconName: 'BiCheckCircle' },
        { key: 'verify-details', label: 'Verify Details', iconName: 'BiListCheck' },
        { key: 'follow-instructions', label: 'Follow Instructions', iconName: 'BiBookContent' },
    ],
    downloadSteps: [
        { step: '01', title: 'Visit Official Website', desc: 'Go to neet.nta.nic.in on your web browser.' },
        { step: '02', title: 'Find Admit Card Link', desc: 'Look for the "NEET UG 2026 Admit Card" link on the homepage.' },
        { step: '03', title: 'Enter Details', desc: 'Input your Application Number, Date of Birth, and Security Pin.' },
        { step: '04', title: 'Download & Print', desc: 'Click submit, download the PDF, and take a color printout.' },
    ],
    downloadSectionTitle: 'How to',
    downloadSectionHighlight: 'Download Hall Ticket',
    downloadSectionDescription: 'The NEET UG admit card is a mandatory document to enter the examination hall. Follow these steps to download your copy from the official NTA website.',
    tocSections: [
        { id: 'admit-card-preview', label: '1. NEET UG 2026 Admit Card' },
        { id: 'how-to-download', label: '2. How to Download Hall Ticket' },
        { id: 'eligibility', label: '3. Eligibility Criteria' },
        { id: 'instructions', label: '4. Instructions for Exam Day' },
        { id: 'admit-info', label: '5. Information Stated' },
    ],
    pageTitle: 'Admit Card',
    pageBreadcrumbs: [
        { label: 'Home', path: '/' },
        { label: 'Exams', path: '/exams' },
        { label: 'Admit Card', path: null },
    ],
};

// ---- Overview Page Data ----
export const overviewData = {
    pageTitle: 'Overview',
    heroTitle: 'NEET UG',
    heroHighlight: 'Overview',
    breadcrumbLabel: 'NEET UG',
    sectionTitle: 'NEET UG',
    sectionHighlight: 'Introduction',
    description: [
        'The National Eligibility cum Entrance Test (Undergraduate), formerly the All India Pre-Medical Test, is an all India pre-medical entrance test for students who wish to pursue undergraduate medical, dental and equivalent courses in government and private institutions in India and also, for those intending to pursue primary medical qualification abroad.',
        'Conducted by the National Testing Agency (NTA), NEET is the single-window entrance for admissions to more than 66,000 MBBS and 26,000 BDS seats across India.',
    ],
    highlights: [
        { title: 'Exam Mode', value: 'Offline (Pen and Paper based)' },
        { title: 'Total Marks', value: '720 Marks' },
    ],
};

// ---- Syllabus Page Data ----
export const syllabusData = {
    pageTitle: 'Syllabus',
    heroTitle: 'NEET UG',
    heroHighlight: 'Syllabus',
    breadcrumbLabel: 'NEET Syllabus',
    subjects: [
        {
            subject: 'Physics',
            topics: ['Mechanics & Properties of Matter', 'Thermodynamics & Kinetic Theory', 'Electrostatics & Current Electricity', 'Optics & Wave Motion', 'Modern Physics & Nuclear Physics'],
            cta: 'Download Physics PDF',
        },
        {
            subject: 'Chemistry',
            topics: ['Organic Chemistry Mechanisms', 'Inorganic Chemistry Trends', 'Physical Chemistry & Energetics', 'Atomic Structure & Bonding', 'Chemical Equilibrium & Kinetics'],
            cta: 'Download Chemistry PDF',
        },
        {
            subject: 'Biology',
            topics: ['Plant Anatomy & Physiology', 'Human Physiology & Health', 'Cell Biology & Biomolecules', 'Genetics & Molecular Basis', 'Ecology & Environment'],
            cta: 'Download Biology PDF',
        },
    ],
    tocSections: [
        { id: 'syllabus-cards', label: '1. Subject-wise Syllabus Breakdown' },
        { id: 'importance', label: '2. Importance of Syllabus' },
        { id: 'pattern', label: '3. Exam Pattern' },
        { id: 'tips', label: '4. Preparation Tips' },
        { id: 'faq', label: '5. Frequently Asked Questions' },
    ],
    importance: {
        title: 'Importance of NEET UG Syllabus',
        content: 'Understanding the NEET UG syllabus is the first step towards a successful preparation. It helps students to focus on relevant topics, manage their time effectively, and avoid studying unnecessary material. The syllabus is designed to test the candidate\'s knowledge in Physics, Chemistry, and Biology.',
    },
    pattern: {
        title: 'NEET UG Exam Pattern',
        content: 'The NEET UG exam is a pen-and-paper based test consisting of 200 multiple-choice questions (MCQs) out of which candidates have to answer 180. The questions are divided into four subjects: Physics, Chemistry, Botany, and Zoology. Each subject has two sections: Section A (35 questions) and Section B (15 questions, attempt any 10).',
    },
    tips: {
        title: 'Preparation Tips',
        content: 'To ace the NEET UG exam, candidates should follow a disciplined study schedule. Focus on clarifying concepts from NCERT books, as they form the base for the exam. Regular practice of mock tests and previous year question papers is essential to improve speed and accuracy.',
    },
    faq: {
        title: 'Frequently Asked Questions',
        questions: [
            {
                question: 'Is the NEET UG syllabus strictly based on NCERT?',
                answer: 'Yes, the NEET UG syllabus is largely based on the NCERT curriculum of Class 11 and 12. mastering NCERT textbooks is crucial for scoring well.',
            },
            {
                question: 'Are there any changes in the syllabus for 2026?',
                answer: 'As of now, the NTA has not announced any major changes. Candidates are advised to regularly check the official website for updates.',
            }
        ]
    }
};

// ---- PYQ Page Data ----
export const pyqData = {
    pageTitle: 'Previous Year Question',
    heroTitle: 'NEET UG',
    heroHighlight: 'Previous Year Questions',
    breadcrumbLabel: 'PYQ Papers',
    years: [2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017],
    tocSections: [
        { id: 'practice-papers', label: '1. Practice Question Papers' },
        { id: 'importance', label: '2. Why Solve NEET UG Previous Year Papers?' },
        { id: 'pattern', label: '3. NEET UG Exam Pattern & Difficulty Level' },
        { id: 'tips', label: '4. Preparation Tips using PYQs' },
        { id: 'faq', label: '5. Frequently Asked Questions' },
    ],
};

// ---- Result Page Data ----
export const resultData = {
    pageTitle: 'Results',
    heroTitle: 'NEET UG',
    heroHighlight: 'Results',
    breadcrumbLabel: 'Exam Results',
    sectionTitle: 'Check Your',
    sectionHighlight: 'Performance',
    description: 'The NEET UG results are usually declared within a month of the examination. Candidates can check their scores, All India Rank (AIR), and category rank using their login credentials.',
    cards: [
        {
            title: 'View Scorecard',
            description: 'Access your detailed subject-wise marks and qualifying status.',
            buttonText: 'Login to Check Result',
            buttonStyle: 'primary',
        },
        {
            title: 'Merit List',
            description: 'Download the All India Merit List and category-wise rankings.',
            buttonText: 'Download Merit List',
            buttonStyle: 'dark',
        },
    ],
    tocSections: [
        { id: 'result-cards', label: '1. Check Your Result' },
        { id: 'merit-list', label: '2. Merit List & Rankings' },
        { id: 'counseling', label: '3. Counseling Process' },
        { id: 'faq', label: '4. Frequently Asked Questions' },
    ],
};

// ---- Cutoff Page Data ----
export const cutoffData = {
    pageTitle: 'Cutoff',
    heroTitle: 'NEET UG',
    heroHighlight: 'Cutoff',
    breadcrumbLabel: 'Exam Cutoff',
    sectionTitle: 'Year-wise',
    sectionHighlight: 'Cutoff Trends',
    description: 'The NEET UG cutoff is the minimum score required to qualify for medical counseling. It varies every year based on the difficulty level of the paper and the number of students appearing.',
    cards: [
        { title: 'Neet Cut Off', year: '2024' },
        { title: 'Neet Cut Off', year: '2023' },
        { title: 'NEET Cut Off', year: '2022' },
        { title: 'NEET Cut Off', year: '2025' },
        { title: 'NEET Cut Off', year: '2026' }
    ],
    tableHeaders: ['Category', 'Qualifying Percentile', 'Score Range (2024)', 'Candidates'],
    tableRows: [
        { category: 'UR/EWS', percentile: '50th', range: '720-164', candidates: '11,65,904' },
        { category: 'OBC', percentile: '40th', range: '163-129', candidates: '1,00,763' },
        { category: 'SC', percentile: '40th', range: '163-129', candidates: '34,326' },
        { category: 'ST', percentile: '40th', range: '163-129', candidates: '14,478' },
        { category: 'UR/EWS-PwD', percentile: '45th', range: '163-146', candidates: '455' },
    ],
    tocSections: [
        { id: 'cutoff-table', label: '1. Year-wise Cutoff Trends' },
        { id: 'factors', label: '2. Factors Affecting Cutoff' },
        { id: 'previous-years', label: '3. Previous Years Comparison' },
        { id: 'faq', label: '4. Frequently Asked Questions' },
    ],
};
