
import '../assets/styles/dropdown-areas.css';
const DropdownAreas = (props) => {
    return (
         
 
<div class="dropdown show">
    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    {props.tittle}
    </a>
  
    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    { props.children }
    </div>
    &nbsp;&nbsp; 
  </div>



    )
}

export {
    DropdownAreas
}