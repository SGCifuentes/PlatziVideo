import React from 'react';
import '../assets/styles/components/Header.scss';

import logo from '../assets/static/logo.png';
import userIcon from '../assets/static/user-icon.png';

const Header = () => {
  return (
    <header className='header'>
      <a href='/'>
        <img className='header__img' src={logo} alt='logo' />
      </a>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          <img src={userIcon} alt='user' />
          <p>Profile</p>
        </div>
        <ul>
          <li>
            <a href='main.html'>Account</a>
          </li>
          <li>
            <a href='../login/login.html'>Sign off</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
