import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import AuthForm from '../components/auth-form'
import { login, register } from '../actions/user'

const mapStateToProps = (state) => ({
	user: state.user
})

const mapDispatchToProps = (dispatch) => ({
	// userActions: bindActionCreators(userActions, dispatch),
	setLogin: (formData) => dispatch(login(formData)),
	setRegister: (formData) => dispatch(register(formData))
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm)