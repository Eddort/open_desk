import React, { Component } from 'react'

import { Button } from 'spec'
import { data, Board } from 'dnd-desk'
export default class User extends Component {
	
	constructor(props) {
		super(props);
		this.setValue = (e) => {
			this.props.setName(e.target.value);
		};
		this.state = {
			name: 'NAME',
			data: data.medium
		}
		this.setCol = () => {
			this.setState({
				name: 'CHANGED NAME',
				data: data.large
			})
		}
	}
	
	render() {
		// console.log(data.large)
		const { username, desk }  = this.props
		return <div>
		{/* <Button name={this.state.name} handleClick={ this.setCol } /> */}
			<div>
				{/* Привет,
				
					{name} */}
				<Board initial={ desk }/>
				{/* <input type="text" onInput={ this.setValue }/> */}
			</div>
		</div>
	}
}