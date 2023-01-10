import React, { useState } from 'react';
import { AreasGr } from '../components/areasgrafics';
import { DropdownAreas } from '../components/areas-dropdown';
import { MenuButton } from '../components/menu-button'
import { SecButton } from '../components/sec-button';

export function OptionsGrafics() {
	
	const [sideBar, setSideBar] = useState(true);

	const [registerArea, setRegisterArea] = useState(false);

	let areas = [
    {
      text: "PKG",
      link: "Pkggraf"
    },
    {
      text: "MiniDollar",
      link: "MiniDollargraf"
    },
    {
      text: "Kitting",
      link: "Kittingraf"
    },
    {
      text: "Ctrl Inventory",
      link: "Controlinventorygraf"
    },
    {
      text: "Head Count",
      link: "Headcountgraf"
    },
  ]

  let criticalAreas = [
    {
      text:"Manual Pull",
      link: "Manual Pull"
    },
    {
      text:"Planares Modular",
      link: "Planares Modular"
    },
    {
      text:"Excess 410/420",
      link: "Excess410420"
    },
    {text: "Swap",
      link: "Principalbtnswapgraf"
    },
    {text: "AQM",
      link: "Principalbtnaqm"
    },
    {text: "MRSP",
      link: "Msrp"
    }
  ]
	
	return (
		<div className="d-flex row">
			{
				!sideBar &&
				<>
					<div className='container row p-0' style={{"min-height": "874px", "background": "#5893D8", "width": "220px"}}>
						<SecButton onclickFunction={setRegisterArea} value={registerArea} content='WH KPI´S'/>
						<div style={{"height": "86%"}}></div>
						<SecButton content='Sign Out'/>
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
									<AreasGr link={area.link} text={area.text}/>
								))
							}	
						</DropdownAreas>
						<DropdownAreas tittle='Critical Areas'>
							{
								criticalAreas.map(area => (
									<AreasGr link={area.link} text={area.text}/>
								))
							}
						</DropdownAreas>
					</>
				}
			</div>
		</div>
	)
}
