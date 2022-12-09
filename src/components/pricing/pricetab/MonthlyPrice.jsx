import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

const PriceContent = [
    {
        packname:'Business',
        details: '',
        price: '75',
        member:'CLASS ',
        prStart: 'Starting at $69/mo with',
        feature:[
            'Unlimited campaigns',
            'Push Notifications',
            'Team fundraising',
        ],
        active: 'active',
        padd: 'md-mb-30',
    },
    {
        packname:'Agency',
        details: '',
        price: '99',
        member:'BOOTCAMP',
        prStart: 'Starting at $97/mo with',
        feature:[
            'Unlimited campaigns',
            'Push Notifications',
            'Team fundraising',
        ],
        active: 'active',
    },
]

const   MonthlyPrice = () => {
    return (
        <Fragment>

{(() => {
                if (window.innerWidth > 1024) {
                    return (
                        <div className="row gx-xxl-5">
                        {PriceContent.map((val, i)=>(
                            <div key={i} className="col-md-6">
                            <div className={`pr-table-wrapper ${val.active} ${val.padd} `}>
                                <div className="pack-name"></div>
                                <div className="pack-details">
                                </div>
                                <div className="top-banner d-sm-flex justify-content-center align-items-center">
                                    
                                    <div >
                                        <p style={{color:'#000'}}>BOOK</p>
                                    </div>
                                </div>
                                {/* /.top-banner */}
                                        <h2  style={{color:'#000'}}>{val.member}</h2>
                                        <div style={{fontSize:'40px'}} className='mt-100'>
                                            <Link to="/boxing-details" className="read-btn tran3s"><i className="bi bi-arrow-right"/></Link>
        
                                        </div>
                            </div>
                            {/* /.pr-table-wrapper */}
                        </div>
                        ))}
                    </div>
                    )

                } else {
                    return (
                        <div className="row gx-xxl-5  d-flex justify-content-center">
                        {PriceContent.map((val, i)=>(
                            <div key={i} className="col-md-6 col-xs-6 col-xxs-6 col-sm-6" style={{maxWidth:'45%'}}>
                            <div className={`pr-table-wrapper ${val.active} ${val.padd} `}>
                                <div className="pack-name"></div>
                                <div className="pack-details">
                                </div>
                                <div className="top-banner d-sm-flex justify-content-center align-items-center">
                                    
                                    <div >
                                        <p style={{color:'#000'}}>BOOK</p>
                                    </div>
                                </div>
                                {/* /.top-banner */}
                                        <h6  style={{color:'#000'}}>{val.member}</h6>
                                        <div style={{fontSize:'40px'}} className='mt-100'>
                                            <Link to="/boxing-details" className="read-btn tran3s"><i className="bi bi-arrow-right"/></Link>
                                        </div>
                            </div>
                            {/* /.pr-table-wrapper */}
                        </div>
                        ))}
                    </div>
                    )
                }
            })()

            }



        </Fragment>
    )
}

export default MonthlyPrice