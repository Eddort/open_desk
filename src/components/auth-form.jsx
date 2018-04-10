import React, { Component } from 'react'
import styled from 'styled-components';

const FormContainer = styled.div`
	margin-bottom: 0;
	display: flex;
	align-items : center;
	width: 100%;
	justify-content : center;
	min-height: 100%;
	min-height: 100vh;
`;

const Form = styled.form`
	padding: 20px;
	background-color: #fff;
	border-radius: 0.25rem;
	width: 500px;
	height: 350px;
`;

const Label = styled.label`
	color: #879195;
`;

const Button = styled.button`
	padding: 20px;
	float: right;
	top: 100%;
	font-size: 20px !important;
	margin-top: 20px !important;
`;

const Separate = styled.span`
	margin: 0 10px 0 10px;
	font-size: 25px;
	line-height: 1.5;
`;

const Link = styled.button`
	font-size: ${({ isActive }) => (isActive ? '25px !important' : '15px !important')};
	padding: 0 !important;
`;

const AtionsContainer = styled.div`
	padding-bottom: 15px;
`;

export default class AuthForm extends Component {
	
	constructor(props) {
		super(props);
	}
	
	render() {
		console.log(this.props)
		// const { name }  = this.props
		const isDisabledForm = false;
		const isLoginTab = true;
		return (
			<FormContainer>
				<Form>
					<AtionsContainer>
						<Link isActive={ isLoginTab }  disabled={ isLoginTab } className="btn btn-link">Логин</Link>
						<Separate>/</Separate>
						<Link isActive={ !isLoginTab } disabled={ !isLoginTab } className="btn btn-link">Регистрация</Link>
					</AtionsContainer>
					<div className="form-group">
						<Label htmlFor="user-emal">Email address</Label>
						<input disabled={ isDisabledForm } type="email" className="form-control form-control-lg" id="user-emal" aria-describedby="emailHelp" placeholder="Enter email"/>
						{/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
					</div>
					<div className="form-group">
						<Label htmlFor="user-password">Password</Label>
						<input disabled={ isDisabledForm } type="password" className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter password"/>
						{/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
					</div>
					<Button disabled={ isDisabledForm } type="submit" className="btn btn-purple">Submit</Button>
				</Form>
			</FormContainer>
		)
	}
}