import React from 'react';
import menuIcon from '../assets/static/buttonMenu.png';

import '../assets/styles/menu-button.css';

const MenuButton = ({onclickFunction, value}) => {
	return (
		<button className='menu-button m-2 d-flex position-absolute' onClick={() => onclickFunction(!value)}>
			<img src={menuIcon} alt="menu icon" />
		</button>
	)
}

export {
	MenuButton
}