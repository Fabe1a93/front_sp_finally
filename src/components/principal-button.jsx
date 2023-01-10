import React from 'react';
import '../assets/styles/principal-button.css';

const PrincipalButton = (props) => {
	return (
		<button className='button'><img src={props.src} alt={props.alt}  /></button>
	)
}

export { PrincipalButton }