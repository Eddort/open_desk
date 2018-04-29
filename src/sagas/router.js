import { select, call, put, takeEvery, fork } from 'redux-saga/effects'
import api from '../lib/api'
import { LOCATION_CHANGE } from 'react-router-redux'

const getStatePage = state => state.page

/**
 * Смотрим на изменение страницы (экшн из роутера)
 * и берем данные по пути гет запроса и перенаправляем на пост,
 * если не получится, то серевер сделает редирект на 404
 * @param  {} action
 */
function* changePage (action) {
	try {
		let page = yield select(getStatePage)
		if (page.isFirstLoad) {
			yield put({
				type: 'ROUTER_FIRST_INIT',
				payload: { isFirstLoad: false }
			})
			yield put({
				type: 'ROUTER_LOAD_PROGRESSING',
				payload: { loadInProgress: false }
			})
			return
		}
		yield put({
			type: 'ROUTER_LOAD_PROGRESSING',
			payload: { loadInProgress: true }
		})
		const { data } = yield call(api, { url: action.payload.pathname })
		if (!data) {
			yield put({
				type: 'ROUTER_LOAD_PROGRESSING',
				payload: { loadInProgress: false }
			})
			return
		}
		yield put({ type: 'CHANGE_PAGE', payload: data })
		yield put({
			type: 'ROUTER_LOAD_PROGRESSING',
			payload: { loadInProgress: false }
		})
	} catch (e) {
		if (e.response && e.response.data && e.response.data.message) {
			return alert(e.response.data.message)
		}
		console.log(e)
		alert('saga error') //todo nf
	}
}

function* onChangePage () {
	yield takeEvery(LOCATION_CHANGE, changePage)
}

export default function*() {
	yield fork(onChangePage)
}
