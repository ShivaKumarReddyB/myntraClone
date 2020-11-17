import React from "react";
import "./collectionitem.style.scss";
import { connect } from "react-redux";

import CustomButton from "../customButton/customButton.component";
import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ items, addItem }) => {
  const { name, price, imageUrl } = items;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name"> {name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(items)} inverted>
        Add to Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToprops = {
  addItem: addItem,
};

export default connect(null, mapDispatchToprops)(CollectionItem);
