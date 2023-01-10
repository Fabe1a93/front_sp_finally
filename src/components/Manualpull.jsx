import React, { useState } from 'react'
import { Areas } from './areas';
import { DropdownAreas } from './areas-dropdown';
import { MenuButton } from './menu-button';
import { SecButton } from './sec-button';





import '../assets/styles/app.css';

export default function Manualpull() {

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

        <div className='Contenidodollargrafman'>
        <h4 className='tituloh4' >Manual Pull</h4>
          <div className='row'>
            <div className='col-md-12 pt-4'>
            

           
          

            <iframe src='//charts.hohli.com/embed.html?created=1671560673781#w=640&h=480&d={"containerId":"chart","dataTable":{"cols":[{"label":"Genre","type":"string","p":{}},{"label":"Total","type":"number"}],"rows":[{"c":[{"v":"5/26/2022"},{"v":750}]},{"c":[{"v":"5/27/2022"},{"v":250}]},{"c":[{"v":"5/28/2022"},{"v":350}]},{"c":[{"v":"5/29/2022"},{"v":700}]},{"c":[{"v":"5/30/2022"},{"v":900}]},{"c":[{"v":"6/01/2022"},{"v":800}]},{"c":[{"v":"6/02/2022"},{"v":700}]}]},"options":{"hAxis":{"useFormatFromData":true,"viewWindow":null,"minValue":null,"maxValue":null,"viewWindowMode":null},"legacyScatterChartLabels":true,"vAxes":[{"useFormatFromData":true,"viewWindow":{"max":null,"min":null},"minValue":null,"maxValue":null},{"useFormatFromData":true,"viewWindow":{"max":null,"min":null},"minValue":null,"maxValue":null}],"isStacked":false,"booleanRole":"certainty","legend":"right","width":640,"height":480,"series":{"0":{"color":"#b7b7b7"}},"titleTextStyle":{"color":"#666666","fontSize":12,"bold":true}},"state":{},"view":{"columns":null,"rows":null},"isDefaultVisualization":false,"chartType":"ColumnChart"}' frameborder='0' width='650' height='490'></iframe>
     


         

            
            </div>
            
            
          </div>


          

        </div>


      </div>

    </>
  )
}
