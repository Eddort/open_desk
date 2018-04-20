import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'

let defaultInitState = {}

if (typeof window !== undefined && window.__initialState__) {
	defaultInitState = window.__initialState__
}

export default function configureStore(history, initialState =  defaultInitState) {
	const sagaMiddleware = createSagaMiddleware()
	const store = createStore(
		rootReducer,
		initialState,
		applyMiddleware(sagaMiddleware),
		applyMiddleware(routerMiddleware(history))
		
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