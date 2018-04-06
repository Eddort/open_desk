import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Board from '../components/board'
import * as userActions from '../actions/user'

class Desk extends Component {
	
	render() {
		
		const { user, history } = this.props
		const { setName } = this.props.boardActions
		console.log(history, '!!!!!!!')
		return <div>
			<h6> App </h6>
			<Board name={ user.name } setName={ setName } />
		</div>
	}
}

const mapStateToProps = (state) => ({
	user: state.user
})

const mapDispatchToProps = (dispatch) => ({
	boardActions: bindActionCreators(userActions, dispatch)
})

export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(Desk))