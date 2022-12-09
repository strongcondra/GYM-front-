import React, { Fragment, useState } from 'react';
import homepic from "../../assets/images/img/homePic.jpg";
import homemobilepic from "../../assets/images/img/headerMobile.png";

const HeroBannerFive = () => {

    return (
        <Fragment>
            <div>
                
                {(() => {
                    if (window.innerWidth > 1024) {
                        return (
                            <div className='home-image'>
                                <img src={ homepic } alt="" />
                                <div className='image-text'>
                                    YOUR QUALITY
                                    <div style={{paddingTop:'30px'}}>
                                        OF LIFE -
                                    </div>
                                    <div style={{color:'#F5AAC9',paddingTop:'30px'}}>
                                        OUR DRIVING
                                    </div>
                                    <div style={{color:'#F5AAC9',paddingTop:'30px'}}>
                                        FORCE
                                    </div>
                                </div> 
                            </div>
                        )

                    } else {
                        return (
                            <div className='home-image'>
                                <img src={  homemobilepic} alt="" />
                                <div className='mobile-image-text'>
                                    YOUR QUALITY
                                    <div style={{paddingTop:'30px'}}>
                                        OF LIFE -
                                    </div>
                                    <div style={{color:'#F5AAC9',paddingTop:'30px'}}>
                                        OUR DRIVING
                                    </div>
                                    <div style={{color:'#F5AAC9',paddingTop:'30px'}}>
                                        FORCE
                                    </div>
                                </div> 
                            </div> 
                        )
                    }
                })()}
 {/* /.illustration-holder */}
            </div> {/* /.hero-banner-five */}

        </Fragment>
    )
}

export default HeroBannerFive