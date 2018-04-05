import React, { PropTypes, Component } from 'react'

const colorsTypes = [
	'primary',
	'secondary',
	'success',
	'danger',
	'warning',
	'info',
	'light',
	'dark',
	'link'
]

export default class Button extends Component {
	
	constructor(props) {
		super(props);
		
		const { color } = this.props;
		
		let colorClass;
		
		if (colorsTypes.includes(color)) {
			colorClass = `btn-${color}`
		} else {
			colorClass = `btn-${colorsTypes[0]}`
		}
		
		this.className = `btn ${colorClass}`;
	}
	
	render() {
		const { name, type = "button", handleClick = () => {} }  = this.props
		return <input className={ this.className } onClick={ handleClick } type={ type } value={ name }/>
	}
}