import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
const isDevelopment = true;
class App extends Component {
	
	render() {
		const name = 'DDDsD'
		// const { name } = this.props
		return <div>
					<p>Привет, {name}!</p>
				</div>
	}
}
export default hot(module)(App)