import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import user from './user'
import desk from './desk'
import projects from './projects'

export default combineReducers({
	user,
	desk,
	projects,
	router: routerReducer
})