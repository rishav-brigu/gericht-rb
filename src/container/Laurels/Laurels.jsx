import React from 'react';
import {images, data} from '../../constants';
import {SubHeading} from '../../components';

import './Laurels.css';

const AwardCard = (props) => (
  <div className='app__laurels_awards-card'>
    <img src={props.award.imgUrl} alt='award_img' />
    <div className='app__laurels_awards-card_content'>
      <p className='p__cormorant' style={{color:'#DCCA87'}}>{props.award.title}</p>
      <p className='p__cormorant'>{props.award.subtitle}</p>
    </div>
  </div>
);


const Laurels = () => (
  <div className='app__bg app__wrapper section__padding' id='awards'>
    <div className='app__wrapper_info'>
      <SubHeading title='Awards and Recognition' />
      <h1 className='headtext__cormorant'>Our Laurals</h1>
      <div className='app__laurels_awards'>
        {data.awards.map((award) => <AwardCard award={award} id={award.title}/>)}
      </div>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.laurels} alt='laurel_img'/>
    </div>
  </div>
);

export default Laurels;
