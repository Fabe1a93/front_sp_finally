import React, { useRef, useState } from 'react'
import { Areas } from './areas';
import { DropdownAreas } from './areas-dropdown';
import { MenuButton } from './menu-button';
import { SecButton } from './sec-button';

import '../assets/styles/app.css';




const URL_REGISTROKIT = "http://localhost:3001/api/v1/kittings";




const enviarData = async ( url, dataapi) => {  

    
fetch(url,{
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




export default function Kitting() {

  const [sideBar, setSideBar] = useState(true);

  const [registerArea, setRegisterArea] = useState(false);




  const effectivenessDt = useRef(null);
  const effectivenessNb = useRef(null);
  const moEffecDt = useRef(null);
  const moEffecNb = useRef(null);
 

  const handleRegistro = async(e)=>{
    e.preventDefault();
 

    const data = {
      "effectivenessDt" : 55,
      "effectivenessNb" :  58,
      "moEffecDt" : 88,
      "moEffecNb" : 884     
  };
  console.log(data);

  //moEffecNb.current.value
  
  
  const respuestaJson= await enviarData(URL_REGISTROKIT,data);
 
 
    
  }




  let areas = [
    {
      text: "PKG",
      link: "/"
    },
    {
      text: "MiniDollar",
      link: "/"
    },
    {
      text: "Kitting",
      link: "/"
    },
    {
      text: "Ctrl Inventory",
      link: "/"
    },
    {
      text: "Head Count",
      link: "/"
    },
  ]

  let criticalAreas = [
    {
      text: "Manual Pull",
      link: "/"
    },
    {
      text: "Planares Modular",
      link: "/"
    },
    {
      text: "Excess 410/420",
      link: "/"
    },
    {
      text: "Swap",
      link: "/"
    },
    {
      text: "AQM",
      link: "/"
    },
    {
      text: "MRSP",
      link: "/"
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
        <h4 className='tituloh4' >Kitting</h4>
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


<select ref={effectivenessDt} className="form-select form-select-lg mb-3 btn btn-primary" aria-label=".form-select-lg example">
  <option selected>Select Week</option>
  <option value="1">Week - 1</option>
  <option value="2">Week - 2</option>
  <option value="3">Week - 3</option>
  <option value="4">Week - 4</option>
</select>

<select ref={effectivenessNb} className="form-select form-select-lg mb-3 btn btn-primary" aria-label=".form-select-lg example">
  <option selected>Select Week</option>
  <option value="1">Week - 1</option>
  <option value="2">Week - 2</option>
  <option value="3">Week - 3</option>
  <option value="4">Week - 4</option>
</select>



            
            </div>
            <div className='col-md-4 pt-4'>
            <select ref={moEffecDt} className="form-select form-select-lg mb-3 btn btn-primary" aria-label=".form-select-lg example">
  <option selected>Select Week</option>
  <option value="1">Week - 1</option>
  <option value="2">Week - 2</option>
  <option value="3">Week - 3</option>
  <option value="4">Week - 4</option>
</select>
            </div>
            <div className='col-md-4 pt-4'>
            <select ref={moEffecNb} className="form-select form-select-lg mb-3 btn btn-primary" aria-label=".form-select-lg example">
  <option selected>Select Option</option>
  <option value="1">Effectiveness DT</option>
  <option value="2">Effectiveness NB</option>
  <option value="3">MO Effec NB</option>
  <option value="4">MO Effec DT</option>  
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

        </div>


      </div>

    </>
  )
}
