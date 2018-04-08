import React, { Component } from 'react'
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
			<h6> App DESK </h6>
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

export default connect(mapStateToProps, mapDispatchToProps)(Desk)