import React, { useRef, useState } from 'react';
import { Areas } from './areas';
import { DropdownAreas } from './areas-dropdown';
import { MenuButton } from './menu-button';
import { SecButton } from './sec-button';
import Componentetest from "./Componentetest";
import '../assets/styles/app.css';



const URL_REGISTRO = "http://localhost:3001/api/v1/pkgs";




const enviarData = async ( url, dataapi) => {  

  
  
fetch(URL_REGISTRO,{
  method: 'POST',
  headers: {
      "Content-Type": "application/json",
  },
  body: JSON.stringify(dataapi)
})
.then(response => response.json())
.then(data => console.log('data', dataapi))
.catch(error => console.log('error:', error));
  

     //window.location = '/';
  
     
   
      
}


    
     

 


export default function Pkg() {

  const [sideBar, setSideBar] = useState(true);

  const [registerArea, setRegisterArea] = useState(false);


  //const [error,setError] = useState(null);
  const refDateDesde = useRef(null);
  const refDateHasta = useRef(null);
  const refperfomanceDkt = useRef(null);
  const refperfomanceNbk = useRef(null);

  const handleRegistro = async(e)=>{
    e.preventDefault();
   
    

    const data = {
      "perfomanceDkt" : refDateDesde.current.value,
      "perfomanceNbk" :  refDateHasta.current.value,
      "perfomanceTbt" : refperfomanceDkt.current.value,
      "artDtNb" : refperfomanceNbk.current.value
  };
  console.log(data);
  
  
  const respuestaJson= await enviarData(URL_REGISTRO,data);
 
// console.log("respuesta desde el evento", respuestaJson.conectado);
 // Assign value to a key
 
 
    
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
    <>
      <div className="d-flex row">
        {
          !sideBar &&
          <>
            <div className='container row p-0' style={{ "min-height": "874px", "background": "#5893D8", "width": "220px" }}>
              <SecButton onclickFunction={setRegisterArea} value={registerArea} content='Register' />
              <div style={{ "height": "86%" }}></div>
              <SecButton content='Sign Out' />
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
          {
            registerArea &&
            <>
              <DropdownAreas tittle='General Areas'>
                {
                  areas.map(area => (
                    <Areas link={area.link} text={area.text} />
                  ))
                }
              </DropdownAreas>
              <DropdownAreas tittle='Critical Areas'>
                {
                  criticalAreas.map(area => (
                    <Areas link={area.link} text={area.text} />
                  ))
                }
              </DropdownAreas>
            </>
          }
        </div>

        <div className='Contenidodollar'>
        
        <form method="post" >
        <h4 className='tituloh4' >PKG</h4>
          <div className='row'>
            <div className='col-md-4 pt-4'>

  {/* <form action="/">
  <label>Desde
  <input type="date" className='form-control'/>
  </label>
  <label>Hasta
  <input type="date" className='form-control'/>
  </label>
  </form> */}

            <select ref={refDateDesde} className="form-select form-select-lg mb-3 btn btn-primary" aria-label=".form-select-lg example">
  <option selected>Select Week</option>
  <option value="1">Week - 1</option>
  <option value="2">Week - 2</option>
  <option value="3">Week - 3</option>
  <option value="4">Week - 4</option>
</select>

<select ref={refDateHasta} className="form-select form-select-lg mb-3 btn btn-primary" aria-label=".form-select-lg example">
  <option selected>Select Week</option>
  <option value="1">Week - 1</option>
  <option value="2">Week - 2</option>
  <option value="3">Week - 3</option>
  <option value="4">Week - 4</option>
</select>

  {/* <label>Desde
  <input ref={refDateDesde} type="date" className='form-control'/>
  </label>
  <label>Hasta
  <input ref={refDateHasta} type="date" className='form-control'/>
  </label> */}
 

          
            </div>
            <div className='col-md-4 pt-4'>
            <select ref={refperfomanceDkt} className="form-select form-select-lg mb-3 btn btn-primary" aria-label=".form-select-lg example">
  <option selected>Select Week</option>
  <option value="1">Week - 1</option>
  <option value="2">Week - 2</option>
  <option value="3">Week - 3</option>
  <option value="4">Week - 4</option>
</select>
            </div>
            <div className='col-md-4 pt-4'>
            <select ref={refperfomanceNbk} className="form-select form-select-lg mb-3 btn btn-primary" aria-label=".form-select-lg example">
  <option selected>Select Option</option>  
  <option value="2">Performance DKT</option>
  <option value="3">Performance NBK</option>
  <option value="4">Performance TBT</option>
  <option value="5">ART DT-NB</option>  
</select>
            </div>
          </div>


          <div className='row filab'>
            <div className='col-md-7 pt-4'>
            
       
            </div>
            <div className='col-md-5 ml-6'>
            <button onClick={handleRegistro} className='btn btn-primary btn-lg mr-3'>+ Add</button>
            &nbsp;&nbsp;&nbsp;<button type='submit' className='btn btn-primary btn-lg ml-5'>Cancel</button>
            </div>
          </div>
            </form>
        </div>


      </div>

    </>
  )
}
