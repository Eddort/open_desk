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
			console.log('../reducers')
			store.replaceReducer(nextRootReducer.default)
		})
	}
	
	return store
}