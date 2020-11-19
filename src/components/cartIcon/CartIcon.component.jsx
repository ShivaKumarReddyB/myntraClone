import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cartSelector";

import { ReactComponent as ShoppingIcon } from "../../assests/shopping-bag.svg";
import "./CartIcon.style.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};
// const mapDispatchToProps = (dispatch) => ({
//   toggleCartHidden: () => dispatch(toggleCartHidden()),
// });

const mapDispatchToProps = {
  toggleCartHidden: toggleCartHidden,
};

// const mapStateToProps = (state) => ({
//   itemCount: state.cart.cartItems.reduce(
//     (accumlatedQuantity, cartitem) => accumlatedQuantity + cartitem.quantity,
//     0
//   ),
// }); // * this method will run at every state change to overcome we are using memoiztaion which will store the values

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
