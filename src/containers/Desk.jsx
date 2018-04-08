import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Board from '../components/board'
import * as userActions from '../actions/user'

class Desk extends Component {
	
	render() {
		
		const { desk } = this.props

		return <div>
			<h6> App DESK </h6>
			<Board desk={ desk } />
		</div>
	}
}

const mapStateToProps = (state) => ({
	desk: state.desk
})

const mapDispatchToProps = (dispatch) => ({
	boardActions: bindActionCreators(userActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Desk)