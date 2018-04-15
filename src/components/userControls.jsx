import React, {  Component } from 'react'
import styled from 'styled-components'

const Contaiter = styled.div`
	display: flex;
	align-items: right;
`;

export default class UserControls extends Component {
	
	constructor(props) {
		super(props);
	}
	
	render() {
		const { id, role, changedHandler } = this.props;
		return (
			<Contaiter>
				{/* <div className="form-check form-check-inline">
					<input className="form-check-input" type="radio" name="inlineRadioOptions" id={`inlineRadio1${id}`} value="option1"/>
					<label className="form-check-label" htmlFor={`inlineRadio1${id}`}>Администратор</label>
				</div> */}
				<div className="form-check form-check-inline">
					<input onChange={ changedHandler } checked={ role === 'editor' } className="form-check-input" type="radio" name={`inlineRadioOptions${id}`} id={`inlineRadio2${id}`}  value="option2"/>
					<label className="form-check-label" htmlFor={`inlineRadio2${id}`}>Редактор</label>
				</div>
				<div className="form-check form-check-inline">
					<input onChange={ changedHandler } checked={ role === 'agent' } className="form-check-input" type="radio" name={`inlineRadioOptions${id}`} id={`inlineRadio3${id}`}  value="option3"/>
					<label className="form-check-label" htmlFor={`inlineRadio3${id}`}>Агент</label>
				</div>
			</Contaiter>
		)
	}
}