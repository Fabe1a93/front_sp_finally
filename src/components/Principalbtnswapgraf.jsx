import React, { useState } from 'react'
import { AreasGr } from '../components/areasgrafics';
import { DropdownAreas } from '../components/areas-dropdown';
import { MenuButton } from '../components/menu-button'
import { SecButton } from '../components/sec-button';
import { Link } from 'react-router-dom';


export default function Principalbtnswap() {
	
	const [sideBar, setSideBar] = useState(true);

	const [registerArea, setRegisterArea] = useState(true);

	
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

  
	let areasswap = [
    {
      text: "Inventory",
      link: "swapchangetargetgraf"
    },
    {
      text: "Wh Repair",
      link: "whrepairtarget"
    },
    {
      text: "Failure",
      link: "failuretarget"
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
						{/* <DropdownAreas tittle='Change Target'>
							{
								areas.map(area => (
									<Areas link={area.link} text={area.text}/>
								))
							}	
						</DropdownAreas>
            
						<DropdownAreas tittle='Register'>
							{
								criticalAreas.map(area => (
									<Areas link={area.link} text={area.text}/>
								))
							}
						</DropdownAreas> */}

           
            <>
					
          <DropdownAreas tittle='Swap'>
            {
              areasswap.map(area => (
                <AreasGr link={area.link} text={area.text}/>
              ))
            }
          </DropdownAreas>
        </>
{/*         
         <Link class="btn btn-secondary"  to={{pathname: "/targetswapgraf" }}>Change Target</Link>
         &nbsp;&nbsp;&nbsp;
         <Link class="btn btn-secondary"  to={{pathname: "/registerswapintgraf" }}>Register</Link>            */}
					</>
				}
			</div>
		</div>
	)
}
