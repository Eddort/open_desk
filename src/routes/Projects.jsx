import React, { Component } from 'react';
import { Route, Switch } from 'react-router'
import Profile from '../containers/Profile'
//формирует сетку для дашборда
import DashBoardWrapper from '../components/DashBoardWrapper'

class Router extends Component {
	render() {
        console.log('22222')
		return (
			<DashBoardWrapper history={ this.props.history }>
				<Switch>
					{/* <Route path="/auth" component={Auth}/> */}
					<Route exact path="/" component={Profile}/>
				</Switch>
			</DashBoardWrapper>
		)
	}
}

export default Router