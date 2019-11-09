import { data } from '../data';

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16 | 0;
        // eslint-disable-next-line no-mixed-operators
        let v = c === 'x' ? r : (r & 0x3 | 0x8);
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

export const SET_CART = (payload) => (dispatch, getState) => {
    const currentItem = getState().ITEMS.find(item => item.uuid === payload.uuid);
    if (!(currentItem.quantity === 0 && payload.quantity > 0)) {
        dispatch({
            type: 'SET_CART',
            payload
        });
    }
};

export const CHECKOUT = () => {
    return {
        type: 'CHECKOUT'
    };
};