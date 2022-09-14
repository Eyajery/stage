import Axios from "axios";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   
   <React.Fragment>
    <React.StrictMode>
 <BrowserRouter><App /></BrowserRouter>
 </React.StrictMode>
 </React.Fragment>

  
);

Axios.defaults.withCredentials = true;