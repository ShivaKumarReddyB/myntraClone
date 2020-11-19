import { createSelector } from "reselect";

const selectCart = (state) => state.cart; //get value from store of reducer cart

//!memoization

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumlatedQuantity, cartitem) => accumlatedQuantity + cartitem.quantity,
      0
    )
);
