import React from "react";
import "./Menu.style.scss";
import {withRouter} from 'react-router-dom'

const Menuitem = ({ title, id, imageUrl, linkUrl, size, history ,match}) => (
  
    <div className={`${size} menu-item`}
     onClick={()=>history.push(`${match.url}${linkUrl}`)}>
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

export default  withRouter(Menuitem);
