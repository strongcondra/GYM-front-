import React, {Fragment,useState} from 'react';
import {Link} from 'react-router-dom';
import pic1 from "../../assets/images/img/Train1.png";
import pic2 from "../../assets/images/img/Train2.png";
import pic3 from "../../assets/images/img/Train3.png";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
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
        className: 'train-active',
    },     {
        name: 'BOXING-',
        routerPath: '/boxing-details',
        className: 'train-deactive',
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
const TrainBannerTwo = () => {
    const [isShown, setIsShown] = useState(0);
    const HtmlTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} arrow/>
      ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
          backgroundColor: '#000',
          color: '#fff',
          maxWidth: 600,
          fontSize: theme.typography.pxToRem(12),
          fontSize:'20px'
        },
      }));
    return (
        <Fragment>
                {(() => {
                    if (window.innerWidth > 1024) {
                        if(isShown==0){
                            return(
                                <>
                                    <ul className="footer-nav-link ">
                                    {PageContent.map((val, i) => (
                                        <li key={i}>
                                            <Link to={val.routerPath}  onMouseOver={() => setIsShown(i+1)} onMouseOut={() => setIsShown(0)}><h2 className={`${val.className}`}>{val.name}</h2></Link>                           
                                        </li>
                                    ))}
                                    </ul>
                                </>
                            )   
                        }else{
                            return (
                                <div className='home-image'  data-aos='fade-in' data-aos-delay='500'>
                                            {(() => {
                                                switch (isShown) {
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
                                    <ul className="footer-nav-link style-none train-image-text">
                                        {PageContent.map((val, i) => (
                                            <li key={i}>
                                                            <HtmlTooltip placement="right-end"
                                                                    title={
                                                                    <React.Fragment>
                                                                        <Link to={val.routerPath}><div className='train-banner-text d-flex'>
                                                                            <div className='banner-line'>           
                                                                            </div>
                                                                            <div className=''>
                                                                                Calorie-torching workouts that will<br/>
                                                                                leave you breathless and with a<br/>
                                                                                burning senstion in every muscle.
                                                                            </div>
                                                                            <div className='align-self-center ' style={{fontSize:'60px', paddingLeft:'70px'}}>
                                                                            <i className="bi bi-arrow-right"/>
                                                                            </div>    
                                                                        </div></Link>
                                                                    </React.Fragment >
                                                                    }
                                                                >
                                                              <Link to={val.routerPath} onMouseOver={() => setIsShown(i+1)} onMouseOut={() => setIsShown(0)}><h2 className={`${val.className}`} >{val.name}</h2></Link>                            
    
                                                            </HtmlTooltip>
     
                                            </li>
                                        ))}
                                    </ul> 
                                </div>
                            )
                        }


                    } else {
                        return (
                            <div className='home-image'>
                                <img src={pic2} alt="" className=""  />
                                <ul className="footer-nav-link style-none train-image-text">
                                    {PageContent.map((val, i) => (
                                        <li key={i}>
                                            <Link to={val.routerPath}><h6 className={`${val.className}`}>{val.name}</h6></Link>                            
                                        </li>
                                    ))}
                                </ul> 
                            </div>
                        )
                    }
                })()}

        </Fragment>
    )
}
export default TrainBannerTwo