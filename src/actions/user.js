export function setName (name) {
	return {
		type: 'SET_NAME',
		payload: name
	}
}

export function login (loginData) {
	return {
		type: 'USER_LOGIN',
		payload: loginData
	}
}

export function register (loginData) {
	return {
		type: 'USER_REGISTER',
		payload: loginData
	}
}

export function loginSucess (user) {
	return {
		type: 'USER_LOGN_SUCESS',
		payload: user
	}
}

// export function loginFailed(error) {
// 	return {
// 		type: 'USER_LOGIN_FAILED',
// 		payload: error
// 	}
// }
