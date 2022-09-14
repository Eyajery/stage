import Button from '@mui/material/Button';
import Axios from 'axios' ;
import Dialog from '@mui/material/Dialog';
import React, { useState,useEffect } from 'react';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';




/*function Modifier() {
  //last id
 
const [select, setselect]= useState([]);
useEffect(() => {   
  Axios.get("http://localhost:5000/paramgeneral").then((response) => {
    setselect(response.data); 
   
  });
});
const table = select.find((obj) => {
  if (obj.timbrefiscale) {
    return true;
  }
  return false;
});
  const[msg, setMsg]=useState("");
  const [timbrefiscale,settimbrefiscale]=useState("");
  const [tva,settva]=useState("");
  const [open, setOpen] =useState(false);
   const ajouter = async (e) => {
     e.preventDefault();
     try {
         await Axios.post('http://localhost:5000/addparamg', {
             timbrefiscale:timbrefiscale||table.timbrefiscale,
              tva:tva||table.tva,
         });
     } catch (error) {
         if (error.response) {
             setMsg(error.response.data.msg);
      }
     } 
   }
   const selectAllText = (e) => {
    e.target.select();};
  
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <React.Fragment>
       <React.Fragment><Button variant="outlined" style={{color:'white',width:"100px",backgroundColor:"#1f4b77"
       ,marginLeft:"150px"}} onClick={handleClickOpen}>
          Modifier</Button></React.Fragment> 
          <React.Fragment> <Dialog open={open} onClose={handleClose}>
        <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "455px",width:"3px", marginTop:"1px"
        , backgroundColor:"#c72120", color:"white",height:"25px"}}>X</Button>
       
          <DialogTitle style={{color:'#6e5244' , marginLeft:"30px", fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"20px"}}>Modifier la valeur du timbre fiscale ou TVA</DialogTitle>
        <div><p>{msg}</p> </div> 
          <DialogContent>
          
          <TextField 
            autoFocus
            id="timbrefiscale"
            label="Timbre fiscale"
            type="number"
            width="100px"
            variant="outlined"
            marginRight="10px"
            onClick={selectAllText}
            value={table&&(timbrefiscale||table.timbrefiscale)}
            onChange={(e) => settimbrefiscale(e.target.value)}
          />
          
          <TextField 
           autoFocus
           id="tva"
           label="TVA"
           type="number"
           width="100px"
           variant="outlined"
           marginLeft="10px"
           onClick={selectAllText}
           value={table&&(tva||table.tva)}
           onChange={(e) => settva(e.target.value)}
         />
          </DialogContent>
          <DialogActions>
          <Button onClick={ajouter} variant="outlined" style={{color:'white',width:"100px",backgroundColor:"#1f4b77"
       ,marginLeft:"150px"}}>Modifier</Button>
          </DialogActions>
         
        </Dialog>
        </React.Fragment>

      </React.Fragment>
    );
  }
 */

function Paramgeneral(){
    const [open, setOpen] =useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

const [select, setselect]= useState([]);
useEffect(() => {   
  Axios.get("http://localhost:5000/paramgeneral").then((response) => {
    setselect(response.data); 
   
  });
});
const table = select.find((obj) => {
  if (obj.timbrefiscale) {
    return true;
  }
  return false;
});
  const[msg, setMsg]=useState("");
  const [timbrefiscale,settimbrefiscale]=useState("");
  const [tva,settva]=useState("");

   const ajouter = async (e) => {
     e.preventDefault();
     try {
         await Axios.post('http://localhost:5000/addparamg', {
             timbrefiscale:timbrefiscale||table.timbrefiscale,
              tva:tva||table.tva,
         });
     } catch (error) {
         if (error.response) {
             setMsg(error.response.data.msg);
      }
     } 
   }
   const selectAllText = (e) => {
    e.target.select();};

    return(
        <React.Fragment>
        <Button variant="outlined"   style={{borderColor:"transparent",height:"50px",width:"150px",marginLeft:"0px",color:"white", fontSize:"12px"}}   onClick={handleOpen}>
        Paramètres global  </Button>
        <Dialog open={open} onClose={handleClose}>
        <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "500px",width:"3px", marginTop:"1px"
        , backgroundColor:"#c72120", color:"white",height:"25px"}}>X</Button>
        <DialogTitle style={{color:'#6e5244' , marginLeft:"80px", fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"20px"}} >Mise à jour des Paramètres</DialogTitle>
          <DialogContent>
         
          <div><p>{msg}</p> </div> 
          <DialogContent>
          
          <TextField 
            autoFocus
            id="timbrefiscale"
            label="Timbre fiscale"
            type="number"
            width="100px"
            variant="outlined"
            marginRight="10px"
            onClick={selectAllText}
            value={table&&(timbrefiscale||table.timbrefiscale)}
            onChange={(e) => settimbrefiscale(e.target.value)}
          />
          
          <TextField 
           autoFocus
           id="tva"
           label="TVA"
           type="number"
           width="100px"
           variant="outlined"
           marginLeft="10px"
           onClick={selectAllText}
           value={table&&(tva||table.tva)}
           onChange={(e) => settva(e.target.value)}
         />
          </DialogContent>
          <DialogActions>
          <Button onClick={ajouter} variant="outlined" style={{color:'white',width:"100px",backgroundColor:"#1f4b77"
       ,marginLeft:"150px"}}>Modifier</Button>
          </DialogActions>
         
          </DialogContent> 
        </Dialog>
      </React.Fragment>
    );
          
  
};
export default Paramgeneral;