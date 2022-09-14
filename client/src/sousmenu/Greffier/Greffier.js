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
      "http://localhost:5000/greffier",
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
    const [lE, setraison4] = React.useState([]);
 


  const handleClick = (event, id,nom,prenom,adress,cin,tel) => {
    
    
    let newSelected = [];
    let lModif=[];
    let lModif1=[];
    let lModif2=[];
    let lModif3=[];
    let lModif4=[];
    newSelected = id;
    lModif=nom;
    lModif1=prenom; 
    lModif2=adress;
    lModif3=cin;
    lModif4=tel;
    setid(newSelected);
   
    setraison(lModif);
    setraison1(lModif1);
    setraison2(lModif2);
    setraison3(lModif3);
    setraison4(lModif4);

  };
  
    const handleM = lM;   
    const handle = idM;
    const handleC = lC;
    const handleMa = lMa;
    const handleV = lV;
    const handleE = lE;
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

   
     

  return (
    <div >

<Button onClick={handleOpen}style={{borderColor:"transparent",height:"50px",width:"400px",marginLeft:"-150px",fontSize:"12px",color:"white" }} > Greffier </Button>
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
        , fontWeight:"bold", fontSize:"27px"}} >Liste des Greffiers</DialogTitle>
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
      , fontWeight:"bold", fontSize:"15px"}}>Nom</TableCell>
              <TableCell style={{color:"#1f4b77" , marginLeft:"350px", fontFamily:"cursive"
      , fontWeight:"bold", fontSize:"15px"}} >Prénom</TableCell>
              <TableCell style={{color:"#1f4b77" , marginLeft:"350px", fontFamily:"cursive"
      , fontWeight:"bold", fontSize:"15px"}} >Adress</TableCell>
              <TableCell style={{color:"#1f4b77" , marginLeft:"350px", fontFamily:"cursive"
      , fontWeight:"bold", fontSize:"15px"}} >Cin</TableCell>
              <TableCell style={{color:"#1f4b77" , marginLeft:"350px", fontFamily:"cursive"
      , fontWeight:"bold", fontSize:"15px"}} >Tel</TableCell>
             
              </TableHead>
  
              <TableBody>
              
                {users
            
                  .map((row, index) => {
                   
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.id,row.nom,row.prenom,row.adresse,row.cin,row.tel)}
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
              <TableCell>{(row.nom)}</TableCell>
             <TableCell>{row.prenom}</TableCell>
             <TableCell>{row.adresse}</TableCell>
             <TableCell>{row.cin}</TableCell>
             <TableCell>{row.tel}</TableCell>
             </TableRow>   )})}         
              </TableBody>        
            
              
             
            </Table>
          
        </Paper>
       
    

     
      </tr>
      
      </tbody>
      </table>
      <DialogActions>
        <Addgreffier/> <Suppossier  idM={handle} /> <Modifdossier idM={handle} lM={handleM} lC={handleC} lMa={handleMa} lV={handleV}lE={handleE}  />
        
     </DialogActions>   
      </Dialog>
      

      </div>
  );
              }

              function Addgreffier() {
                const [open, setOpen] =useState(false);
                const [nom,setnom]=useState("");
                const [prenom,setprenom]=useState("");
                const [adresse,setadresse]=useState("");
                const [cin,setcin]=useState("");
                const [tel,settel]=useState("");
                const [msg, setMsg] = useState('');
                const ajouter = async (e) => {
                 e.preventDefault();
                 try {
                     await Axios.post('http://localhost:5000/addgreffier', {
                         nom:nom,
                         prenom:prenom, adresse:adresse, cin:cin, tel:tel
                     });
                     setnom("");
                     setprenom("");
                     setadresse("");
                     setcin("");
                     settel("");
                    
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
                     <Button variant="outlined"style={{color:'white',width:"100px",backgroundColor:"#1f4b77"
                    ,marginLeft:"10px"}}  onClick={handleClickOpen} >
                       Ajouter </Button>
                     <Dialog open={open} onClose={handleClose}>
                     <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "530px",width:"3px"
                       , backgroundColor:"#c72120", color:"white",height:"25px"}} >X</Button>
                     
                       <DialogTitle style={{color:'#6e5244' , marginLeft:"100px", fontFamily:"cursive"
                       , fontWeight:"bold", fontSize:"25px"}}>Ajouter un greffier</DialogTitle>
                       <p>{msg}</p>
                       <DialogContent>
                         <TextField 
                           autoFocus
                           margin="dense"
                           id="nom"
                           label="Nom"
                           type="text"
                           fullWidth
                           variant="outlined"
                           value={nom}
                           onChange={(e) => setnom(e.target.value)}
                         />
                         <TextField 
                           autoFocus
                           margin="dense"
                           id="prenom"
                           label="Prénom"
                           type="text"
                           fullWidth
                           variant="outlined"
                           value={prenom}
                           onChange={(e) => setprenom(e.target.value)}
                         />
                         <TextField 
                           autoFocus
                           margin="dense"
                           id="adresse"
                           label="Adresse"
                           type="text"
                           fullWidth
                           variant="outlined"
                           value={adresse}
                           onChange={(e) => setadresse(e.target.value)}
                         />
                         <TextField 
                           autoFocus
                           margin="dense"
                           id="cin"
                           label="CIN"
                           type="number"
                           fullWidth
                           variant="outlined"
                           value={cin}
                           onChange={(e) => setcin(e.target.value)}
                         />
                         <TextField 
                           autoFocus
                           margin="dense"
                           id="tel"
                           label="TEL"
                           type="number"
                           fullWidth
                           variant="outlined"
                           value={tel}
                           onChange={(e) => settel(e.target.value)}
                         />
                       </DialogContent>
                       <DialogActions>
                         <Button style={{color:'white',width:"100px",backgroundColor:"#1f4b77"
                    ,marginLeft:"10px"}} onClick={ajouter}>Ajouter</Button>
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
                      await Axios.post('http://localhost:5000/suppgreffier', {
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
                    ,marginLeft:"4px"}} onClick={handleClose} >Supprimer un greffier</Button></form>
                        </DialogActions>
                        
                      </Dialog>
                     
                    </div>
                  );
                }
               
               
               function Modifdossier(props) {
                 const [open, setOpen] =useState(false);
        
                 const [id,setid]=useState("");
                 const [nom,setnom]=useState("");
                 const [prenom,setprenom]=useState("");
                 const [adresse,setadresse]=useState("");
                 const [cin,setcin]=useState("");
                 const [tel,settel]=useState("");
                 const [msg, setMsg] = useState('');
                 const modifier= async (e) => {
                  e.preventDefault();
                  try {
                      await Axios.post('http://localhost:5000/modifgreffier', {
                          id:props.idM,
                       
                          nom:nom,
                        prenom:prenom, adresse:adresse, cin:cin, tel:tel
                      });
                      setid("");
         setnom("");
      setprenom("");
      setadresse("");
      setcin("");
      settel("");
                  } catch (error) {
                      if (error.response) {
                          setMsg(error.response.data.msg);
                      }
                  }
                }
                  const handleClickOpen = () => {
                    setOpen(true);
                    setid(props.idM)
             setnom(props.lM);
             setprenom(props.lC);
             setadresse(props.lMa);
             setcin(props.lV);
             settel(props.lE)
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
            id="nom"
            label="Nom"
            type="text"
            fullWidth
            variant="outlined"
            value={nom}
            onChange={(e) => setnom(e.target.value)}
          />
          <TextField 
            autoFocus
            margin="dense"
            id="prenom"
            label="Prénom"
            type="text"
            fullWidth
            variant="outlined"
            value={prenom}
            onChange={(e) => setprenom(e.target.value)}
          />
          <TextField 
            autoFocus
            margin="dense"
            id="adresse"
            label="Adress"
            type="text"
            fullWidth
            variant="outlined"
            value={adresse}
            onChange={(e) => setadresse(e.target.value)}
          />
          <TextField 
            autoFocus
            margin="dense"
            id="cin"
            label="CIN"
            type="number"
            fullWidth
            variant="outlined"
            value={cin}
            onChange={(e) => setcin(e.target.value)}
          />
          <TextField 
            autoFocus
            margin="dense"
            id="tel"
            label="TEL"
            type="number"
            fullWidth
            variant="outlined"
            value={tel}
            onChange={(e) => settel(e.target.value)}
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