import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { useState,useEffect } from "react";
import Axios from "axios";

import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [

{
  field: 'nom',
  headerName: 'nom ',
  width: 150,
  editable: true,
},
{
    field: 'register',
    headerName: 'register',
    width: 150,
    editable: true,
  },
  {
    field: 'adresse',
    headerName: 'adresse',
    width: 150,
    editable: true,
  },
  {
    field: 'adresse designé',
    headerName: 'adresse designé',
    width: 150,
    editable: true,
  },
  {
    field: 'avocat',
    headerName: 'avocat',
    width: 150,
    editable: true,
  },
  {
    field: 'adress avocat',
    headerName: 'adress avocat',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'email',
    width: 150,
    editable: true,
  },
];
export default function Tabdonneé() {
  const [nom, setnom] = useState([]);
  /*useEffect(() => {   
    Axios.get("http://localhost:5000/adversaire").then((response) => {
      setnom(response.data); 
      console.log(response.data) ;   
    });
  },[nom]);*/
  function timeout(ms){
    return new Promise((resolve)=>setTimeout(resolve,ms))
  }
  useEffect(() => { 
    const fetchData =async()=>{
    const result =await Axios(
      "http://localhost:5000/adversaire",
    );
    await timeout(1000);
    setnom(result.data);
   };
  fetchData();
  })
  return (
    <React.Fragment>
     
     
     <Box sx={{ height: 350, width: 1000 }}>
      <DataGrid
        rows={nom}
        columns={columns}
       
      />
    
    </Box>

    </React.Fragment>
  );
}