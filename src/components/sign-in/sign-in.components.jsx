import React, { Component } from 'react';

import './sign-in.styles.scss';
import CustomButton from '../custom-button/custom-button.components'

import FormInput from '../form-input/form-input.components';
import {signInWithGoogle} from '../../firebase/firebase.utils';
import './sign-in.styles.scss'
 class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email : '',
			password : ''
		}
	}

	handleSubmit = event => {
		event.preventDeafult();
		this.state({email: '', password: ''})
	}


	handleChange = event => {
		const {value, name} = event.target;
		console.log(event.target);
		this.setState({ [name] : value})
	}

	render() {
		return (
			<div className = 'sign-in'>
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>
				<br></br>
				<form onSubmit = {this.handleSubmit}>
					
					<FormInput 
						name = 'email' 
						type ='email' 
						label ='Email'
						value={this.state.email} 
						handleChange = {this.handleChange}
						required />
					
					<FormInput 
						name = 'password' 
						type ='password' 
						label ='Password'
						value={this.state.password} 
						handleChange = {this.handleChange}
						required />

					<div className ='buttons'>

						<CustomButton type='submit'>SignIn</CustomButton>
						<CustomButton onClick = {signInWithGoogle} google>Sign In with Google</CustomButton>

					</div>
					
				</form>	
			</div>
		);
	}
}
export default SignIn;
