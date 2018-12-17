import { all, fork } from 'redux-saga/effects';

import watchGetDataSaga from './watchers/getData';
import watchGetModalSaga from './watchers/getModal';

export default function* root() {
  yield all([
    fork(watchGetDataSaga),
    fork(watchGetModalSaga),
  ]);
}
