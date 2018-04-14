import React, { Component } from 'react';
import { Route, Switch } from 'react-router'
import Projects from '../containers/Projects'
import DashBoardWrapper from '../components/DashBoardWrapper'

class Router extends Component {
	render() {
		return (
			<DashBoardWrapper leftAsideIsHide={ true } history={ this.props.history }>
				<Switch>
					<Route exact path="/" component={Projects}/>
				</Switch>
			</DashBoardWrapper>
		)
	}
}

export default Router