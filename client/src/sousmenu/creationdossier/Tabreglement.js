import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { useState,useEffect } from "react";
import Axios from "axios";

import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [

{
  field:'montant',
  headerName:'montant',
  width: 150,
  editable: true,
},
{
    field:'type',
    headerName:'type',
    width: 150,
    editable: true,
  },
  {
    field:'baré',
    headerName:'baré',
    width: 150,
    editable: true,
  },
  {
    field:'operation',
    headerName:'operation',
    width: 150,
    editable: true,
  },
  {
    field:'banque',
    headerName:'banque',
    width: 150,
    editable: true,
  },
  {
    field:'echeance',
    headerName:'echeance',
    width: 150,
    editable: true,
  },
];
export default function Tabreglement() {
const [montant, setmontant] = useState([]);
/*useEffect(() => {   
  Axios.get("http://localhost:5000/getreglement").then((response) => {
     setmontant(response.data); 
    console.log("hi");
    console.log(montant)  ;
    console.log(response.data) ;   
  });
},[montant]);*/
function timeout(ms){
  return new Promise((resolve)=>setTimeout(resolve,ms))
}
useEffect(() => { 
  const fetchData =async()=>{
  const result =await Axios(
    "http://localhost:5000/getreglement",
  );
  await timeout(1000);
  setmontant(result.data);
 };
fetchData();
})
  return (
    <React.Fragment>
     <Box sx={{ height: 350, width: 1000 }}>
      <DataGrid
        rows={montant}
        columns={columns}
       
      />
    
    </Box>

    </React.Fragment>
  );
}