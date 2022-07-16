import React from 'react'
import '../Styles/Footer.css';
import SynergyLogoWhite from '../Images/SynergyLogoWhite.svg';
import { FaFacebookF, FaInstagram } from "react-icons/fa"; 
import { MdLocationPin } from "react-icons/md";

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-logo-and-socials'>
            <div className='footer-logo'>
                <img src={SynergyLogoWhite} alt="synergy logo" />
                <p>SYNERGY CENTER FOR DANCE AND THE PERFORMING ARTS</p>
            </div>
            <div className='footer-socials'>
                <FaFacebookF className='footer-social-icon' />
                <FaInstagram className='footer-social-icon' />
                <MdLocationPin className='footer-social-icon' />
            </div>
        </div>
        <div className='footer-info-container'>
            <div className='footer-info'>
                <h1>CONTACT</h1>
                <p>16 River Road, Jericho, VT 05465</p>
                <p>mia@synergydance.org</p>
                <p>802-598-8523</p>
                <p>Contact Us!</p>
            </div>
            <div className='footer-info'>
                <h1>SERVICES</h1>
                <p>Dance classes for all ages</p>
                <p>Community-oriented programs</p>
                <p>Summer camps, intensives, and shows</p>
                <p>Brand new dance facilites</p>
            </div>
            <div className='footer-info'>
                <h1>LINKS</h1>
                <p>Register for classes (Parent Portal)</p>
                <p>Daily and Annual Schedules</p>
                <p>Teacher information</p>
                <p>About Us</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer