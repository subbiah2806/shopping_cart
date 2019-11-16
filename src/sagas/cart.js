import { delay, select, put, takeEvery, fork } from 'redux-saga/effects';

function* incrementAsync(actions) {
  actions.type = `${actions.type}_ASYNC`;
  yield delay(500);
  const state = yield select();
  const currentItem = state.ITEMS.find(item => item.uuid === actions.payload.uuid);
  if (!(currentItem.quantity === 0 && actions.payload.quantity > 0)) {
    yield put(actions);
  }
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
function* watchIncrementAsync() {
  yield takeEvery('SET_CART', incrementAsync);
}

export default [fork(watchIncrementAsync)];