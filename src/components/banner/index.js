import React from "react";
import banner from "../../assets/images/banner.png";

const Banner = () => {
    return (
        <div className="banner">
            <img className="banner__img" src={banner} alt="" />
        </div>
    );
};

export default Banner;
