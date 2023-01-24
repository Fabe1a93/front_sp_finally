import React from 'react';
import { Link } from 'react-router-dom';
import buttonOne from '../assets/static/button1.png';
import buttonTwo from '../assets/static/button2.png';
import buttonTree from '../assets/static/settings_button.png';

import { PrincipalButton } from './principal-button';

 import '../assets/styles/app.css';
 import '../assets/styles/body.css';

const Body = () => {

  

  
    
   return (
    <>
    <div className='principal-body' >
  


     <Link to="registeroptions" ><PrincipalButton src={buttonOne} alt='button 1' /></Link>
     
     <Link to="optionsgrafics"><PrincipalButton src={buttonTwo} alt='button 2' /></Link> 

     
     <Link to="optionsstaff"><img src={buttonTree} alt='button 3' style={{ height: '5vw', width:'5vw', position:'absolute', right:'1vw', top: '39vw' }}/></Link>

    </div>
    </>
  );
}


export default Body
