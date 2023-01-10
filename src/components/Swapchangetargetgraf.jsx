import React, { useState, Link } from 'react'
import { Areas } from './areas';
import { DropdownAreas } from './areas-dropdown';
import { MenuButton } from './menu-button';
import { SecButton } from './sec-button';





import '../assets/styles/app.css';

export default function Swapchangetarget() {

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

        <div className='Contenidodollargrafcswap'>
        <h4 className='tituloh4' >Swap Inventory Desktop</h4>
        <a href='/options-grafics/swapchangetargetgraf'><buttom className='btn btn-primary'>Desktop</buttom></a>&nbsp;&nbsp;
        <a href='/options-grafics/swapchangetargetgrafntb'><buttom className='btn btn-primary'>Notebook</buttom></a>

          <div className='row'>
            <div className='col-md-12'>
            
           
            <iframe src='//charts.hohli.com/embed.html?created=1672005011868#w=640&h=480&d={"containerId":"chart","dataTable":{"cols":[{"label":"A","type":"string","p":{}},{"label":"Genre","type":"number","p":{}},{"label":"Total","type":"number"}],"rows":[{"c":[{"v":"5/26/2022"},{"v":70000},{"v":140000}]},{"c":[{"v":"5/27/2022"},{"v":55000},{"v":140000}]},{"c":[{"v":"5/28/2022"},{"v":55000},{"v":140000}]},{"c":[{"v":"5/29/2022"},{"v":141000},{"v":140000}]},{"c":[{"v":"5/30/2022"},{"v":30000},{"v":140000}]},{"c":[{"v":"6/01/2022"},{"v":145000},{"v":140000}]},{"c":[{"v":"6/02/2022"},{"v":130000},{"v":140000}]},{"c":[{"v":"6/03/2022"},{"v":null},{"v":140000}]},{"c":[{"v":"6/04/2022"},{"v":null},{"v":140000}]},{"c":[{"v":"6/05/2022"},{"v":null},{"v":140000}]},{"c":[{"v":"6/06/2022"},{"v":null},{"v":140000}]},{"c":[{"v":"6/07/2022"},{"v":null},{"v":140000}]}]},"options":{"hAxis":{"useFormatFromData":true,"viewWindow":{"max":null,"min":null},"minValue":null,"maxValue":null},"legacyScatterChartLabels":true,"legend":"right","vAxes":[{"useFormatFromData":true,"viewWindow":{"max":null,"min":null},"minValue":null,"maxValue":null},{"useFormatFromData":true,"viewWindow":{"max":null,"min":null},"minValue":null,"maxValue":null}],"type":"line","booleanRole":"certainty","series":[{"type":"bars"}],"width":640,"height":480},"state":{},"view":{"columns":null,"rows":null},"isDefaultVisualization":false,"chartType":"ComboChart"}' frameborder='0' width='650' height='490'></iframe>


            </div>
           

          </div>


         
           
    


         

            
            </div>
            
            
          </div>


          

    </>
  )
}
