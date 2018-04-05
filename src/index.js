import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

import { ConnectedRouter, push } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { Route, Router } from 'react-router'

const history = createHistory()

const store = configureStore(history)
// store.dispatch(push('/auth'))
ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<div>
			<div> ЧЕ НАДО </div>
				<Route path="/" component={App}/>
			</div>
		</Router>
	</Provider>,
	document.getElementById('app')
);