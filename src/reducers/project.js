import { merge } from 'lodash'

const initialState = {}
const NAME = 'project'

export default function projectState (state = initialState, action) {
	switch (action.type) {
		case 'CHANGE_PAGE':
			if (action.payload[NAME]) {
				return merge({}, state, action.payload[NAME])
			}
			return state
		case 'UPDATE_LIST_PROJECT':
			return merge([], state, action.payload)
		default:
			return state
	}
}
