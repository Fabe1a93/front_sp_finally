import React, { useState } from 'react'
import { Areas } from './areas';
import { DropdownAreas } from './areas-dropdown';
import { MenuButton } from './menu-button';
import { SecButton } from './sec-button';

import '../assets/styles/app.css';

export default function Pkg() {

  const [sideBar, setSideBar] = useState(true);

  const [registerArea, setRegisterArea] = useState(false);


  
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

        <div className='Contenidodollarheadgraf'>
          <h4 className='titulohead' >Head</h4>
          <div className='row'>
            <div className='col-md-12'>



            <iframe src='//charts.hohli.com/embed.html?created=1672168370808#w=640&h=480&d={"containerId":"chart","dataTable":{"cols":[{"label":"A","type":"string","p":{}},{"label":"Genre","type":"number","p":{}},{"label":"Total","type":"number"}],"rows":[{"c":[{"v":"26/5/2022"},{"v":4},{"v":6}]},{"c":[{"v":"27/5/2022"},{"v":5},{"v":6}]},{"c":[{"v":"28/5/2022"},{"v":4},{"v":6}]},{"c":[{"v":"29/5/2022"},{"v":6},{"v":6}]},{"c":[{"v":"30/5/2022"},{"v":1},{"v":6}]},{"c":[{"v":"01/6/2022"},{"v":6},{"v":6}]},{"c":[{"v":"02/6/2022"},{"v":null},{"v":6}]},{"c":[{"v":"03/6/2022"},{"v":null},{"v":6}]},{"c":[{"v":"04/6/2022"},{"v":null},{"v":6}]},{"c":[{"v":"05/6/2022"},{"v":null},{"v":6}]},{"c":[{"v":"06/6/2022"},{"v":null},{"v":6}]},{"c":[{"v":"07/6/2022"},{"v":null},{"v":6}]}]},"options":{"hAxis":{"useFormatFromData":true,"viewWindow":{"max":null,"min":null},"minValue":null,"maxValue":null},"legacyScatterChartLabels":true,"legend":"right","vAxes":[{"useFormatFromData":true,"viewWindow":{"max":null,"min":null},"minValue":null,"maxValue":null},{"useFormatFromData":true,"viewWindow":{"max":null,"min":null},"minValue":null,"maxValue":null}],"type":"line","booleanRole":"certainty","series":[{"type":"bars"}],"width":640,"height":480},"state":{},"view":{"columns":null,"rows":null},"isDefaultVisualization":false,"chartType":"ComboChart"}' frameborder='0' width='650' height='490'></iframe>




            </div>


          </div>


          {/* <div className='row filaf'>
            <div className='col-md-7 pt-4'>


            </div>
            <div className='col-md-5 ml-6'>
              <button type='submit' className='btn btn-primary btn-lg mr-3'>+ Add</button>
              &nbsp;&nbsp;&nbsp;<button type='submit' className='btn btn-primary btn-lg ml-5'>Cancel</button>
            </div>
          </div> */}

        </div>


      </div>

    </>
  )
}
