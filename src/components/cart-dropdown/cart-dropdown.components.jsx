import React from "react";
import CustomButtom from "../customButton/customButton.component";

import "./cart-dropdown.scss";

const CartDropdown = () => {
  return (
    <div className="cartDropdown">
      <div className="cartItems" />
      <CustomButtom>go to checkout</CustomButtom>
    </div>
  );
};

export default CartDropdown;
