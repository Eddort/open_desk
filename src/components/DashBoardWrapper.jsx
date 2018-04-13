
import React, { Component } from 'react';
import { NavLink as RouterNavLink, Link as RouterLink} from 'react-router-dom';
import styled from 'styled-components';
// import 'font-awesome/css/font-awesome.css'

// import '@fortawesome/fontawesome'
// fontawesome.config.familyPrefix = 'fab'

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
`;

class DashBoardWrapper extends Component {
	render () {
		const leftAsideIsHide = false;
		return (
			
			<RootContainer>
				<RootNavBar>
					<NavBarLogo>
					<Logo src="/flipboard.svg"/>
					OpenDesk
					</NavBarLogo>
					<DashBoardControls>
						<UserNavbarItem>
							<ArrowBack className="free-link" to="/">
								<i className="fa fa-arrow-left"></i>
							</ArrowBack>
						</UserNavbarItem>
						<UserNavbarItem>
							User Name <i className="fa fa-user"></i>
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
								to="/desk/backlog"
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

export default DashBoardWrapper;