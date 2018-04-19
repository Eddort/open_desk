import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import initState from './initState'
import rootSaga from '../sagas'

export default function configureStore(history, initialState = initState) {
	
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