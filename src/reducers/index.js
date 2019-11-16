import { combineReducers } from 'redux';

const ITEMS = (items = null, action) => {
  const payload = action.payload;
  if (action.type === 'SET_ITEMS') {
    return payload;
  } else if (action.type === 'SET_CART_ASYNC') {
    return items.map((item) => {
      if (item.uuid === payload.uuid) {
        const quantity = item.quantity - payload.quantity;
        return { ...item, quantity };
      }
      return item;
    }).filter(a => a);
  }
  return items;
};

const CART = (cart = [], action) => {
  const payload = action.payload;
  if (action.type === 'SET_CART_ASYNC') {
    const itemExists = cart.find(item => item.uuid === payload.uuid);
    if (itemExists) {
      return cart.map((item) => {
        if (item.uuid === payload.uuid) {
          const quantity = item.quantity + payload.quantity;
          if (quantity <= 0) {
            return undefined;
          }
          return { ...item, quantity };
        }
        return item;
      }).filter(a => a);
    } else {
      return [...cart, payload];
    }
  } else if (action.type === 'CHECKOUT') {
    return [];
  }
  return cart;
};

export default combineReducers({
  ITEMS,
  CART
});