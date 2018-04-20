
import React, { Component } from 'react';
import { NavLink as RouterNavLink, Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components'
import { connect } from 'react-redux'

const NavLink = styled(RouterNavLink)`
	color: #fff;
	width: 100%;
	display: flex;
	justify-content: center;
	height: 50px;
	padding: 15px;
	&:hover {
		background-color: #2D3C4F;
	}
	&.active {
		border-left: 5px solid #00A3F5;
		background-color: #2D3C4F;
	}
`;

const RootContainer = styled.div`
	color: #ffff;
	display: flex;
	overflow: hidden;
	flex-direction: column;
`;

const Container = styled.div`

`;

const LeftAside = styled.div`
	display: flex;
	width: ${({ leftAsideIsHide }) => (leftAsideIsHide ? '0px' : '250px')};
	flex-grow: 0;
	height: 100vh;
	overflow: hidden;
	position: fixed;
	background-color: #37495F;
`;

const RightAside = styled.div`
	width: ${({ leftAsideIsHide }) => (leftAsideIsHide ? '100%' : 'calc(100% - 250px)')};
	flex-grow: 1;
	margin-left: ${({ leftAsideIsHide }) => (leftAsideIsHide ? '0px' : '250px')};
	height: calc(100vh - 50px);
	/* нельзя делать скролл по x из-за деска */
	overflow-x: hidden;
	overflow-y: auto;
`;

const NavBar = styled.div`
	width: 100%;
`;

const RootNavBar = styled.div`
	background-color: #37495F;
	height: 50px;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
`;

const NavBarLogo = styled.div`
	width: 250px;
	height: 50px;
	background-color: #2D3C4F;
	font-size: 20px;
	font-wieght: bold;
`;

const UserNavbarItem = styled.div`
	
`;

const Logo = styled.img`
	height: 100%;
	margin-right: 10px;
`;

const DashBoardControls = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	flex-grow: 1;
	padding: 0 10px 0 10px;
`;

const ArrowBack = styled(RouterLink)`
	font-size: 20px;
	display: ${({ params }) => params.isActive ? 'block': 'none'}
`;
const AnimatedPage = styled.div`
	transition: opacity 0.8s;
	opacity: ${({ isActive }) => isActive ? 1: 0};
`;

/**
 * TODO разбить на пур компоненты
 */
class DashBoardWrapper extends Component {
	constructor (props) {
		super(props)
		const getPrevLocation = (loc) => {
			let nloc = loc.split('/')
			nloc.splice(-1)
			return nloc.join('/')
		}
		this.goBack = (history) => {
			history.push(getPrevLocation(history.location.pathname))
		}
		this.state = {
			isActive: false
		}
		this.animatePage = () => {
			setTimeout(() => {
				this.setState({
					isActive: true
				})
			}, 0)
		}
	}
	componentDidMount () {
		this.animatePage()
		console.log(2222333)
	}
	render () {
		console.log(this.props)
		const { username } = this.props.user;
		const { leftAsideIsHide, history } =  this.props;
		const  { isActive } = this.state;
		console.log(history.location.pathname)
		return (
			
			<RootContainer>
				<RootNavBar>
					<NavBarLogo>
						<RouterLink to="/">
							<Logo src="/flipboard.svg"/>
						</RouterLink>
						OpenDesk
					</NavBarLogo>
					<DashBoardControls>
						<UserNavbarItem>
							<ArrowBack
								to={ '/' }
								params={ { isActive: history.location.pathname.length > 1 } }
								className="free-link"
								onClick={ this.goBack.bind(this, history) }
							>
								<i className="fa fa-angle-left"></i> Проекты 
							</ArrowBack>
						</UserNavbarItem>
						<UserNavbarItem>
							{ username } <i className="fa fa-user"></i>
						</UserNavbarItem>
					</DashBoardControls>
				</RootNavBar>
				<Container>
					<LeftAside leftAsideIsHide={ leftAsideIsHide }>
						<NavBar>
							<NavLink
								className="free-link"
								exact to="/project/:projectId"
							>Проект</NavLink>
							<NavLink
								className="free-link"
								exact to="/desk"
							>Задачи</NavLink>
							<NavLink
								className="free-link"
								to="/desk/backlog"
							>Нераспределенные задачи</NavLink>
							<NavLink
								className="free-link"
								to="/profile"
							>Личный кабинет</NavLink>
						</NavBar>
					</LeftAside>
					<RightAside leftAsideIsHide={ leftAsideIsHide }>
						<AnimatedPage isActive={ isActive }>
							{this.props.children}
						</AnimatedPage>
					</RightAside>
				</Container>
			</RootContainer>
			);
		}
}

const mapStateToProps = (state) => ({
	user: state.user
})

export default connect(mapStateToProps)(DashBoardWrapper)