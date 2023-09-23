import React from 'react';
import './ScrollingText.css';
import { Link } from 'react-router-dom';

function ScrollingText() {
  return (
    <div className="scrolling-text">
      <marquee><h1><Link to='/Food' className='Link'>Offers Click here!</Link><img src={require("./superbaby.png")} alt="" className='superbaby'/></h1></marquee>
    </div>
  );
}

export default ScrollingText;
