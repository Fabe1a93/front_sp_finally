import React, { useRef,useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MenuButton } from '../components/menu-button'
import { SecButton } from '../components/sec-button';
import buttonTree from '../assets/static/settings_button.png';
import '../assets/styles/app.css';



const URL_LOGIN = "http://localhost/ws-login/login.php";


const URL_USERS = "http://localhost:3000/api/v1/users/";
   
   
const URL_CONSULTA = "http://localhost:3000/api/v1/users/";

  
  
  const URL_LOGINREC = 'http://localhost:3000/api/v1/users';  

 
 
 


  

  // const peticion = fetch(URL_CONSULTA);
  
  // peticion
  // .then( resp => resp.json())
  // .then ( ({ data }) => {

  //   const respuestafin = data.rows;  
  //   //  const { name } = data.rows[0].name;  
  //   //const select = document.createElement('select');     
  //   //select.value = data.rows[0].name;  
  //   //document.body.append( select )

  //   return respuestafin;

    
  // }) 
  // .catch (console.warn);
 

  

//  document.querySelector('#resultado').innerHTML = html;



  const enviarData = async ( url,datos) => {  

    
    
    const {userref} = datos;
   
    const urlfin = url + "/" + userref;

    const datosuserlogin = {};
    
  
    const resp = await fetch ( urlfin,
      {
              method: 'GET',             
              headers: {
                  'Content-Type': 'application/json'
              }
      });
      
     
      
      const json = await resp.json();

      const passuser = json.data.password;

      

      sessionStorage.setItem("username", json.data.name);
      sessionStorage.setItem("iduser", json.data.id);
     

      return passuser;
      
                   
    }



   

export function OptionsStaff() {
	
	const [sideBar, setSideBar] = useState(false);

	const [registerArea, setRegisterArea] = useState(true);
  


  

  
   const [valor, setValores] = useState(true);
    
  useEffect(() => {

    fetch(URL_CONSULTA)
    .then((response) => response.json())
    .then((data) => {

   
   const total = data.data.count;
   for(let i=0; i<total; i++){
    $("#myselect").append("<option value='"+data.data.rows[i].id+"'>"+data.data.rows[i].name+"</option>");
   }

    
      
    });

  }, []);
  
    
  
  


  const  refUsuario = useRef(null);
  const refClave = useRef(null);
 
  
  const handleLogin = async(e)=>{
    e.preventDefault();

    
    const data = {
      "userref" : refUsuario.current.value
  };
  


    
  
  const respuestaJson= await enviarData(URL_LOGINREC,data);
  
  
  


  if (refClave.current.value == respuestaJson){    
   window.location = '/';
  } 
  else{
    alert('Usuario o password errado')
  } 
    
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
					<div className='container row p-0' style={{"min-height": "874px", "background": "#5893D8", "width": "220px"}}>
						<SecButton onclickFunction={setRegisterArea} value={registerArea} content='Staff'/>
						<div style={{"height": "86%"}}></div>
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
		
        <div className='row'>
                <div className='col-sm-10 offset-1 mt-5'>
                    <div className="card">
                        <div className="card-header text-center">
                        <span>¡Enter Your Credentials!</span>
                        </div>
                        <div className='card-body'>
                            <div className="input-group mb-3" >
                                <span className="input-group-text" id="basic-addon1">
                                👤 <strong>User: </strong>
                                </span>

                                <select id="myselect" name="myselect" ref={refUsuario}  className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">                            
                                </select>
                                {/* <input
                                    type="email"
                                    className="form-control"
                                    placeholder=""
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    ref={refUsuario}
                                /> */}
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">
                                  🔒 <strong>Password: </strong>
                                </span>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder=""
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    ref={refClave}
                                />
                            </div>
    
                        
                            <div className='botonera'>
                            <button onClick={handleLogin} className="btn btn-primary text-dark btn-sm btn-block"><strong>Ok</strong></button>&nbsp;&nbsp;
                            <button type="submit" className="btn btn-primary text-dark btn-sm btn-block"><strong>Cancel</strong></button>
                            
                             </div>


                             <Link to="staffformulario">Crear una nueva cuenta</Link>
                             <div id="resultado"></div>
                        </div>
                    </div>
                </div>
            </div>

      
			</div>
		</div>
	)
}
