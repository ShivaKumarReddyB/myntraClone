export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItems) => cartItems.id === cartItemToAdd.id
  ); // will return  ture or false

  if (existingCartItem) {
    // if the item exits the quantity increase
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const decreaseQuantity = (cartItems, removeItem) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === removeItem.id
  );
  console.log(existingCartItem);
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== removeItem.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === removeItem.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
