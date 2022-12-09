import React,{Fragment} from 'react';
import TopNavFour from '../../components/header/TopNavFour';
import HeroBannerFour from '../../components/hero-banner/HeroBannerFour';
import FooterFour from '../../components/footer/FooterFour';
import TrainBannerThree from '../../components/training/TrainBannerThree';
const MartialArts = () => {
    return (
        <Fragment>
            <div className=" main-page-wrapper" >
                <TopNavFour/>
                <HeroBannerFour/> 
                <div className="fancy-feature-seventeen position-relative mt-160 xl-mt-50 mb-300">
                    <div className="container">
                        <TrainBannerThree/>
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

export default MartialArts