import React, {Fragment, useState} from 'react'
import { Link } from 'react-router-dom';
import SearchModal from '../../components/search-modal/SearchModal';
import MobileMenu from './MobileMenu';
import ThemeMainMenue from './ThemeMainMenu'

const TopNavOne = () => {
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
            <SearchModal isOpen={modalIsOpen} onClick={closeModal} bgColor="" />
            <header className={navbar ? "theme-main-menu sticky-menu theme-menu-one fixed" : "theme-main-menu sticky-menu theme-menu-one"}>
                <div className="inner-content">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="logo order-lg-0">
                            <Link to="/" className="d-block"><img src="images/logo/logo_01.png" alt="" width={130}/></Link>
                        </div>
                        <div
                            className="right-widget d-flex align-items-center ms-auto ms-lg-0 order-lg-3">
                            <button
                                className="menu-search-btn tran3s"
                                type="button" onClick={openModal}><i className="bi bi-search"/></button>
                            <Link to="/contact" className="req-demo-btn tran3s d-none d-lg-block">Request a Demo</Link>
                        </div>
                        {/* /.right-widget */}
                        <nav className="navbar navbar-expand-lg order-lg-2">
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ThemeMainMenue />
                                {/* Mobile Content */}
                                <div className="mobile-content d-block d-lg-none">
                                    <div
                                        className="d-flex flex-column align-items-center justify-content-center mt-70">
                                        <Link to="/contact" className="req-demo-btn tran3s">Request a Demo</Link>
                                    </div>
                                </div>
                                {/* /.mobile-content */}
                            </div>
                        </nav>
                    </div>

                    <MobileMenu />
                    {/* /mobilemenu */}
                </div>
                {/* /.inner-content */}
            </header>
            {/* /.theme-main-menu */}

        </Fragment>
    )
}

export default TopNavOne