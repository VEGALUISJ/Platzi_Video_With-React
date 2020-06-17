import React from 'react';
import '../assets/styles/components/Header.scss';

const Header = () => (
  <header className='header'>
    <a href='./main.html'>
      <img
        className='header__img'
        src='https://raw.githubusercontent.com/platzi/PlatziVideo/feature/react/src/assets/static/logo-platzi-video-BW2.png'
        alt='headerimg'
      />
    </a>
    <div className='header___menu'>
      <div className='header___menu--profile'>
        <img src='https://img.icons8.com/plasticine/100/000000/user-male-circle.png' alt='logout-suario' />
        <p>Profile</p>
      </div>
      <ul>
        <li><a href='./components/signup.html'>Sign up</a></li>
        <li><a href='./components/login.html'>Log in</a></li>
      </ul>
    </div>
  </header>
);

export default Header;
