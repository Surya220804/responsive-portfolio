import React from 'react'
import './Footer.css'
import user_icon from '../../assets/user_icon.svg'
import theme_pattern from "../../assets/theme_pattern.svg"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <h1>Surya</h1>
                <img src={theme_pattern} alt="" />
                <p> I'm a web developer from India, with 6 months of internship experience </p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter Your Email'/>
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">
                &copy; Surya . All rights reserved 
            </p>
            <div className="footer-bottom-right">
                <p>Privacy Policy</p>
                <p>Connect with Me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer