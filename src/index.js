 import './assets/styles/main.scss';
// import React from 'react'; 
// import ReactDOM from 'react-dom/client';
// import App from './components/App';
 

import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import Body from "./components/body";
import Header from "./components/header";
import { OptionsMain } from "./pages/options-main";
import { OptionsGrafics } from "./pages/options-grafics";

import MiniDollar from "./components/Minidollar";
import Pkg from "./components/Pkg";
import Kitting from "./components/Kitting";
import CtrlInventory from "./components/CtrlInventory";
import HeadCount from "./components/Headcount";
import Manualpull from "./components/Manualpull";
import Planaresmodular from "./components/Planaresmodular";
import Excess from './components/Excess';
import Swap from './components/Swap';
import Aqm from './components/Aqm';
import Mrsp from './components/Mrsp';
import Manualpullreg from './components/Manualpullreg';
import Planaresmodularreg from './components/Planaresmodularreg';
import Excessreg from './components/Excessreg';
import Msrpreg from './components/Msrpreg';
import Principalbtnswap from './components/Principalbtnswap';
import Principalbtnaqm from './components/Principalbtnaqm';
import Targetswap from './components/Targetswap';
import Registerswapint from './components/Registerswapint';
import Registeraqmint from './components/Registeraqmint';
import Targetaqm from './components/Targetaqm';
import Swapchangetarget from './components/Swapchangetarget';
import Swapchangetargetdt from './components/Swapchangetargetdt';
import Whrepairchangetarget from './components/Whrepairtarget';
import Whrepairchangetargetmb from './components/Whrepairchangetargetmb';
import Failurechangetarget from './components/Failurechangetarget';
import Inventoryregister from './components/Inventoryregister';
import Repairregister from './components/Repairregister';
import Failureregister from './components/Failureregister';
import Aqmchangetarget from './components/Aqmchangetarget';
import Aqmchangetargetdt from './components/Aqmchangetargetdt';
import Aqmregistro from './components/Aqmregistro';
import Swapchangetargetgraf from './components/Swapchangetargetgraf';
import Swapchangetargetgrafntb from './components/Swapchangetargetgrafntb';
import Principalbtnswapgraf from './components/Principalbtnswapgraf';
import Targetswapgraf from './components/Targetswapgraf';
import Registerswapintgraf from './components/Registerswapintgraf';
import Whrepairtarget from './components/Whrepairtarget';
import Whrepairtargetmb from './components/whrepairtargetmb';
import Failuretarget from './components/failuretarget';
import Principalbtnaqmdt from './components/Principalbtnaqmdt';
import Pkggraf from './components/Pkggraf';
import Kittingraf from './components/Kittingraf';
import MiniDollargraf from './components/MiniDollargraf';
import Controlinventorygraf from './components/Controlinventorygraf';
import Headcountgraf from './components/Headcountgraf';
import { OptionsStaff } from "./pages/options-staff";
import Staffprincipal from './components/staff-principal';
import Staffformulario from './components/staff-formulario';
import Formulariouser from './components/formulariouser';


import './assets/styles/app.css';
import './assets/styles/body.css';

import fondoimg from './assets/static/background1.png';


const router = createBrowserRouter([
  {
    path: "/",
    element: (      
      <>
      <div style={{ backgroundImage: `url(${fondoimg})`,backgroundSize: "cover",height: "650px" }}>
        <Header/>
        <Body />   
      </div>  
      </>  
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
  {
    path: "/register-options",
    element: (      
      <>
      <div style={{ backgroundImage: `url(${fondoimg})`,backgroundSize: "cover",height: "965px" }}>
        <Header/>
        <OptionsMain/>        
     </div>
      </>  
    ),
  },
  {
    path: "/register-options",
    element: <div>About</div>,
  },
  {
    path: "/options-grafics",
    element: (      
      <>
      <div style={{ backgroundImage: `url(${fondoimg})`,backgroundSize: "cover",height: "965px" }}>
        <Header/>
        <OptionsGrafics/>
      </div>
      </>  
    ),
  },
  {
    path: "/options-grafics",
    element: <div>Options Grafics</div>,
  },
  {
    path: "MiniDollar",
    element: (      
      <>
      <div style={{ backgroundImage: `url(${fondoimg})`,backgroundSize: "cover",height: "965px" }}>
        <Header/> 
        <MiniDollar/>
     </div>
      </>  
    ),
  },
  {
    path: "MiniDollar",
    element: <div>Mini Dollar</div>,
  },
  {
    path: "PKG",
    element: (      
      <>
      <div style={{ backgroundImage: `url(${fondoimg})`,backgroundSize: "cover",height: "965px" }}>
      <Header/>
        <Pkg/>
     </div>
      </>  
    ),
  },
  {
    path: "PKG",
    element: <div>Pkg</div>,
  },
  {
    path: "Kitting",
    element: (      
      <>
      <div style={{ backgroundImage: `url(${fondoimg})`,backgroundSize: "cover",height: "965px" }}>
      <Header/>
        <Kitting/>
     </div>
      </>  
    ),
  },
  {
    path: "Kitting",
    element: <div>Kitting</div>,
  },
  {
    path: "Ctrl Inventory",
    element: (      
      <>
      <div style={{ backgroundImage: `url(${fondoimg})`,backgroundSize: "cover",height: "965px" }}>
       <Header/>
        <CtrlInventory/>
     </div>
      </>  
    ),
  },
  {
    path: "Ctrl Inventory",
    element: <div>CtrlInventory</div>,
  },
  {
    path: "Head Count",
    element: (      
      <>
      <div style={{ backgroundImage: `url(${fondoimg})`,backgroundSize: "cover",height: "965px" }}>
      <Header/>
        <HeadCount/>
     </div>
      </>  
    ),
  },
  {
    path: "Head Count",
    element: <div>HeadCount</div>,
  },
  {
    path: "Manual Pull",
    element: (      
      <>
      <div style={{ backgroundImage: `url(${fondoimg})`,backgroundSize: "cover",height: "965px" }}>
      <Header/>
        <Manualpull/>
     </div>
      </>  
    ),
  },
  {
    path: "Manual Pull",
    element: <div>Manualpull</div>,
  },
  {
    path: "Planares Modular",
    element: (      
      <>
      <div style={{ backgroundImage: `url(${fondoimg})`,backgroundSize: "cover",height: "965px" }}>
      <Header/>
        <Planaresmodular/>
     </div>
      </>  
    ),
  },
  {
    path: "Planares Modular",
    element: <div>Planaresmodular</div>,
  },
  {
    path: "Excess410420",
    element: (      
      <>
      <div style={{ backgroundImage: `url(${fondoimg})`,backgroundSize: "cover",height: "965px" }}>
      <Header/>
        <Excess/>
     </div>
      </>  
    ),
  },
  {
    path: "Excess410420",
    element: <div>Excess</div>,
  },
  {
    path: "Swap",
    element: (      
      <>
      <div style={{ backgroundImage: `url(${fondoimg})`,backgroundSize: "cover",height: "965px" }}>
      <Header/>
        <Swap/>
     </div>
      </>  
    ),
  },
  {
    path: "Swap",
    element: <div>Swap</div>,
  },
  {
    path: "Aqm",
    element: (      
      <>
      <div style={{ backgroundImage: `url(${fondoimg})`,backgroundSize: "cover",height: "965px" }}>
      <Header/>
        <Aqm/>
     </div>
      </>  
    ),
  },
  {
    path: "Aqm",
    element: <div>Aqm</div>,
  },
  {
    path: "Msrp",
    element: (      
      <>
      <div style={{ backgroundImage: `url(${fondoimg})`,backgroundSize: "cover",height: "965px" }}>
       <Header/>
        <Mrsp/>
     </div>
      </>  
    ),
  },
  {
    path: "Msrp",
    element: <div>Msrp</div>,
  },
  {
    path: "Manualpullreg",
    element: (      
      <>
      <div style={{ backgroundImage: `url(${fondoimg})`,backgroundSize: "cover",height: "965px" }}>
      <Header/>
        <Manualpullreg/>
     </div>
      </>  
    ),
  },
  {
    path: "Manualpullreg",
    element: <div>Manualpullreg</div>,
  },
  {
    path: "Planaresmodularreg",
    element: (      
      <>
      <div style={{ backgroundImage: `url(${fondoimg})`,backgroundSize: "cover",height: "965px" }}>
      <Header/>
        <Planaresmodularreg/>
     </div>
      </>  
    ),
  },
  {
    path: "Planaresmodularreg",
    element: <div>Planaresmodularreg</div>,
  },
  {
    path: "Principalbtnaqm",
    element: (      
      <>
      <div style={{ backgroundImage: `url(${fondoimg})`,backgroundSize: "cover",height: "965px" }}>
      <Header/>
        <Principalbtnaqm/>
     </div>
      </>  
    ),
  },
  {
    path: "Principalbtnaqm",
    element: <div>Principalbtnaqm</div>,
  },
  {
    path: "Principalbtnaqmdt",
    element: (      
      <>
      <div style={{ backgroundImage: `url(${fondoimg})`,backgroundSize: "cover",height: "965px" }}>
      <Header/>
        <Principalbtnaqmdt/>
     </div>
      </>  
    ),
  },
  {
    path: "Principalbtnaqmdt",
    element: <div>Principalbtnaqmdt</div>,
  },
  {
    path: "Excessreg",
    element: (      
      <>
      <div style={{ backgroundImage: `url(${fondoimg})`,backgroundSize: "cover",height: "965px" }}>
      <Header/>
        <Excessreg/>
     </div>
      </>  
    ),
  },
  {
    path: "Excessreg",
    element: <div>Excessreg</div>,
  },
  {
    path: "Msrpreg",
    element: (      
      <>
      <div style={{ backgroundImage: `url(${fondoimg})`,backgroundSize: "cover",height: "965px" }}>
        <Header/>
        <Msrpreg/>
     </div>
      </>  
    ),
  },
  {
    path: "Msrpreg",
    element: <div>Msrpreg</div>,
  },
  {
    path: "Principalbtnswap",
    element: (      
      <>
      <div style={{ backgroundImage: `url(${fondoimg})`,backgroundSize: "cover",height: "965px" }}>
      <Header/>
        <Principalbtnswap/>
     </div>
      </>  
    ),
  },
  {
    path: "Principalbtnswap",
    element: <div>Principalbtnswap</div>,
  },
  {
    path: "Principalbtnswapgraf",
    element: (      
      <>
      <div style={{ backgroundImage: `url(${fondoimg})`,backgroundSize: "cover",height: "965px" }}>
      <Header/>
        <Principalbtnswapgraf/>
     </div>
      </>  
    ),
  },
  {
    path: "Principalbtnswapgraf",
    element: <div>Principalbtnswapgraf</div>,
  },
  {
    path: "Pkggraf",
    element: (      
      <>
      <div style={{ backgroundImage: `url(${fondoimg})`,backgroundSize: "cover",height: "965px" }}>
      <Header/>
        <Pkggraf/>
     </div>
      </>  
    ),
  },
  {
    path: "Pkggraf",
    element: <div>Pkggraf</div>,
  },
  {
    path: "targetswap",
    element: (      
      <>
      <div style={{ backgroundImage: `url(${fondoimg})`,backgroundSize: "cover",height: "965px" }}>
      <Header/>
        <Targetswap/>
     </div>
      </>  
    ),
  },
  {
    path: "targetswap",
    element: <div>Targetswap</div>,
  },
  {
    path: "targetaqm",
    element: (      
      <>
      <div style={{ backgroundImage: `url(${fondoimg})`,backgroundSize: "cover",height: "965px" }}>
      <Header/>
      <Targetaqm/>
     </div>
      </>  
    ),
  },
  {
    path: "targetaqm",
    element: <div>Targetaqm</div>,
  },
  {
    path: "registerswapint",
    element: (      
      <>
      <div style={{ backgroundImage: `url(${fondoimg})`,backgroundSize: "cover",height: "965px" }}>
      <Header/>
        <Registerswapint/>
     </div>
      </>  
    ),
  },
  {
    path: "registerswapint",
    element: <div>Registerswapint</div>,
  },
  {
    path: "registeraqmint",
    element: (      
      <>
      <div style={{ backgroundImage: `url(${fondoimg})`,backgroundSize: "cover",height: "965px" }}>
      <Header/>
        <Registeraqmint/>
     </div>
      </>  
    ),
  },
  {
    path: "registeraqmint",
    element: <div>Registeraqmint</div>,
  },
  {
    path: "swapchangetarget",
    element: (      
      <>
      <div style={{ backgroundImage: `url(${fondoimg})`,backgroundSize: "cover",height: "965px" }}>
      <Header/>
        <Swapchangetarget/>
     </div>
      </>  
    ),
  },
  {
    path: "swapchangetarget",
    element: <div>Swapchangetarget</div>,
  },
  {
    path: "swapchangetargetdt",
    element: (      
      <>
      <div style={{ backgroundImage: `url(${fondoimg})`,backgroundSize: "cover",height: "965px" }}>
      <Header/>
        <Swapchangetargetdt/>
     </div>
      </>  
    ),
  },
  {
    path: "swapchangetargetdt",
    element: <div>Swapchangetargetdt</div>,
  },
  {
    path: "Whrepairchangetarget",
    element: (      
      <>
      <div style={{ backgroundImage: `url(${fondoimg})`,backgroundSize: "cover",height: "965px" }}>
      <Header/>
        <Whrepairchangetarget/>
     </div>
      </>  
    ),
  },
  {
    path: "Whrepairchangetarget",
    element: <div>Whrepairchangetarget</div>,
  },
  {
    path: "Whrepairchangetargetmb",
    element: (      
      <>
      <div style={{ backgroundImage: `url(${fondoimg})`,backgroundSize: "cover",height: "965px" }}>
      <Header/>
        <Whrepairchangetargetmb/>
     </div>
      </>  
    ),
  },
  {
    path: "Whrepairchangetargetmb",
    element: <div>Whrepairchangetargetmb</div>,
  },
  {
    path: "Failurechangetarget",
    element: (      
      <>
      <div style={{ backgroundImage: `url(${fondoimg})`,backgroundSize: "cover",height: "965px" }}>
      <Header/>
        <Failurechangetarget/>
     </div>
      </>  
    ),
  },
  {
    path: "Failurechangetarget",
    element: <div>Failurechangetarget</div>,
  },
  {
    path: "Inventory",
    element: (      
      <>
      <div style={{ backgroundImage: `url(${fondoimg})`,backgroundSize: "cover",height: "965px" }}>
      <Header/>
        <Inventoryregister/>
     </div>
      </>  
    ),
  },
  {
    path: "Inventory",
    element: <div>Inventoryregister</div>,
  },
  {
    path: "Repairregister",
    element: (      
      <>
      <div style={{ backgroundImage: `url(${fondoimg})`,backgroundSize: "cover",height: "965px" }}>
      <Header/>
        <Repairregister/>
     </div>
      </>  
    ),
  },
  {
    path: "Repairregister",
    element: <div>Repairregister</div>,
  },
  {
    path: "Failureregister",
    element: (      
      <>
      <div style={{ backgroundImage: `url(${fondoimg})`,backgroundSize: "cover",height: "965px" }}>
      <Header/>
        <Failureregister/>
     </div>
      </>  
    ),
  },
  {
    path: "Failureregister",
    element: <div>Failureregister</div>,
  },
  {
    path: "Aqmchangetarget",
    element: (      
      <>
      <div style={{ backgroundImage: `url(${fondoimg})`,backgroundSize: "cover",height: "965px" }}>
      <Header/>
        <Aqmchangetarget/>
     </div>
      </>  
    ),
  },
  {
    path: "Aqmchangetarget",
    element: <div>Aqmchangetarget</div>,
  },
  {
    path: "Aqmchangetargetdt",
    element: (      
      <>
      <div style={{ backgroundImage: `url(${fondoimg})`,backgroundSize: "cover",height: "965px" }}>
      <Header/>
        <Aqmchangetargetdt/>
     </div>
      </>  
    ),
  },
  {
    path: "Aqmchangetargetdt",
    element: <div>Aqmchangetargetdt</div>,
  },
  {
    path: "Aqmregistro",
    element: (      
      <>
      <div style={{ backgroundImage: `url(${fondoimg})`,backgroundSize: "cover",height: "965px" }}>
      <Header/>
        <Aqmregistro/>
     </div>
      </>  
    ),
  },
  {
    path: "Aqmregistro",
    element: <div>Aqmregistro</div>,
  },
  {
    path: "swapchangetargetgraf",
    element: (      
      <>
      <div style={{ backgroundImage: `url(${fondoimg})`,backgroundSize: "cover",height: "965px" }}>
      <Header/>
        <Swapchangetargetgraf/>
     </div>
      </>  
    ),
  },
  {
    path: "swapchangetargetgraf",
    element: <div>Swapchangetargetgraf</div>,
  },
  {
    path: "swapchangetargetgrafntb",
    element: (      
      <>
      <div style={{ backgroundImage: `url(${fondoimg})`,backgroundSize: "cover",height: "965px" }}>
      <Header/>
        <Swapchangetargetgrafntb/>
     </div>
      </>  
    ),
  },
  {
    path: "swapchangetargetgrafntb",
    element: <div>Swapchangetargetgrafntb</div>,
  },
  {
    path: "targetswapgraf",
    element: (      
      <>
      <div style={{ backgroundImage: `url(${fondoimg})`,backgroundSize: "cover",height: "965px" }}>
      <Header/>
        <Targetswapgraf/>
     </div>
      </>  
    ),
  },
  {
    path: "Targetswapgraf",
    element: <div>Targetswapgraf</div>,
  },
  {
    path: "registerswapintgraf",
    element: (      
      <>
      <div style={{ backgroundImage: `url(${fondoimg})`,backgroundSize: "cover",height: "965px" }}>
        <Header/>
        <Registerswapintgraf/>
     </div>
      </>  
    ),
  },
  {
    path: "registerswapintgraf",
    element: <div>Registerswapintgraf</div>,
  },
  {
    path: "whrepairtarget",
    element: (      
      <>
      <div style={{ backgroundImage: `url(${fondoimg})`,backgroundSize: "cover",height: "965px" }}>
      <Header/>
        <Whrepairtarget/>
     </div>
      </>  
    ),
  },
  {
    path: "whrepairtarget",
    element: <div>Whrepairtarget</div>,
  },
  {
    path: "whrepairtargetmb",
    element: (      
      <>
      <div style={{ backgroundImage: `url(${fondoimg})`,backgroundSize: "cover",height: "965px" }}>
      <Header/>
        <Whrepairtargetmb/>
     </div>
      </>  
    ),
  },
  {
    path: "whrepairtargetmb",
    element: <div>Whrepairtargetmb</div>,
  },
  {
    path: "failuretarget",
    element: (      
      <>
      <div style={{ backgroundImage: `url(${fondoimg})`,backgroundSize: "cover",height: "965px" }}>
      <Header/>
        <Failuretarget/>
     </div>
      </>  
    ),
  },
  {
    path: "failuretarget",
    element: <div>Failuretarget</div>,
  },
  {
    path: "Kittingraf",
    element: (      
      <>
      <div style={{ backgroundImage: `url(${fondoimg})`,backgroundSize: "cover",height: "965px" }}>
      <Header/>
        <Kittingraf/>
     </div>
      </>  
    ),
  },
  {
    path: "Kittingraf",
    element: <div>Kittingraf</div>,
  },
  {
    path: "MiniDollargraf",
    element: (      
      <>
      <div style={{ backgroundImage: `url(${fondoimg})`,backgroundSize: "cover",height: "965px" }}>
      <Header/>
        <MiniDollargraf/>
     </div>
      </>  
    ),
  },
  {
    path: "MiniDollargraf",
    element: <div>MiniDollargraf</div>,
  },
  {
    path: "Controlinventorygraf",
    element: (      
      <>
      <div style={{ backgroundImage: `url(${fondoimg})`,backgroundSize: "cover",height: "965px" }}>
      <Header/>
        <Controlinventorygraf/>
     </div>
      </>  
    ),
  },
  {
    path: "Controlinventorygraf",
    element: <div>Controlinventorygraf</div>,
  },
  {
    path: "Headcountgraf",
    element: (      
      <>
      <div style={{ backgroundImage: `url(${fondoimg})`,backgroundSize: "cover",height: "965px" }}>
      <Header/>
        <Headcountgraf/>
     </div>
      </>  
    ),
  },
  {
    path: "Headcountgraf",
    element: <div>Headcountgraf</div>,
  },
  {
    path: "staff-principal",
    element: (      
      <>
      <div style={{ backgroundImage: `url(${fondoimg})`,backgroundSize: "cover",height: "965px" }}>
      <Header/>
        <Staffprincipal/>
     </div>
      </>  
    ),
  },
  {
    path: "staff-principal",
    element: <div>Staffprincipal</div>,
  },
  {
    path: "staff-formulario",
    element: (      
      <>
      <div style={{ backgroundImage: `url(${fondoimg})`,backgroundSize: "cover",height: "965px" }}>
      <Header/>
        <Staffformulario/>
     </div>
      </>  
    ),
  },
  {
    path: "staff-formulario",
    element: <div>Staffformulario</div>,
  },
  {
    path: "formulariouser",
    element: (      
      <>
      <div style={{ backgroundImage: `url(${fondoimg})`,backgroundSize: "cover",height: "965px" }}>
      <Header/>
        <Formulariouser/>
     </div>
      </>  
    ),
  },
  {
    path: "formulariouser",
    element: <div>Formulariouser</div>,
  },
  {
    path: "options-staff",
    element: (      
      <>
      <div style={{ backgroundImage: `url(${fondoimg})`,backgroundSize: "cover",height: "965px" }}>
      <Header/>
        <OptionsStaff/>
     </div>
      </>  
    ),
  },
  {
    path: "options-staff",
    element: <div>OptionsStaff</div>,
  },
]);

createRoot(document.getElementById("app")).render(
  <RouterProvider router={router} />
);


// const root = ReactDOM.createRoot(
//   document.getElementById('app')
// );

// const element = (
//     <React.StrictMode>
//       <App/>
//     </React.StrictMode>
// );


//   root.render(element);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
