import React from "react";

const Section = props => {
    return <div className="section">{props.children}</div>;
};

export const SectionContainer = props => {
    return <div className="section__container">{props.children}</div>;
};

export const SectionTitle = props => {
    return <div className="section__title title">{props.children}</div>;
};

export const SectionHyphen = props => {
    return <div className="section__hyphen hyphen">{props.children}</div>;
};

export const SectionBody = props => {
    return <div className="section__body">{props.children}</div>;
};

export default Section;
