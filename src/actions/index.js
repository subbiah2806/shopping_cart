import { data } from '../data';

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0;
    // eslint-disable-next-line no-mixed-operators
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export const FETCH_ITEMS = () => (dispatch, getState) => {
  if (!getState().ITEMS) {
    dispatch({
      type: 'SET_ITEMS',
      payload: data.map((item) => {
        item.uuid = uuidv4();
        return item;
      })
    });
  }
};

export const SET_CART = (payload) => (dispatch) => {
  dispatch({
    type: 'SET_CART',
    payload
  });
};

export const CHECKOUT = () => {
  return {
    type: 'CHECKOUT'
  };
};