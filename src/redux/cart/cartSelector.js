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
      (accumlatedQuantity, cartItem) => accumlatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumlatedQuantity, cartItem) =>
      accumlatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);
