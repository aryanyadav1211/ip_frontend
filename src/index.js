import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './login.js';
import ManageIP from './manageIP.js';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import {Routes, Route, useNavigate} from 'react-router-dom';
import App from './App.js';
// import 'antd/dist/antd.css';
import Demo from './demo.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/* <BrowserRouter> */}
      {/* <Demo/> */}
    <Login/>
    {/* <ManageIP/> */}
    {/* <App/> */}
    {/* </BrowserRouter> */}
   

  </React.StrictMode>
);