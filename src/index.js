import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

import { ConnectedRouter, push } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { Route, Router } from 'react-router'

import './scss/custom.scss'

const history = createHistory()

const store = configureStore(history)
store.dispatch(push('/auth'))
ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/auth" component={App}/>
		</Router>
	</Provider>,
	document.getElementById('app')
);