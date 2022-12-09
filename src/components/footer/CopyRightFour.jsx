import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'

const CopyRightFour = () => {
    return (
        <Fragment>
            <div className="d-lg-flex justify-content-between align-items-center">
                <ul
                    className="order-lg-1 pb-15 d-flex justify-content-center footer-nav style-none">
                    <li>
                        <Link to="/faq">Privacy &amp; Terms.</Link>
                    </li>
                    <li>
                        <Link to="/faq">FAQ</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                </ul>
                <p className="copyright text-center order-lg-0 pb-15">Copyright @{new Date().getFullYear()}{" "}
                    sinco inc.</p>
            </div>
        </Fragment>
    )
}

export default CopyRightFour