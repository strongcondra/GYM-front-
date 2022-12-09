import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import baLogo from "../../assets/images/img/bLogo.svg";

const SocialContent = [
    {
        icon: 'fab fa-facebook-f',
        routerPath: '#'
    }, {
        icon: 'fab fa-twitter',
        routerPath: '#'
    }, {
        icon: 'fab fa-linkedin-in',
        routerPath: '#'
    }
];
const PageContent = [
    {
        name: 'Philosophy',
        routerPath: '/'
    }, {
        name: 'Traning',
        routerPath: '/training'
    }, {
        name: 'Contact',
        routerPath: '/contact'
    }, {
        name: 'Shop',
        routerPath: '/shop'
    }, {
        name: 'Book classes',
        routerPath: '/booking'
    }
];

const FooterFour = () => {
    return (
        <Fragment>
                

                {(() => {
                if (window.innerWidth > 1024) {
                    return (
                        <div className='row'>
                        <div className='col-lg-6 col-sm-6'>
                            <div className='row'>
                                <div className="col-lg-4 col-sm-4 mb-40">
                                    <div className="logo">
                                        <Link to="/"><img src={baLogo} alt="" width={100}/></Link>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-sm-8 mb-30">
                                    <p>Bamba</p>
                                    <p style={{ opacity: "50%" }}>Lützengatan 10</p>
                                    <p style={{ opacity: "50%" }}>11520 Stockholm</p>
                                    <p style={{ opacity: "50%" }}>Sweden</p>
                                    <p>info@bamba.se</p>
                                    <p>www.bamba.se</p>
                                    <p>Instagram @bambagym</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-sm-6'>
                            <div className='row'>
                                <ul className="footer-nav-link style-none">
                                    {PageContent.map((val, i) => (
                                        <li key={i}>
                                            <Link  to={val.routerPath}><h3 style={{padding:'12px'}}>-{val.name}</h3></Link>
                                        </li>
                                    ))}
                                </ul> 
                            </div>
                        </div>
                        </div>
                    )

                } else {
                    return (
                        <div className='row'>
                        <div className='col-lg-6 col-sm-6'>
                            <div className='row d-flex'>
                                <div className="col-lg-4 col-sm-4 mb-40 col-xs-4" style={{maxWidth:'30%'}}>
                                    <div className="logo">
                                        <Link to="/"><img src={baLogo} alt="" width={100}/></Link>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-sm-8 mb-30 col-xs-8" style={{maxWidth:'65%'}}>
                                <ul className="footer-nav-link style-none">
                                    {PageContent.map((val, i) => (
                                        <li key={i}>
                                            <Link to={val.routerPath}><h4 style={{padding:'12px'}}>-{val.name}</h4></Link>
                                        </li>
                                    ))}
                                </ul> 

                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-sm-6'>
                            <div className='row'>
                            <p>Bamba</p>
                                    <p style={{ opacity: "50%" }}>Lützengatan 10</p>
                                    <p style={{ opacity: "50%" }}>11520 Stockholm</p>
                                    <p style={{ opacity: "50%" }}>Sweden</p>
                                    <p>info@bamba.se</p>
                                    <p>www.bamba.se</p>
                                    <p>Instagram @bambagym</p>
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

export default FooterFour