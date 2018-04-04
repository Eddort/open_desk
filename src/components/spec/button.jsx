import React, { PropTypes, Component } from 'react'

export default class Button extends Component {
	
	render() {
		const { name }  = this.props
		return <input onClick={ handleClick } type="button" value={ name }/>
	}
}