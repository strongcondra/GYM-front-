import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import productpic from "../../assets/images/img/bottle.jpg";

const MemberContent = [
    {
        img: 'img_13',
        desig: '290 SEK',
        name: 'Vottenflaska med tryck',
        fade: 'fade-up',
        dataDelay: ''
    }, {
        img: '01',
        desig: '150 SEK',
        name: 'Bamba Totebag',
        fade: 'fade-up',
        dataDelay: '100'
    }, {
        img: 'img_13',
        desig: '290 SEK',
        name: 'Vottenflaska med tryck',
        fade: 'fade-up',
        dataDelay: ''
    }, {
        img: '01',
        desig: '150 SEK',
        name: 'Bamba Totebag',
        fade: 'fade-up',
        dataDelay: '100'
    },{
        img: 'img_13',
        desig: '290 SEK',
        name: 'Vottenflaska med tryck',
        fade: 'fade-up',
        dataDelay: ''
    }, {
        img: '01',
        desig: '150 SEK',
        name: 'Bamba Totebag',
        fade: 'fade-up',
        dataDelay: '100'
    },{
        img: 'img_13',
        desig: '290 SEK',
        name: 'Vottenflaska med tryck',
        fade: 'fade-up',
        dataDelay: ''
    }, {
        img: '01',
        desig: '150 SEK',
        name: 'Bamba Totebag',
        fade: 'fade-up',
        dataDelay: '100'
    }
]

const TeamMemberTwo = () => {
    return (
        <Fragment>
            
            {(() => {
                if (window.innerWidth > 1024) {
                    return (
                        <div className="row">
                        {MemberContent.map((val, i) => (
                            <div
                                key={i}
                                className="col-xs-3 col-xxs-3 col-xl-3 col-lg-4 col-sm-6 "
                                >
                                <div className="team-block-one tran3s mt-50 md-mt-30">
                                    <div className="img-meta"><img src={productpic}    alt="" className="w-100"/></div>
                                    <div className='d-flex container pt-10'>
                                        <div className='justify-content-start'>
                                            <div className="designation-text product-name">{val.name}</div>
                                            <div className="name tran3s product-desig">{val.desig}</div>
                                            
                                        </div>
                                        <div className='flex-row-reverse align-self-center ms-auto' style={{padding:"10px", backgroundColor:'#2B2B2B'}}><i className='fas fa-shopping-cart' style={{color:'white'}}></i></div>
                                        
                                    </div>
                                      
                                </div>
                                {/* /.team-block-one */}
                            </div>
                        ))}
                    </div>
                    )

                } else {
                    return (
                        <div className="row d-flex justify-content-center">
                        {MemberContent.map((val, i) => (
                            <div
                                key={i}
                                className="col-xs-3 col-xxs-3 col-xl-3 col-lg-4 col-sm-6 "
                                  style={{maxWidth:'45%'}}>
                                <div className="team-block-one tran3s mt-50 md-mt-30 ">
                                    <div className="img-meta"><img src={productpic}    alt="" className="w-100"/></div>
                                    <div className='d-flex container pt-10'>
                                        <div className='justify-content-start'>
                                            <div className="designation-text product-name">{val.name}</div>
                                            <div className="name tran3s product-desig">{val.desig}</div>
                                            
                                        </div>
                                        <div className='flex-row-reverse align-self-center ms-auto' style={{padding:"10px", backgroundColor:'#2B2B2B'}}><i className='fas fa-shopping-cart' style={{color:'white'}}></i></div>
                                        
                                    </div>
                                      
                                </div>
                                {/* /.team-block-one */}
                            </div>
                        ))}
                    </div>
                    )
                }
            })()

            }

        </Fragment>
    )
}

export default TeamMemberTwo