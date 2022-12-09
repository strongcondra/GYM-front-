import React, {Fragment, useState} from 'react';
import {Link} from 'react-router-dom'
import MobileMenu from './MobileMenu';
import ThemeMainMenu from './ThemeMainMenu';
import bambaLogo from "../../assets/images/img/bambaLogo.svg";
const TopNavFour = () => {

  const [navbar, setNavbar] = useState(false);
  
  const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }
    const closeModal = () => {
        setIsOpen(!modalIsOpen);
    }
    

  const toggleMenu =()=>{
    if(window.scrollY >= 68) {
      setNavbar(true)
    } else{
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', toggleMenu);



    return (
        <Fragment>
            <header className={navbar ? "booking-main-menu sticky-menu theme-menu-four fixed": "booking-main-menu sticky-menu theme-menu-four"}>
                <div className="inner-content d-flex">
                    <div className="d-flex align-items-center container">
                        <div className="logo order-lg-0">
                            <Link to="/" className="d-block"><img src={bambaLogo} alt="" className="shapes shape-two"/></Link>
                        </div>
                        <div className="right-widget d-flex align-items-center  order-lg-3">                            
                            <Link to="/booking" className="send-msg-btn tran3s d-none d-lg-block">Book</Link>
                        </div>
                        {/* /.right-widget */}
                        <nav className="navbar navbar-expand-lg order-lg-2">
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ThemeMainMenu/> 
                            </div>
                        </nav>
                    </div>
                    <MobileMenu />
                    {/* mobilemenu */}
                </div>
                {/* /.inner-content */}
            </header>
            {/* /.theme-main-menu */}
        </Fragment>
    )
}

export default TopNavFour