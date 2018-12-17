import {
  SET_SERVICES,
  SET_MODAL_CONTENT,
  INITIALIZE_MODAL,
} from '../_constants';

const initialState = {
  checkoutInfo: {},
  services: {},
  modalContent: {},
};

export default function setBrowserInfo(state = initialState, action) {
  switch (action.type) {
    case SET_SERVICES:
      return {
        ...state,
        checkoutInfo: action.payload,
        services: action.payload.servicesByCategory,
      };
    case SET_MODAL_CONTENT:
      return {
        ...state,
        modalContent: action.payload
      }
    case INITIALIZE_MODAL:
      console.log(action);
      return {
        ...state,
        modalContent: {}
      }
    default:
      return state;
  }
}
