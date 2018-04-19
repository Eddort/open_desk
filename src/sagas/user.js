import { call, takeEvery, fork } from 'redux-saga/effects'
import api from '../lib/api'

function* loginUser(action) {
	try {
		yield call(api, { url:'/auth/login', data: action.payload });
		// console.log(user.token)
		// const user = action.payload
		// yield put({type: "USER_LOGIN_SUCESS", user});
		window.location.href = '/'
	} catch (e) {
		if (e.response && e.response.data && e.response.data.message) {
			return alert(e.response.data.message)
		}
		// yield put({type: "USER_LOGIN_FAILED", message: e.message});
		alert('login error')
	}
}

function* registerUser(action) {
	try {
		yield call(api, { url:'/auth/register', data: action.payload });
		window.location.href = '/'
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
function* login() {
	yield takeEvery('USER_LOGIN', loginUser);
}

function* register() {
	yield takeEvery('USER_REGISTER', registerUser);
}
export default function* () {
	yield fork(login)
	yield fork(register)
}