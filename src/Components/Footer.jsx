import React from 'react'
import '../Styles/Footer.css';
import SynergyLogoWhite from '../Images/SynergyLogoWhite.svg';
import { FaFacebookF, FaInstagram } from "react-icons/fa"; 
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-logo-and-socials'>
            <div className='footer-logo'>
                <img src={SynergyLogoWhite} alt="synergy logo" />
                <p>SYNERGY CENTER FOR DANCE AND THE PERFORMING ARTS</p>
            </div>
            <div className='footer-socials'>
                <a href="https://www.facebook.com/synergydancevt/" target="_blank" rel="noreferrer">
                    <FaFacebookF className='footer-social-icon' />
                </a>
                <a href="https://www.instagram.com/synergy.cdpa/?hl=en" target="_blank" rel="noreferrer">
                    <FaInstagram className='footer-social-icon' />
                </a>
                <a href="https://goo.gl/maps/s5Y7zxw6RemQE5pdA" target="_blank" rel="noreferrer">
                    <MdLocationPin className='footer-social-icon' />
                </a>
            </div>
            <Link to="/contact" className='mobile-contact-button'>Contact Us</Link>
        </div>
        <div className='footer-info' id="footercontact">
            <h1>CONTACT</h1>
            <p>16 River Road, Jericho, VT 05465</p>
            <p>mia@synergydance.org</p>
            <p>802-598-8523</p>
            <Link to="/contact">Contact Us!</Link>
        </div>
        <div className='footer-info' id="footerservices">
            <h1>SERVICES</h1>
            <Link to="/classes">Dance classes for all ages</Link>
            <Link to="/programs">Community-oriented programs</Link>
            <Link to="/events">Summer camps, intensives, shows</Link>
            <Link to="/about#facilities">Brand new dance facilities</Link>
        </div>
        <div className='footer-info' id="footerlinks">
            <h1>LINKS</h1>
            <a href="https://app.jackrabbitclass.com/jr3.0/ParentPortal/Login?orgId=538745" target="_blank" rel="noreferrer">Parent Portal</a>
            <Link to="/classes#schedules">Daily and Annual Schedules</Link>
            <Link to="/about#teachers">Teacher information</Link>
            <Link to="/about">About Us</Link>
        </div>
    </footer>
  )
}

export default Footer