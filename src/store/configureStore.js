import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import { routerMiddleware } from 'react-router-redux'

export default function configureStore(history, initialState = {}) {
	
	const store = createStore(
		rootReducer,
		initialState,
		applyMiddleware(routerMiddleware(history))
	)
	
	if (module.hot) {
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers')
			store.replaceReducer(nextRootReducer)
		})
	}
	
	return store
}