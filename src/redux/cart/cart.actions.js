import { cartActionTypes } from "./cart.types";

export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: cartActionTypes.ADD_ITEMS,
  payload: item,
});

export const RemoveItem = (item) => ({
  type: cartActionTypes.REMOVE_ITEM_FROM_CART,
  payload: item,
});

export const DecreaseItem = (item) => ({
  type: cartActionTypes.DECREASE_QUANTITY,
  payload: item,
});
