import React,{Fragment} from 'react';
import TopNavFour from '../../components/header/TopNavFour';
import HeroBannerFive from '../../components/hero-banner/HeroBannerFive';
import FooterFour from '../../components/footer/FooterFour';
const UserAnalysis = () => {
    return (
        <Fragment>
            <div className=" main-page-wrapper" >
                <TopNavFour/>
                <HeroBannerFive/> 
                <div className="fancy-feature-seventeen position-relative mt-160 xl-mt-50 mb-300">
                    <div className="container">
                        <div className="row ">
                            <div className="col-xl-6 col-lg-6">
                                <div className="  text-lg-start">
                                    <h2 >A NEW GYM</h2>
                                    <h2 className="main-title">FOR A NEW TIME</h2>
                                </div>
                                {/* /.title-style-three */}
                            </div>
                            <div className="col-xl-6 col-lg-6">
                            <p>
                            Yet bed any for travelling assistance indulgence unpleasing. Not
                            thoughts all exercise blessing. Indulgence way everything joy
                            alteration boisterous the attachment. Party we years to order allow
                            asked of. thoughts all exercise blessing. Indulgence way everything
                            joy alteration boisterous the attachment. Party we years to order
                            allow asked of. asked of. thoughts all exercise blessing. Indulgence
                            way everything joy alteration boisterous the attachment. Party we
                            years to order allow asked of.
                            </p>

                            <div className='h3'>Physical</div>
                            <p>
                            Yet bed any for travelling assistance indulgence unpleasing. Not
                            thoughts all exercise blessing. Indulgence way everything joy
                            alteration boisterous the attachment. Party we years to order allow
                            asked of.
                            </p>
                            <div className='h3'>Mental</div>
                            {/* todo stylea h3 och <p> */}
                            <p>
                            Yet bed any for travelling assistance indulgence unpleasing. Not
                            thoughts all exercise blessing. Indulgence way everything joy
                            alteration boisterous the attachment. Party we years to order allow
                            asked of.
                            </p>
                            <div className='h3'>Spiritual</div>

                            <p>
                            Yet bed any for travelling assistance indulgence unpleasing. Not
                            thoughts all exercise blessing. Indulgence way everything joy
                            alteration boisterous the attachment. Party we years to order allow
                            asked of.
                            </p>
                            </div>
                        </div>
                    </div>
                    {/* /.container */}
                </div>
                <div className="footer-style-four theme-basic-footer">
                    <div className="container">
                            <FooterFour/> 
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default UserAnalysis