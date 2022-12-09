import React, { Fragment, useState } from 'react';
import trainpic from "../../assets/images/img/trainingPage.png";
import mobiletrainpic from "../../assets/images/img/trainingMobile.png";


const HeroBannerFive = () => {

    return (
        <Fragment>
            <div>

            {(() => {
                    if (window.innerWidth > 1024) {
                        return (
                            <div className='home-image'>
                                <img src={trainpic} alt="" className=""  />
                                <div className='image-text'>
                                    WE FACILITATE MADE-TO-
                                    <div style={{paddingTop:'30px'}}>
                                        MEASURE TRAINING JUST
                                    </div>
                                    <div style={{paddingTop:'30px'}}>
                                        FOR YOU
                                    </div>
            
                                </div> 
                            </div>
                        )

                    } else {
                        return (
                            <div className='home-image'>
                                <img src={mobiletrainpic} alt="" className=""  />
                                <div className='mobile-image-text'>
                                    WE FACILITATE MADE-TO-
                                    <div style={{paddingTop:'30px'}}>
                                        MEASURE TRAINING JUST
                                    </div>
                                    <div style={{paddingTop:'30px'}}>
                                        FOR YOU
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