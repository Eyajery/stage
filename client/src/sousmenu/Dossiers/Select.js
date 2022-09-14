  import * as React from 'react';
  import { useTheme } from '@mui/material/styles';
  import OutlinedInput from '@mui/material/OutlinedInput';
  import InputLabel from '@mui/material/InputLabel';
  import MenuItem from '@mui/material/MenuItem';
  import FormControl from '@mui/material/FormControl';
  import Select from '@mui/material/Select';

  import { useState,useEffect } from "react";
import Axios from "axios";
  
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  
  
  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  










  export const SelectEmp=() =>{
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
  
    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };


    const [empList, setempList] = useState([]);
useEffect(() => {   
  Axios.get("http://localhost:5000/empdossier").then((response) => {
    setempList(response.data); 
    console.log(empList) ;
  });
},[empList]);

    return (
      <div>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-name-label">Emplacement</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput label="Emplacement" />}
            MenuProps={MenuProps}
          >
            {empList.map((name) => (
              <MenuItem
                key={name.id}
                value={name.nomdossier}
                style={getStyles(name, personName, theme)}
              >
                {name.nomdossier}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  }








  export default function MultipleSelect() {
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
  
    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };



    const [dossierList, setdossierList] = useState([]);


useEffect(() => {   
  Axios.get("http://localhost:5000/getdossier").then((response) => {
    setdossierList(response.data); 

    console.log(dossierList) ;
  
    console.log(response.data) ;  

  });
},[dossierList]);

    return (
      <div>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-name-label">Name</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput label="Num_affaire" />}
            MenuProps={MenuProps}
          >
            {dossierList.map((name) => (
              <MenuItem
                key={name.id}
                value={name.num_affaire}
                style={getStyles(name, personName, theme)}
              >
                {name.num_affaire}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  }







