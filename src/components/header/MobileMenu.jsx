import React, {Fragment, useState} from 'react';
import {Link} from 'react-router-dom'
import bambaLogo from "../../assets/images/img/bambaLogo.svg";
import {
    ProSidebar,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
    Menu,
    MenuItem,
    SubMenu
} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

const HomeMenu =[
  {
    name: 'User Analysis',
    routerPath: '/'
  },
  {
    name: 'Artificial Intelligence',
    routerPath: '/artificial-intelligence'
  },
  {
    name: 'Data Science',
    routerPath: '/data-science'
  },
  {
    name: 'ChatBoot',
    routerPath: '/chatboot'
  },
  {
    name: 'Machine Learning',
    routerPath: '/machine-learning'
  },
];

const AboutMenu =[
  {
    name: 'About Us One',
    routerPath: '/about-one'
  },
  {
    name: 'About Us Two',
    routerPath: '/about-two'
  }
];

const ServiceMenu =[
  {
    name: 'Service One',
    routerPath: '/service-one'
  },
  {
    name: 'Service Two',
    routerPath: '/service-two'
  },
  {
    name: 'Service Details',
    routerPath: '/service-details'
  }
];

const TeamMenu =[
  {
    name: 'Team Member',
    routerPath: '/team-member'
  },
  {
    name: 'Team Details',
    routerPath: '/team-details'
  }
];


const PortfolioMenu =[
  {
    name: 'Portfolio 3 Column',
    routerPath: '/portfolio-3'
  },
  {
    name: 'Portfolio 2 Column',
    routerPath: '/portfolio-2'
  },
  {
    name: 'Portfolio Masonry',
    routerPath: '/portfolio-masonry'
  },
  {
    name: 'Single Portfolio',
    routerPath: '/portfolio-single'
  },

];


const BlogMenu =[
  {
    name: 'Grid Layout',
    routerPath: '/blog-grid'
  },
  {
    name: 'Grid With Sidebar',
    routerPath: '/blog-sidebar'
  },
  {
    name: 'Blog Masonry',
    routerPath: '/blog-masonry'
  },
  {
    name: 'Blog Standard',
    routerPath: '/blog-standard'
  },
  {
    name: 'Blog Details',
    routerPath: '/blog-Details'
  },

];

const MobileMenu = () => {

    const [click, setClick] = useState(false);

   
    const handleClick = () => {
        setClick(!click);
    }
    return (
        <Fragment>
            <div className="mobile-menu-wrapper">
            <div className="moblie-menu-toggler">
                            <button className={click ? "navbar-toggler active d-block d-lg-none": "navbar-toggler d-block d-lg-none"} type="button" onClick={handleClick}>
                                <span/>
                            </button>
                        </div>
                <ProSidebar
                    className={click
                    ? 'mobile-menu menu-open'
                    : 'mobile-menu'}>
                    <SidebarHeader>
                        <div className="mobile-logo">
                          <Link to="/" className="d-block"><img src={bambaLogo} alt="" className="shapes shape-two"/></Link>
                        </div>
                       <div className="close-menu" onClick={handleClick}>
                        <i className="bi bi-x-lg"></i>
                       </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <Menu iconShape="square">
                              <MenuItem>
                                {""}
                                  <Link to="/">Philosophy</Link>
                              </MenuItem>

                              <MenuItem>
                                {""}
                                  <Link to="/training">Training</Link>
                              </MenuItem>

                              <MenuItem>
                                {""}
                                  <Link to="/contact">Contact</Link>
                              </MenuItem>

                            <MenuItem>
                                {""}
                                <Link to="/shop">Shop</Link>
                            </MenuItem>
                        </Menu>
                        <div className='mx-auto mt-100 text-center'>
                         <Link to="/booking" className="send-msg-btn tran3s ">Book</Link>
                        </div>
                    </SidebarContent>

                    <SidebarFooter></SidebarFooter>
                </ProSidebar>
            </div>
        </Fragment>
    )
}

export default MobileMenu