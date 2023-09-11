import React from 'react';
import { BiLogoWhatsapp } from "react-icons/bi";
import { BiMailSend } from "react-icons/bi";
import { BiLogoFacebook } from 'react-icons/bi';

import { BiLogoTwitter } from 'react-icons/bi';
import { BiLogoInstagram } from 'react-icons/bi';
import './footer.css'
const Footer = () => {
  return (
    <div>
         <div className="border-line">
      <div className="line"></div>
      <div className="border-heading">News Letters </div>
      <div className="line"></div>
      </div>
      <div className="main-news">
        <div className="mail-div">
      <div className="news">
        <div className="mail-icon">
        <BiMailSend size='40px' color='goldenrod'/>
        
        </div>

        <input type="email" required='required' />
        <span>E-mail</span>
        </div>
      </div>
      </div>
   <div className="main-footer">
      <div className="footer">
        <div className="one">
            <div className="f-head">
Company
            </div>
            <ul>
                <li>About us</li>
                <li>Our Services</li>
                <li>Private Policy</li>
                <li>Afficiant Program</li>
            </ul>
        </div>
        <div className="one">
        <div className="f-head">
FAQ
        </div>
        <ul>
                <li>Shopping</li>
                <li>Returns</li>
                <li>Order Status</li>
                <li>Payments Options</li>
            </ul>
        </div>
        <div className="one">
        <div className="f-head">Online Shope</div>
        <ul>
                <li>Cheese</li>
                <li>Pure Ghee</li>
                <li> Yougert</li>
                <li>Milk</li>
            </ul>
        </div>
        <div className="ones  ">
        <div className="f-head">Follow us</div>
        <ul className='s-icons'>
        <li><BiLogoFacebook size='40px' /></li>
        <li><BiLogoTwitter size='40px'/></li>
        <li><BiLogoInstagram size='40px'/></li>
        <li><BiLogoWhatsapp size='40px'/></li>
            </ul>
        </div>
      </div>
      <p>Copyright 2023 GMP all rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
