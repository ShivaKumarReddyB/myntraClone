import React from "react";
import "./collectionitem.style.scss";

const CollectionItem = ({ imageUrl, name, id, price }) => (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="collection-footer">
      <span className="name"> {name}</span>
      <span className="price">{price}</span>
    </div>
  </div>
);
export default CollectionItem;
