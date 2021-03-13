import React from "react";
import "./CheckoutItems.scss";
const CheckoutItem = (props) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={props.cartItem.imageUrl} alt="item" />
      </div>
      <span className="name">{props.cartItem.name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => props.handleDecreaseQuantity(props.cartItem)}
        >
          &#10094;
        </div>
        <span className="value">{props.cartItem.quantity}</span>
        <div
          className="arrow"
          onClick={() => props.handleAddItem(props.cartItem)}
        >
          &#10095;
        </div>
      </span>
      <span className="price">{props.cartItem.price}</span>
      <div
        className="remove-button"
        onClick={() => props.handleRemoveItem(props.cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
