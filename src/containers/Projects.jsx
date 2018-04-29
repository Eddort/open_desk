import { connect } from 'react-redux'
import Projects from '../components/projects'
import { getNew } from '../actions/project'

const mapStateToProps = state => ({
	user: state.user,
	projects: state.projects
})

const mapDispatchToProps = dispatch => ({
	addNewProject: () => dispatch(getNew())
})

export default connect(mapStateToProps, mapDispatchToProps)(Projects)
