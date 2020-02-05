import React from 'react'
import './Menu.style.scss'

const Menuitem=({title, id , imageUrl,linkUrl,size })=>{
    return(
        <div 
        style={{backgroundImage:`url(${imageUrl})  `}}
        className={`menu-item ${size}` }>
        <div className='content'>
    <div className='title'>{title}</div>
        <span className='subtitle'> {linkUrl} </span>
        </div>
        </div>
    )
}
export default Menuitem