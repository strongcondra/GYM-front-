import React, {Fragment} from 'react';
import TopNavFour from '../../components/header/TopNavFour';
import TeamMemberTwo from '../../components/team/TeamMemberTwo';
import FooterFour from '../../components/footer/FooterFour';


const TeamMember = () => {
    return (
        <Fragment>
            <div className="main-page-wrapper">
                {/* helmet end */}
                <TopNavFour/> {/* theme-menu-four */}



                <div className="team-section-two mt-110 mb-160 lg-mt-60 lg-mb-100">
                    <div className="container" >
                        <TeamMemberTwo/>
                    </div>
                </div>
                <div className="footer-style-four theme-basic-footer">
                    <div className="container">
                            <FooterFour/> 
                    </div>
                </div>
                {/* /.footer-style-four */}
            </div>

        </Fragment>
    )
}

export default TeamMember