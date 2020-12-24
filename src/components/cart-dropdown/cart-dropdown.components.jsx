import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CustomButtom from "../customButton/customButton.component";
import CartItem from "../cartItem/cartItem";

import "./cart-dropdown.scss";

const CartDropdown = ({ cartItems, history }) => {
  return (
    <div className="cartDropdown">
      <div className="cartItems">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem item={cartItem} key={cartItem.id} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty </span>
        )}
      </div>
      <CustomButtom onClick={() => history.push("/checkout")}>
        go to checkout
      </CustomButtom>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default withRouter(connect(mapStateToProps, null)(CartDropdown));
