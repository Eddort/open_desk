import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import user from './user'
import desk from './desk'

export default combineReducers({
	user,
	desk,
	router: routerReducer
})