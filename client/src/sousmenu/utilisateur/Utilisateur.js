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
      "http://localhost:5000/getutil",
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
 
 


  const handleClick = (event, id,email,password,domaine) => {
    
    
    let newSelected = [];
    let lModif=[];
    let lModif1=[];
    let lModif2=[];
    newSelected = id;
    lModif=email;
    lModif1=password; 
    lModif2=domaine;
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

   
     


  return (
    <div >

<Button onClick={handleOpen}style={{borderColor:"transparent",height:"50px",width:"150px",marginLeft:"-3px",fontSize:"12px",color:"white" }} >    Utilisateur </Button>
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
        , fontWeight:"bold", fontSize:"27px"}} >Liste des utilisateurs</DialogTitle>
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
      , fontWeight:"bold", fontSize:"15px"}}>Email</TableCell>
              <TableCell style={{color:"#1f4b77" , marginLeft:"350px", fontFamily:"cursive"
      , fontWeight:"bold", fontSize:"15px"}} >Password</TableCell>
              <TableCell style={{color:"#1f4b77" , marginLeft:"350px", fontFamily:"cursive"
      , fontWeight:"bold", fontSize:"15px"}} >Domaine</TableCell>
             
              </TableHead>
  
              <TableBody>
              
                {users
            
                  .map((row, index) => {
                   
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.id,row.email,row.password,row.domaine)}
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
              <TableCell>{(row.email)}</TableCell>
             <TableCell>{row.password}</TableCell>
             <TableCell>{row.domaine}</TableCell>
             
             </TableRow>   )})}         
              </TableBody>        
            
              
             
            </Table>
          
        </Paper>
       
    

     
      </tr>
      
      </tbody>
      </table>
      <DialogActions>
        <Addutil/> <Supputil  idM={handle} /> <Modifutil idM={handle} lM={handleM} lC={handleC} lMa={handleMa}/>
        
     </DialogActions>   
      </Dialog>
      

      </div>
  );
              }

           
              function Addutil() {
                const [open, setOpen] =useState(false);
                const [email,setemail]=useState("");
                const [password,setpassword]=useState("");
                const [domaine,setdomaine]=useState("");
                const [msg, setMsg] = useState('');
                const ajouter = async (e) => {
                 e.preventDefault();
                 try {
                     await Axios.post('http://localhost:5000/addutil', {
                         email:email,
                         password:password,
                         domaine:domaine 
                     });
                    setemail("");
                    setpassword("");
                    setdomaine("");
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
                     <Button variant="outlined"   style={{color:'white',width:"100px",backgroundColor:"#1f4b77"
                    ,marginLeft:"10px"}}onClick={handleClickOpen}>
                       Ajouter  </Button>
                     <Dialog open={open} onClose={handleClose}>
                     <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "530px"
                        ,marginTop:"10px",width:"3px"
                       , backgroundColor:"#c72120", color:"white",height:"25px"}} >X</Button>
               
                       <DialogTitle style={{color:'#6e5244' , marginLeft:"100px", fontFamily:"cursive"
                       , fontWeight:"bold", fontSize:"25px"}} >Ajouter un Utilisateur</DialogTitle>
                       <p>{msg}</p>
                       <DialogContent>
                         <TextField 
                           autoFocus
                           margin="dense"
                           id="email"
                           label="email"
                           type="text"
                           fullWidth
                           variant="outlined"
                           value={email}
                           onChange={(e) => setemail(e.target.value)}
                         />
                          <TextField 
                           autoFocus
                           margin="dense"
                           id="password"
                           label="password"
                           type="password"
                           fullWidth
                           variant="outlined"
                           value={password}
                           onChange={(e) => setpassword(e.target.value)}
                         />
                          <TextField 
                           autoFocus
                           margin="dense"
                           id="domaine"
                           label="Domaine"
                           type="text"
                           fullWidth
                           variant="outlined"
                           value={domaine}
                           onChange={(e) => setdomaine(e.target.value)}
                         />
                       </DialogContent>
                       <DialogActions>
                         <Button onClick={ajouter} style={{color:'white',width:"100px",backgroundColor:"#1f4b77"
                    ,marginLeft:"10px"}} >Ajouter</Button>
                       </DialogActions>
                      
                     </Dialog>
                    
                   </div>
                 );
               }
               
               function Supputil(props) {
                 const [open, setOpen] =useState(false);
                 const [id,setid]=useState("");
                 const [msg, setMsg] = useState('');
                 const supprimer = async (e) => {
                  e.preventDefault();
                  try {
                      await Axios.post('http://localhost:5000/supputil', {
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
                      <Button variant="outlined"  onClick={handleClickOpen}  style={{color:'white',width:"100px",backgroundColor:"#1f4b77"
     ,marginLeft:"10px"}}>
                        Supprimer  </Button>
                      <Dialog open={open} onClose={handleClose}>
                      <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "500px",width:"3px"}} >X</Button>
                     
                        <DialogTitle>Supprimer un dossier</DialogTitle>
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
                          <Button onClick={supprimer} >Supprimer</Button>
                        </DialogActions>
                        
                      </Dialog>
                     
                    </div>
                  );
                }
               
               
               function Modifutil(props) {
                 const [open, setOpen] =useState(false);
                 const [id,setid]=useState("");
                 const [email,setemail]=useState("");
                 const [password,setpassword]=useState("");
                 const [domaine,setdomaine]=useState("");
                 const [msg, setMsg] = useState('');
                 const modifier= async (e) => {
                  e.preventDefault();
                  try {
                      await Axios.post('http://localhost:5000/modifutil', {
                          id:props.idM,
                          email:email,
                          password:password,
                          domaine:domaine 
                      });
                      setid("");
         setemail("");
     setpassword("");
     setdomaine("");
                  } catch (error) {
                      if (error.response) {
                          setMsg(error.response.data.msg);
                      }
                  }
                }
                  const handleClickOpen = () => {
                    setOpen(true);
                    setid(props.idM)
             setemail(props.lM);
             setpassword(props.lC);
             setdomaine(props.lMa);
                  };
                  const handleClose = () => {
                    setOpen(false);
                   
                  };
                
                  return (
                    <div>
                      <Button variant="outlined"  onClick={handleClickOpen}  style={{color:'white',width:"100px",backgroundColor:"#1f4b77"
     ,marginLeft:"10px"}}>
                        Modifier  </Button>
                      <Dialog open={open} onClose={handleClose}>
                      <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "500px",width:"3px"}} >X</Button>
                     
                        <DialogTitle>Modifier un dossier</DialogTitle>
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
            id="email"
            label="email"
            type="text"
            fullWidth
            variant="outlined"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
           <TextField 
            autoFocus
            margin="dense"
            id="password"
            label="password"
            type="password"
            fullWidth
            variant="outlined"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
           <TextField 
            autoFocus
            margin="dense"
            id="domaine"
            label="Domaine"
            type="text"
            fullWidth
            variant="outlined"
            value={domaine}
            onChange={(e) => setdomaine(e.target.value)}
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