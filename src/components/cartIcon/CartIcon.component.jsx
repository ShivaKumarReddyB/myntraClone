import React from "react";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assests/shopping-bag.svg";
import "./CartIcon.style.scss";

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};
// const mapDispatchToProps = (dispatch) => ({
//   toggleCartHidden: () => dispatch(toggleCartHidden()),
// });

const mapDispatchToProps = {
  toggleCartHidden: toggleCartHidden,
};
export default connect(null, mapDispatchToProps)(CartIcon);
