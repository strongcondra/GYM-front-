import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

const PriceContent = [
    {
        packname:'Business',
        details: '',
        price: '69',
        member:'Yearly membership',
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
        price: '97',
        member:'Yearly membership',
        prStart: 'Starting at $97/mo with',
        feature:[
            'Unlimited campaigns',
            'Push Notifications',
            'Team fundraising',
        ],
        active: 'active',
    },
]

const YearlyPrice = () => {
    return (
        <Fragment>
            <div className="row gx-xxl-5">
                {PriceContent.map((val, i)=>(
                    <div key={i} className="col-md-6">
                    <div className={`pr-table-wrapper ${val.active} ${val.padd}`}>
                        <div className="pack-name">{val.packname}</div>
                        <div className="pack-details">For individuals and teams. Get <span>2 year <br/> premium market access</span>
                        </div>
                        <div className="top-banner d-sm-flex justify-content-center align-items-center">
                            <div className="price">
                                <sup>$</sup>{val.price}</div>
                            <div>
                                <span>{val.member}</span>
                                <em>{val.prStart}</em>
                            </div>
                        </div>
                        {/* /.top-banner */}
                        <ul className="pr-feature style-none">
                            {val.feature.map((val, i)=>(
                                <li key={i}>{val}</li>
                            ))}
                        </ul>
                        <Link to="/pricing" className="trial-button">Try us without risk. <span>Choose plan <i className="fas fa-chevron-right"/></span>
                        </Link>
                    </div>
                    {/* /.pr-table-wrapper */}
                </div>
                ))}
            </div>
        </Fragment>
    )
}

export default YearlyPrice