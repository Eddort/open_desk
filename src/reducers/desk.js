import { merge } from 'lodash'
const NAME = 'desk'
export default function userstate (state = {}, action) {
	switch (action.type) {
		case 'CHANGE_PAGE':
			if (action.payload[NAME]) {
				console.log(
					action.payload[NAME],
					'DEKSDEKSDEKSDEKSDEKSDEKSDEKS'
				)
				return merge({}, state, action.payload[NAME])
			}
			return state
		case 'SET_NAME':
			return Object.assign({}, state, { name: action.payload })
		default:
			return state
	}
}
