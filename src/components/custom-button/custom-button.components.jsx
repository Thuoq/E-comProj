import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({children, google, ...othersProps}) => (
	<button className = {`${google ?'google-sign-in' : ''} custom-button`}
	 {...othersProps}
	 >
			{children}
	
	</button>

)
export default CustomButton;