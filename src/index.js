import React from 'react'
import configureStore from './store/configureStore'
// import { ConnectedRouter, push } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import ReactDOM from 'react-dom';
import './scss/custom.scss'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import RootRouter from './routes';

const history = createHistory();
const store =  configureStore(history, window.__INITIAL_STATE__)

ReactDOM.render(
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<RootRouter/>
			</ConnectedRouter>
		</Provider>,
	document.getElementById('app')
);
