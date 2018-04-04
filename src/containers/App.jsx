import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'

import User from '../components/user'

class App extends Component {
	
	render() {
		
		const { user } = this.props
		console.log(user)
		return <div>
			<h6> APP </h6>
			<User name={ user.name } />
		</div>
	}
}

const mapStateToProps = (state) => ({
	user: state.user
})


export default hot(module)(connect(mapStateToProps)(App))