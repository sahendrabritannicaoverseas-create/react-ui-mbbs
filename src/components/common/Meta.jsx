import React, { useEffect } from 'react';

const Meta = ({ title, description }) => {
    useEffect(() => {
        // Update Title
        const baseTitle = "MBBS in vitnam";
        document.title = title ? `${title} | ${baseTitle}` : baseTitle;

        // Update Description
        const metaDescription = document.querySelector('meta[name="description"]');
        const content = description || "Expert guidance for MBBS admissions in Vietnam, Russia, Uzbekistan and more. Secure your medical career with My MBBS Admission.";

        if (metaDescription) {
            metaDescription.setAttribute('content', content);
        } else {
            const newMeta = document.createElement('meta');
            newMeta.name = "description";
            newMeta.content = content;
            document.head.appendChild(newMeta);
        }
    }, [title, description]);

    return null;
};

export default Meta;
