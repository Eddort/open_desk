import React from 'react'
import { Route, Switch } from 'react-router'
import Auth from '../containers/Auth'
const Router = () => 
	<div>
		FROM ROUTE
		<Switch>
			{/* <Route path="/auth" component={Auth}/> */}
			<Route exact path="/auth/:type" component={Auth} />
		</Switch>
	</div>


export default Router
