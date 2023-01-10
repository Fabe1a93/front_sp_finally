import React, {useRef} from 'react';
 import {
   Route,
   Routes   
 } from "react-router-dom";


 
import Header from "./header";
// import {
//   useRoutes
// } from 'react-router-dom';

//import 'bootstrap/dist/css/bootstrap.min.css';
import { OptionsMain } from "../pages/options-main";
import { OptionsGrafics } from "../pages/options-grafics";
import Body from "./body";
// import Body from "./components/body";
import MiniDollar from "./Minidollar";
import Pkg from "./Pkg";
import Kitting from "./Kitting";
import CtrlInventory from "./CtrlInventory";
import HeadCount from "./Headcount";
import Manualpull from "./Manualpull";
import Planaresmodular from "./Planaresmodular";
import Excess from './Excess';
import Swap from './Swap';
import Aqm from './Aqm';
import Mrsp from './Mrsp';
import Manualpullreg from './Manualpullreg';
import Planaresmodularreg from './Planaresmodularreg';
import Excessreg from './Excessreg';
import Msrpreg from './Msrpreg';
import Principalbtnswap from './Principalbtnswap';
import Principalbtnaqm from './Principalbtnaqm';
import Targetswap from './Targetswap';
import Registerswapint from './Registerswapint';
import Registeraqmint from './Registeraqmint';
import Targetaqm from './Targetaqm';
import Swapchangetarget from './Swapchangetarget';
import Swapchangetargetdt from './Swapchangetargetdt';
import Whrepairchangetarget from './Whrepairtarget';
import Whrepairchangetargetmb from './Whrepairchangetargetmb';
import Failurechangetarget from './Failurechangetarget';
import Inventoryregister from './Inventoryregister';
import Repairregister from './Repairregister';
import Failureregister from './Failureregister';
import Aqmchangetarget from './Aqmchangetarget';
import Aqmchangetargetdt from './Aqmchangetargetdt';
import Aqmregistro from './Aqmregistro';
import Swapchangetargetgraf from './Swapchangetargetgraf';
import Swapchangetargetgrafntb from './Swapchangetargetgrafntb';
import Principalbtnswapgraf from './Principalbtnswapgraf';
import Targetswapgraf from './Targetswapgraf';
import Registerswapintgraf from './Registerswapintgraf';
import Whrepairtarget from './Whrepairtarget';
import Whrepairtargetmb from './whrepairtargetmb';
import Failuretarget from './failuretarget';
import Principalbtnaqmdt from './Principalbtnaqmdt';
import Pkggraf from './Pkggraf';
import Kittingraf from './Kittingraf';
import MiniDollargraf from './MiniDollargraf';
import Controlinventorygraf from './Controlinventorygraf';
import Headcountgraf from './Headcountgraf';
import { OptionsStaff } from "../pages/options-staff";
import Staffprincipal from './staff-principal';
import Staffformulario from './staff-formulario';
import Formulariouser from './formulariouser';



const App = () => {
  return (
    <div className="h-1|00">
   
      
     <Routes>
      {/* <Header /> */}
      <Route path="/" element={<Body/>} />
      <Route path="/register-options" element={<OptionsMain/>} />
      <Route path="/options-grafics" element={<OptionsGrafics/>} />
     

      
      <Route path="/register-options/MiniDollar" element={<MiniDollar/>} />
      <Route path="/register-options/PKG" element={<Pkg/>} />
      <Route path="/register-options/Kitting" element={<Kitting/>} />
      <Route path="/register-options/Ctrl Inventory" element={<CtrlInventory/>} />
      <Route path="/register-options/Head Count" element={<HeadCount/>} />
      <Route path="/options-grafics/Manual Pull" element={<Manualpull/>} />
      <Route path="/options-grafics/Planares Modular" element={<Planaresmodular/>} />
      <Route path="/options-grafics/Excess410420" element={<Excess/>} />
      <Route path="/register-options/Swap" element={<Swap/>} />
      <Route path="/register-options/Aqm" element={<Aqm/>} />
      <Route path="/options-grafics/Msrp" element={<Mrsp/>} />
      <Route path="/register-options/Manualpullreg" element={<Manualpullreg/>} />
      <Route path="/register-options/Planaresmodularreg" element={<Planaresmodularreg/>} />
      <Route path="/options-grafics/Principalbtnaqm" element={<Principalbtnaqm/>} />
      <Route path="/options-grafics/Principalbtnaqmdt" element={<Principalbtnaqmdt/>} />
      <Route path="/register-options/Excessreg" element={<Excessreg/>} /> 
      <Route path="/register-options/Msrpreg" element={<Msrpreg/>} /> 
      <Route path="/register-options/Principalbtnswap" element={<Principalbtnswap/>} /> 
      <Route path="/options-grafics/Principalbtnswapgraf" element={<Principalbtnswapgraf/>} /> 
      <Route path="/options-grafics/Pkggraf" element={<Pkggraf/>} />  

      
      
      <Route path="/targetswap" element={<Targetswap/>} /> 
      <Route path="/targetaqm" element={<Targetaqm/>} /> 
      <Route path="/registerswapint" element={<Registerswapint/>} /> 
      <Route path="/registeraqmint" element={<Registeraqmint/>} /> 
      <Route path="/register-options/swapchangetarget" element={<Swapchangetarget/>} /> 
      <Route path="/register-options/swapchangetargetdt" element={<Swapchangetargetdt/>} /> 
      <Route path="/register-options/Whrepairchangetarget" element={<Whrepairchangetarget/>} /> 
      <Route path="/register-options/Whrepairchangetargetmb" element={<Whrepairchangetargetmb/>} /> 
      <Route path="/register-options/Failurechangetarget" element={<Failurechangetarget/>} />  
      <Route path="/register-options/Inventory" element={<Inventoryregister/>} /> 
      <Route path="/register-options/Repairregister" element={<Repairregister/>} /> 
      <Route path="/register-options/Failureregister" element={<Failureregister/>} /> 
      <Route path="/register-options/Aqmchangetarget" element={<Aqmchangetarget/>} /> 
      <Route path="/register-options/Aqmchangetargetdt" element={<Aqmchangetargetdt/>} /> 
      <Route path="/register-options/Aqmregistro" element={<Aqmregistro/>} /> 
      <Route path="/options-grafics/swapchangetargetgraf" element={<Swapchangetargetgraf/>} /> 
      <Route path="/options-grafics/swapchangetargetgrafntb" element={<Swapchangetargetgrafntb/>} /> 
      <Route path="/targetswapgraf" element={<Targetswapgraf/>} /> 
      <Route path="/registerswapintgraf" element={<Registerswapintgraf/>} /> 
      <Route path="/options-grafics/whrepairtarget" element={<Whrepairtarget/>} /> 
      <Route path="/options-grafics/whrepairtargetmb" element={<Whrepairtargetmb/>} /> 
      <Route path="/options-grafics/failuretarget" element={<Failuretarget/>} /> 
      <Route path="/options-grafics/Kittingraf" element={<Kittingraf/>} /> 
      <Route path="/options-grafics/MiniDollargraf" element={<MiniDollargraf/>} /> 
      <Route path="/options-grafics/Controlinventorygraf" element={<Controlinventorygraf/>} /> 
      <Route path="/options-grafics/Headcountgraf" element={<Headcountgraf/>} /> 
      <Route path="/staff-principal" element={<Staffprincipal/>} /> 
      <Route path="/staff-formulario" element={<Staffformulario/>} /> 
      <Route path="/formulariouser" element={<Formulariouser/>} />
      <Route path="/options-staff" element={<OptionsStaff/>} />

      
     </Routes>

      

     </div>
  );
}

export default App;


