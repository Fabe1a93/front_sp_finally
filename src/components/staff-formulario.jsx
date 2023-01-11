import React, { useState } from 'react';
import { Areas } from '../components/areas';
import { DropdownAreas } from '../components/areas-dropdown';
import { MenuButton } from '../components/menu-button'
import { SecButton } from '../components/sec-button';
import buttonTree from '../assets/static/settings_button.png';
import { useRef } from 'react';
import user from '../assets/static/usuario.png';



const URL_REGISTRO = "http://localhost:3001/api/v1/users";

const enviarData = async ( url, dataapi) => {  

  
  fetch(URL_REGISTRO,{
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(dataapi)
  })
  .then(response => response.json())
  // .then(data => console.log('data', dataapi))
  .then(alert('Usuario registrado correctamente!'))
  .catch(error => console.log('error:', error));
    
  
       //window.location = '/';
    
       
     
        
  }
  


export default function Staffformulario() {
	
	const [sideBar, setSideBar] = useState(false);

	const [registerArea, setRegisterArea] = useState(true);
  
  
  //const name = useRef(null);
  const email = useRef(null);
  const asignedArea = useRef(null);
  const password = useRef(null);
  const userType = useRef(null);
  const isAdmin = useRef(null);

 



  
  const handleRegistro = async(e)=>{
    e.preventDefault();
 
    

    const data = {
      "name" : email.current.value,
      "email" : email.current.value,
      "asignedArea" : asignedArea.current.value,
      "password" : password.current.value,
      "userType" : userType.current.value,
      "isAdmin": true           
  };
  console.log(data);

    
  
  const respuestaJson= await enviarData(URL_REGISTRO,data);
 
 
    
  }


  

	
  let areas = [
    {
      text: "PKG",
      link: "../Pkg"
    },
    {
      text: "MiniDollar",
      link: "../MiniDollar"
    },
    {
      text: "Kitting",
      link: "../Kitting"
    },
    {
      text: "Ctrl Inventory",
      link: "../Ctrl Inventory"
    },
    {
      text: "Head Count",
      link: "../Head Count"
    },
  ]

  let criticalAreas = [
    {
      text: "Manual Pull",
      link: "../Manual Pull"
    },
    {
      text: "Planares Modular",
      link: "../Planares Modular"
    },
    {
      text: "Excess 410/420",
      link: "../Excess410420"
    },
    {
      text: "Swap",
      link: "../Swap"
    },
    {
      text: "AQM",
      link: "../Aqm"
    },
    {
      text: "MRSP",
      link: "../Msrp"
    }
  ]
	
	return (
		<div className="d-flex row">
			{
				!sideBar &&
				<>
					<div className='container row p-0' style={{"min-height": "854px", "background": "#5893D8", "width": "220px"}}>
						<SecButton onclickFunction={setRegisterArea} value={registerArea} content='Create'/>
            <SecButton onclickFunction={setRegisterArea} value={registerArea} content='Users'/>
						<div style={{"height": "79%"}}></div>
						<SecButton content='Sign Out'/>
					</div>
				</>
			}
			<div className="position-relative">
				{
					sideBar &&
					<MenuButton onclickFunction={setSideBar} value={sideBar}></MenuButton>
				}
			</div>
			
      <div className='position-absolute d-flex justify-content-end'>
	
        <div className='formnewuser'>
        <h4 className='titulocreate'>Create New User</h4>
        </div>
        <div className='row formu'>
           <div className='col-md-2'>
           
           <img src={user} width="75%"/>
          
           </div>
           <div className='col-md-2'>
           <label>Username</label><br/>
           <label className='mt-4'>Password</label><br/>
           <label className='mt-4'>Attributes</label><br/>
           <label className='mt-5 marsu'>Assign area</label><br/>
           <label className='mt-6 marsupe'>Critical area</label><br/>
           </div>
           <div className='col-md-3 ml-5'>
         
 
<input ref={email} placeholder='xxxxx@example' className='form-control' width="15vw"/>
<input ref={password} placeholder='xxxxx'  className='form-control mt-2' type="password" width="15%"/>
<select ref={userType} className='form-control mt-2' size="3">
  <option value="0">Create new user</option>
  <option value="1">Edit user</option>
</select>
<select ref={isAdmin} className='form-control mt-2' >
  <option value={true}>Critical Cost</option>  
</select>
<select ref={asignedArea} className='form-control mt-2' >
  <option value="Aqm">Aqm</option>
  <option value="CtrlInventory">CtrlInventory</option>
  <option value="Excess">Excess</option>
  <option value="Kitting">Kitting</option>
  <option value="LaborHeadCount">LaborHeadCount</option>
  <option value="ManualPull">ManualPull</option>
  <option value="MiniDollar">MiniDollar</option>
  <option value="Mrsp">Mrsp</option>
  <option value="Pkg">Pkg</option>
  <option value="PlanaresModular">PlanaresModular</option>
  <option value="Swap">Swap</option>

</select>
        </div>

        <div className='botoneraform'>
                            <button onClick={handleRegistro} className="btn btn-primary text-dark btn-sm btn-block"><strong>Save</strong></button>&nbsp;&nbsp;
                            <button type='submit' className="btn btn-primary text-dark btn-sm btn-block"><strong>Cancel</strong></button>
                            
                             </div>  
                             <a href="/options-staff">Ingrese a su cuenta</a>

			</div>
		</div>
    </div>
	)
}
