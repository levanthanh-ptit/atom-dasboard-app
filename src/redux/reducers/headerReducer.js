import {CHANGE_HEADER_STATUS} from '../actionTypes'
const initialState = {
  Header: {
    Hidden: 'thin'
  },
}
export default (state = initialState, { type, payload }) => {
  switch (type) {

    case CHANGE_HEADER_STATUS: {
      let { status } = payload;
      return {
        ...state,
        Header: {
          Hidden: status
        }
      }
    }
    default:
      return {...state}
  }
}
