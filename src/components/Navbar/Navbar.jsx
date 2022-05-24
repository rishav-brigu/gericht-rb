import React from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';

import images from '../../constants/images';

import './Navbar.css';

const Navbar = () => {

  const [toggle, setToggle] = React.useState(false);

  return(
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.gericht} alt='company-logo' />
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href='#home'>Home</a></li>
        <li className='p__opensans'><a href='#about'>About</a></li>
        <li className='p__opensans'><a href='#menu'>Menu</a></li>
        <li className='p__opensans'><a href='#awards'>Awards</a></li>
        <li className='p__opensans'><a href='#contact'>Contact</a></li>
      </ul>
      <div className='app__navbar-login'>
        <a className='p__opensans' href='#home'>Log In/Register</a>
        <div/>
        <a className='p__opensans' href='/'>Book A Table</a>
      </div>

      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu  className='app__navbar-smallscreen_menu' color='#fff' fontSize={26} onClick={() => setToggle(true)}/>

        {toggle && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom '>
            <MdOutlineRestaurantMenu className='overlay__close' fontSize={27} onClick={() => setToggle(false)} />
            <ul className='app__navbar-smallscreen_links'>
              <li className='p__opensans'><a href='#home'>Home</a></li>
              <li className='p__opensans'><a href='#about'>About</a></li>
              <li className='p__opensans'><a href='#menu'>Menu</a></li>
              <li className='p__opensans'><a href='#awards'>Awards</a></li>
              <li className='p__opensans'><a href='#contact'>Contact</a></li>
            </ul>
            <div className='app__navbar-smallscreen_login'>
              <a className='p__opensans' href='#home'>Log In/Register</a>
              <div/>
              <a className='p__opensans' href='/'>Book A Table</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
};

export default Navbar;
