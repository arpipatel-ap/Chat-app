import React from 'react';
import "./RightSidebar.css";
import assets from '../../assets/assets';

const RightSidebar = () => {
  return (
    <div className='rs'>
      <div className="rs-profile">
        <img src={assets.profile_img} alt="" />
        <h3>Richard Sanford</h3>
        <p>Hi, there I am Richard Sanford using chat app
        </p>
      </div>
    </div>
  )
}

export default RightSidebar;