import React from "react";
import "./Menu.style.scss";

const Menuitem = ({ title, id, imageUrl, linkUrl, size }) => (
  
    <div className={`${size} menu-item`}>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );

export default Menuitem;
