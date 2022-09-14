import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { useState,useEffect } from "react";
import Axios from "axios";
import Button from '@mui/material/Button';
import { DialogActions } from '@mui/material';
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
    field: 'cin',
    headerName: 'cin',
    width: 150,
    editable: true,
  },
  {
    field: 'adress',
    headerName: 'adress',
    width: 150,
    editable: true,
  },
  {
    field: 'adress_designé',
    headerName: 'adress_designé',
    width: 150,
    editable: true,
  },
  {
    field: 'tel',
    headerName: 'tel',
    width: 150,
    editable: true,
  },
  {
    field: 'fax',
    headerName: 'fax',
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
export default function Tabclient() {
const [nom, setnom] = useState([]);
/*useEffect(() => {   
  Axios.get("http://localhost:5000/demandeur").then((response) => {
    setnom(response.data); 
    console.log("hi");
    console.log(nom)  ;
    console.log(response.data) ;   
  });
},[nom]);*/
function timeout(ms){
  return new Promise((resolve)=>setTimeout(resolve,ms))
}
useEffect(() => { 
  const fetchData =async()=>{
  const result =await Axios(
    "http://localhost:5000/demandeur",
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