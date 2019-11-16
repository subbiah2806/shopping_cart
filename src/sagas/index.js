import { all } from 'redux-saga/effects';
import cart from './cart';

export default function* () {
  yield all([...cart]);
}