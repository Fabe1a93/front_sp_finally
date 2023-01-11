import React, { useRef,useState } from 'react'
import { Areas } from './areas';
import { DropdownAreas } from './areas-dropdown';
import { MenuButton } from './menu-button';
import { SecButton } from './sec-button';

import '../assets/styles/app.css';

const URL_REGISTROINV = "http://localhost:3001/api/v1/ctrl-inventorys";






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
  
  
  

export default function CtrlInventory() {

  const [sideBar, setSideBar] = useState(true);

  const [registerArea, setRegisterArea] = useState(false);

  
  
  const nineHundred24HrDt = useRef(null);
  const nineHundred24HrNb = useRef(null);
  const nineHundredTwentyTwo24HrDt = useRef(null);
  const nineHundredTwentyTwo24HrNb = useRef(null);
 

  const handleRegistro = async(e)=>{
    e.preventDefault();


    const data = {
      "nineHundred24HrDt" :  nineHundred24HrDt.current.value,
      "nineHundred24HrNb" :   nineHundred24HrNb.current.value,
      "nineHundredTwentyTwo24HrDt" :  nineHundredTwentyTwo24HrDt.current.value,
      "nineHundredTwentyTwo24HrNb" :  nineHundredTwentyTwo24HrNb.current.value     
  };
  console.log(data);

 
  const respuestaJson= await enviarData(URL_REGISTROINV,data);
 
     
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
        <h4 className='tituloh4' >Control Inventory</h4>
          <div className='row'>
            <div className='col-md-4 pt-4'>
        
            {/* <form action="/">
  <label>Desde
  <input ref={nineHundred24HrDt} type="date" className='form-control'/>
  </label>
  <label>Hasta
  <input ref={nineHundred24HrNb} type="date" className='form-control'/>
  </label>
  </form> */}



  <select ref={nineHundred24HrDt} className="form-select form-select-lg mb-3 btn btn-primary" aria-label=".form-select-lg example">
  <option selected>Select Week</option>
  <option value="1">Week - 1</option>
  <option value="2">Week - 2</option>
  <option value="3">Week - 3</option>
  <option value="4">Week - 4</option>
</select>

<select ref={nineHundred24HrNb} className="form-select form-select-lg mb-3 btn btn-primary" aria-label=".form-select-lg example">
  <option selected>Select Week</option>
  <option value="1">Week - 1</option>
  <option value="2">Week - 2</option>
  <option value="3">Week - 3</option>
  <option value="4">Week - 4</option>
</select>

            
            </div>
            <div className='col-md-4 pt-4'>
            <select  ref={nineHundredTwentyTwo24HrDt}  className="form-select form-select-lg mb-3 btn btn-primary" aria-label=".form-select-lg example">
  <option selected>Select Week</option>
  <option value="1">Week - 1</option>
  <option value="2">Week - 2</option>
  <option value="3">Week - 3</option>
</select>
            </div>
            <div className='col-md-4 pt-4'>
            <select ref={nineHundredTwentyTwo24HrNb} className="form-select form-select-lg mb-3 btn btn-primary" aria-label=".form-select-lg example">
  <option selected>Select Option</option>
  <option value="1">900 &le; 24hr DT </option>
 ><option value="2">900 &le; 24hr NB </option>
 ><option value="3">922 &le; 24hr DT </option>
 ><option value="4">922 &le; 24hr NB </option>
 ><option value="5">CA Scrap NB</option>
 ><option value="5">CA Scrap DT</option>
 >    
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
