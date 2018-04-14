import React, { Component } from 'react'
import styled from 'styled-components';
import { Link as LinkRoouter } from 'react-router-dom'

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
		const { handleSendForm } = props;
		//почему ентер по инпуту делает пуш в хистори
		this.onKeyPress = (e) => {
			if (e.key === 'Enter')	{
				handleSendForm(e);
			}
		}
	}
	
	render() {
		const { match, handleSendForm } = this.props;
		const isLoginTab = match.params.type === 'login'
		// const { name }  = this.props
		const isDisabledForm = false;
		return (
			<FormContainer>
				<Form onSubmit={ handleSendForm }>
					<AtionsContainer>
						<LinkRoouter to={ '/auth/login' }>
							<Link isActive={ isLoginTab } disabled={ isLoginTab } className="btn btn-link">Логин</Link>
						</LinkRoouter>
						<Separate>/</Separate>
						<LinkRoouter to={ '/auth/signup' }>
							<Link  isActive={ !isLoginTab } disabled={ !isLoginTab } className="btn btn-link">Регистрация</Link>
						</LinkRoouter>
					</AtionsContainer>
					<div className="form-group">
						<Label htmlFor="user-emal">Электронная почта</Label>
						<input disabled={ isDisabledForm } onKeyPress={ this.onKeyPress } type="email" className="form-control form-control-lg" id="user-emal" aria-describedby="emailHelp"/>
						{/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
					</div>
					<div className="form-group">
						<Label htmlFor="user-password">Пароль</Label>
						<input disabled={ isDisabledForm } onKeyPress={ this.onKeyPress } type="password" className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp"/>
						{/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
					</div>
					<Button 
						disabled={ isDisabledForm }
						type="submit"
						className="btn btn-purple"
						// onClick={ this.sendForm }
					>
						{ (isLoginTab ? 'Логин': 'Регистрация') }
					</Button>
				</Form>
			</FormContainer>
		)
	}
}