import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Projects from '../components/projects'
import * as userActions from '../actions/user'

const mapStateToProps = (state) => ({
	user: state.user
})

const mapDispatchToProps = (dispatch) => ({
	boardActions: bindActionCreators(userActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Projects)