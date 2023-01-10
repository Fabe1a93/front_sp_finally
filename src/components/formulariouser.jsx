import React, { useState } from 'react';
import { Areas } from '../components/areas';
import { DropdownAreas } from '../components/areas-dropdown';
import { MenuButton } from '../components/menu-button'
import { SecButton } from '../components/sec-button';
import buttonTree from '../assets/static/settings_button.png';
import { useRef } from 'react';
const URL_LOGIN = "http://localhost/ws-login/login.php";






const updateuser = () => {
  alert('¡ Update User !');
}



const enviarData = async ( url, data) => {

  const resp = await fetch ( url,
      {
              method: 'POST',
              body: JSON.stringify(data),
              headers: {
                  'Content-Type': 'application/json'
              }
      });
  
      //console.log(resp);
      const json = await resp.json();
      //console.log(json);
  
      return json;
      
  }

export default function Staffprincipal() {
	
	const [sideBar, setSideBar] = useState(false);

	const [registerArea, setRegisterArea] = useState(true);
  const  refUsuario = useRef(null);
     const refClave = useRef(null);


     const handleLogin= async()=>{
      const data = {
          "usuario" : refUsuario.current.value,
          "clave" :  refClave.current.value            
      };
      console.log(data);
     const respuestaJson= await enviarData(URL_LOGIN,data);
     console.log("respuesta desde el evento", respuestaJson.conectado);
     //props.acceder( respuestaJson.conectado)
   }

	let areas = [
    {
      text: "PKG",
      link: "Pkg"
    },
    {
      text: "MiniDollar",
      link: "MiniDollar"
    },
    {
      text: "Kitting",
      link: "Kitting"
    },
    {
      text: "Ctrl Inventory",
      link: "Ctrl Inventory"
    },
    {
      text: "Head Count",
      link: "Head Count"
    },
  ]

  let criticalAreas = [
    {
      text:"Manual Pull",
      link: "Manualpullreg"
    },
    {
      text:"Planares Modular",
      link: "PlanaresModularreg"
    },
    {
      text:"Excess 410/420",
      link: "Excessreg"
    },
    {text: "Swap",
      link: "Principalbtnswap"
    },
    {text: "AQM",
      link: "Principalbtnaqm"
    },
    {text: "MRSP",
      link: "Msrpreg"
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
      <div className='frmtable'>

     <div className='row'>
        <div className='col-md-3'>
          
        </div>   
        <div className='col-md-3'>
        
        </div> 
         <div className='col-md-3'>
        
        </div>  
        <div className='col-md-3 mt-1 ml-1 mr-5 mb-1'>
        <div className="form-group has-search">
          <span className="fa fa-search form-control-feedback iconofa"></span>
          <input type="text"  class="form-control" placeholder="   Search..."/>
        </div>
        </div>   
     </div>
  
     
     {/* <button className="btn btn-primary" onClick={updateuser}>
        Update User
      </button> */}
    
      <button type="button" class="btn btn-success m-btn m-btn--custom" id="m_sweetalert_demo_1">
                    Update User
                </button>

                <button type="button" class="btn btn-danger m-btn m-btn--custom" id="m_sweetalert_demo_9">
                    Delete User?
                </button>                
                <button type="button" class="btn btn-info m-btn m-btn--custom" id="m_sweetalert_demo_1_1">
                    User Delete
                </button> 

                <button type="button" class="btn btn-danger m-btn m-btn--custom" id="m_sweetalert_demo_8">
                    Close the Session?
                </button>
                
                 <button type="button" class="btn btn-danger m-btn m-btn--custom" id="m_sweetalert_demo_81">
                    Verify
                </button>
                 

                <button type="button" class="btn btn-success m-btn m-btn--custom" id="m_sweetalert_demo_82">
                    Succesfully create
                </button>

                
                
                
      <table className="table table-striped">      
  <thead>
    <tr>
     
      <th className="text-center" scope="col">User</th>
      <th className="text-center" scope="col">Password</th>
      <th className="text-center" scope="col">Create Date</th>
      <th className="text-center" scope="col">Last Update</th>
      <th className="text-center" scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td>carlosperez@corre.com</td>
      <td>xsdsda</td>
      <td>1/19/2022</td>
      <td>2/19/2022</td>
      <td><a href="#victorModal" role="button" data-toggle="modal"><div className='divuno'>👤</div></a><a href="#victorModalpass" role="button" data-toggle="modal"><div className='divdos'>🔒</div></a><div className='divtres'>🗑️</div></td>
    </tr>
    <tr>
    
      <td>juanhurtado@correo.com</td>
      <td>sdfghjtj</td>
      <td>1/19/2022</td>
      <td>2/19/2022</td>
      <td><a href="#victorModal" role="button" data-toggle="modal"><div className='divuno'>👤</div></a><a href="#victorModalpass" role="button" data-toggle="modal"><div className='divdos'>🔒</div></a><div className='divtres'>🗑️</div></td>
    </tr>
    <tr>
      
      <td>marcojose@correo.com</td>
      <td>xzcoizxka</td>
      <td>1/19/2022</td>
      <td>2/19/2022</td>
      <td><a href="#victorModal" role="button" data-toggle="modal"><div className='divuno'>👤</div></a><a href="#victorModalpass" role="button" data-toggle="modal"><div className='divdos'>🔒</div></a><div className='divtres'>🗑️</div></td>
     
    </tr>
    <tr>
    
      <td>joseroberto@correo.com</td>
      <td>xzcoizxka</td>
      <td>1/19/2022</td>
      <td>2/19/2022</td>
      <td><a href="#victorModal" role="button" data-toggle="modal"><div className='divuno'>👤</div></a><a href="#victorModalpass" role="button" data-toggle="modal"><div className='divdos'>🔒</div></a><div className='divtres'>🗑️</div></td>
     
    </tr>
  </tbody>
</table>



<ul class="pagination">
  <li class="page-item"><a class="page-link" href="#">Previous</a></li>
  <li class="page-item"><a class="page-link" href="#">1</a></li>
  <li class="page-item"><a class="page-link" href="#">2</a></li>
  <li class="page-item"><a class="page-link" href="#">3</a></li>
  <li class="page-item"><a class="page-link" href="#">Next</a></li>
</ul>
        </div>


        <div id="victorModal" class="modal fade">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">Change User</h4>
            </div>
            <div class="modal-body">
               
            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">
                                👤 <strong>Old User: </strong>
                                </span>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder=""
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    ref={refUsuario}
                                />
                            </div>
                            <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">
                                👤 <strong>New User: </strong>
                                </span>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder=""
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    ref={refUsuario}
                                />
                            </div>
                            <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">
                                👤 <strong>Confirm User: </strong>
                                </span>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder=""
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    ref={refUsuario}
                                />
                            </div>
          
                       
            </div>
            <div class="modal-footer">
                
                <button type="button" class="btn btn-primary">Save</button>
            </div>
        </div>
    </div>
</div>


<div id="victorModalpass" class="modal fade">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">Change Password</h4>
            </div>
            <div class="modal-body">
               
            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">
                                👤 <strong>Old password: </strong>
                                </span>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder=""
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    ref={refUsuario}
                                />
                            </div>
                            <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">
                                👤 <strong>New password: </strong>
                                </span>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder=""
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    ref={refUsuario}
                                />
                            </div>
                            <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">
                                👤 <strong>Confirm password: </strong>
                                </span>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder=""
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    ref={refUsuario}
                                />
                            </div>
          
                       
            </div>
            <div class="modal-footer">
                
                <button type="button" class="btn btn-primary">Save</button>
            </div>
        </div>
    </div>
</div>

      
			</div>
		</div>
	)
}
