import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div onClick={() => window.scroll(0,0)}className='header'>Your movies.<span className='spanapp'>app</span></div>
  )
}

export default Header;