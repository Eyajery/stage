import Button from '@mui/material/Button';
import Axios from 'axios' ;
import Dialog from '@mui/material/Dialog';
import React, { useState,useEffect } from 'react';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


function Transport(){
    const [open, setOpen] =useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    const[msg, setMsg]=useState("");
    const [montant,setmontant]=useState("");

     const modifier = async (e) => {
       e.preventDefault();
       try {
           await Axios.post('http://localhost:5000/adtransport', {
              montant:montant,
           });
           setmontant("");
           
           
       } catch (error) {
           if (error.response) {
               setMsg(error.response.data.msg);
           }
       }
     }
     
     const [select, setselect]= useState([]);
     useEffect(() => {   
       Axios.get("http://localhost:5000/transport").then((response) => {
         setselect(response.data); 
        
       });
     });
     const table = select.find((obj) => {
       if (obj.montant) {
         return true;
       }
       return false;
     });
     const selectAllText = (e) => {
      e.target.select();};
  
    return(
        <React.Fragment>
        <Button variant="outlined"  style={{borderColor:"transparent",height:"50px",width:"250px",marginLeft:"-70px",color:"white", fontSize:"12px"}}  onClick={handleOpen}>
        Transport  </Button>
        <Dialog open={open} onClose={handleClose}>
        <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "415px",width:"3px", marginTop:"1px"
        , backgroundColor:"#c72120", color:"white",height:"25px"}}>X</Button>
        <DialogTitle style={{color:'#6e5244' , marginLeft:"80px", fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"20px"}} >Mise à jour des Paramètres</DialogTitle>
          <DialogContent>
        
          <p>{msg}</p>
          <DialogContent>
          <TextField 
            autoFocus
            id="montant"
            label="montant"
            type="number"
        
            variant="outlined"
            marginRight="10px"
            style={{width:"400px"}}
            onClick={selectAllText}
            value={table&&(montant||table.montant)}
            onChange={(e) => setmontant(e.target.value)}
          />
         
          </DialogContent>
          <DialogActions>
          <Button onClick={modifier}  variant="outlined" style={{color:'white',width:"100px",backgroundColor:"#1f4b77"
       ,marginLeft:"150px"}}>Modifier</Button>
          </DialogActions>
          </DialogContent> 
        </Dialog>
      </React.Fragment>
    );
          
  
};
export default Transport;