import React from 'react';
import { BiLogoWhatsapp, BiPhone } from 'react-icons/bi';
import { BiLogoGmail } from 'react-icons/bi';
import { Fade } from 'react-reveal'
import { BiSolidLocationPlus } from 'react-icons/bi';
import { BiLogoFacebook } from 'react-icons/bi';

import { BiLogoTwitter } from 'react-icons/bi';
import { BiLogoInstagram } from 'react-icons/bi';


const Contect = () => {
  return (
    <div>
         <div className="border-line">
      <div className="line"></div>
      <div className="border-heading">CONTECT US </div>
      <div className="line"></div>
     
      </div>
      <div className="main-c">
 <div className="main-contect">
   <div className="contectus">
      <div className="title-contect">
           <h3> Get In Touch</h3>
      </div>
      <div className="contect-box">
      <div className="main-form">
            <div className="contect form">
                  <h3>Send a Message</h3>
                  <form>
                        <div className="form-box">
                              <div className="row50">
                                    <div className="inputbox">
                                          <span>First Name</span>
                                          <input type="text" placeholder='First Name' />
                                    </div>
                                    <div className="inputbox">
                                          <span>Last Name</span>
                                          <input type="text" placeholder='Last Name' />
                                    </div>
                              </div>
                              <div className="row50">
                                    <div className="inputbox">
                                          <span>E-Mail</span>
                                          <input type="text" placeholder='E-Mail' />
                                    </div>
                                    <div className="inputbox">
                                          <span>Number</span>
                                          <input type="text" placeholder='Number' />
                                    </div>
                              </div>
                              <div className="row100">
                                    <div className="inputbox">
                                          <span>Message</span>
                                          <textarea placeholder='Write Your Message Here...'></textarea>
                                    </div>
                                    <div className="row100">
                                    <div className="inputbox">
                           <input type="submit" value="Send" />
                       
                                    </div>
                              </div>
                        </div>
                        </div>
                  </form>
            </div>
            </div>
            <div className="information-main">
            <div className="contect info">
                  <h3>Contect Info</h3>
                  <div className="infobox">

                  <div>
                        <span>      <BiSolidLocationPlus size='40px' color='goldenrod'/></span>
                        <p> Near Flying Paper Mill, Khanpur Canal, Lahore Road, Sheikhupura</p>
                  </div>
                  <div>
                        <span>      <BiLogoGmail size='40px' color='goldenrod'/></span>
                        <p>contact@gmpfoodz.com</p>
                  </div>
                  <div>
                        <span>  <BiPhone size='40px' color='goldenrod'/></span>
                        <p>+92-311-110-0537</p>
                  </div>
                  </div>
                  <ul className='s-icons'>
        <li><BiLogoFacebook size='40px' /></li>
        <li><BiLogoTwitter size='40px'/></li>
        <li><BiLogoInstagram size='40px'/></li>
        <li><BiLogoWhatsapp size='40px'/></li>
            </ul>
            </div>
            <div className="contect map" ><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3394.3917533261883!2d74.01112017617396!3d31.705192037986617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3921f53ca9c30bc9%3A0xcd6f1eff21af5da2!2sLahore%20Rd%2C%20Sheikhupura%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1693382162245!5m2!1sen!2s"
             width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
             </div>
             
      </div>
   </div>
      {/* <Fade top>
      <div className="logos">
      <BiLogoWhatsapp size='60px' color='goldenrod'/>
      <BiLogoGmail size='60px' color='goldenrod'/>
      <BiPhone size='60px' color='goldenrod'/>
      </div>
      </Fade> */}
      
 
</div>
</div>
    </div>
  );
}

export default Contect;

