import { merge } from 'lodash'

const initialState = {
	name: 'NAMыыE'
};

export default function projectState(state = initialState, action) {
	
	switch (action.type) {
		case 'UPDATE_LIST_PROJECT':
		console.log(action.payload)
		console.log(merge(state, action.payload ), '!!!!!!!!!!!!!!!!!!!!!')
			return  merge([], state, action.payload )
		case 'USER_LOGN_SUCESS':
			console.log('22233424523')
			return Object.assign({}, state, { name: action.payload } )
		default:
			return state;
	}
}