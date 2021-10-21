import React from "react";
import PropTypes from "prop-types";

const FamousBrand = props => {
    return (
        <div className="brand">
            <div className="brand-item">
                <a href={props.link} target="_blank" rel="noreferrer">
                    <img width="100%" src={props.src} alt="Brand" />
                </a>
                <h4 className="brand-title">{props.title}</h4>
                <span className="brand-desc">{props.desc}</span>
            </div>
        </div>
    );
};

FamousBrand.propTypes = {
    link: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.number.isRequired,
};

export default FamousBrand;
