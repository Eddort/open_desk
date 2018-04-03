import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

class App extends Component {
	
	render() {
		const name = 'МИР'
		// const { name } = this.props
		return <div>
			<p>Привет, {name}!</p>
		</div>
	}
}
export default hot(module)(App)