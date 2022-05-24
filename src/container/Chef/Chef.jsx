import React from 'react';

import {images} from '../../constants';
import {SubHeading} from '../../components';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper-img_reverse'>
      <img src={images.chef} alt='chef_img' />
    </div>

    <div className='app__chef app__wrapper_info'>
      <SubHeading title="Chef's Word" />
      <h1 className='headtext__cormorant'>What we believe in</h1>
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt='quote'/>
          <p className='p__opensans'>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt praesent semper feugiat nibh. Nibh sit amet commodo nulla facilisi nullam vehicula.`}</p>
        </div>
      </div>

      <div className='app__chef-sign'>
        <p>Carl Casper</p>
        <p className='p__opensans'>Chef and Founder</p>
        <img src={images.sign} alt='signature' />
      </div>
    </div>

    
  </div>
);

export default Chef;
