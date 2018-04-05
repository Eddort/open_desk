import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
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
			<h6> NOT FOUND </h6>
			
		</div>
	}
}

const mapStateToProps = (state) => ({
	user: state.user
})

const mapDispatchToProps = (dispatch) => ({
	userActions: bindActionCreators(userActions, dispatch)
})

export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(App))