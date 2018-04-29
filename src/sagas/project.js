import { call, put, takeEvery, fork } from 'redux-saga/effects'
import api from '../lib/api'
import { updateList } from '../actions/project'
function* getNewProject (action) {
	try {
		yield call(api, { url: '/add', data: action.payload })
		const { data } = yield call(api, { url: '/' })
		console.log(data.projects)
		yield put(updateList(data.projects))
		// window.location.href = '/'
		// const user = action.payload
		// yield put({type: "USER_REGISTER", user});
		// yield put({type: "USER_REGISTER_SUCESS", user});
	} catch (e) {
		if (e.response && e.response.data && e.response.data.message) {
			return alert(e.response.data.message)
		}
		// yield put({type: "USER_LOGIN_FAILED", message: e.message});
		alert('register error')
	}
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* getNew () {
	yield takeEvery('GET_NEW_PROJECT', getNewProject)
}

export default function*() {
	yield fork(getNew)
}
