import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Home from './views/Home';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  applyMiddleware(...[sagaMiddleware, thunk])
);
sagaMiddleware.run(mySaga);

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>
  , document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();