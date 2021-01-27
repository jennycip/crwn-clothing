import React, { useState } from 'react';
import "./banner.style.scss"

const Banner = ({ titleBanner, textBanner, urlBanner, GoUrlBanner, FlagBanner }) => {
    const [sessionBanner, setSessionBanner] = useState(window.sessionStorage.getItem(FlagBanner));


    const clicked = (linkBanner) => {
        setSessionBanner(true);
        window.sessionStorage.setItem(FlagBanner, true);
        if (linkBanner) {
            window.open(urlBanner, "_blank");
        }
    };



    return (
        <React.Fragment>
            {!sessionBanner && (
                <div className="banner-digi">
                    <div className="banner-close" onClick={() => clicked()}></div>
                    <div className="banner-content">
                        <div className="banner-ico"></div>
                        <div className="content-text">
                            <h2>{titleBanner}</h2>
                            <p>{textBanner}</p>
                        </div>
                        <div className="banner-button" data-mipqa="banner-link">
                            <p>
                                <span onClick={() => clicked(true)} className="btn-general" title={titleBanner}>
                                    {GoUrlBanner}</span>
                            </p>
                        </div>

                    </div>
                </div>
            )}
        </React.Fragment>
    );
};


export default Banner;