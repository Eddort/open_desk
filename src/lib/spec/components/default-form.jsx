import React, { Component } from 'react'
import PropTypes from 'prop-types';

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
		// const { name, type = "button", handleClick = () => {} }  = this.props
		return (
		<form>
			<div className='form-group'>
				<label htmlFor='exampleInputEmail1'>Email address</label>
				<input type='email' className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='Enter email'/>
				<small id='emailHelp' className='form-text text-muted'>We'll never share your email with anyone else.</small>
			</div>
			<div className='form-group'>
				<label htmlFor='exampleInputPassword1'>Password</label>
				<input type='password' className='form-control' id='exampleInputPassword1' placeholder='Password'/>
			</div>
			<div className='form-check'>
				<input type='checkbox' className='form-check-input' id='exampleCheck1'/>
				<label className='form-check-label' htmlFor='exampleCheck1'>Check me out</label>
			</div>
			<button type='submit' className='btn btn-primary'>Submit</button>
		</form>
		)
	}
}

// Button.propTypes = {
// 	name: PropTypes.string.isRequired
// }