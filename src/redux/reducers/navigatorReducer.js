import { CHANGE_NAVIGATOR_STATUS } from '../actionTypes'
const initialState = {
	Navigator: {
		status: false,
	},
}
const navigatorReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case CHANGE_NAVIGATOR_STATUS: {
			let { status } = payload;
			return {
				...state,
				Navigator: {
					status: status
				}
			}
		}

		default:
			return state
	}
}
export default navigatorReducer