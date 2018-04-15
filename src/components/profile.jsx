import React, { Component } from 'react';
import styled from 'styled-components'
// import { data, Board } from 'dnd-desk'
import UserControls from './userControls';
const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px 15px 20px 20px;
	min-height: calc(100vh - 50px);
`;

const ContainerSettings = styled.div`
	display: flex;
	margin: 5px 0;
`;

const Block = styled.div`
	background-color: green;
	flex-grow: 1;
	margin-right: 10px;
	border-radius: 4px;
	background-color: #fff;
	color: #000;
	min-height: 300px;
	box-shadow: 0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.1);
`;

const BlockTitle = styled.div`
	background-color: #EDF1F6;
	padding: 10px;
	border-bottom: 1px solid rgba(0,0,0,0.1);
	color: #6A798C;
	font-size: 20px;
	font-weight: 500;
`;

const ScrollContent = styled.div`
	overflow: auto;
	max-height: 500px;
`;

const Item = styled.div`
	padding: 20px;
	border-bottom: 1px solid rgba(0,0,0,0.1);
	display: flex; 
    justify-content: space-between;
	&:hover {
		background-color: #EDF1F6;
		font-weight: bold;
	}
`;

const AddNewItem = Item.extend`
	justify-content: center;
	font-size: 20px;
	color: #00A3F5;
	cursor: pointer;
	padding: 10px;
`;

const ProjectDescription = styled.textarea`
	width: 100%;
	height: 250px;
`;

const fakeUsers = [
	{
		name: 'Дмитрий',
		id: 1,
		role: null
	},
	{
		name: 'Татьяна',
		id: 3,
		role: 'agent'
	},
	{
		name: 'Виктор',
		id: 2,
		role: 'editor'
	},
	{
		name: 'Александр',
		id: 4,
		role: 'agent'
	}
]

export default class Profile extends Component {
	
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<Wrapper>
				<ContainerSettings>
					<Block>
						<BlockTitle>
							Подключенные пользователи
						</BlockTitle>
						<ScrollContent>
							{ fakeUsers.map(({ name, id, role }) => (
								<Item key={ id }>
									{ name }
									<UserControls role={ role } id={ id } changedHandler={ console.log }/>
								</Item>
							)) }
							<AddNewItem>
								<i className="fa fa-plus-circle"></i>
							</AddNewItem>
						</ScrollContent>
					</Block>
				</ContainerSettings>
				<ContainerSettings>
					<Block>
						<BlockTitle>
							Категории
						</BlockTitle>
						<ScrollContent>
							<Item>
								Оплата сайтов
							</Item>
							<Item>
								Оплата доменов
							</Item>
							<Item>
								Оплата доменов
							</Item>
							<AddNewItem>
								<i className="fa fa-plus-circle"></i>
							</AddNewItem>
						</ScrollContent>
					</Block>
				</ContainerSettings>
				<ContainerSettings>
					<Block>
						<BlockTitle>
							Фоновый рисунок
						</BlockTitle>
					</Block>
					<Block>
						<BlockTitle>
							Заголовок и описание
						</BlockTitle>
						<ProjectDescription/>
					</Block>
				</ContainerSettings>
			</Wrapper>
		)
	}
}