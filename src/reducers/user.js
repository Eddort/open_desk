const initialState = {
	name: 'DDD'
};

export default function userstate(state = initialState, action) {
	
	switch (action.type) {
		case 'SET_NAME':
			return  Object.assign({}, state, { name: action.payload } )
		default:
			return state;
	}
}