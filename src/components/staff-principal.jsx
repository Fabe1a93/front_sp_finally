import React, { useState } from 'react';
import { Areas } from '../components/areas';
import { DropdownAreas } from '../components/areas-dropdown';
import { MenuButton } from '../components/menu-button'
import { SecButton } from '../components/sec-button';
import buttonTree from '../assets/static/settings_button.png';
import { useRef } from 'react';
const URL_LOGIN = "http://localhost/ws-login/login.php";




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
		
        
      
			</div>
		</div>
	)
}
