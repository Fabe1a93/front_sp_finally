import React, { useState } from 'react'
import { Areas } from './areas';
import { DropdownAreas } from './areas-dropdown';
import { MenuButton } from './menu-button';
import { SecButton } from './sec-button';

import '../assets/styles/app.css';

export default function Excess() {

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

        <div className='Contenidodollargrafexcess'>
        <h4 className='tituloh4' >Excess</h4>
          <div className='row'>
            <div className='col-md-12 pt-4'>
            
           

            <iframe src='//charts.hohli.com/embed.html?created=1671564920589#w=640&h=480&d={"containerId":"chart","dataTable":{"cols":[{"label":"A","type":"string","p":{}},{"label":"B","type":"number","p":{}},{"label":"Genre","type":"number","p":{}},{"label":"Total","type":"number"}],"rows":[{"c":[{"v":"5/26/2022"},{"v":8000},{"v":11000},{"v":3600}]},{"c":[{"v":"5/27/2022"},{"v":3570},{"v":11000},{"v":3600}]},{"c":[{"v":"5/28/2022"},{"v":2000},{"v":11000},{"v":3600}]},{"c":[{"v":"5/29/2022"},{"v":11000},{"v":11000},{"v":3600}]},{"c":[{"v":"5/30/2022"},{"v":7000},{"v":11000},{"v":3600}]},{"c":[{"v":"6/01/2022"},{"v":7000},{"v":11000},{"v":3600}]},{"c":[{"v":"6/01/2022"},{"v":null},{"v":11000},{"v":3600}]},{"c":[{"v":"6/02/2022"},{"v":null},{"v":11000},{"v":3600}]},{"c":[{"v":"6/03/2022"},{"v":null},{"v":11000},{"v":3600}]},{"c":[{"v":"6/04/2022"},{"v":null},{"v":11000},{"v":3600}]},{"c":[{"v":"6/05/2022"},{"v":null},{"v":11000},{"v":3600}]},{"c":[{"v":"6/06/2022"},{"v":null},{"v":11000},{"v":3600}]},{"c":[{"v":"6/07/2022"},{"v":null},{"v":11000},{"v":3600}]}]},"options":{"backgroundColor":{"fill":"#ffffff"},"hAxis":{"useFormatFromData":true,"textStyle":{"color":"#434343","fontSize":12},"viewWindow":{"max":null,"min":null},"minValue":null,"maxValue":null},"legacyScatterChartLabels":true,"legend":"in","useFirstColumnAsDomain":false,"vAxes":[{"title":null,"minValue":null,"maxValue":null,"viewWindow":{"max":null,"min":null},"useFormatFromData":true,"logScale":false},{"viewWindow":{"max":null,"min":null},"minValue":null,"maxValue":null,"useFormatFromData":true,"logScale":false}],"type":"line","booleanRole":"certainty","series":[{"type":"bars"}],"width":640,"height":480},"state":{},"view":{"columns":null,"rows":null},"isDefaultVisualization":false,"chartType":"ComboChart"}' frameborder='0' width='650' height='490'></iframe>
     

            
            </div>
            
            
          </div>


          

        </div>


      </div>

    </>
  )
}
