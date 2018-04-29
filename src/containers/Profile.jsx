import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Profile from '../components/profile'
import * as userActions from '../actions/user'

const mapStateToProps = state => ({
	user: state.user
})

const mapDispatchToProps = dispatch => ({
	boardActions: bindActionCreators(userActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
