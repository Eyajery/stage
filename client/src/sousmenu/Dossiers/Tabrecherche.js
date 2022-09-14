import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import StyledTableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';             
import { useState,useEffect,useRef } from "react";    
import Dialog from '@mui/material/Dialog';   
import MultipleSelect from './Select';
import { Button, DialogActions } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Axios from "axios";
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import {useReactToPrint} from 'react-to-print';
import Factures from '../factures/Factures';
import { useTheme } from '@mui/material/styles';  
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';    
import Select from '@mui/material/Select';

import DialogContent from '@mui/material/DialogContent';

import DialogTitle from '@mui/material/DialogTitle';

import TextSelector from 'text-selection-react' ;
//import DatePicker from 'react-date-picker';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const ITEM_HEIGHT = 88;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight:ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
  },  },  };


function ArchiverDossier(props) {
  const [open, setOpen] =useState(false);
  const [id,setid]=useState("");
  const [archive,setarchive]=useState("");
 const[emplacement,setemplacement]=useState("");
  const [msg, setMsg] = useState('');
 

   const handleClickOpen = () => {
     setOpen(true);
   };
   const handleClose = () => {
     setOpen(false);
   };
 
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
  

   useEffect(() => { 
    const fetchData =async()=>{
    const result =await Axios(
      "http://localhost:5000/getarchive",
    );
   // await timeout(1000);
    setarchive(result.data);
   };
  fetchData();
  })

   const archiver= async (e) => {
    e.preventDefault();
    try {
        await Axios.post('http://localhost:5000/archive', {
            emplacement:emplacement, 
            id_dossier:props.idn,        
        });
        setemplacement("");
       
    } catch (error) {
        if (error.response) {
            setMsg(error.response.data.msg);
        }
    }
  };
 
   function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

   const [empList, setempList] = useState([]);
  
   useEffect(() => {   
     Axios.get("http://localhost:5000/empdossier").then((response) => {
       setempList(response.data); 
       console.log(empList) ;
     });
   },[empList]);

   return (
     <div>
       <Button variant="outlined" style={{color:'blue',width:"200px"}} onClick={handleClickOpen}>
       Archiver Dossier  </Button>
       <Dialog open={open} onClose={handleClose}>
       <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "500px",width:"3px"}} >X</Button>
       <form onClick={archiver}>
         <DialogTitle>Archiver Dossier</DialogTitle>
         <p>{msg}</p>
         <DialogContent>
           <TextField 
             autoFocus
             margin="dense"
             id="id"
             label="code Archive"
             type="text"
             fullWidth
             variant="outlined"
             value={archive.length+1}
             onChange={(e) => setid(e.target.value)}
           />
           <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-name-label">Emplacement</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            value={emplacement}
            onChange={(e) => setemplacement(e.target.value)}
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
        
            
         </DialogContent>
         <DialogActions>
           <Button >Archiver</Button>
         </DialogActions>
         </form>
       </Dialog>
      
     </div>
   );
 }

 

   
   
  







   function AddTache(props) {
    const [open, setOpen] =useState(false);
    const [tache,settache]=useState("");
    const [date_critique,setdatecritique]=useState("");
    const [date_rappel,setdaterappel]=useState("");
    const [oui,setoui]=useState("");
    const [personne_chargé,setpersonne]=useState("");
    const [resolu,setresolu]=useState("");
    const [date_audience,setdateaudience]=useState("");
    const [date_echeance,setdateecheance]=useState("");
    const [service,setservice]=useState("");
    const [lieux,setlieux]=useState("");
    const [msg, setMsg] = useState('');
    const ajouter = async (e) => {
     e.preventDefault();
    try {
         await Axios.post('http://localhost:5000/addtaches', {
        tache:tache, 
        id_dossier:props.idn,   
        date_critique:date_critique,
        date_rappel:date_rappel,
        resolu:resolu,
        personne_chargé:personne_chargé,
      // greffier:greffier,
     // course:course,
        lieux:lieux,
        service:service,
        date_audience:date_audience,
        date_echeance:date_echeance,   
         });
        settache("");
        setlieux("");
        setservice("");
        setdateaudience("");
        setdateecheance("");
        setpersonne("");
        setresolu("");
        setdatecritique("");
        setdaterappel("");
     } catch (error) {
         if (error.response) {
             setMsg(error.response.data.msg);
         }
     }



     try {
      await Axios.post('http://localhost:5000/modiftachedossier', {
        mission:tache,
        id:props.idn,       
      });
     settache("");     
  } catch (error) {
      if (error.response) {
          setMsg(error.response.data.msg);
      }
  }





   }
     const handleClickOpen = () => {
       setOpen(true);
     };
     const handleClose = () => {
       setOpen(false);
     };
   
     const [selectedValue, setSelectedValue] = React.useState('');
     const handleChange = (event) => {
       setSelectedValue(event.target.value);
     };
     return (
       <div>
         <Button variant="outlined" style={{color:'blue',width:"180px"}} onClick={handleClickOpen}>
           Ajouter une tache  </Button>
         <Dialog open={open} onClose={handleClose}>
         <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "500px",width:"3px"}} >X</Button>
                       
           <DialogTitle>Ajouter une tache :</DialogTitle>
           <p>{msg}</p>
           <DialogContent>
           
              <table  >
                <tr>
                  <td style={{padding:"10px"}}><label>Tache:</label></td>
                  <td style={{padding:"10px"}}> <TextField 
               autoFocus
               margin="dense"
               id="tache"        
               type="text"
               fullWidth
               variant="outlined"
               value={tache}
               onChange={(e) => settache(e.target.value)}   /></td>
                </tr>
                <tr>
                  <td style={{padding:"10px"}}>   <label>Date de creaction</label></td>
                  <td style={{padding:"10px"}}>     <TextField 
               autoFocus
               margin="dense"
               id="ddate_critique"        
               type="date"
               fullWidth
               variant="outlined"
               value={date_critique}
               onChange={(e) => setdatecritique(e.target.value)}   /></td>
                </tr>
                <tr>
                  <td style={{padding:"10px"}}><label>Date Rappel :</label></td>
                  <td style={{padding:"10px"}}>      <TextField 
               autoFocus
               margin="dense"
               id="date_rappel"
               type="date"
               fullWidth
               variant="outlined"
               value={date_rappel}
               onChange={(e) => setdaterappel(e.target.value)}  /></td>
                </tr>
                <tr>
                  <td style={{padding:"10px"}}> <label>Resolu : </label>  </td>
                  <td style={{padding:"10px"}}> <input type="radio" id='resolu' name='oui' value={resolu}
               onChange={(e) => setresolu("oui")}  /> Oui
        <input type="radio" id='resolu' name='non' value={resolu}
               onChange={(e) => setresolu("non")} />Non</td>
                </tr>
                <tr>
                  <td style={{padding:"10px"}}> <label>Personne chargée : </label> </td>
                  <td style={{padding:"10px"}}><input type="radio" id='personne_chargé' name='rad' value={personne_chargé}
               onChange={(e) => setpersonne("Collaborateur")} /> Collaborateur
        <input type="radio" id='personne_chargé' name='rad' value={personne_chargé}
               onChange={(e) => setpersonne("Greffier")}/>Greffier</td>
                </tr>
                <tr>
                  <td style={{padding:"10px"}}> lieux :</td>
                  <td style={{padding:"10px"}}>   <TextField 
               autoFocus
               margin="dense"
               id="lieux"
               label="lieux"
               type="text"
               fullWidth
               variant="outlined"
               value={lieux}
               onChange={(e) => setlieux(e.target.value)}        /></td>
                </tr>
                <tr>
                  <td style={{padding:"10px"}}>Services:</td>
                  <td style={{padding:"10px"}}>   <TextField 
               autoFocus
               margin="dense"
               id="service"
               label="service"
               type="text"
               fullWidth
               variant="outlined"
               value={service}
               onChange={(e) => setservice(e.target.value)} /></td>
                </tr>
                <tr>
                  <td style={{padding:"10px"}}>Date d'audiance:</td>
                  <td style={{padding:"10px"}}> <TextField 
               autoFocus
               margin="dense"
               id="date_audience"      
               type="date"
               fullWidth
               variant="outlined"
               value={date_audience}
               onChange={(e) => setdateaudience(e.target.value)}      /></td>
                </tr>
                <tr>
                  <td style={{padding:"10px"}}> Date d'echeance:</td>
                  <td style={{padding:"10px"}}><TextField 
               autoFocus
               margin="dense"
               id="date_echeance"        
               type="date"
               fullWidth
               variant="outlined"
               value={date_echeance}
               onChange={(e) => setdateecheance(e.target.value)}     /></td>
                </tr>
                </table>      
           </DialogContent>       
           <DialogActions>
             <Button onClick={ajouter}>Ajouter</Button>
           </DialogActions>          
        
         </Dialog>    
     </div>  
     );
   }





   function ReclasserDossier(props) {
    const [open, setOpen] =useState(false);
    const [date_effet,setdate]=useState("");
    const [emplacement,setemplacement]=useState("");
   
    const [msg, setMsg] = useState('');
    const ajouter = async (e) => {
     e.preventDefault();
     try {
         await Axios.post('http://localhost:5000/modifddossier', {
           emplacement:emplacement,
           id:props.idn,
           date_effet:date_effet,
             
         });
        setdate("");
        setemplacement("");     
     } catch (error) {
         if (error.response) {
             setMsg(error.response.data.msg);
         }
     }
   }
     const handleClickOpen = () => {
       setOpen(true);
     };
     const handleClose = () => {
       setOpen(false);
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
         <Button variant="outlined" style={{color:'blue',width:"180px"}} onClick={handleClickOpen}>
         Reclasser Dossier  </Button>
         <Dialog open={open} onClose={handleClose}>
         <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "500px",width:"3px"}} >X</Button>
    
           <DialogTitle>Classer Dossier</DialogTitle>
           <p>{msg}</p>
           <DialogContent>         
           <FormControl sx={{ m: 1, width: 300 }}>
           <table>     <tr><td><label>Emplacement :</label> </td>
         
         <td> <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            value={emplacement}
            onChange={(e) => setemplacement(e.target.value)}
            input={<OutlinedInput label="Emplacement" />}
            MenuProps={MenuProps}
            style={{width:"250px"}}
          >
            {empList.map((name) => (
              <MenuItem
                key={name.id}
                value={name.nomdossier}
              //  style={getStyles(name, personName, theme)}
              >
                {name.nomdossier}
              </MenuItem>
            ))}
          </Select> </td></tr>
        
<tr>
<td>    <label>Date d'effet :</label></td> 
           <td>   <TextField 
               autoFocus
               margin="dense"
               id="date_effet"              
               type="date"
               fullWidth
               variant="outlined"
               value={ date_effet}
              onChange={(e) => setdate(e.target.value)}
             /></td>
</tr>  </table>            
          </FormControl> 
          
           </DialogContent>
           <DialogActions>
             <Button onClick={ajouter}>Reclasser</Button>
           </DialogActions>
      
         </Dialog>
        
         </div>
     );
   }










   function Imprimer() {
    const [open, setOpen] =useState(false);
    const [num_affaire,setnum]=useState("");
    const [emplacement,setemplacement]=useState("");
    const [client,setclient]=useState("");
    const [tel,settel]=useState("");
    const [mission,setmission]=useState("");
    const [adversaire,setadversaire]=useState("");
    const [reste,setreste]=useState("");
    const [msg, setMsg] = useState('');
    const ajouter = async (e) => {
     e.preventDefault();
     try {
         await Axios.post('http://localhost:5000/adddossier', {
           num_affaire:num_affaire,
           emplacement:emplacement,   
         });
        setnum("");
        setemplacement("");
       
     } catch (error) {
         if (error.response) {
             setMsg(error.response.data.msg);
         }
     }
   }
     const handleClickOpen = () => {
       setOpen(true);
     };
     const handleClose = () => {
       setOpen(false);
     };
   
     return (
          <div>
         <Button variant="outlined" style={{color:'blue',width:"180px"}} onClick={handleClickOpen}>
        Imprimer Liste  </Button>
         <Dialog open={open} onClose={handleClose}>
         <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "500px",width:"3px"}} >X</Button>
         <form onClick={ajouter}>
           <DialogTitle> Imprimer la Liste</DialogTitle>
           <p>{msg}</p>
           <DialogContent>
          
             <TextField 
               autoFocus
               margin="dense"
               id="num_affaire"
               label="num_affaire"
               type="text"
               fullWidth
               variant="outlined"
               value={num_affaire}
               onChange={(e) => setnum(e.target.value)}
             />
              <TextField 
               autoFocus
               margin="dense"
               id="emplacement"
               label="emplacement"
               type="text"
               fullWidth
               variant="outlined"
               value={emplacement}
               onChange={(e) => setemplacement(e.target.value)}
             />                
           </DialogContent>
           <DialogActions>
             <Button >Imprimer</Button>
           </DialogActions>
           </form>
         </Dialog>  
         </div>
     );
   }




   function Supprimer(props) {
    const [open, setOpen] =useState(false);
    const [id,setid]=useState("");
    const [msg, setMsg] = useState('');
  
    const ajouter = async (e) => {
     e.preventDefault();
     try {
         await Axios.post('http://localhost:5000/suppdossiers', {
          id:id, 
         });
      //  setid("");
     } catch (error) {
         if (error.response) {
             setMsg(error.response.data.msg);
         }
     }
   }
     const handleClickOpen = () => {
       setOpen(true);
     };
     const handleClose = () => {
       setOpen(false);
     
     };
   
     return (
          <div>
         <Button variant="outlined" style={{color:'blue',width:"180px"}} onClick={handleClickOpen}>
        Supprimer Dossier  </Button>
         <Dialog open={open} onClose={handleClose}>
         <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "500px",width:"3px"}} >X</Button>
         <form onClick={ajouter}>
           <DialogTitle> Supprimer un dossier</DialogTitle>
           <p>{msg}</p>
           <DialogContent>
           
           <TextField 
               autoFocus
               margin="dense"
               id="emplacement"
               label="emplacement"
               type="text"
               fullWidth
               variant="outlined"
               value={props.idn}
               onChange={(e) => setid(props.idn)}
             /> 
           </DialogContent>
           <DialogActions>
             <Button  >Supprimer</Button>
           </DialogActions>
           </form>
         </Dialog>     
         </div>
     );
   }














const columns = [
  
  { id: 'id', label: 'ID', minWidth: 80 },
  { id: 'num_affaire', label: 'num_affaire', minWidth: 90 },
  { id: 'emplacement', label: 'emplacement', minWidth: 110 },
  { id: 'client', label: 'client', minWidth: 110 },
  {
    id: 'tel',
    label: 'Tel',
    minWidth: 110,  },
  {
    id: 'mission',
    label: 'mission',
    minWidth: 120,},
  { id: 'adversaire', label: 'adversaire', minWidth: 120 },
  {
    id: 'reste',
    label: 'Reste',
    minWidth: 120,},
];

function createData(id,num_affaire,emplacement,client,tel, mission,adversaire,reste) {

  return { id,num_affaire,emplacement,client,tel, mission,adversaire,reste };
}
export default function Tabrecherche(props) {
  //const [id,setid]=useState("");
  const [dossierList, setdossierList] = useState([]);
  const [page, setPage] = React.useState(0);
  const [selected, setSelected] = React.useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [idn, setid] = React.useState('');

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

    
useEffect(() => {   
  Axios.get("http://localhost:5000/getdossier").then((response) => {
    setdossierList(response.data); 
   // console.log(dossierList) ;
   // console.log(response.data) ;  
  });
},[dossierList]);


const [users, setUsers] = useState([]); 
  const [rows, setRows] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");

  const [msg, setMsg] = useState("");

  useEffect(() => {
    getUsers();
  }, [users, keyword]);

  const getUsers = async () => {
    const response = await Axios.get(
      `http://localhost:5000/searchdossier?search_query=${keyword}`
    );
    console.log(response);
    setUsers(response.data.result);
    setRows(response.data.totalRows);
  };
  const searchData = (e) => {
    e.preventDefault();
    setMsg("");
    setKeyword(query);
  };



  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
     let lastSelected=newSelected;
  
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
    setid(newSelected[0]);
  };
  const isSelected = (name) => selected.indexOf(name) !== -1;



  const handle = idn ;
  const componentRef=useRef();
  const handleprint=useReactToPrint({
   content:()=>componentRef.current,
   documentTitle:'dossier',
   onAfterPrint:()=>alert(' sucess')
  })


  const selectAllText = (e) => {
    e.target.select();};
return(
  <Paper sx={{ width: '100%' }}>
   
 <table>

  <tr>
    <thead>
 <TextField 
        autoFocus
        margin="dense"
        id="recherche"
        label="Mots clés"
        type="text"
        fullWidth
        variant="outlined"
        size='small'
        sx={{ m:0.5, width: 300 }}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        />
 <Button onClick={searchData} style={{width:"20px" }} > <SearchIcon  /></Button></thead>
</tr> 
  <tr>
 <tbody><div  ref={componentRef} className='table'>
    <Table stickyHeader aria-label="sticky table">
   
      <TableHead>
       
        <TableRow>
          {columns.map((column) => (
            <TableCell
              key={column.id}
              align={column.align}
              style={{ top: 57, minWidth: column.minWidth }}
            >
              {column.label}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      
      <TableBody>
   
        {users
         // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row, index) => {
            const isItemSelected = isSelected(row.id);
            const labelId = `enhanced-table-checkbox-${index}`;
           
            return (
              
              <TableRow
                hover
                role="checkbox"
                onClick={(event) => handleClick(event, row.id)}
                aria-checked={isItemSelected}
                tabIndex={-1}
                key={row.id}
                selected={isItemSelected}
                setid={props.idn}
              >
               
  
                {columns.map((column) => {
                  const value = row[column.id];
                  return (
                  <TableCell key={column.id} align={column.align}>
                      {column.format && typeof value === 'number'
                        ? column.format(value)
                        : value}
                    </TableCell>
                  );
                })}          
             </TableRow>   )})}          
           </TableBody> 
     </Table> </div></tbody>
  </tr>
 
<tr>
 <tfoot>
<DialogActions style={{margin:"3px"}}>
       <td>  <AddTache idn={handle} /></td>
         <td><ReclasserDossier idn={handle} /></td> 
    
          <ArchiverDossier idn={handle}/>
         
          <Button  onClick= {handleprint} variant="outlined" style={{color:'blue',width:"180px"}} >
        Imprimer  </Button>
    
          <Supprimer idn={handle}/>   
    </DialogActions></tfoot></tr>
    </table>
    
 
</Paper>
);
}