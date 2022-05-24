import React from 'react';

import { images } from '../../constants';

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__heading' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt='G image' />
    </div>

    <div className='app__aboutus-content flex__center section__padding'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt='about__spoon' className='spoon__img' />
        <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh praesent tristique magna sit.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
      <div className='app__aboutus-content__knife flex__center' >
        <img src={images.knife} alt='knife__image' />
      </div>
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>History</h1>
        <img src={images.spoon} alt='about__spoon' className='spoon__img' />
        <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh praesent tristique magna sit.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>
    
  </div>
);

export default AboutUs;
