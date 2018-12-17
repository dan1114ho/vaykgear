import { put, takeLatest, call } from 'redux-saga/effects';

import { GET_MODAL_SAGA } from '../../_constants';
import { setModalContent } from '../../_actions';
import { getModalContent } from '../../lib/api';

function* workerGetModalSaga(action) {
  const data = yield call(getModalContent, action.payload);
  yield put(setModalContent(data));
}

export default function* watchGetModalSaga() {
  yield takeLatest(GET_MODAL_SAGA, workerGetModalSaga);
}
