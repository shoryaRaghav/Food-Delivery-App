import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className="footer" id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt=""/>
                <p>Lorem ipsum is simply dummy text of the printer and typesetting industry . </p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt=""/>
                    <img src={assets.twitter_icon} alt=""/>
                    <img src={assets.linkedin_icon} alt=""/>
                </div>
            </div>

            <div className="footer-content-center"> 
                <h2>Company</h2>
                <ul>
                    <li>About Us</li>
                    <li>Blog</li>
                    <li>Careers</li>
                    <li>Contact Us</li>
                </ul>
            </div>

            <div className="footer-content-right">
                <h2>Get in touch</h2>
                <ul>
                    <li>526789387</li>
                    <li>support@fooddel.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className="footer-copyright">© 2024 Tomato. All rights reserved.</p>
    </div>
  )
}

export default Footer