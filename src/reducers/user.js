const initialState = {
	name: 'NAMыыE'
}

export default function userstate (state = initialState, action) {
	switch (action.type) {
		case 'SET_NAME':
			return Object.assign({}, state, { name: action.payload })
		case 'USER_LOGN_SUCESS':
			console.log('22233424523')
			return Object.assign({}, state, { name: action.payload })
		default:
			return state
	}
}
