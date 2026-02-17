import blog1 from "../assets/images/blog/blog-1.jpg";
import blog2 from "../assets/images/blog/blog-2.jpg";
import blog3 from "../assets/images/blog/blog-3.jpg";

export const blogPosts = [
    {
        id: 1,
        title: "Medical Universities in Bangladesh",
        date: "Feb 10, 2026",
        author: "Admin",
        image: blog1,
        category: "Bangladesh",
        slug: "list-of-medical-universities-in-bangladesh",
        excerpt: "Discover the comprehensive list of top government and private medical universities in Bangladesh for international students.",
        tocSections: [
            { id: 'introduction', label: '1. Introduction' },
            { id: 'government-colleges', label: '2. Government Medical Colleges' },
            { id: 'private-colleges', label: '3. Private Medical Colleges' }
        ],


    },
    {
        id: 2,
        title: "Why Indian Students Prefer MBBS in Georgia | Complete Guide",
        date: "Feb 08, 2026",
        author: "Admin",
        image: blog2,
        category: "Georgia",
        slug: "why-indian-students-prefer-mbbs-in-georgia",
        excerpt: "Georgia offers world-class medical education with European standards. Find out why it's the top choice for Indian students.",
        tocSections: [
            { id: 'introduction', label: '1. Introduction' },
            { id: 'why-georgia', label: '2. Why Choose Georgia?' },
            { id: 'top-universities', label: '3. Top Medical Universities' },
            { id: 'eligibility', label: '4. Eligibility Criteria' },
            { id: 'admission-process', label: '5. Admission Process' },
            { id: 'cost-of-living', label: '6. Cost of Living' },
            { id: 'conclusion', label: '7. Conclusion' }
        ],
        content: ``
    },
    {
        id: 3,
        title: "MBBS Admission 2026 – Complete Guide to Study MBBS Abroad",
        date: "Feb 05, 2026",
        author: "Admin",
        image: blog3,
        category: "Admission",
        slug: "mbbs-admission-2026-guide",
        excerpt: "Planning to study MBBS abroad in 2026? Here is everything you need to know about eligibility, top countries, and fees.",
        content: ``
    }
];
