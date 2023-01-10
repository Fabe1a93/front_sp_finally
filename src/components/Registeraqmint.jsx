import React, { useState } from 'react';
import { Areas } from '../components/areas';
import { DropdownAreas } from '../components/areas-dropdown';
import { MenuButton } from '../components/menu-button'
import { SecButton } from '../components/sec-button';

export  default function Registerswapint() {
	
	const [sideBar, setSideBar] = useState(true);

	const [registerArea, setRegisterArea] = useState(true);

	let areas = [
    {
      text: "Inventory",
      link: "Inventory"
    },
    {
      text: "Wh / Repair",
      link: "Wh / Repair"
    },
    {
      text: "Failure",
      link: "Failure"
    },    
  ]

  
	
	return (
		<div className="d-flex row">
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
					
						<DropdownAreas tittle='Swap'>
							{
								areas.map(area => (
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
