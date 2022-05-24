import React from 'react';

import {images} from '../../constants';
import {SubHeading} from '../../components';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title='Contact'/>
      <h1 className='headtext__cormorant' style={{marginBottom: '3rem'}}>Find Us</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>21 Rajani Baker Road, Kolkata - 700045</p>
        <p className='p__cormorant' style={{margin: '1.5rem 0', color: '#DDCA87'}}>Opening Hours</p>
        <p className='p__opensans' style={{letterSpacing: '0.2rem', marginBottom: '1rem'}}>Mon - Fri: 10:00am - 2:00am</p>
        <p className='p__opensans' style={{letterSpacing: '0.2rem', marginBottom: '1rem'}}>Sat - Sun: 10:00am - 3:00am</p>
      </div>
      <button className='custom__button'>Visit Us</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.findus} alt='find_us'/>
    </div>
  </div>
);

export default FindUs;
