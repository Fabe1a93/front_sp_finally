import React from 'react';
import { Button } from "reactstrap";
import '../assets/styles/sec-button.css';

const SecButton = (props) => {
	return (
		<Button onClick={() => props.onclickFunction(!props.value)} className='px-2 sec-button position-relative' color="secondary" children={props.content}/>		
	)
}

export { SecButton }