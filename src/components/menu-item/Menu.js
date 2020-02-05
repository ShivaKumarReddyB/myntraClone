import React from 'react'
import './Menu.style.scss'

const Menuitem=({title, id , imageUrl,linkUrl })=>{
    return(
        <div className='menu-item'>
        <div className='content'>
    <div className='title'>{title}</div>
        <span className='subtitle'> {linkUrl} </span>
        </div>
        </div>
    )
}
export default Menuitem