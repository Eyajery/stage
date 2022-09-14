import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';


import './Emp_doss.css';

import { TextField } from '@mui/material'; 
import { useState } from 'react';
import  Axios  from 'axios';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect,useRef } from "react";

import SearchIcon from '@mui/icons-material/Search';
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
  
  const [rows, setRows] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");
  const [msg, setMsg] = useState("");
 
 
  useEffect(() => {
  
    const getUsers = async () => {
      const response = await Axios.get(
        `http://localhost:5000/searchdossier?search_query=${keyword}`
      );
     
      setUsers(response.data.result);
    
      setRows(response.data.totalRows);
    };
    getUsers();
  },  
   [users, keyword]);

  
 
  const searchData = (e) => {
    e.preventDefault();
    //setPage(0);
    setMsg("");
    setKeyword(query);
  };
 

 

  const [idM, setid] = React.useState([]);
  const [lM, setraison] = React.useState([]);
 
  const [lC, setraison1] = React.useState([]);
  const [lMa, setraison2] = React.useState([]);
  const [lV, setraison3] = React.useState([]);
  const [lR, setraison4] = React.useState([]);
  const [lN, setraison5] = React.useState([]);
  const [lAd, setraison6] = React.useState([]);
 

  const handleClick = (event, id,num_affaire,emplacement,client,tel,mission,adversaire,reste) => {
   
   
  let newSelected = [];
  let lModif=[];
  let lModif1=[];
  let lModif2=[];
  let lModif3=[];
  let lModif4=[];
  let lModif5=[];
  let lModif6=[];
    
  newSelected = id;
        lModif=num_affaire;
        lModif1=emplacement; 
        lModif2=client;
        lModif3=tel;
        lModif4=mission;
        lModif5=adversaire;
        lModif6=reste;
        setid(newSelected);
        setraison(lModif);
        setraison1(lModif1);
        setraison2(lModif2);
        setraison3(lModif3);
        setraison4(lModif4);
        setraison5(lModif5);
        setraison6(lModif6);
  };
  

 
  

  const handleM = lM;   
  const handle = idM;
  const handleC = lC;
  const handleMa = lMa;
  const handleV = lV;
  const handleR = lR;
  const handleN = lN;
  const handleAd= lAd;
    
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
const [searchraison, setSearchraison] = useState("");

const [isActive, setIsActive] = useState(false);
const handleselect = () => {
  
  setIsActive(current => !current);

 
};
const [selectt, setselectt]= useState([]);

  
 
function timeout(ms){
  return new Promise((resolve)=>setTimeout(resolve,ms))
}
useEffect(() => { 
  const fetchData =async()=>{
  const result =await Axios(
    "http://localhost:5000/getdossiert",
  );
  await timeout(1000);
  setselectt(result.data);
 };
fetchData();
})
  return (
    <div >

        <Button onClick={handleOpen} style={{borderColor:"transparent",height:"50px",width:"150px",marginLeft:"0px",color:"white", fontSize:"12px"}}> Emplacement dossier</Button>
      <Dialog  fullScreen open={open} onClose={handleClose} maxWidth="lg" >
      <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "1290px",width:"3px"
      , backgroundColor:"#c72120", color:"white",height:"25px"}}>X</Button>
        
      <table  > 
        <thead>
      <tr >
          <td style={{alignItems:"center" }}>
          
          <DialogTitle style={{color:'#6e5244' , marginLeft:"200px", fontFamily:"cursive"
      , fontWeight:"bold", fontSize:"25px"}} >
          Mettre à jour emplacement dossier
          </DialogTitle>
          </td>
          
          </tr></thead>
          <tbody>
            <tr>
              
<select style={{height:"50px",width:"500px",fontStyle:"italic",fontSize:"20px",border:"none"}} 
       
       value={searchraison}
       onChange={(e) => setSearchraison(e.target.value)}
       onClick={handleselect}
      >
        
        <option value="" hidden onClick={handleselect}  >
          Sélectionner un emplacement
        
        </option>
        {select.map((item) => {
         
          return (
           
            <option     onClick={handleselect}   >
              {item.nomdossier} 
            </option>
          
          );
        })}
      </select>
            </tr>
            <tr>
            <TextField 
          autoFocus
          margin="dense"
          id="recherche"
          label="recherche"
          type="text"
          fullWidth
          variant="outlined"
          size='small'
          sx={{ m:0.5, width: 500,marginLeft:1 }}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          />
   <Button onClick={searchData} style={{width:"20px" }}> <SearchIcon  /></Button>   
            </tr>
          <tr>
          
            <td>
    
          
<Paper sx={{ width: '100%', overflow: 'hidden' }}>
<TableContainer sx={{ maxHeight: 440, maxWidth:700 }}>

        <Table stickyHeader aria-label="sticky table">
        
              <TableHead>
                  <TableCell> </TableCell>
                  <TableCell style={{color:"#1f4b77" , marginLeft:"350px", fontFamily:"cursive"
      , fontWeight:"bold", fontSize:"15px"}} > ID</TableCell>
                  
              <TableCell style={{color:"#1f4b77" , marginLeft:"350px", fontFamily:"cursive"
      , fontWeight:"bold", fontSize:"15px"}}>Num affaire</TableCell>
              <TableCell style={{color:"#1f4b77" , marginLeft:"350px", fontFamily:"cursive"
      , fontWeight:"bold", fontSize:"15px"}} >Emplacement</TableCell>
              <TableCell style={{color:"#1f4b77" , marginLeft:"350px", fontFamily:"cursive"
      , fontWeight:"bold", fontSize:"15px"}} >Client</TableCell>
              <TableCell style={{color:"#1f4b77" , marginLeft:"350px", fontFamily:"cursive"
      , fontWeight:"bold", fontSize:"15px"}}>TEL</TableCell>
              <TableCell style={{color:"#1f4b77" , marginLeft:"350px", fontFamily:"cursive"
      , fontWeight:"bold", fontSize:"15px"}} >Mission</TableCell>
              <TableCell style={{color:"#1f4b77" , marginLeft:"350px", fontFamily:"cursive"
      , fontWeight:"bold", fontSize:"15px"}} >Adversaire</TableCell>
              <TableCell style={{color:"#1f4b77" , marginLeft:"350px", fontFamily:"cursive"
      , fontWeight:"bold", fontSize:"15px"}} >Reste</TableCell>
              
              </TableHead>
  
              {isActive?  <TableBody>
              
                {users
            
                  .map((row, index) => {
                    
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.id,row.num_affaire)}
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
              <TableCell>{(row.num_affaire)}</TableCell>
             <TableCell>{row.emplacement}</TableCell>
              <TableCell  >{ row.client}</TableCell>
              <TableCell >{ row.tel}</TableCell>
              <TableCell  >{row.mission}</TableCell>
              <TableCell  >{ row.adversaire}</TableCell>
              <TableCell  >{ row.reste}</TableCell>
             
             </TableRow>   )})}         
              </TableBody>:<TableBody>
              
              {users.filter((val)=>{
                   return val.emplacement.includes(searchraison)
                })
                 .map((row, index) => {
                   
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.id,row.num_affaire,row.emplacement,row.client,row.tel,row.mission,row.adversaire,row.reste)}
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
              <TableCell>{(row.num_affaire)}</TableCell>
             <TableCell>{row.emplacement}</TableCell>
              <TableCell  >{ row.client}</TableCell>
              <TableCell >{ row.tel}</TableCell>
              <TableCell  >{row.mission}</TableCell>
              <TableCell  >{ row.adversaire}</TableCell>
              <TableCell  >{ row.reste}</TableCell>
             
             </TableRow>   )})}         
              </TableBody> }
              
             
            </Table>
            </TableContainer>
        </Paper>
       
    

      </td>
      <td>
    
<Paper sx={{ width: '100%', overflow: 'hidden' }}>
<TableContainer sx={{ maxHeight: 440, maxWidth:700 }}>

<Table stickyHeader aria-label="sticky table">

      <TableHead>
         
          <TableCell style={{color:"#1f4b77" , marginLeft:"350px", fontFamily:"cursive"
, fontWeight:"bold", fontSize:"15px"}} > ID</TableCell>
          
      <TableCell style={{color:"#1f4b77" , marginLeft:"350px", fontFamily:"cursive"
, fontWeight:"bold", fontSize:"15px"}}>Num affaire</TableCell>
      <TableCell style={{color:"#1f4b77" , marginLeft:"350px", fontFamily:"cursive"
, fontWeight:"bold", fontSize:"15px"}} >Emplacement</TableCell>
      <TableCell style={{color:"#1f4b77" , marginLeft:"350px", fontFamily:"cursive"
, fontWeight:"bold", fontSize:"15px"}} >Client</TableCell>
      <TableCell style={{color:"#1f4b77" , marginLeft:"350px", fontFamily:"cursive"
, fontWeight:"bold", fontSize:"15px"}}>TEL</TableCell>
      <TableCell style={{color:"#1f4b77" , marginLeft:"350px", fontFamily:"cursive"
, fontWeight:"bold", fontSize:"15px"}} >Mission</TableCell>
      <TableCell style={{color:"#1f4b77" , marginLeft:"350px", fontFamily:"cursive"
, fontWeight:"bold", fontSize:"15px"}} >Adversaire</TableCell>
      <TableCell style={{color:"#1f4b77" , marginLeft:"350px", fontFamily:"cursive"
, fontWeight:"bold", fontSize:"15px"}} >Reste</TableCell>
      
      </TableHead>

      <TableBody>
      
        {selectt
    
          .map((row, index) => {
            
            const labelId = `enhanced-table-checkbox-${index}`;

            return (
              
              <TableRow
                hover
                onClick={(event) => handleClick(event, row.id,row.num_affaire,row.emplacement,row.client,row.tel,row.mission,row.adversaire,row.reste)}
                //  onChange={(e) => handleCountry()}
                role="checkbox"
          
                tabIndex={-1}
                key={row.id}
                
              >
             
              <TableCell >{(row.id)}</TableCell>
              <TableCell>{(row.num_affaire)}</TableCell>
             <TableCell>{row.emplacement}</TableCell>
              <TableCell  >{ row.client}</TableCell>
              <TableCell >{ row.tel}</TableCell>
              <TableCell  >{row.mission}</TableCell>
              <TableCell  >{ row.adversaire}</TableCell>
              <TableCell  >{ row.reste}</TableCell>
     
     </TableRow>   )})}         
      </TableBody>
      
     
    </Table>
    </TableContainer>
</Paper>



</td>
      </tr>
      
      </tbody>
      </table>
      <DialogActions>
        <Add/> <Suppprimer  idM={handle} /> <Modifier idM={handle} lM={handleM} lC={handleC} lMa={handleMa} lV={handleV}
         lR={handleR}   lN={handleN}  
         lAd={handleAd}
           />
       

     </DialogActions>   
      </Dialog>
      

      </div>
  );
              }
//AJOUT
function Add() {
  const [open, setOpen] =useState(false);
  const [msg,setMsg]=useState("");
  const [num_affaire,setnum_affaire]=useState("");
  const [emplacement,setemplacement]=useState("");
  const [client,setclient]=useState("");
  const [tel,settel]=useState("");
  const [mission,setmission]=useState("");
  const [adversaire,setadversaire]=useState("");
  const [reste,setreste]=useState("");


  const ajouter = async (e) => {
   e.preventDefault();
   try {
       await Axios.post('http://localhost:5000/adddossier', {
         num_affaire:num_affaire, emplacement:emplacement,
         client:client, tel:tel, mission:mission, adversaire:adversaire, reste:reste
       });
       setnum_affaire("");
       setemplacement("");
       setclient("");
       settel("");
       setmission("");
       setadversaire("");
       setreste("");

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
       <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "500px",width:"3px"}} >X</Button>
       
         <DialogTitle>Ajouter un dossier</DialogTitle>
         <p>{msg}</p>
         <DialogContent>
           <TextField 
             autoFocus
             margin="dense"
             id="num_affaire"
             label="Num affaire"
             type="number"
             fullWidth
             variant="outlined"
             value={num_affaire}
             onChange={(e) => setnum_affaire(e.target.value)}
           />
           <TextField 
             autoFocus
             margin="dense"
             id="emplacement"
             label="Emplacement"
             type="text"
             fullWidth
             variant="outlined"
             value={emplacement}
             onChange={(e) => setemplacement(e.target.value)}
           />
           <TextField 
             autoFocus
             margin="dense"
             id="client"
             label="Client"
             type="text"
             fullWidth
             variant="outlined"
             value={client}
             onChange={(e) => setclient(e.target.value)}
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
           <TextField 
             autoFocus
             margin="dense"
             id="mission"
             label="Mission"
             type="text"
             fullWidth
             variant="outlined"
             value={mission}
             onChange={(e) => setmission(e.target.value)}
           />
           <TextField 
             autoFocus
             margin="dense"
             id="adversaire"
             label="Adversaire"
             type="text"
             fullWidth
             variant="outlined"
             value={adversaire}
             onChange={(e) => setadversaire(e.target.value)}
           />
           <TextField 
             autoFocus
             margin="dense"
             id="reste"
             label="Reste"
             type="number"
             fullWidth
             variant="outlined"
             value={reste}
             onChange={(e) => setreste(e.target.value)}
           />
         </DialogContent>
         <DialogActions>
          <form onSubmit={ajouter} ></form>
           <Button onClick={handleClose} type="submit">Ajouter</Button>
         </DialogActions>
        
       </Dialog>
      
     </div>
   );
 }
 //SUPP
 function Suppprimer(props) {

  const [open, setOpen] =useState(false);
  const [id,setid]=useState("");
  const [msg, setMsg] = useState('');
  const supprimer = async (e) => {
   e.preventDefault();
   try {
       await Axios.post('http://localhost:5000/suppdossier', {
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
     ,marginLeft:"15px"}} onClick={handleClickOpen}>
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
          <form onSubmit={supprimer}>
           <Button onClick={handleClose} type="submit">Supprimer</Button></form>
         </DialogActions>
         
       </Dialog>
      
     </div>
   );
 }
 //MODIF
 function Modifier(props) {
  const [open, setOpen] =useState(false);
  const [msg,setMsg]=useState("");
  const [id,setid]=useState("");
  const [num_affaire,setnum_affaire]=useState("");
  const [emplacement,setemplacement]=useState("");
  const [client,setclient]=useState("");
  const [tel,settel]=useState("");
  const [mission,setmission]=useState("");
  const [adversaire,setadversaire]=useState("");
  const [reste,setreste]=useState("");
  const supprimer = async (e) => {
    e.preventDefault();
    try {
        await Axios.post('http://localhost:5000/suppdossier', {
            id:props.idM
        });
       setid("");
    } catch (error) {
        if (error.response) {
            setMsg(error.response.data.msg);
        }
    }
  }
  const ajouter = async (e) => {
    e.preventDefault();
    try {
        await Axios.post('http://localhost:5000/adddossiert', {
          id:id,
          num_affaire:num_affaire,
           emplacement:emplacement,
          client:client, 
          tel:tel, 
          mission:mission, 
          adversaire:adversaire,
           reste:reste
        });
        setid("");
        setnum_affaire("");
        setemplacement("");
        setclient("");
        settel("");
        setmission("");
        setadversaire("");
        setreste("");
        supprimer();
    } catch (error) {
        if (error.response) {
            setMsg(error.response.data.msg);
        }
    }
  }

  const modifier = async (e) => {
   e.preventDefault();
   try {
       await Axios.post('http://localhost:5000/modifdossier', {
        id:props.idM,
         num_affaire:props.lM,
          emplacement:props.lC,
         client:props.lMa, 
         tel:props.lV, 
         mission:props.lR, 
         adversaire:props.lN,
          reste:props.lAd
       });
       setid("");
       setnum_affaire("");
       setemplacement("");
       setclient("");
       settel("");
       setmission("");
       setadversaire("");
       setreste("");

   } catch (error) {
       if (error.response) {
           setMsg(error.response.data.msg);
       }
   }
 }
   const handleClickOpen = () => {
     setOpen(true);
     setid(props.idM)
             setnum_affaire(props.lM);
             setemplacement(props.lC);
             setclient(props.lMa);
             settel(props.lV);
             setmission(props.lR);
             setadversaire(props.lN);
             setreste(props.lAd)
   };
   const handleClose = () => {
     setOpen(false);
    
   };
 
   return (
     <div>
      <Button variant="outlined" style={{color:'white',width:"100px",backgroundColor:"#1f4b77"
        ,marginLeft:"5px"}} onClick={handleClickOpen} >
         Transférer</Button>
       <Dialog open={open} onClose={handleClose}>
       <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "500px",width:"3px"}} >X</Button>
     
         <DialogTitle>Transférer un dossier</DialogTitle>
        
         <DialogContent>
         <TextField 
             autoFocus
             margin="dense"
             id="num_affaire"
             label="Num affaire"
             type="number"
             fullWidth
             variant="outlined"
             value={props.idM}
             onChange={(e) => setnum_affaire(e.target.value)}
           />
           <TextField 
             autoFocus
             margin="dense"
             id="num_affaire"
             label="Num affaire"
             type="number"
             fullWidth
             variant="outlined"
             value={props.lM}
             onChange={(e) => setnum_affaire(e.target.value)}
           />
           <TextField 
             autoFocus
             margin="dense"
             id="emplacement"
             label="Emplacement"
             type="text"
             fullWidth
             variant="outlined"
             value={props.lC}
             onChange={(e) => setemplacement(e.target.value)}
           />
           <TextField 
             autoFocus
             margin="dense"
             id="client"
             label="Client"
             type="text"
             fullWidth
             variant="outlined"
             value={props.lMa}
             onChange={(e) => setclient(e.target.value)}
           />
           <TextField 
             autoFocus
             margin="dense"
             id="tel"
             label="TEL"
             type="number"
             fullWidth
             variant="outlined"
             value={props.lV}
             onChange={(e) => settel(e.target.value)}
           />
           <TextField 
             autoFocus
             margin="dense"
             id="mission"
             label="Mission"
             type="text"
             fullWidth
             variant="outlined"
             value={props.lR}
             onChange={(e) => setmission(e.target.value)}
           />
           <TextField 
             autoFocus
             margin="dense"
             id="adversaire"
             label="Adversaire"
             type="text"
             fullWidth
             variant="outlined"
             value={props.lN}
             onChange={(e) => setadversaire(e.target.value)}
           />
           <TextField 
             autoFocus
             margin="dense"
             id="reste"
             label="Reste"
             type="number"
             fullWidth
             variant="outlined"
             value={props.lAd}
             onChange={(e) => setreste(e.target.value)}
           />
         </DialogContent>
         <DialogActions>
          <form onSubmit={modifier&&ajouter}>
           <Button onClick={handleClose}  type="submit">Transférer</Button></form>
         </DialogActions>
        
       </Dialog>
      
     </div>
   );
 }

/* function Confirmer() {
  const [open, setOpen] =useState(false);

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
         Confirmer</Button>
       <Dialog open={open} onClose={handleClose}>
       <form>
         <DialogTitle>Voulez vous confirmer?</DialogTitle>
         <DialogContent>
         <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "15px",width:"3px"}} >Oui</Button>
         <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "30px",width:"3px"}} >Non</Button>
         </DialogContent>
         <DialogActions>
         </DialogActions>
         </form>
       </Dialog>
      
     </div>
   );*
 }*/