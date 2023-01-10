import React, { useState, Link } from 'react'
import { Areas } from './areas';
import { DropdownAreas } from './areas-dropdown';
import { MenuButton } from './menu-button';
import { SecButton } from './sec-button';





import '../assets/styles/app.css';

export default function Inventoryregister() {

  const [sideBar, setSideBar] = useState(true);

  const [registerArea, setRegisterArea] = useState(true);


  

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

        <div className='Contenidodollargrafc'>
        <h4 className='tituloh4' >Inventory</h4>
     
          <div className='row'>
            <div className='col-md-6 pt-4'>
                  
                  <input type="date" />

            </div>
            <div className='col-md-6 pt-4'>
              <select className="form-select form-select-lg mb-3 btn btn-primary" aria-label=".form-select-lg example">
                <option selected>Select Option</option>
                <option value="1">NB</option>                
                <option value="2">DT</option>
              </select>
            </div>

          </div>


          <div className='row filad'>
            <div className='col-md-7 pt-4'>


            </div>
            <div className='col-md-5 ml-6'>
              <button type='submit' className='btn btn-primary btn-lg mr-3'>+ Add</button>
              &nbsp;&nbsp;&nbsp;<button type='submit' className='btn btn-primary btn-lg ml-5'>Cancel</button>
            </div>
          </div>

           
            </div>
            
            
          </div>


    </>
  )
}
