import React,{Fragment} from 'react';
import TopNavFour from '../../components/header/TopNavFour';
import FooterFour from '../../components/footer/FooterFour';
import BoxingInfo from '../../components/training/BoxingInfo';
import boxingpic from "../../assets/images/img/boxingPic.png";
import userpic from "../../assets/images/img/abbe.jpg";



const MartialArts = () => {
    return (
        <Fragment>

            {(() => {
                if (window.innerWidth > 1024) {
                    return (
                        <div className=" main-page-wrapper" >
                        <TopNavFour/>
                        <hr style={{backgroundColor:'grey', marginTop:'50px'}} / >
        
                        <div className="fancy-feature-seventeen position-relative mt-40 xl-mt-50 mb-300">
                            <div className="container">
                                <div className="row ">
                                    <div className="col-xl-6 col-lg-6">
        
                                    <div className="bamba__header-content ">
                                        <h1>BOXING</h1>
                                        <hr className="locationHR" />
                                        <div className='h3'>Philosophy</div>
                                            <p>
                                                Yet bed any for travelling assistance indulgence unpleasing. Not
                                                thoughts all exercise blessing. Indulgence way everything joy
                                                alteration boisterous the attachment. Party we years to order allow
                                                asked of. Yet bed any for travelling assistance indulgence
                                                unpleasing. Not thoughts all exercise blessing. Indulgence way
                                                everything joy alteration boisterous the attachment. Party we years
                                                to order allow asked of. asked of. Yet bed any for travelling
                                                assistance indulgence unpleasing. Not thoughts all exercise
                                                blessing. Indulgence way everything joy alteration boisterous the
                                                attachment. Party we years to order allow asked of. to order allow
                                                asked of. asked of. Yet bed any for travelling assistance indulgence
                                                unpleasing. Not thoughts all exercise blessing. Indulgence way
                                                everything joy alteration boisterous the attachment. Party we years
                                                to order allow asked of.
                                            </p>
                                        <div className='h3 pt-40'>Philosophy</div>
        
                                            <p>
                                                Yet bed any for travelling assistance indulgence unpleasing. Not
                                                thoughts all exercise blessing. Indulgence way everything joy
                                                alteration boisterous the attachment. Party we years to order allow
                                                asked of. Yet bed any for travelling assistance indulgence
                                                unpleasing. Not thoughts all exercise blessing. Indulgence way
                                                everything joy alteration boisterous the attachment. Party we years
                                                to order allow asked of. Yet bed any for travelling assistance
                                                indulgence unpleasing. Not thoughts all exercise blessing.
                                                Indulgence way everything joy alteration boisterous the attachment.
                                                Party we years to order allow asked of.
                                            </p>
                                        <div className='h3 pt-40'>Philosophy</div>
        
                                            <p>
                                                Yet bed any for travelling assistance indulgence unpleasing. Not
                                                thoughts all exercise blessing. Indulgence way everything joy
                                                alteration boisterous the attachment. Party we years to order allow
                                                asked of. Yet bed any for travelling assistance indulgence
                                                unpleasing. Not thoughts all exercise blessing. Indulgence way
                                                everything joy alteration boisterous the attachment. Party we years
                                                to order allow asked of. Yet bed any for travelling assistance
                                                indulgence unpleasing. Not thoughts all exercise blessing.
                                                Indulgence way everything joy alteration boisterous the attachment.
                                                Party we years to order allow asked of. Yet bed any for travelling
                                                assistance indulgence unpleasing. Not thoughts all exercise
                                                blessing. Indulgence way everything joy alteration boisterous the
                                                attachment. Party we years to order allow asked of. Yet bed any for
                                                travelling assistance indulgence unpleasing. Not thoughts all
                                                exercise blessing. Indulgence way everything joy alteration
                                                boisterous the attachment. Party we years to order allow asked of.
                                            </p>
                                        </div>
                                        <hr style={{backgroundColor:'grey', marginTop:'50px'}} / >
                                        <BoxingInfo />    
                                    </div>
                                    <div className="col-xl-6 col-lg-6 p-5">
                                        <div className='row '><img src={boxingpic} alt="" className=""  /></div>
                                        <div className='container pt-60'>
                                            <div className='col-lg-6 col-sm-6'>
                                                <img src={userpic} alt="" className="user-image" />
                                                <hr style={{backgroundColor:'grey', marginTop:'30px'}} / >
                                                <div className='pt-40'>
                                                    <p>Abb Joof</p>
                                                    <p style={{opacity:'0.5'}}>Abb Joof</p>
                                                    <p>abbe@bamba.se</p>
                                                    <p>+46701234567</p>
                                                </div>
                                                
                                            </div>
                                            <div className='col-lg-6 col-sm-6'></div>
                                        </div>
        
        
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
                    )

                } else {
                    return (
                        <div className=" main-page-wrapper" >
                        <TopNavFour/>
                        <hr style={{backgroundColor:'grey', marginTop:'50px'}} / >
        
                        <div className="fancy-feature-seventeen position-relative mt-40 xl-mt-50 mb-300">
                            <div className="container">
                                <div className="row ">
                                    <div className="col-xl-6 col-lg-6" >
        
                                    <div className="bamba__header-content ">
                                        <h1>BOXING</h1>
                                        <hr className="locationHR" />
                                        <div className='row '><img src={boxingpic} alt="" className=""  /></div>
                                        <div className='h3'>Philosophy</div>
                                            <p>
                                                Yet bed any for travelling assistance indulgence unpleasing. Not
                                                thoughts all exercise blessing. Indulgence way everything joy
                                                alteration boisterous the attachment. Party we years to order allow
                                                asked of. Yet bed any for travelling assistance indulgence
                                                unpleasing. Not thoughts all exercise blessing. Indulgence way
                                                everything joy alteration boisterous the attachment. Party we years
                                                to order allow asked of. asked of. Yet bed any for travelling
                                                assistance indulgence unpleasing. Not thoughts all exercise
                                                blessing. Indulgence way everything joy alteration boisterous the
                                                attachment. Party we years to order allow asked of. to order allow
                                                asked of. asked of. Yet bed any for travelling assistance indulgence
                                                unpleasing. Not thoughts all exercise blessing. Indulgence way
                                                everything joy alteration boisterous the attachment. Party we years
                                                to order allow asked of.
                                            </p>
                                        <div className='h3 pt-40'>Philosophy</div>
        
                                            <p>
                                                Yet bed any for travelling assistance indulgence unpleasing. Not
                                                thoughts all exercise blessing. Indulgence way everything joy
                                                alteration boisterous the attachment. Party we years to order allow
                                                asked of. Yet bed any for travelling assistance indulgence
                                                unpleasing. Not thoughts all exercise blessing. Indulgence way
                                                everything joy alteration boisterous the attachment. Party we years
                                                to order allow asked of. Yet bed any for travelling assistance
                                                indulgence unpleasing. Not thoughts all exercise blessing.
                                                Indulgence way everything joy alteration boisterous the attachment.
                                                Party we years to order allow asked of.
                                            </p>
                                        <div className='h3 pt-40'>Philosophy</div>
        
                                            <p>
                                                Yet bed any for travelling assistance indulgence unpleasing. Not
                                                thoughts all exercise blessing. Indulgence way everything joy
                                                alteration boisterous the attachment. Party we years to order allow
                                                asked of. Yet bed any for travelling assistance indulgence
                                                unpleasing. Not thoughts all exercise blessing. Indulgence way
                                                everything joy alteration boisterous the attachment. Party we years
                                                to order allow asked of. Yet bed any for travelling assistance
                                                indulgence unpleasing. Not thoughts all exercise blessing.
                                                Indulgence way everything joy alteration boisterous the attachment.
                                                Party we years to order allow asked of. Yet bed any for travelling
                                                assistance indulgence unpleasing. Not thoughts all exercise
                                                blessing. Indulgence way everything joy alteration boisterous the
                                                attachment. Party we years to order allow asked of. Yet bed any for
                                                travelling assistance indulgence unpleasing. Not thoughts all
                                                exercise blessing. Indulgence way everything joy alteration
                                                boisterous the attachment. Party we years to order allow asked of.
                                            </p>
                                        </div>
                                        <hr style={{backgroundColor:'grey', marginTop:'50px'}} / >
                                        <BoxingInfo />    
                                    </div>
                                    <div className="col-xl-6 col-lg-6 p-5">
                                        <div className='container pt-60'>
                                            <div className='col-lg-6 col-sm-6'>
                                                <img src={userpic} alt="" className="user-image" />
                                                <hr style={{backgroundColor:'grey', marginTop:'30px'}} / >
                                                <div className='pt-40'>
                                                    <p>Abb Joof</p>
                                                    <p style={{opacity:'0.5'}}>Abb Joof</p>
                                                    <p>abbe@bamba.se</p>
                                                    <p>+46701234567</p>
                                                </div>
                                                
                                            </div>
                                            <div className='col-lg-6 col-sm-6'></div>
                                        </div>
        
        
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
                    )
                }
            })()

            }
        </Fragment>
    )
}

export default MartialArts