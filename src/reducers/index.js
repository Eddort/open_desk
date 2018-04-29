import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import user from './user'
import desk from './desk'
import projects from './projects'
import project from './project'
import page from './page'

export default combineReducers({
	user,
	desk,
	projects,
	project,
	page,
	router: routerReducer
})
