import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import martialpic from "../../assets/images/img/Train1.png";

const PageContent = [
    {
        name: 'PERSONAL TRAINING -',
        routerPath: '/personaltraining',
        className: 'train-deactive',
    }, {
        name: 'WEIGHT LIFTING -',
        routerPath: '/personaltraining',
        className: 'train-deactive',
    }, {
        name: 'MARTIAL ARTS-',
        routerPath: '/martialarts',
        className: 'train-deactive',
    },     {
        name: 'BOXING-',
        routerPath: '/boxing',
        className: 'train-active',
    }, {
        name: 'MENTAL TRAINING-',
        routerPath: '#',
        className: 'train-deactive',
    }, {
        name: 'BOOT CAMP-',
        routerPath: '#',
        className: 'train-deactive',
    },{
        name: 'PT ACADEMY-',
        routerPath: '#',
        className: 'train-deactive',
    }
];
const TrainBannerThree = () => {
    return (
        <Fragment>

{(() => {
                    if (window.innerWidth > 1024) {
                        return (
                            <div className='home-image' >
                                <img src={martialpic} alt="" className=""  />
                                <ul className="footer-nav-link style-none train-image-text">
                                    {PageContent.map((val, i) => (
                                        <li key={i}>
                                            <Link to={val.routerPath}><h2 className={`${val.className}`}>{val.name}</h2></Link>                            
                                        </li>
                                    ))}
                                </ul> 
                                <div className='train-banner-text d-flex'>
                                    <div className='banner-line'>           
                                    </div>
                                    <div className=''>
                                        Calorie-torching workouts that will<br/>
                                        leave you breathless and with a<br/>
                                        burning senstion in every muscle.
                                    </div>
                                    <div className='align-self-center ' style={{fontSize:'60px', paddingLeft:'70px'}}>
                                        <Link to="/boxing-details" className="read-btn tran3s"><i className="bi bi-arrow-right"/></Link>
                                    </div>    
                                </div>
                            </div>
                        )

                    } else {
                        return (
                            <div className='home-image'>
                            <img src={martialpic} alt="" className=""  />
                            <ul className="footer-nav-link style-none train-image-text">
                                {PageContent.map((val, i) => (
                                    <li key={i}>
                                        <Link to={val.routerPath}><h6 className={`${val.className}`}>{val.name}</h6></Link>                            
                                    </li>
                                ))}
                            </ul> 
                            <div className='mobile-train-banner-text d-flex'>
                                <div className='mobile-banner-line'>           
                                </div>
                                <div style={{fontSize:'10px'}}>
                                    Calorie-torching workouts that <br/>
                                    will leave you breathless and with a
                                    burning senstion in every muscle.
                                </div>
                                <div className='align-self-center ' style={{fontSize:'30px', paddingLeft:'30px'}}>
                                    <Link to="/boxing-details" className="read-btn tran3s"><i className="bi bi-arrow-right"/></Link>
                                </div>    
                            </div>
                        </div>
                        )
                    }
                })()}




        </Fragment>
    )
}
export default TrainBannerThree