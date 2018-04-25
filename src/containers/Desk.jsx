import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Board from '../components/board'
import * as userActions from '../actions/user'

const mapStateToProps = (state) => ({
	desk: console.log(state.desk, '!!!') || state.desk
})

const mapDispatchToProps = (dispatch) => ({
	boardActions: bindActionCreators(userActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Board)