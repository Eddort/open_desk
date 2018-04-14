
import React, { Component } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
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

const ArrowBack = styled.a`
	font-size: 20px;
	display: ${({ isActive }) => isActive ? 'block': 'none'}
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
	}
	render () {
		console.log(this.props)
		const { name } = this.props.user;
		const { leftAsideIsHide, history } =  this.props;
		console.log(history.location.pathname)
		return (
			
			<RootContainer>
				<RootNavBar>
					<NavBarLogo>
						<Logo src="/flipboard.svg"/>
						OpenDesk
					</NavBarLogo>
					<DashBoardControls>
						<UserNavbarItem>
							<ArrowBack 
								isActive={ history.location.pathname.length > 1 }
								className="free-link"
								onClick={ this.goBack.bind(this, history) }
							>
								<i className="fa fa-arrow-left"></i>
							</ArrowBack>
						</UserNavbarItem>
						<UserNavbarItem>
							{ name } <i className="fa fa-user"></i>
						</UserNavbarItem>
					</DashBoardControls>
				</RootNavBar>
				<Container>
					<LeftAside leftAsideIsHide={ leftAsideIsHide }>
						<NavBar>
							<NavLink
								className="free-link"
								exact to="/"
							>Проекты</NavLink>
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
						{this.props.children}
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