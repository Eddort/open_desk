import React from 'react';
import { Route, Switch } from 'react-router'
import App from './App';
import Desk from './Desk';
import NotFoundPage from './NotFoundPage';
import { hot } from 'react-hot-loader'
const Root =  () => (
	<Switch>
		<Route exact path="/" component={App}/>
		<Route exact path="/desk" component={Desk}/>
		<Route component={NotFoundPage} />
	</Switch>
);

export default hot(module)(Root)