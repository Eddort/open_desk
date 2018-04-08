import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import User from '../components/user'
import * as userActions from '../actions/user'

class App extends Component {
	
	render() {
		
		const { user, history } = this.props
		const { setName } = this.props.userActions
		console.log(history, '!!!!!!!')
		return <div>
			<h6> NOT SSSs </h6>
			
		</div>
	}
}

const mapStateToProps = (state) => ({
	user: state.user
})

const mapDispatchToProps = (dispatch) => ({
	userActions: bindActionCreators(userActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)