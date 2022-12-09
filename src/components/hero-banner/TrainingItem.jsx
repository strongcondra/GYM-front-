import React, {Fragment,useState} from 'react';
import {Link} from 'react-router-dom';
import pic0 from "../../assets/images/img/noneback.png";
import pic1 from "../../assets/images/img/Train1.png";
import pic2 from "../../assets/images/img/Train2.png";
import pic3 from "../../assets/images/img/Train3.png";

const PageContent = [
    {
        name: 'PERSONAL TRAINING -',
        routerPath: '/weight-details',
        className: 'train-main-active',
    }, {
        name: 'WEIGHT LIFTING -',
        routerPath: '/weight-details',
        className: 'train-deactive',
    }, {
        name: 'MARTIAL ARTS-',
        routerPath: '/martial-details',
        className: 'train-main-active',
    },     {
        name: 'BOXING-',
        routerPath: '/boxing-details',
        className: 'train-deactive',
    }, {
        name: 'MENTAL TRAINING-',
        routerPath: '#',
        className: 'train-main-active ',
    }, {
        name: 'BOOT CAMP-',
        routerPath: '#',
        className: 'train-deactive',
    },{
        name: 'PT ACADEMY-',
        routerPath: '#',
        className: 'train-main-active',
    }
];
const viewPic = [pic1,pic1,pic2,pic3,pic1,pic1,pic1]

const TrainingItem = () => {
    const [isShown, setIsShown] = useState(0);
    const [toUrl, setToUrl] = useState('#');
    const[activeUrl,setActiveUrl]=useState(-1);
    return (
        <Fragment>
                {(() => {
                    if (window.innerWidth > 1024) {
                        return (
                            <div className='home-image'  data-aos='fade-in' data-aos-delay='500'>
                                    {(() => {
                                        switch (isShown) {
                                            case 0:
                                                if(activeUrl==(-1)){
                                                    return (<img src={pic0} alt="" className=""  />);
                                                }else{
                                                    return (<img src={viewPic[activeUrl]} alt="" className=""  />);
                                                }
                                            case 1:
                                                return (<img src={pic1} alt="" className=""  />);
                                            case 2:
                                                return (<img src={pic1} alt="" className=""  />);
                                            case 3:
                                                return (<img src={pic2} alt="" className=""  />);
                                            case 4:
                                                return (<img src={pic3} alt="" className=""  />);
                                            case 5:
                                                return (<img src={pic1} alt="" className="" />);
                                            case 6:
                                                return (<img src={pic1} alt="" className="" />);
                                            case 7:
                                                return (<img src={pic1} alt="" className="" />);
                                        }
                                    })()}
                                    {(()=>{
                                        if(activeUrl==(-1) && isShown==0){
                                            return(<></>)
                                        }else{
                                            return(                                        
                                                <div className='train-banner-text d-flex'>
                                                    <div className='banner-line'>           
                                                    </div>
                                                
                                                    <div className=''>
                                                        Calorie-torching workouts that will<br/>
                                                        leave you breathless and with a<br/>
                                                        burning senstion in every muscle.
                                                    </div>
                                                    <div className='align-self-center ' style={{fontSize:'60px', paddingLeft:'70px'}}>
                                                    <Link to={toUrl} ><i className="bi bi-arrow-right"/></Link>
                                                    </div>  
                                                
                                                </div>
                                            )
                                        }
                                    })()}
                                      
                                <ul className="footer-nav-link style-none train-image-text">
                                    {PageContent.map((val, i) => (
                                        <li key={i}>
                                            <div onClick={() =>{ setToUrl(val.routerPath); setActiveUrl(i);}} ><h2 className={ i === activeUrl ?  'train-active' :`${val.className}` }  >{val.name}</h2></div>                            
                                        </li>
                                    ))}
                                </ul> 
                            </div>
                        )
                    } else {
                        return (
                            <>  
                            <ul className="footer-nav-link ">
                                {PageContent.map((val, i) => (
                                    <li key={i}>
                                    <Link to={val.routerPath}><h4 className={`${val.className}`}>{val.name}</h4></Link>
                                    </li>
                                ))}
                            </ul> 
                            </>
                        )
                    }
                })()}
        </Fragment>
    )
}

export default TrainingItem