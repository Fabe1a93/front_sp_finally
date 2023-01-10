import React, { useState } from 'react'
import { Areas } from './areas';
import { DropdownAreas } from './areas-dropdown';
import { MenuButton } from './menu-button';
import { SecButton } from './sec-button';

import '../assets/styles/app.css';

export default function Aqm() {

  const [sideBar, setSideBar] = useState(true);

  const [registerArea, setRegisterArea] = useState(false);


  

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

        <div className='Contenidodollargrafmsrp'>
        <h4 className='tituloh4' >MRSP</h4>
          <div className='row'>
            <div className='col-md-12 pt-4'>
            
            <iframe src='//charts.hohli.com/embed.html?created=1671568023666#w=640&h=480&d={"containerId":"chart","dataTable":{"cols":[{"label":"A","type":"string","p":{}},{"label":"Genre","type":"number","p":{}},{"label":"Serie","type":"number"}],"rows":[{"c":[{"v":"5/26/2022"},{"v":87000},{"v":120000}]},{"c":[{"v":"5/27/2022"},{"v":80000},{"v":120000}]},{"c":[{"v":"5/28/2022"},{"v":120000},{"v":120000}]},{"c":[{"v":"5/29/2022"},{"v":32000},{"v":120000}]},{"c":[{"v":"5/30/2022"},{"v":null},{"v":120000}]},{"c":[{"v":"6/01/2022"},{"v":null},{"v":120000}]},{"c":[{"v":"6/02/2022"},{"v":null},{"v":120000}]},{"c":[{"v":"6/03/2022"},{"v":null},{"v":120000}]},{"c":[{"v":"6/04/2022"},{"v":null},{"v":120000}]},{"c":[{"v":"6/05/2022"},{"v":null},{"v":120000}]},{"c":[{"v":"6/06/2022"},{"v":null},{"v":120000}]},{"c":[{"v":"6/07/2022"},{"v":null},{"v":120000}]}]},"options":{"hAxis":{"useFormatFromData":true,"titleTextStyle":{"color":"#434343","fontSize":12,"italic":true},"viewWindow":{"max":null,"min":null},"minValue":null,"maxValue":null},"legacyScatterChartLabels":true,"legend":"right","legendTextStyle":{"color":"#666666","fontSize":12},"useFirstColumnAsDomain":false,"vAxes":[{"title":null,"minValue":null,"maxValue":null,"viewWindow":{"max":null,"min":null},"useFormatFromData":true},{"viewWindow":{"max":null,"min":null},"minValue":null,"maxValue":null,"useFormatFromData":true}],"type":"line","booleanRole":"certainty","series":[{"type":"bars","color":"#38761d"}],"width":640,"height":480},"state":{},"view":{"columns":null,"rows":null},"isDefaultVisualization":false,"chartType":"ComboChart"}' frameborder='0' width='650' height='490'></iframe>
     

            
            </div>
            
            
          </div>


          

        </div>


      </div>

    </>
  )
}
