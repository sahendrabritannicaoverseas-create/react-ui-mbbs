import React from 'react';
import { Helmet } from 'react-helmet-async';

const SeoHead = ({ title, description, keywords, canonicalUrl }) => {
    const siteName = "My MBBS Admission";
    const fullTitle = title ? `${title} | ${siteName}` : siteName;
    const defaultDesc = "Leading MBBS abroad consultant providing expert guidance for medical education in Russia, Vietnam, Uzbekistan, and more.";

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description || defaultDesc} />
            {keywords && <meta name="keywords" content={keywords} />}
            {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description || defaultDesc} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description || defaultDesc} />
        </Helmet>
    );
};

export default SeoHead;
