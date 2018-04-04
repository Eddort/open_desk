import React, { PropTypes, Component } from 'react'

export default class User extends Component {
	render() {
		console.log(this.props)
		const { name }  = this.props
		return <div>
			<p>
				Привет,
			</p>
			<h3>
				{name}
			</h3>
		</div>
	}
}