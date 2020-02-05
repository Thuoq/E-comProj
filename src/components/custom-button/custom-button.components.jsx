import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({children, google, inverted ,...othersProps}) => (
	<button className = {` ${inverted ? 'inverted' : ''}
		${google ?'google-sign-in' : ''}
		 custom-button`}
	 {...othersProps}
	 >
			{children}
	
	</button>

)
export default CustomButton;