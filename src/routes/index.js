import React from 'react';
import { Route, Switch } from 'react-router'
import ProjectsRouter from './Projects';
import ProjectsSettingsRouter from './ProjectsSettings';
import DeskRouter from './Desk';
import AuthRouter from './Auth';
import Profile from './Profile';
import NotFoundPage from '../containers/NotFoundPage';
import { hot } from 'react-hot-loader'

const Root =  () => (
	<Switch>
		<Route exact path="/" component={ProjectsRouter}/>
		<Route path="/projects/:projectId" component={ProjectsSettingsRouter}/>
		<Route path="/desk" component={DeskRouter}/>
		<Route path="/auth" component={AuthRouter}/>
		<Route path="/profile" component={Profile}/>
		<Route component={NotFoundPage} />
	</Switch>
); 

export default hot(module)(Root)