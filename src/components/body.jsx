import React, {Link} from 'react';

import buttonOne from '../assets/static/button1.png';
import buttonTwo from '../assets/static/button2.png';
import buttonTree from '../assets/static/settings_button.png';

import { PrincipalButton } from './principal-button';

 import '../assets/styles/app.css';
 import '../assets/styles/body.css';

const Body = () => {

  


   return (
    <>
    <div className='principal-body'>



     <a href="/register-options/" ><PrincipalButton src={buttonOne} alt='button 1' /></a>
     
     <a href="/options-grafics/"><PrincipalButton src={buttonTwo} alt='button 2' /></a>

     
     <a href='/options-staff'><img src={buttonTree} alt='button 3' style={{ height: '5vw', width:'5vw', position:'absolute', right:'1vw', top: '39vw' }}/></a>

    </div>
    </>
  );
}

export default Body
