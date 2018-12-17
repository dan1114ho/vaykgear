import {
  GET_DATA_SAGA,
  SET_SERVICES,
  GET_MODAL_SAGA,
  SET_MODAL_CONTENT,
  INITIALIZE_MODAL,
} from '../_constants';

export function setServices(data) {
  return {
    type: SET_SERVICES,
    payload: data,
  };
}

export function setModalContent(data) {
  return {
    type: SET_MODAL_CONTENT,
    payload: data,
  }
}

//Sagas
export function getDataSaga() {
  return {
    type: GET_DATA_SAGA,
  };
}

export function getModalSaga(serviceId) {
  return {
    type: GET_MODAL_SAGA,
    payload: serviceId,
  }
}

export function initializeModal() {
  return {
    type: INITIALIZE_MODAL,
  }
}