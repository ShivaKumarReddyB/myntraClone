import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./CheckoutPage.scss";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cartSelector";
import CheckoutItem from "../../components/checkoutItem/CheckoutItem";
import {
  RemoveItem,
  DecreaseItem,
  addItem,
} from "../../redux/cart/cart.actions";

const CheckoutPage = (props) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {props.cartItems.map((item) => (
        <CheckoutItem
             key={item.id}
          cartItem={item}
          handleRemoveItem={props.RemoveItem}
          handleDecreaseQuantity={props.DecreaseItem}
          handleAddItem={props.addItem}
        />
      ))}
      <div className="total">
        <span>Total:₹{props.total}</span>
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

const mapDispatchToProps = {
  RemoveItem: RemoveItem,
  DecreaseItem: DecreaseItem,
  addItem: addItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
