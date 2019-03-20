import {CHANGE_HEADER_STATUS} from '../actionTypes'
const initialState = {
  Header: {
    size: 'big'
  },
}
export default (state = initialState, { type, payload }) => {
  switch (type) {

    case CHANGE_HEADER_STATUS: {
      let { status } = payload;
      return {
        ...state,
        Header: {
          size: status
        }
      }
    }
    default:
      return {...state}
  }
}
