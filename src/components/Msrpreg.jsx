import React, { useRef,useState } from 'react'
import { Areas } from './areas';
import { DropdownAreas } from './areas-dropdown';
import { MenuButton } from './menu-button';
import { SecButton } from './sec-button';

import '../assets/styles/app.css';



const URL_REGISTROMRSP = "http://localhost:3001/api/v1/mrsps";




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


export default function Excessreg() {

  const [sideBar, setSideBar] = useState(true);

  const [registerArea, setRegisterArea] = useState(false);


  
  const mrspInventory = useRef(null);
  
 

  const handleRegistro = async(e)=>{
    e.preventDefault();
 

    const data = {
      "mrspInventory" : mrspInventory.current.value 
  };
  console.log(data);

  
  
  const respuestaJson= await enviarData(URL_REGISTROMRSP,data);
 
 
    
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
          <h4 className='tituloh4' >Msrp</h4>
          <div className='row'>
            <div className='col-md-6 pt-4'>

                


                  <input type="date" />




            </div>
            <div className='col-md-6 pt-4'>
              <select ref={mrspInventory} className="form-select form-select-lg mb-3 btn btn-primary" aria-label=".form-select-lg example">
                <option selected>Select Option</option>
                <option value="1">Inventory</option>                
              </select>
            </div>

          </div>


          <div className='row filaa'>
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
