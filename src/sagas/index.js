import { fork } from 'redux-saga/effects';

import user from './user'
import project from './project'
import router from './router'

export default function* rootSaga() {
	yield fork(user)
	yield fork(project)
	yield fork(router)
}
