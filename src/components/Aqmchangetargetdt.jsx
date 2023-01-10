import React, { useState, Link } from 'react'
import { Areas } from './areas';
import { DropdownAreas } from './areas-dropdown';
import { MenuButton } from './menu-button';
import { SecButton } from './sec-button';





import '../assets/styles/app.css';

export default function Aqmchangetargetdt() {

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
        

        <div className='Contenidodollargrafc'>
        <h4 className='tituloh4' >Desktop DT Target Change</h4>
        <a href='/register-options/Aqmchangetarget'><buttom className='btn btn-primary'>NB</buttom></a>&nbsp;&nbsp;
        <a href='/register-options/Aqmchangetargetdt'><buttom className='btn btn-primary'>DT</buttom></a>

          <div className='row'>
            <div className='col-md-6 pt-4'>
            
           
      
                  <input type="date" />




            </div>
            <div className='col-md-6 pt-4'>
              <select className="form-select form-select-lg mb-3 btn btn-primary" aria-label=".form-select-lg example">
                <option selected>Select Option</option>
                <option value="1">$50.000</option>                
                <option value="2">$100.000</option>                
                <option value="3">$150.000</option>
                <option value="4">$200.000</option>
                <option value="5">$250.000</option>
                <option value="6">$300.000</option>
              </select>
            </div>

          </div>


          <div className='row filadq'>
            <div className='col-md-7 pt-4'>


            </div>
            <div className='col-md-5 '>
              <button type='submit' className='btn btn-primary btn-lg '>Save</button>
              
            </div>
          </div>

           
    


         

            
            </div>
            
            
          </div>


          

    </>
  )
}
