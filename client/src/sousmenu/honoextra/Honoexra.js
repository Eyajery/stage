import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';




import { TextField } from '@mui/material'; 
import { useState } from 'react';
import  Axios  from 'axios';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect,useRef } from "react";


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import TableContainer from '@mui/material/TableContainer';
export default function FullScreenDialog() {
  const [open, setOpen] =useState(false);
 
  const [users, setUsers] = useState([]);
  
 
  function timeout(ms){
    return new Promise((resolve)=>setTimeout(resolve,ms))
  }
  useEffect(() => { 
    const fetchData =async()=>{
    const result =await Axios(
      "http://localhost:5000/gethono",
    );
    await timeout(1000);
    setUsers(result.data);
   };
  fetchData();
  })
 
  const [selected, setSelected] = React.useState([]);
 

  const [idM, setid] = React.useState([]);
    const [lM, setraison] = React.useState([]);
   
    const [lC, setraison1] = React.useState([]);
    const [lMa, setraison2] = React.useState([]);
 
 


  const handleClick = (event, id,lbelle,lbelle_francais,montant) => {
    
    
    let newSelected = [];
    let lModif=[];
    let lModif1=[];
    let lModif2=[];
    newSelected = id;
    lModif=lbelle;
    lModif1=lbelle_francais; 
    lModif2=montant;
    setid(newSelected);
   
    setraison(lModif);
    setraison1(lModif1);
    setraison2(lModif2);
  };
  
    const handleM = lM;   
    const handle = idM;
    const handleC = lC;
    const handleMa = lMa;
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

   
     
const [select, setselect]= useState([]);
useEffect( ()=>{
  const getcountrydata= async()=>{
    const reqData= await fetch("http://localhost:5000/empdossier");
    const resData= await reqData.json();
   setselect(await resData);
  }
  getcountrydata();
},[]);

  return (
    <div >

<Button onClick={handleOpen}style={{borderColor:"transparent",height:"50px",width:"150px",marginLeft:"-3px",fontSize:"12px",color:"white" }}   >     Honoraire en extra </Button>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
      <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "500px",width:"3px"
      , backgroundColor:"#c72120", color:"white",height:"25px"}}>X</Button>
        
      <table  > 
        <thead>
      <tr >
          <td style={{alignItems:"center" }}>
          
          <DialogTitle style={{color:'#6e5244' , marginLeft:"100px", fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"27px"}} >Honoraire en extra</DialogTitle>
          </td>
          
          </tr></thead>
          <tbody>
            
          <tr>
          
            
    
<Paper sx={{ width: '100%', overflow: 'hidden' }}>


        <Table stickyHeader aria-label="sticky table">
        
              <TableHead>
                  <TableCell> </TableCell>
                  <TableCell style={{color:"#1f4b77" , marginLeft:"350px", fontFamily:"cursive"
      , fontWeight:"bold", fontSize:"15px"}} > ID</TableCell>
                  
              <TableCell style={{color:"#1f4b77" , marginLeft:"350px", fontFamily:"cursive"
      , fontWeight:"bold", fontSize:"15px"}}>Libelle</TableCell>
              <TableCell style={{color:"#1f4b77" , marginLeft:"350px", fontFamily:"cursive"
      , fontWeight:"bold", fontSize:"15px"}} >Libelle_francais</TableCell>
              <TableCell style={{color:"#1f4b77" , marginLeft:"350px", fontFamily:"cursive"
      , fontWeight:"bold", fontSize:"15px"}} >Montant</TableCell>
             
              </TableHead>
  
              <TableBody>
              
                {users
            
                  .map((row, index) => {
                   
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.id,row.lbelle,row.lbelle_francais,row.montant)}
                        //  onChange={(e) => handleCountry()}
                        role="checkbox"
                  
                        tabIndex={-1}
                        key={row.id}
                        
                      >
                       <TableCell padding="checkbox">
                        <Checkbox
                          //onChange={(e) => handleCountry()}
                          color="primary"
                  
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
              <TableCell >{(row.id)}</TableCell>
              <TableCell>{(row.lbelle)}</TableCell>
             <TableCell>{row.lbelle_francais}</TableCell>
             <TableCell>{row.montant}</TableCell>
             
             </TableRow>   )})}         
              </TableBody>        
            
              
             
            </Table>
          
        </Paper>
       
    

     
      </tr>
      
      </tbody>
      </table>
      <DialogActions>
        <Adddossier/> <Suppossier  idM={handle} /> <Modifdossier idM={handle} lM={handleM} lC={handleC} lMa={handleMa}/>
        
     </DialogActions>   
      </Dialog>
      

      </div>
  );
              }

              function Adddossier() {
                const [open, setOpen] =useState(false);
                const [lbelle,setlbelle]=useState("");
                const [lbelle_francais,setlbelle_francais]=useState("");
                const [montant,setmontant]=useState("");
                const [msg, setMsg] = useState('');
                const ajouter = async (e) => {
                 e.preventDefault();
                 try {
                     await Axios.post('http://localhost:5000/adhono', {
                         lbelle:lbelle,
                         lbelle_francais:lbelle_francais,
                         montant:montant,
                     });
                    setlbelle("");
                    setlbelle_francais("");
                    setmontant("");
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
                       <Button variant="outlined" style={{color:'white',width:"180px",backgroundColor:"#1f4b77"
                    ,marginLeft:"4px"}} onClick={handleClickOpen}>
                       Ajouter  </Button>
                     <Dialog open={open} onClose={handleClose}>
                     <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "500px",width:"3px"
                       , backgroundColor:"#c72120", color:"white",height:"25px"}} >X</Button>
                    
                       <DialogTitle style={{color:'#6e5244' , marginLeft:"100px", fontFamily:"cursive"
                       , fontWeight:"bold", fontSize:"30px"}} >Ajouter un dossier</DialogTitle>
                       <p>{msg}</p>
                       <DialogContent>
                         <TextField 
                           autoFocus
                           margin="dense"
                           id="lbelle"
                           label="lbelle"
                           type="text"
                           fullWidth
                           variant="outlined"
                           value={lbelle}
                           onChange={(e) => setlbelle(e.target.value)}
                         />
                          <TextField 
                           autoFocus
                           margin="dense"
                           id="lbelle_francais"
                           label="lbelle_francais"
                           type="text"
                           fullWidth
                           variant="outlined"
                           value={lbelle_francais}
                           onChange={(e) => setlbelle_francais(e.target.value)}
                         />
                          <TextField 
                           autoFocus
                           margin="dense"
                           id="montant"
                           label="montant"
                           type="text"
                           fullWidth
                           variant="outlined"
                           value={montant}
                           onChange={(e) => setmontant(e.target.value)}
                         />
                       </DialogContent>
                       <DialogActions>
                         <Button  onClick={ajouter} >Ajouter</Button>
                       </DialogActions>
                       
                     </Dialog>
                    
                   </div>
                 );
               }
               
               
               function Suppossier(props) {
                 const [open, setOpen] =useState(false);
                 const [id,setid]=useState("");
                 const [msg, setMsg] = useState('');
                 const supprimer = async (e) => {
                  e.preventDefault();
                  try {
                      await Axios.post('http://localhost:5000/suphono', {
                          id:props.idM
                      });
                      setid("");
                   
                  } catch (error) {
                      if (error.response) {
                          setMsg(error.response.data.msg);
                      }
                  }
                }
                  const handleClickOpen = () => {
                    setOpen(true);
                    setid(props.idM)
                  };
                  const handleClose = () => {
                    setOpen(false);
                  };
                
                  return (
                    <div>
                      <Button variant="outlined" style={{color:'white',width:"180px",backgroundColor:"#1f4b77"
                    ,marginLeft:"4px"}} onClick={handleClickOpen}>
                        Supprimer  </Button>
                      <Dialog open={open} onClose={handleClose}>
                      <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "500px",width:"3px"
                       , backgroundColor:"#c72120", color:"white",height:"25px"}} >X</Button>
                      
                        <DialogTitle style={{color:'#6e5244' , marginLeft:"100px", fontFamily:"cursive"
                       , fontWeight:"bold", fontSize:"30px"}}  >Supprimer un dossier</DialogTitle>
                        <p>{msg}</p>
                        <DialogContent>
                          <TextField 
                            autoFocus
                            margin="dense"
                            id="id"
                            label="id"
                            type="text"
                            fullWidth
                            variant="outlined"
                            value={props.idM}
                            onChange={(e) => setid(props.idM)}
                          />
                        </DialogContent>
                        <DialogActions>
                        <form onSubmit={supprimer}>
                          <Button type="submit" style={{color:'white',width:"180px",backgroundColor:"#1f4b77"
                    ,marginLeft:"4px"}} onClick={handleClose} >Supprimer</Button></form>
                        </DialogActions>
                        
                      </Dialog>
                     
                    </div>
                  );
                }
               
               
               function Modifdossier(props) {
                 const [open, setOpen] =useState(false);
                 const [id,setid]=useState("");
                 const [lbelle_francais,setlbelle_francais]=useState("");
                 const [lbelle,setlbelle]=useState("");
                 const[ montant,setmontant]=useState("");
                 const [msg, setMsg] = useState('');
                 const modifier= async (e) => {
                  e.preventDefault();
                  try {
                      await Axios.post('http://localhost:5000/modifhono', {
                          id:props.idM,
                        lbelle:lbelle,
                        lbelle_francais:lbelle_francais,
                        montant:montant,
                      });
                      setid("");
                      setlbelle("");
                      setlbelle_francais("");
                    setmontant("");
                  } catch (error) {
                      if (error.response) {
                          setMsg(error.response.data.msg);
                      }
                  }
                }
                  const handleClickOpen = () => {
                    setOpen(true);
                    setid(props.idM)
             setlbelle(props.lM);
             setlbelle_francais(props.lC);
             setmontant(props.lMa);
                  };
                  const handleClose = () => {
                    setOpen(false);
                   
                  };
                
                  return (
                    <div>
                      <Button variant="outlined" style={{color:'white',width:"180px",backgroundColor:"#1f4b77"
                    ,marginLeft:"4px"}} onClick={handleClickOpen}>
                        Modifier  </Button>
                      <Dialog open={open} onClose={handleClose}>
                      <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "530px",width:"3px"
                       , backgroundColor:"#c72120", color:"white",height:"25px"}} >X</Button>
                      
                        <DialogTitle style={{color:'#6e5244' , marginLeft:"100px", fontFamily:"cursive"
                       , fontWeight:"bold", fontSize:"30px"}}  >Modifier un dossier</DialogTitle>
                        <p>{msg}</p>
                        <DialogContent>
                          <TextField 
                            autoFocus
                            margin="dense"
                            id="id"
                            label="id"
                            type="text"
                            fullWidth
                            variant="outlined"
                            value={props.idM}
                            onChange={(e) => setid(e.target.value)}
                          />
                           <TextField 
                            autoFocus
                            margin="dense"
                            id="lbelle"
                            label="lbelle"
                            type="text"
                            fullWidth
                            variant="outlined"
                            value={lbelle}
                            onChange={(e) => setlbelle(e.target.value)}
                          />
                          <TextField 
                            autoFocus
                            margin="dense"
                            id="lbelle_francais"
                            label="lbelle_francais"
                            type="text"
                            fullWidth
                            variant="outlined"
                            value={lbelle_francais}
                            onChange={(e) => setlbelle_francais(e.target.value)}
                          />
                           <TextField 
                            autoFocus
                            margin="dense"
                            id="montant"
                            label="montant"
                            type="text"
                            fullWidth
                            variant="outlined"
                            value={montant}
                            onChange={(e) => setmontant(e.target.value)}
                          />
                        </DialogContent>
                        <DialogActions>
                        <form onSubmit={modifier}>
                          <Button type='submit'  onClick={handleClose}    style={{color:'white',width:"180px",backgroundColor:"#1f4b77"
                    ,marginLeft:"4px"}} >Modifier</Button></form>
                        </DialogActions>
                        
                      </Dialog>
                     
                    </div>
                  );
                }