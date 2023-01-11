import React from 'react';
import '../assets/styles/dropdown-areas.css';
const DropdownAreas = (props) => {
    return (
         
 
    
<div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" style={{marginRight: 1 + 'em'}} role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
  {props.tittle}
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
  { props.children }
  </ul>
</div>



    )
}

export {
    DropdownAreas
}