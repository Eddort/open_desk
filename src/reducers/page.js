
const initialState = {
	isFirstLoad: true,
	loadInProgress: true
};

export default function routing(state = initialState, action) {
	switch (action.type) {
		case 'ROUTER_GET_STATE':
			return state
		case 'ROUTER_FIRST_INIT':
			console.log(state, '222333333333333', Object.assign({}, state, action.payload))
			return Object.assign({}, state, action.payload)
		case 'ROUTER_LOAD_PROGRESSING':
			console.log(Object.assign({}, state, action.payload))
			return Object.assign({}, state, action.payload)
	default:
		return state

	}
}