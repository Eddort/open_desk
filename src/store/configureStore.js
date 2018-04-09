import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import { routerMiddleware } from 'react-router-redux'

import initState from './initState'

export default function configureStore(history, initialState = initState) {
	
	const store = createStore(
		rootReducer,
		initialState,
		applyMiddleware(routerMiddleware(history))
	)
	
	if (module.hot) {
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers')
			store.replaceReducer(nextRootReducer.default)
		})
	}
	
	return store
}