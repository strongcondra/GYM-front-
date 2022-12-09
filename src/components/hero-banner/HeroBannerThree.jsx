import React, { Fragment, useState } from 'react';
import contactpic from "../../assets/images/img/contactPic.jpg";


const HeroBannerThree = () => {

    return (
        <Fragment>
            <div>

                <div className='home-image'>
                    <img src={contactpic} alt="" className=""  />
                    <div className='contact-text'>
                        HERE TO HELP YOU SHAPE
                        <div style={{paddingTop:'30px'}}>
                            YOUR NEW IMPROVED YOU
                        </div>
                        <div style={{paddingTop:'30px', fontSize:'18px'}}>
                            PHYSICAL-MENTAL-SPIRITUAL
                        </div>

                    </div> 
                </div> {/* /.illustration-holder */}
                
            </div> {/* /.hero-banner-five */}
        </Fragment>
    )
}

export default HeroBannerThree