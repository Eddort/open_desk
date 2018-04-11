import React from 'react';
import { Route, Switch } from 'react-router'
import App from '../containers/App';
import Desk from '../containers/Desk';
import AuthRouter from './Auth';
import NotFoundPage from '../containers/NotFoundPage';
import { hot } from 'react-hot-loader'

const Root =  () => (
	<Switch>
		<Route exact path="/" component={App}/>
		<Route path="/desk" component={Desk}/>
		<Route path="/auth" component={AuthRouter}/>
		<Route component={NotFoundPage} />
	</Switch>
); 

export default hot(module)(Root)