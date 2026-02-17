import React from 'react';
import SeoHead from '../seo/SeoHead';

const Meta = (props) => {
    return (
        <SeoHead
            title={props.title}
            description={props.description}
            keywords={props.keywords}
            canonicalUrl={props.canonicalUrl}
        />
    );
};

export default Meta;
