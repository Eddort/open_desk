import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

import { ConnectedRouter, push } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { Route, Router, Switch } from 'react-router'

import App from './containers/App';
import NotFoundPage from './containers/NotFoundPage';

const history = createHistory()

const store = configureStore(history)
// store.dispatch(push('/auth'))
ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Switch>
				<Route exact path="/" component={App}/>
				<Route component={NotFoundPage} />
			</Switch>
		</Router>
	</Provider>,
	document.getElementById('app')
);