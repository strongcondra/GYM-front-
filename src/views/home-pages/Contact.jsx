import React,{Fragment} from 'react';
import TopNavFour from '../../components/header/TopNavFour';
import HeroBannerThree from '../../components/hero-banner/HeroBannerThree';
import FooterFour from '../../components/footer/FooterFour';
import userpic from "../../assets/images/img/abbe.jpg";



const Training = () => {
    return (
        <Fragment>

            {(() => {
                if (window.innerWidth > 1024) {
                    return (
                        <div className=" main-page-wrapper" >
                        <TopNavFour/>
                        <HeroBannerThree/> 
                        <div className="mt-100 lg-mt-70 mb-160">
                            <div className="container" >
                                <div className="row gx-xxl-5">
                                    <div className="col-lg-4   order-lg-first" >
                                        <p>Bamba</p>
                                        <p style={{ opacity: "50%" }}>Lützengatan 10</p>
                                        <p style={{ opacity: "50%" }}>11520 Stockholm</p>
                                        <p style={{ opacity: "50%" }}>Sweden</p>
                                        <p>info@bamba.se</p>
                                        <p>www.bamba.se</p>
                                        <p>Instagram @bambagym</p>
                                        {/* /.form-style-one */}
                                    </div>
                                    <div className="col-lg-8 d-flex order-lg-last pb-50">
                                        <div className="map-area-one mt-10 me-lg-4 md-mt-50">
                                            <div className="mapouter">
                                                <iframe
                                                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7292.882391085675!2d90.37429724010617!3d23.944834037065423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1652150281517!5m2!1sen!2sbd"
                                                    style={{
                                                    border: 0
                                                }}
                                                    allowFullScreen
                                                    loading="lazy"
                                                    referrerPolicy="no-referrer-when-downgrade"/>
                                            </div>
                                        </div>
                                        {/* /.map-area-one */}
                                    </div>
                                </div>
                                <div className='row mt-80' >
                                    <h2>
                                        PERSONAL TRAINERS
                                    </h2>
                                    <div className='d-flex justify-content-center'>
                                        <div className='col-sm-6 col-lg-3 p-2 mt-30 ' >
                                            <img src={userpic} alt="" className="user-image" />
                                            <hr style={{backgroundColor:'grey', marginTop:'30px'}} / >
                                            <div className='mt-40'>
                                                <p>Abb Joof</p>
                                                <p style={{opacity:'0.5'}}>Abb Joof</p>
                                                <p>abbe@bamba.se</p>
                                                <p>+46701234567</p>
                                            </div>
                                        </div>
                                        <div className='col-sm-6 col-lg-3 p-2 mt-30' >
                                            <img src={userpic} alt="" className="user-image" />
                                            <hr style={{backgroundColor:'grey', marginTop:'30px'}} / >
                                            <div className='mt-40'>
                                                <p>Abb Joof</p>
                                                <p style={{opacity:'0.5'}}>Abb Joof</p>
                                                <p>abbe@bamba.se</p>
                                                <p>+46701234567</p>
                                            </div>
                                        </div>
                                        <div className='col-sm-6 col-lg-3 p-2 mt-30' >
                                            <img src={userpic} alt="" className="user-image" />
                                            <hr style={{backgroundColor:'grey', marginTop:'30px'}} / >
                                            <div className='mt-40'>
                                                <p>Abb Joof</p>
                                                <p style={{opacity:'0.5'}}>Abb Joof</p>
                                                <p>abbe@bamba.se</p>
                                                <p>+46701234567</p>
                                            </div>
                                        </div>
                                        <div className='col-sm-6 col-lg-3 p-2 mt-30'>
                                            <img src={userpic} alt="" className="user-image" />
                                            <hr style={{backgroundColor:'grey', marginTop:'30px'}} / >
                                            <div className='mt-40'>
                                                <p>Abb Joof</p>
                                                <p style={{opacity:'0.5'}}>Abb Joof</p>
                                                <p>abbe@bamba.se</p>
                                                <p>+46701234567</p>
                                            </div>
                                        </div>
                                    </div>

        
        
        
        
                                </div>
                            </div>
                        </div>
        
        
        
                        <div className="footer-style-four theme-basic-footer">
                            <div className="container">
                                    <FooterFour/> 
                            </div>
                        </div>
                    </div>
                    )

                } else {
                    return (
                        <div className=" main-page-wrapper" >
                        <TopNavFour/>
        
                        <div className="mt-100 lg-mt-70 mb-160">
                            <div className="container" >
                                <div className="row gx-xxl-5">

                                    <div className="col-lg-8 d-flex order-lg-last pb-50">
                                        <div className="map-area-one mt-10 me-lg-4 md-mt-50">
                                            <div className="mapouter">
                                                <iframe
                                                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7292.882391085675!2d90.37429724010617!3d23.944834037065423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1652150281517!5m2!1sen!2sbd"
                                                    style={{
                                                    border: 0
                                                }}
                                                    allowFullScreen
                                                    loading="lazy"
                                                    referrerPolicy="no-referrer-when-downgrade"/>
                                            </div>
                                        </div>
                                        {/* /.map-area-one */}
                                    </div>
                                    <div className="col-lg-4   order-lg-first" >
                                        <p>Bamba</p>
                                        <p style={{ opacity: "50%" }}>Lützengatan 10</p>
                                        <p style={{ opacity: "50%" }}>11520 Stockholm</p>
                                        <p style={{ opacity: "50%" }}>Sweden</p>
                                        <p>info@bamba.se</p>
                                        <p>www.bamba.se</p>
                                        <p>Instagram @bambagym</p>
                                        {/* /.form-style-one */}
                                    </div>
                                </div>
                                <div className='row mt-80  mx-auto d-flex justify-content-center '  >
                                    <h4>
                                        PERSONAL TRAINERS
                                    </h4>
                                        <div className='col-xs-6 col-sm-6 col-lg-3  mt-90 p-2' style={{maxWidth:'40%'}}>
                                            <img src={userpic} alt="" className="user-image" />
                                            <hr style={{backgroundColor:'grey', marginTop:'30px'}} / >
                                            <div className='pt-40'>
                                                <p>Abb Joof</p>
                                                <p style={{opacity:'0.5'}}>Abb Joof</p>
                                                <p>abbe@bamba.se</p>
                                                <p>+46701234567</p>
                                            </div>
                                        </div>
                                        <div className='col-xs-6 col-sm-6 col-lg-3  mt-90 p-2' style={{maxWidth:'40%'}}>
                                            <img src={userpic} alt="" className="user-image" />
                                            <hr style={{backgroundColor:'grey', marginTop:'30px'}} / >
                                            <div className='pt-40'>
                                                <p>Abb Joof</p>
                                                <p style={{opacity:'0.5'}}>Abb Joof</p>
                                                <p>abbe@bamba.se</p>
                                                <p>+46701234567</p>
                                            </div>
                                        </div>
                                        <div className='col-xs-6 col-sm-6 col-lg-3  mt-90 p-2' style={{maxWidth:'40%'}}>
                                            <img src={userpic} alt="" className="user-image" />
                                            <hr style={{backgroundColor:'grey', marginTop:'30px'}} / >
                                            <div className='pt-40'>
                                                <p>Abb Joof</p>
                                                <p style={{opacity:'0.5'}}>Abb Joof</p>
                                                <p>abbe@bamba.se</p>
                                                <p>+46701234567</p>
                                            </div>
                                        </div>
                                        <div className='col-xs-6 col-sm-6 col-lg-3  mt-90 p-2' style={{maxWidth:'40%'}}>
                                            <img src={userpic} alt="" className="user-image" />
                                            <hr style={{backgroundColor:'grey', marginTop:'30px'}} / >
                                            <div className='pt-40'>
                                                <p>Abb Joof</p>
                                                <p style={{opacity:'0.5'}}>Abb Joof</p>
                                                <p>abbe@bamba.se</p>
                                                <p>+46701234567</p>
                                            </div>
                                        </div>  
                                </div>
                            </div>
                        </div>
        
        
        
                        <div className="footer-style-four theme-basic-footer">
                            <div className="container">
                                    <FooterFour/> 
                            </div>
                        </div>
                    </div>
                    )
                }
            })()

            }

        </Fragment>
    )
}

export default Training