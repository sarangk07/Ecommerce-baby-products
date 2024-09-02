import React from 'react';
import './ScrollingText.css';
import { Link } from 'react-router-dom';

function ScrollingText() {
  return (
    <div className="scrolling-text">
      <marquee><span><Link to='/Food' className='Link'><img src={require("./superbaby.png")} alt="" className='superbaby'/> Offers Click here! </Link></span></marquee>
    </div>
  );
}

export default ScrollingText;
