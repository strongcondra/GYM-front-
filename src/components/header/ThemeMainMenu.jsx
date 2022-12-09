import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const HomeMenu = [
    {
        name: 'User Analysis',
        routerPath: '/'
    }, {
        name: 'Artificial Intelligence',
        routerPath: '/artificial-intelligence'
    }, {
        name: 'Data Science',
        routerPath: '/data-science'
    }, {
        name: 'ChatBoot',
        routerPath: '/chatboot'
    }, {
        name: 'Machine Learning',
        routerPath: '/machine-learning'
    }
];

const AboutMenu = [
    {
        name: 'About Us One',
        routerPath: '/about-one'
    }, {
        name: 'About Us Two',
        routerPath: '/about-two'
    }
];

const ServiceMenu = [
    {
        name: 'Service One',
        routerPath: '/service-one'
    }, {
        name: 'Service Two',
        routerPath: '/service-two'
    }, {
        name: 'Service Details',
        routerPath: '/service-details'
    }
];

const TeamMenu = [
    {
        name: 'Team Member',
        routerPath: '/team-member'
    }, {
        name: 'Team Details',
        routerPath: '/team-details'
    }
];

const PortfolioMenu = [
    {
        name: 'Portfolio 3 Column',
        routerPath: '/portfolio-3'
    }, {
        name: 'Portfolio 2 Column',
        routerPath: '/portfolio-2'
    }, {
        name: 'Portfolio Masonry',
        routerPath: '/portfolio-masonry'
    }, {
        name: 'Single Portfolio',
        routerPath: '/portfolio-single'
    }
];

const BlogMenu = [
    {
        name: 'Grid Layout',
        routerPath: '/blog-grid'
    }, {
        name: 'Grid With Sidebar',
        routerPath: '/blog-sidebar'
    }, {
        name: 'Blog Masonry',
        routerPath: '/blog-masonry'
    }, {
        name: 'Blog Standard',
        routerPath: '/blog-standard'
    }, {
        name: 'Blog Details',
        routerPath: '/blog-Details'
    }
];

const Miscellaneous = [
    {
        name: 'Testimonials',
        routerPath: '/testimonial'
    }, {
        name: 'Our Pricing',
        routerPath: '/price'
    }, {
        name: 'FAQ',
        routerPath: '/faq'
    }, {
        name: '404 Error',
        routerPath: '/error'
    }, 
];

const ThemeMainMenu = () => {

    return (
        <Fragment>
            <ul className="navbar-nav">
                <li className="d-block d-lg-none">
                    <div className="logo">
                        <Link to="/"><img src="images/logo/logo_01.png" alt="" width={130}/></Link>
                    </div>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/" role="button">PHILOSOPHY {" "}</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/training" role="button">TRAINING {" "}</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/contact" role="button">CONTACT {" "}</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/shop" role="button">SHOP {" "}</Link>
                </li>
            </ul>
        </Fragment>
    )
}
export default ThemeMainMenu