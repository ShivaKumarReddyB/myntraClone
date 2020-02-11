import React from 'react'
import CollectionItem from '../collectionitem/collectionitem'
import './collection-preview.scss'

const  CollectionPreview = ({title ,items})=>(
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
        {
            items.filter((items,idx)=>idx<4).map(({id,...otheritemprops})=>(
            <CollectionItem key={id} {...otheritemprops}/ >
            ))
        }
        </div>
    </div>
)

export default CollectionPreview