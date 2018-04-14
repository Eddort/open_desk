import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import AuthForm from '../components/auth-form'
import * as userActions from '../actions/user'


const mapStateToProps = (state) => ({
	user: state.user
})

const mapDispatchToProps = (dispatch) => ({
	userActions: bindActionCreators(userActions, dispatch),
	handleSendForm: (e)=>{e.preventDefault(); console.log('AUTH')}
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm)