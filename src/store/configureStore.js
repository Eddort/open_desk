import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'
import { merge } from 'lodash'

let defaultInitState = {}

if (typeof window === 'object' && window.__initialState__) {
	defaultInitState = window.__initialState__
}

export default function configureStore (history, initialState) {
	const sagaMiddleware = createSagaMiddleware()
	const store = createStore(
		rootReducer,
		merge({}, initialState, defaultInitState),
		applyMiddleware(routerMiddleware(history), sagaMiddleware)
	)
	sagaMiddleware.run(rootSaga)
	if (module.hot) {
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers')
			store.replaceReducer(nextRootReducer.default)
		})
	}

	return store
}
