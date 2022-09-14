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
      "http://localhost:5000/primegreff",
    );
    await timeout(1000);
    setUsers(result.data);
   };
  fetchData();
  })
 
 
 

  const [idM, setid] = React.useState([]);
    const [lM, setraison] = React.useState([]);
   
    const [lC, setraison1] = React.useState([]);
    const [lMa, setraison2] = React.useState([]);
    const [lV, setraison3] = React.useState([]);
   
 


  const handleClick = (event, id,libelle,montant,impot,mensuelle) => {
    let newSelected = [];
    let lModif=[];
    let lModif1=[];
    let lModif2=[];
    let lModif3=[];
    let lModif4=[];
    newSelected = id;
    lModif=libelle;
    lModif1=montant; 
    lModif2=impot;
    lModif3=mensuelle;
  
    setid(newSelected);
   
    setraison(lModif);
    setraison1(lModif1);
    setraison2(lModif2);
    setraison3(lModif3);


  };
  
    const handleM = lM;   
    const handle = idM;
    const handleC = lC;
    const handleMa = lMa;
    const handleV = lV;

    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

   
     

  return (
    <div >

<Button onClick={handleOpen} style={{borderColor:"transparent",height:"50px",width:"150px",marginLeft:"-3px",fontSize:"12px",color:"white" }}>Prime Greffier </Button>
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
        , fontWeight:"bold", fontSize:"27px"}} >Liste des primes des greffiers</DialogTitle>
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
      , fontWeight:"bold", fontSize:"15px"}} >Montant</TableCell>
              <TableCell style={{color:"#1f4b77" , marginLeft:"350px", fontFamily:"cursive"
      , fontWeight:"bold", fontSize:"15px"}} >Impôt</TableCell>
              <TableCell style={{color:"#1f4b77" , marginLeft:"350px", fontFamily:"cursive"
      , fontWeight:"bold", fontSize:"15px"}} >Mensuelle</TableCell>
            
              </TableHead>
  
              <TableBody>
              
                {users
            
                  .map((row, index) => {
                   
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.id,row.libelle,row.montant,row.impot,row.mensuelle)}
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
              <TableCell>{(row.libelle)}</TableCell>
             <TableCell>{row.montant}</TableCell>
             <TableCell>{row.impot}</TableCell>
             <TableCell>{row.mensuelle}</TableCell>
            
             </TableRow>   )})}         
              </TableBody>        
            
              
             
            </Table>
          
        </Paper>
       
    

     
      </tr>
      
      </tbody>
      </table>
      <DialogActions>
        <Addprimegreffier/> <Suppossier  idM={handle} /> <Modifdossier idM={handle} lM={handleM} lC={handleC} lMa={handleMa} lV={handleV}  />
        
     </DialogActions>   
      </Dialog>
      

      </div>
  );
              }

              function Addprimegreffier() {
                const [open, setOpen] =useState(false);
                const [msg,setMsg]=useState("");
                const [libelle,setlibelle]=useState("");
                const [montant,setmontant]=useState("");
                const [impot,setimpot]=useState("");
                const [mensuelle,setmensuelle]=useState("");
                const ajouter = async (e) => {
                 e.preventDefault();
                 try {
                     await Axios.post('http://localhost:5000/addprimegreff', {
                       libelle: libelle,
                       montant: montant, impot: impot, mensuelle:mensuelle,
                     });
                     setlibelle("");
                     setmontant("");
                     setimpot("");
                     setmensuelle("");
                    
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
                    <Button variant="outlined" style={{color:'white',width:"100px",backgroundColor:"#1f4b77"
                      ,marginLeft:"5px"}} onClick={handleClickOpen} >
                       Ajouter </Button>
                     <Dialog open={open} onClose={handleClose}>
                     <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "500px",width:"3px"
                       , backgroundColor:"#c72120", color:"white",height:"25px"}}  >X</Button>
                 
                       <DialogTitle style={{color:'#6e5244' , marginLeft:"100px", fontFamily:"cursive"
                       , fontWeight:"bold", fontSize:"30px"}} >Ajouter un prime greffier</DialogTitle>
                       <p>{msg}</p>
                       <DialogContent>
                         <TextField 
                           autoFocus
                           margin="dense"
                           id="libelle"
                           label="Libelle"
                           type="text"
                           fullWidth
                           variant="outlined"
                           value={libelle}
                           onChange={(e) => setlibelle(e.target.value)}
                         />
                         <TextField 
                           autoFocus
                           margin="dense"
                           id="monatnt"
                           label="Montant"
                           type="number"
                           fullWidth
                           variant="outlined"
                           value={montant}
                           onChange={(e) => setmontant(e.target.value)}
                         />
                         <TextField 
                           autoFocus
                           margin="dense"
                           id="impot"
                           label="Impôt"
                           type="number"
                           fullWidth
                           variant="outlined"
                           value={impot}
                           onChange={(e) => setimpot(e.target.value)}
                         />
                         <TextField 
                           autoFocus
                           margin="dense"
                           id="mensuelle"
                           label="Mensuelle"
                           type="text"
                           fullWidth
                           variant="outlined"
                           value={mensuelle}
                           onChange={(e) => setmensuelle(e.target.value)}
                         />
                       </DialogContent>
                       <DialogActions>
                         <Button onClick={ajouter} style={{color:'white',width:"180px",backgroundColor:"#1f4b77"
                    ,marginLeft:"4px"}}>Ajouter</Button>
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
                      await Axios.post('http://localhost:5000/suppprimegreff', {
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
                      <Button variant="outlined" style={{color:'white',width:"100px",backgroundColor:"#1f4b77"
     ,marginLeft:"10px"}} onClick={handleClickOpen}>
           Supprimer  </Button>
                      <Dialog open={open} onClose={handleClose}>
                      <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "500px",width:"3px"
                       , backgroundColor:"#c72120", color:"white",height:"25px"}} >X</Button>
                      
                        <DialogTitle style={{color:'#6e5244' , marginLeft:"100px", fontFamily:"cursive"
                       , fontWeight:"bold", fontSize:"30px"}}  >Supprimer un greffier</DialogTitle>
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
                    ,marginLeft:"4px"}} onClick={handleClose} >Supprimer </Button></form>
                        </DialogActions>
                        
                      </Dialog>
                     
                    </div>
                  );
                }
               
               
               function Modifdossier(props) {
                 const [open, setOpen] =useState(false);
        
                 const [id,setid]=useState("");
                 const [libelle,setlibelle]=useState("");
    const [montant,setmontant]=useState("");
    const [impot,setimpot]=useState("");
    const [mensuelle,setmensuelle]=useState("");
                 const [msg, setMsg] = useState('');
                 const modifier= async (e) => {
                  e.preventDefault();
                  try {
                      await Axios.post('http://localhost:5000/modifprimegreff', {
                          id:props.idM,
                       
                          libelle: libelle,
                          montant: montant, impot: impot, mensuelle:mensuelle,
                      });
                      setid("");
                      setlibelle("");
                      setmontant("");
                      setimpot("");
                      setmensuelle("");
                  } catch (error) {
                      if (error.response) {
                          setMsg(error.response.data.msg);
                      }
                  }
                }
                  const handleClickOpen = () => {
                    setOpen(true);
                    setid(props.idM)
             setlibelle(props.lM);
             setmontant(props.lC);
             setimpot(props.lMa);
             setmensuelle(props.lV);
      
                  };
                  const handleClose = () => {
                    setOpen(false);
                   
                  };
                
                  return (
                    <div>
                     <Button variant="outlined" style={{color:'white',width:"100px",backgroundColor:"#1f4b77"
     ,marginLeft:"10px"}} onClick={handleClickOpen}>
           Modifier  </Button>
                      <Dialog open={open} onClose={handleClose}>
                      <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "530px",width:"3px"
                       , backgroundColor:"#c72120", color:"white",height:"25px"}} >X</Button>
                      
                        <DialogTitle style={{color:'#6e5244' , marginLeft:"100px", fontFamily:"cursive"
                       , fontWeight:"bold", fontSize:"30px"}}  >Modifier un greffier</DialogTitle>
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
            id="libelle"
            label="Libelle"
            type="text"
            fullWidth
            variant="outlined"
            value={libelle}
            onChange={(e) => setlibelle(e.target.value)}
          />
          <TextField 
            autoFocus
            margin="dense"
            id="monatnt"
            label="Montant"
            type="number"
            fullWidth
            variant="outlined"
            value={montant}
            onChange={(e) => setmontant(e.target.value)}
          />
          <TextField 
            autoFocus
            margin="dense"
            id="impot"
            label="Impôt"
            type="number"
            fullWidth
            variant="outlined"
            value={impot}
            onChange={(e) => setimpot(e.target.value)}
          />
          <TextField 
            autoFocus
            margin="dense"
            id="mensuelle"
            label="Mensuelle"
            type="text"
            fullWidth
            variant="outlined"
            value={mensuelle}
            onChange={(e) => setmensuelle(e.target.value)}
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