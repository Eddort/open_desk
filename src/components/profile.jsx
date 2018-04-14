import React, { Component } from 'react';
import styled from 'styled-components'
// import { data, Board } from 'dnd-desk'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px;
	min-height: 100vh;
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
							Hello
						</BlockTitle>
					</Block>
				</ContainerSettings>
				<ContainerSettings>
					<Block>
						<BlockTitle>
							Hello
						</BlockTitle>
					</Block>
					<Block>
						<BlockTitle>
							Hello
						</BlockTitle>
					</Block>
				</ContainerSettings>
				<ContainerSettings>
					<Block>
						<BlockTitle>
							Hello
						</BlockTitle>
					</Block>
				</ContainerSettings>
				<ContainerSettings>
					<Block>
						<BlockTitle>
							Hello
						</BlockTitle>
					</Block>
				</ContainerSettings>
			</Wrapper>
		)
	}
}