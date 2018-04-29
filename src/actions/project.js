export function getNew () {
	return {
		type: 'GET_NEW_PROJECT',
		payload: {}
	}
}

export function updateList (projects) {
	return {
		type: 'UPDATE_LIST_PROJECT',
		payload: projects
	}
}
