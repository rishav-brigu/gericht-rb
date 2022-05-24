import React from 'react';
import {FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay/>
    <Newsletter/>
    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>21 Rajani Baker Road, Kolkata - 700045</p>
        <p className='p__opensans'>+91 45454-07795</p>
        <p className='p__opensans'>+91 07795-45454</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt='footer_logo' />
        <p className='p__opensans' >"Good food comes to those who wait."</p>
        <img src={images.spoon} alt='footer_spoon' style={{marginTop: 15}}/>
        <div className='app__footer-links_icons'>
          <FiFacebook/>
          <FiInstagram/>
          <FiTwitter/>
        </div>  
      </div>
      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday - Friday</p>
        <p className='p__opensans'>10:00am - 2:00am</p>
        <p className='p__opensans'>Saturday - Sunday</p>
        <p className='p__opensans'>10:00am - 3:00am</p>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2021 Gericht. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
