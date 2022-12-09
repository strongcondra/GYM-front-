import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import NewsFormTwo from '../form/NewsFormTwo';

const SocialContent = [
    {
        icon: 'fab fa-facebook-f',
        routerPath: '#'
    },
    {
        icon: 'fab fa-twitter',
        routerPath: '#'
    },
    {
        icon: 'fab fa-linkedin-in',
        routerPath: '#'
    },
];
const PageContent = [
    {
        name: 'Home',
        routerPath: '/'
    },
    {
        name: 'Pricing',
        routerPath: '/price'
    },
    {
        name: 'About us',
        routerPath: '/about-two'
    },
    {
        name: 'Service',
        routerPath: '/service-one'
    },
    {
        name: 'Blog',
        routerPath: '/blog-grid'
    },
];
const LegalContent = [
    {
        name: 'Terms of use',
        routerPath: '/faq'
    },
    {
        name: 'Terms &amp; conditions',
        routerPath: '/faq'
    },
    {
        name: 'Privacy policy',
        routerPath: '/faq'
    },
    {
        name: 'Cookie policy',
        routerPath: '/faq'
    },
];

const FooterTwo = () => {
    return (
        <Fragment>
            <div className="row">
                <div className="col-lg-3 footer-intro mb-40">
                    <div className="logo">
                        <Link to="/"><img src="images/logo/logo_01.png" alt="" width={130}/></Link>
                    </div>
                    <p>We will assist you in becoming more successful.</p>
                    <ul className="d-flex social-icon style-none">
                        {SocialContent.map((val, i)=>(
                            <li key={i}>
                            <a href={val.routerPath}><i className={val.icon}/></a>
                        </li>
                        ))}
                    </ul>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-6 mb-30">
                    <h5 className="footer-title">Links</h5>
                    <ul className="footer-nav-link style-none">
                    {PageContent.map((val, i)=>(
                            <li key={i}>
                             <Link to={val.routerPath}>{val.name}</Link>
                        </li>
                        ))}
                    </ul>
                </div>
                <div className="col-xl-2 col-md-3 col-sm-6 mb-30">
                    <h5 className="footer-title">Legal</h5>
                    <ul className="footer-nav-link style-none">
                        {LegalContent.map((val, i)=>(
                             <li key={i}>
                             <Link to={val.routerPath}>{val.name}</Link>
                         </li>
                        ))}
                    </ul>
                </div>
                <div className="col-xl-5 col-lg-4 col-md-6 mb-30">
                    <div className="newsletter ps-xl-5">
                        <h5 className="footer-title">Subscribe
                        </h5>
                        <p>Join over <span>68,000</span> people getting our emails</p>
                        <NewsFormTwo />
                        <div className="info">We only send interesting and relevant emails.</div>
                    </div>
                    {/* /.newsletter */}
                </div>
            </div>
        </Fragment>
    )
}

export default FooterTwo