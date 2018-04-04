import React, { PropTypes, Component } from 'react'

export default class User extends Component {
	
	constructor(props) {
		super(props);
		this.setValue = (e) => {
			this.props.setName(e.target.value);
		};
	}
	
	render() {
		console.log(this.props)
		const { name }  = this.props
		return <form>
			<div class="form-group">
				<label for="exampleInputEmail1">Email address</label>
				<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
				<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
			</div>
			<button type="submit" class="btn btn-primary">Submit</button>
		</form>
	}
}