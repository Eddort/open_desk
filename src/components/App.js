import React, { Component } from 'react'

export default class App extends Component {
	
	render() {
		const name = 'TEST'
		// const { name } = this.props
		return <div>
					<p>Привет, {name}!</p>
				</div>
	}
}