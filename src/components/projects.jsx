import React, { Component } from 'react';
import styled from 'styled-components'
// import { data, Board } from 'dnd-desk'
import { Link } from 'react-router-dom';
const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px 15px 20px 20px;
	min-height: calc(100vh - 50px);
	width: 100vw;
`;

const Block = styled.div`
	flex-grow: 1;
	margin-right: 10px;
	border-radius: 10px;
	background-color: #fff;
	color: #000;
	min-height: 300px;
	box-shadow: 0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.1);
`;

//space-between
const MainWrapper = Wrapper.extend`
	flex-direction: row;
	/* justify-content: center; */
	flex-wrap: wrap;
	align-content: flex-start;
	width: 900px;
	margin: auto;
`;


const Item = Block.extend`
	width: calc( (100% - 30px) / 3);
	padding: 0;
	margin-bottom: 10px;
	flex-grow: 0;
	height: 300px;
`;

const ItemContainer = styled.div`
	width: 100%;
	box-sizing: border-box;
`;

const AvatarContainer = ItemContainer.extend`
	height: 200px;
	background-color: #D2D6DA;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const TitleContaner = ItemContainer.extend`
	font-size: 20px;
	font-wieght: bold;
	color: #3b7694;
	height:75px;
	padding: 10px;
`;

const ProjectAvatarDefault = styled.i`
	font-size: 70px !important;
	color: rgba(0,0,0,.3);
	font-weight: 100 !important;
`;

const ProjectAvatarCustom = styled.img`
	width: 100%;
`;

const StatusBar = ItemContainer.extend`
	background-color: #D9E1E7;
	height: 25px;
`;

export default class Profile extends Component {
	
	constructor(props) {
		super(props);
	}
	//https://ulanding.io/img/ulanding/icn-logo.svg
	render() {
		const todos = [{
			title: 'uKit',
			id: 1,
			avatarUrl: '/ukit.svg'
		}, {
			title: 'uLanding' ,
			id: 2,
			avatarUrl: '/ulanding.svg'
		}];
		return (
			<MainWrapper>
				{todos.map(project => (
					<Item key={ project.id }>
						
						<AvatarContainer>
							{ project.avatarUrl ?
								<ProjectAvatarCustom src={project.avatarUrl}/> :
								< ProjectAvatarDefault className="fa fa-table"/>
							}
						</AvatarContainer>
						<Link className="free-link" to={ `/projects/${project.id}/` }>
							<TitleContaner> { project.title } </TitleContaner>
						</Link>
						<StatusBar></StatusBar>
					</Item>
					
				))}
			</MainWrapper>
		)
	}
}