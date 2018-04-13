import React, { Component } from 'react';
import { Route, Switch } from 'react-router'
import Desk from '../containers/Desk'
//формирует сетку для дашборда
import DashBoardWrapper from '../components/DashBoardWrapper'

class Router extends Component {
	render() {
		return (
			<DashBoardWrapper history={ this.props.history }>
				<Switch>
					{/* <Route path="/auth" component={Auth}/> */}
					<Route exact path="/desk" component={Desk}/>
				</Switch>
			</DashBoardWrapper>
		)
	}
}

export default Router