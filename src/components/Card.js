import React, { useState } from 'react';
import { SET_CART } from '../actions';
import { connect } from 'react-redux';
/** @type {{[Key: string]: React.CSSProperties}} */
const style = {
  root: {
    position: 'relative'
  },
  card: {
    width: '330px',
    border: 0,
    borderTopLeftRadius: '10px',
    borderBottomRightRadius: '10px',
    backgroundColor: 'white',
    position: 'relative'
  },
  image: {
    borderTopLeftRadius: '10px',
    height: '150px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  requiredQuantity: {
    width: '60px',
    border: 'solid 1px black',
    opacity: .5,
    borderRadius: '4px',
    textAlign: 'center',
  },
  borderStyle1: {
    border: 0,
    borderBottomRightRadius: '10px',
    borderTopLeftRadius: '10px',
  },
  fadeElement: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    zIndex: 1,
    background: 'rgba(0, 0, 0, 0.3)'
  }
};
/**
 * @param {{item: { quantity?: number, name: string, price: number, image?: string }, SET_CART: any }} payload
*/
const Card = (payload) => {
  const { item, SET_CART } = payload;
  const [requiredQuatity, set_requiredQuatity] = useState(1);
  const SET_REQUIRED_QUANTITY = (value) => {
    set_requiredQuatity(value > item.quantity ? item.quantity : value > 0 ? value : '');
  };
  const addToCart = () => {
    SET_CART({ ...item, quantity: Number(requiredQuatity) });
    SET_REQUIRED_QUANTITY(1);
  };
  return (
    <div className="p-2 pb-4" style={style.root}>
      <div className="shadow-own" style={style.card}>
        {!item.quantity && <div style={style.fadeElement}></div>}
        <div className="col-12" style={{ ...style.image, backgroundImage: `url(${item.image})` }}></div>
        <div className="col-12 p-1 pt-2 d-flex justify-content-between" >
          <h5 className="p-0 m-0">{item.name}</h5>
          <h6 className="p-0 m-0 d-flex align-items-center">{`Price: ${item.price}`}</h6>
        </div>
        <h6 className="col-12 p-1 m-0 d-flex justify-content-center" >
          {`Only ${item.quantity} items left`}
        </h6>
        <div className="col-12 p-1 pb-2 d-flex justify-content-between" >
          <div>
            <button className="mx-2" style={style.borderStyle1} onClick={() => SET_REQUIRED_QUANTITY(requiredQuatity - 1)}>-</button>
            <input style={style.requiredQuantity} type="number" value={requiredQuatity} onChange={(e) => SET_REQUIRED_QUANTITY(e.target.value)} />
            <button className="mx-2" style={style.borderStyle1} onClick={() => SET_REQUIRED_QUANTITY(requiredQuatity + 1)}>+</button>
          </div>
          <button style={style.borderStyle1} onClick={addToCart}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};
export default connect(null, { SET_CART })(Card);