import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import {BsArrowLeftShort,BsArrowRightShort,BsInstagram} from 'react-icons/bs';

import './Gallery.css';

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];

const Gallery = () => {

  const scrollRef = React.useRef(null);

  const slide = (shift) => {
    scrollRef.current.scrollLeft += shift;
  }

  return(
  <div className='app__gallery flex__center'>
    <div className='app__gallery-content'>
      <SubHeading title='Instagram' />
      <h1 className='headtext__cormorant'>Photo Gallery</h1>
      <p className='p__opensans' style={{color: '#AAA', marginTop: '2rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      <button type='button' className='custom__button'>Know More</button>
    </div>

    <div className='app__gallery-images'>
      <div className='app__gallery-images_container' ref={scrollRef}>
        {galleryImages.map((image, index) => (
        <div className='app__gallery-images_card flex__center' key={`gallery_image-${index + 1}`}>
          <img src={image} alt='gallery' />
          <BsInstagram className='app__gallery-images_icon' />
        </div>
        ))}
      </div>
      <div className='app__gallery-images_arrow' >
        <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => slide(-300)}/>
        <BsArrowRightShort className='gallery__arrow-icon' onClick={() => slide(+300)}/>
      </div>
    </div>

  </div>
)};

export default Gallery;
