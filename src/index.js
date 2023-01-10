// import './assets/styles/main.scss';
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

import './assets/styles/app.css';
import './assets/styles/body.css';



const router = createBrowserRouter([
  {
    path: "/",
    element: (      
      <>
        <Header/>
        <Body />   
      </>  
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
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
