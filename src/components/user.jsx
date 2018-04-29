import React, { Component } from 'react'

import { Button } from 'spec'
// import { data, Board } from 'dnd-desk'
export default class User extends Component {
	constructor (props) {
		super(props)
		this.setValue = e => {
			this.props.setName(e.target.value)
		}
	}

	render () {
		const { name } = this.props
		return (
			<div>
				<div>
					Приве2т,
					{name}
					<input type="text" onInput={this.setValue} />
					<Button
						handleClick={function () {
							console.log(123)
						}}
						name={'SSSS'}
					/>
				</div>
			</div>
		)
	}
}
