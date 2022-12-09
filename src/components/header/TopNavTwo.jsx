import React,{Fragment, useState} from 'react';
import { Link } from 'react-router-dom';
import SearchModal from '../../components/search-modal/SearchModal';
import MobileMenu from './MobileMenu';
import ThemeMainMenue from './ThemeMainMenu'

const TopNavTwo = () => {
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
         <header className={navbar ? "theme-main-menu sticky-menu theme-menu-two fixed": "theme-main-menu sticky-menu theme-menu-two"}>
                <div className="inner-content">
                    <div className="top-header">
                        <div className="container">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="call-button">Call us
                                    <a href="#">(+880) 321 782 110</a>
                                </div>
                                <div className="right-widget d-flex align-items-center">
                                    <div className="lang-dropdown me-3 me-sm-4">
                                        <button
                                            className="dropdown-toggle"
                                            type="button"
                                            id="langDropdown"
                                            data-bs-toggle="dropdown"
                                            data-bs-auto-close="true"
                                            aria-expanded="false">
                                            Eng
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="langDropdown">
                                            <li>
                                                <a className="dropdown-item" href="#">Fre</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">Ind</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">Rus</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <button
                                        className="menu-search-btn tran3s m0"
                                        type="button" onClick={openModal}><i className="bi bi-search"/></button>
                                </div>
                                {/* /.right-widget */}
                            </div>
                        </div>
                        {/* /.container */}
                    </div>
                    {/* /.top-header */}
                    <div className="container d-flex align-items-center justify-content-between">
                        <div className="logo order-lg-0">
                            <Link to="/" className="d-block"><img src="images/logo/logo_01.png" alt="" width={130}/></Link>
                        </div>
                        <a
                            href="contact-us.html"
                            className="get-in-touch-btn d-none d-lg-block order-lg-3">Get In Touch</a>
                        <nav className="navbar navbar-expand-lg order-lg-2">
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ThemeMainMenue />
                                {/* Mobile Content */}
                                <div className="mobile-content d-block d-lg-none">
                                    <div
                                        className="d-flex flex-column align-items-center justify-content-center mt-70">
                                        <a href="contact-us.html" className="get-in-touch-btn">Get In Touch</a>
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
    </Fragment>
  )
}

export default TopNavTwo