import React from "react";
import { connect } from "react-redux";

import CustomButtom from "../customButton/customButton.component";
import CartItem from "../cartItem/cartItem";

import "./cart-dropdown.scss";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cartDropdown">
      <div className="cartItems">
        {cartItems.map((cartItem) => (
          <CartItem item={cartItem} key={cartItem.id} />
        ))}
      </div>
      <CustomButtom>go to checkout</CustomButtom>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps, null)(CartDropdown);
