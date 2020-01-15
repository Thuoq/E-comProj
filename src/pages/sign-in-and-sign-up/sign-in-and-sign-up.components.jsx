import React from 'react';

import './sign-in-and-sign-up.styles.scss';

import SignUp from '../../components/sign-up/sign-up.components'
import SignIn from '../../components/sign-in/sign-in.components'
const SignInAndSignUp = () => (
	<div className ='sign-in-and-sign-up'>
		<SignIn/>
		<SignUp/>
	</div> 
)


export default SignInAndSignUp;