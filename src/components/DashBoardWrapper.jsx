
import React, { Component } from 'react';
import { NavLink as RouterNavLink} from 'react-router-dom';
import styled from 'styled-components';

const NavLink = styled(RouterNavLink)`
	color: grey;
	width: 100%;
	display: flex;
	justify-content: center;
	height: 50px;
	padding: 15px;
`;

const RootContainer = styled.div`
	display: flex;
	overflow: hidden;
`;

const LeftAside = styled.div`
	display: flex;
	width: 250px;
	flex-grow: 0;
	align-items: center;
	height: 100vh;
	overflow: hidden;
	position: fixed;
	background-color: #dbe2e8;
`;

const RightAside = styled.div`
	width: calc(100% - 250px);
	flex-grow: 1;
	overflow: auto;
	margin-left: 250px;
	height: 100vh;
`;

const NavBar = styled.div`
	width: 100%;
`;

class DashBoardWrapper extends Component {
	render () {
		return (
			<RootContainer>
				<LeftAside>
					<NavBar>
						<NavLink
						exact to="/"
						activeStyle={{
							borderLeft: '5px solid green',
							fontWeight: 'bold',
							color: 'red'
						}}
						>Проекты</NavLink>
						<NavLink
						to="/desk"
						activeStyle={{
							borderLeft: '5px solid green',
							fontWeight: 'bold',
							color: 'red'
						}}
						>Задачи</NavLink>
						<a href="/auth/">LOGIN</a>
					</NavBar>
				</LeftAside>
				<RightAside>
					{this.props.children}
				</RightAside>
			</RootContainer>
			);
		}
}

export default DashBoardWrapper;