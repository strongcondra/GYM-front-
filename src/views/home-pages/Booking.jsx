import React, {Fragment} from 'react';
import TopNavFour from '../../components/header/TopNavFour';
import FooterFour from '../../components/footer/FooterFour';
import HeroBannerOne from '../../components/hero-banner/HeroBannerOne';
import PricingTab from '../../components/pricing/pricetab/PricingTab';
const TeamMember = () => {
    return (
        <Fragment>
            <div className="booking-page-wrapper ">
                {/* helmet end */}
                
                <TopNavFour/> {/* theme-menu-four */}
                <div className={` ${window.innerWidth > 1024 ? 'book-content' : 'mobilebook-content'}`}>
                    <div className='container'>
                    <HeroBannerOne/> 
                    </div>
                    <div className="pricing-table-area-one mt-200 container" >
                                <PricingTab />
                    </div>
                </div>
                <div className="footer-style-booking theme-basic-footer">
                    <div className="container">
                            <FooterFour/> 
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default TeamMember