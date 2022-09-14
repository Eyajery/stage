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
  field: 'tache',
  headerName: 'tache',
  width: 150,
  editable: true,
},
{
    field: 'date_critique',
    headerName: 'date_critique',
    width: 150,
    editable: true,
  },
  {
    field: 'date_rappel',
    headerName: 'date_rappel',
    width: 150,
    editable: true,
  },
  {
    field: 'resolu',
    headerName: 'resolu',
    width: 150,
    editable: true,
  },
  {
    field: 'personne_chargé',
    headerName: 'personne_chargé',
    width: 150,
    editable: true,
  },
  {
    field: 'greffier',
    headerName: 'greffier',
    width: 150,
    editable: true,
  },
  {
    field: 'course',
    headerName: 'course',
    width: 150,
    editable: true,
  },
  {
    field: 'lieux',
    headerName: 'lieux',
    width: 150,
    editable: true,
  },
  {
    field: 'service',
    headerName: 'service',
    width: 150,
    editable: true,
  },
  {
    field: 'date_audience',
    headerName: 'date_audience',
    width: 150,
    editable: true,
  },
  {
    field: 'date_echeance',
    headerName: 'date_echeance',
    width: 150,
    editable: true,
  },
];
export default function Tabtache() {


  


const [nomdossier, setnomdossier] = useState([]);
/*useEffect(() => {   
  Axios.get("http://localhost:5000/taches").then((response) => {
    setnomdossier(response.data); 
    console.log("hi");
    console.log(nomdossier)  ;
    console.log(response.data) ;   
  });
},[nomdossier]);*/
function timeout(ms){
  return new Promise((resolve)=>setTimeout(resolve,ms))
}
useEffect(() => { 
  const fetchData =async()=>{
  const result =await Axios(
    "http://localhost:5000/taches",
  );
  await timeout(1000);
  setnomdossier(result.data);
 };
fetchData();
})
  return (
    <div>
     
     
     <Box sx={{ height: 350, width: 1000 }}>
      <DataGrid
        rows={nomdossier}
        columns={columns}
       
      />
    
    </Box>

    </div>
  );
}