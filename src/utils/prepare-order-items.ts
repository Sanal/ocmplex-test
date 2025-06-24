export function prepareOrderItems(cartItems: CartItem[]) {
  return cartItems.map(({ id, quantity }) => ({ id, quantity }));
}
