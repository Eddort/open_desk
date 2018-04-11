import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import AuthForm from '../components/auth-form'
import * as userActions from '../actions/user'

class Auth extends Component {
	
	render() {
		console.log(this.props)
		const { match } = this.props
		return (
			<AuthForm
				isLoginTab={ match.params.type === 'login' }
				handleSendForm={ (e)=>{e.preventDefault(); console.log('AUTH')} }
			/>
		)
	}
}

const mapStateToProps = (state) => ({
	user: state.user
})

const mapDispatchToProps = (dispatch) => ({
	userActions: bindActionCreators(userActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Auth)