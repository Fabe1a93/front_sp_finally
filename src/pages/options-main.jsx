import React, { useState } from 'react';
import { Areas } from '../components/areas';
import { DropdownAreas } from '../components/areas-dropdown';
import { MenuButton } from '../components/menu-button'
import { SecButton } from '../components/sec-button';

export function OptionsMain() {
	
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
      link: "../Manualpullreg"
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
		<div className="d-flex row" >
			{
				!sideBar &&
				<>
					<div className='container row p-0' style={{"min-height": "874px", "background": "#5893D8", "width": "220px"}}>
						<SecButton onclickFunction={setRegisterArea} value={registerArea} content='Register'/>
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
									<Areas link={area.link} text={area.text}/>
								))
							}	
						</DropdownAreas>
						<DropdownAreas tittle='Critical Areas'>
							{
								criticalAreas.map(area => (
									<Areas link={area.link} text={area.text}/>
								))
							}
						</DropdownAreas>
					</>
				}
       
			</div>
      
		</div>
	)
}
