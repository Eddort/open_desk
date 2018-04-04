const initialState = {
	name: 'Anonim'
};

export default function userstate(state = initialState, action) {
	
	switch (action.type) {
		case 'SET_NAME':
			return { ...state, name: action.payload }
		default:
			return state;
	}
}