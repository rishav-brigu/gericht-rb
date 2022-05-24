import React from 'react';

import './Header.css';
import {images} from '../../constants';
import {SubHeading} from '../../components';

const Header = () => (
  <div className='app__wrapper app__header section__padding ' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='Chase the new flavour'/>
      <h1 className='app__header-h1'>The art of fine dining</h1>
      <p className='p__opensans' style={{margin: '2rem 0rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet sit amet cursus sit amet.</p>
      <button type='custom' className='custom__button'>Menu</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='welcome' className='header img' />
    </div>
    
  </div>
);

export default Header;
