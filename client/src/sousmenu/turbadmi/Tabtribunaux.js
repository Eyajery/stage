
import Axios from "axios";
import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { visuallyHidden } from '@mui/utils';
import { useState, useEffect } from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import "./Turbadmi.css"
function Modifadmi(props) {
 
  const [open, setOpen] =useState(false);
  const [lundi,setlundi]=React.useState([true, false]);
  const [l1,setl1]=useState("");
  const [m1,setm1]=useState("");
  const [me1,setme1]=useState("");
  const [j1,setj1]=useState("");
  const [s1,sets1]=useState("");
  const [v1,setv1]=useState("");
  const [id,setid]=useState("");
  const [mardi,setmardi]=React.useState([true, false]);
  const [mercredi,setmercredi]=React.useState([true, false]);
  const [jeudi,setjeudi]=React.useState([true, false]);
  const [vendredi,setvendredi]=React.useState([true, false]);
  const [samedi,setsamedi]=React.useState([true, false]);
  const [nom,setnom]=useState("");
  const [msg, setMsg] = useState('');
 
  const handleChangel1 = (event) => {
    setlundi([event.target.checked, lundi[0]]);
  };
  const handleChangem1 = (event) => {
    setmardi([event.target.checked, mardi[0]]);
  };
  const handleChangeme1 = (event) => {
    setmercredi([event.target.checked, mercredi[0]]);
  };
  const handleChangej1 = (event) => {
    setjeudi([event.target.checked, jeudi[0]]);
  };
  const handleChangev1 = (event) => {
    setvendredi([event.target.checked, vendredi[0]]);
  };
  const handleChanges1 = (event) => {
    setsamedi([event.target.checked, samedi[0]]);
  };
  
  const handleChangel2 = (event) => {
    setlundi([lundi[1], event.target.checked]);
  };
  const handleChangem2 = (event) => {
    setmardi([mardi[1], event.target.checked]);
  };

  const handleChangeme2= (event) => {
    setmercredi([mercredi[1], event.target.checked]);
  };
  const handleChangej2 = (event) => {
    setjeudi([jeudi[1], event.target.checked]);
  };
  const handleChangev2 = (event) => {
    setvendredi([vendredi[1], event.target.checked]);
  };
  const handleChanges2= (event) => {
    setsamedi([samedi[1], event.target.checked]);
  };

  const handleClickOpen = () => {
    setOpen(true); };
  const handleClose = () => {
    setOpen(false); };
    const modifier = async (e) => {
      e.preventDefault();
      if(lundi[0]==true){
        setl1("oui");
        
      }
      else{
        setl1("non");
      }
      if(mardi[0]==true){
        setm1("oui");
      }
      else{
        setm1("non");
      }
      if(mercredi[0]==true){
        setme1("oui");
      }
      else{
        setme1("non");
      }if(jeudi[0]==true){
        setj1("oui");
      }
      else{
        setj1("non");
      }
      if(vendredi[0]==true){
        setv1("oui");
      }
      else{
        setv1("non");
      }
      if(samedi[0]==true){
        sets1("oui");
      }
      else{
        sets1("non");
      }
      try {
          await Axios.post('http://localhost:5000/addadmi', {
            id:id,
            nom:nom,
            lundi:l1,
           mardi:m1,
           mercredi:me1,
           jeudi:j1,
           vendredi:v1,
           samedi:s1,
           idtrib:props.idn,
          });
          setid("");
          setnom("");
        
       
         
      } catch (error) {
          if (error.response) {
              setMsg(error.response.data.msg); }
          }}
    
    /*  const [state, setState] = React.useState({
        lundi: true,
        mardi: true,
        mercredi: true,
        jeudi:true,
        vendredi:true,
        samedi:true,
       
      });
      const handleChecked= (event) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,})
        {state.map((name) => (
          <div key={name.id}></div>))}
      }*/
     
  return (
   
      <React.Fragment>
       <Button variant="outlined" style={{color:'white',width:"100px",backgroundColor:"#1f4b77"
     ,marginLeft:"10px"}} onClick={handleClickOpen}>
         Modifier  </Button>
       <Dialog open={open} onClose={handleClose} maxWidth="md">
       <Button onClick={handleClose} style={{ padding: "10px", marginLeft: "600px" ,width:"3px"
        , backgroundColor:"#c72120", color:"white",height:"25px",marginTop:"5px"}}>X</Button>
    
    <p>{msg}</p>
 <table>
  <tr>
 <td><label style={{ fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"15px"}} >id :</label></td>
          <td> <input type="text" style={{width:"300px",height:"25px"}}  value={id}
             onChange={(e) => setid(e.target.value)}></input></td>
        </tr>
 <tr>
          <td><label style={{ fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"15px"}} >Libelle :</label></td>
          <td> <input type="text" style={{width:"300px",height:"25px"}}  value={nom}
             onChange={(e) => setnom(e.target.value)}></input></td>
        </tr>
  <tr>
   <td><label style={{ fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"15px"}} >jour d'audience :</label></td>
   <td> <Checkbox checked={lundi[0]}  color="success" onChange={handleChangel1} />lundi
     <Checkbox checked={mardi[0]} onChange={handleChangem1 }    color="success" />mardi
      <Checkbox checked={mercredi[0]} onChange={handleChangeme1} color="success" />mercredi
     <Checkbox checked={jeudi[0]} onChange={handleChangej1}  color="success"/>jeudi  
   <Checkbox checked={vendredi[0]} onChange={handleChangev1} color="success" />vendredi
       <Checkbox checked={samedi[0]} onChange={handleChanges1}   color="success"/>samedi
      </td>
 
    </tr>
    <tr>
   <td> <label style={{ fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"15px"}} >Jours des Courses :</label></td>
       <td>
       <Checkbox checked={lundi[1]} onChange={handleChangel2}color="secondary" />lundi
     <Checkbox checked={mardi[1]} onChange={handleChangem2}color="secondary" />mardi
      <Checkbox checked={mercredi[1]} onChange={handleChangeme2}color="secondary"/>mercredi
     <Checkbox checked={jeudi[1]} onChange={handleChangej2}color="secondary" />jeudi  
   <Checkbox checked={vendredi[1]} onChange={handleChangev2}color="secondary" />vendredi
       <Checkbox checked={samedi[1]} onChange={handleChanges2}color="secondary" />samedi
        </td>
      </tr>
     
      </table>
      <Button onClick={modifier}>Modifier</Button>
      
      </Dialog>
    </React.Fragment>
  );}
function Suppadmi() {
  const [open, setOpen] =useState(false);
  const [id,setid]=useState("");
  const [msg, setMsg] = useState('');
  const supprimer = async (e) => {
   e.preventDefault();
   try {
       await Axios.post('http://localhost:5000/suppadmi', {
          id:id,
       });   
       setid("");
   } catch (error) {
       if (error.response) {
           setMsg(error.response.data.msg); }}}
   const handleClickOpen = () => {
     setOpen(true); 
    
     };
   const handleClose = () => {
     setOpen(false); };
 
   return (
     <div>
       <Button variant="outlined" style={{color:'white',width:"100px",backgroundColor:"#1f4b77"
     ,marginLeft:"20px"}} onClick={handleClickOpen}>
         Supprimer  </Button>
       <Dialog open={open} onClose={handleClose}>
       <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "500px",width:"3px"}} >X</Button>
       <form onClick={supprimer}>
         <DialogTitle>Supprimer une administration</DialogTitle>
         
         <div> <p>{msg}</p></div>
        <DialogContent>
         <TextField 
           autoFocus
           margin="dense"
           id="id"
           label="id"
           type="text"
           fullWidth
           variant="outlined"
           value={id}
           onChange={(e) => setid(e.target.value)}
         />
         </DialogContent>
         <DialogActions>
           <Button >Supprimer</Button>
         </DialogActions>
         </form>
       </Dialog>
      
     </div>
   );
 }
 function Addliste(props) {
 
  const [open, setOpen] =useState(false);
  const [lundi,setlundi]=React.useState([true, false]);
  const [l1,setl1]=useState("");
  const [m1,setm1]=useState("");
  const [me1,setme1]=useState("");
  const [j1,setj1]=useState("");
  const [s1,sets1]=useState("");
  const [v1,setv1]=useState("");
  const [mardi,setmardi]=React.useState([true, false]);
  const [mercredi,setmercredi]=React.useState([true, false]);
  const [jeudi,setjeudi]=React.useState([true, false]);
  const [vendredi,setvendredi]=React.useState([true, false]);
  const [samedi,setsamedi]=React.useState([true, false]);
  const [nom,setnom]=useState("");
  const [msg, setMsg] = useState('');
  const [idtrib,setidtrib]=useState("");
  const handleChangel1 = (event) => {
    setlundi([event.target.checked, lundi[0]]);
  };
  const handleChangem1 = (event) => {
    setmardi([event.target.checked, mardi[0]]);
  };
  const handleChangeme1 = (event) => {
    setmercredi([event.target.checked, mercredi[0]]);
  };
  const handleChangej1 = (event) => {
    setjeudi([event.target.checked, jeudi[0]]);
  };
  const handleChangev1 = (event) => {
    setvendredi([event.target.checked, vendredi[0]]);
  };
  const handleChanges1 = (event) => {
    setsamedi([event.target.checked, samedi[0]]);
  };
  
  const handleChangel2 = (event) => {
    setlundi([lundi[1], event.target.checked]);
  };
  const handleChangem2 = (event) => {
    setmardi([mardi[1], event.target.checked]);
  };

  const handleChangeme2= (event) => {
    setmercredi([mercredi[1], event.target.checked]);
  };
  const handleChangej2 = (event) => {
    setjeudi([jeudi[1], event.target.checked]);
  };
  const handleChangev2 = (event) => {
    setvendredi([vendredi[1], event.target.checked]);
  };
  const handleChanges2= (event) => {
    setsamedi([samedi[1], event.target.checked]);
  };

  const handleClickOpen = () => {
    setOpen(true); };
  const handleClose = () => {
    setOpen(false); };
    const ajouter = async (e) => {
      e.preventDefault();
      if(lundi[0]==true){
        setl1("oui");
        
      }
      else{
        setl1("non");
      }
      if(mardi[0]==true){
        setm1("oui");
      }
      else{
        setm1("non");
      }
      if(mercredi[0]==true){
        setme1("oui");
      }
      else{
        setme1("non");
      }if(jeudi[0]==true){
        setj1("oui");
      }
      else{
        setj1("non");
      }
      if(vendredi[0]==true){
        setv1("oui");
      }
      else{
        setv1("non");
      }
      if(samedi[0]==true){
        sets1("oui");
      }
      else{
        sets1("non");
      }
      try {
          await Axios.post('http://localhost:5000/addadmi', {
            nom:nom,
            lundi:l1,
           mardi:m1,
           mercredi:me1,
           jeudi:j1,
           vendredi:v1,
           samedi:s1,
           idtrib:props.idn,
          });
          
          setnom("");
        
          setidtrib("");
         
      } catch (error) {
          if (error.response) {
              setMsg(error.response.data.msg); }
          }}
    
    /*  const [state, setState] = React.useState({
        lundi: true,
        mardi: true,
        mercredi: true,
        jeudi:true,
        vendredi:true,
        samedi:true,
       
      });
      const handleChecked= (event) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,})
        {state.map((name) => (
          <div key={name.id}></div>))}
      }*/
     
  return (
   
      <React.Fragment>
       <Button variant="outlined" style={{color:'white',width:"100px",backgroundColor:"#1f4b77"
     ,marginLeft:"10px"}} onClick={handleClickOpen}>
         Ajouter  </Button>
       <Dialog open={open} onClose={handleClose} maxWidth="md">
       <Button onClick={handleClose} style={{ padding: "10px", marginLeft: "600px" ,width:"3px"
        , backgroundColor:"#c72120", color:"white",height:"25px",marginTop:"5px"}}>X</Button>
    
    <p>{msg}</p>
 <table>
 <tr>
          <td><label style={{ fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"15px"}} >Libelle :</label></td>
          <td> <input type="text" style={{width:"300px",height:"25px"}}  value={nom}
             onChange={(e) => setnom(e.target.value)}></input></td>
        </tr>
  <tr>
   <td><label style={{ fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"15px"}} >jour d'audience :</label></td>
   <td> <Checkbox checked={lundi[0]}  color="success" onChange={handleChangel1} />lundi
     <Checkbox checked={mardi[0]} onChange={handleChangem1 }    color="success" />mardi
      <Checkbox checked={mercredi[0]} onChange={handleChangeme1} color="success" />mercredi
     <Checkbox checked={jeudi[0]} onChange={handleChangej1}  color="success"/>jeudi  
   <Checkbox checked={vendredi[0]} onChange={handleChangev1} color="success" />vendredi
       <Checkbox checked={samedi[0]} onChange={handleChanges1}   color="success"/>samedi
      </td>
 
    </tr>
    <tr>
   <td> <label style={{ fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"15px"}} >Jours des Courses :</label></td>
       <td>
       <Checkbox checked={lundi[1]} onChange={handleChangel2}color="secondary" />lundi
     <Checkbox checked={mardi[1]} onChange={handleChangem2}color="secondary" />mardi
      <Checkbox checked={mercredi[1]} onChange={handleChangeme2}color="secondary"/>mercredi
     <Checkbox checked={jeudi[1]} onChange={handleChangej2}color="secondary" />jeudi  
   <Checkbox checked={vendredi[1]} onChange={handleChangev2}color="secondary" />vendredi
       <Checkbox checked={samedi[1]} onChange={handleChanges2}color="secondary" />samedi
        </td>
      </tr>
     
      </table>
      <Button onClick={ajouter} >Ajouter</Button>
      
      </Dialog>
    </React.Fragment>
  );}
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Addadmi(props) {
  const [open, setOpen] =useState(false);
  const [nom,setnom]=useState("");
     const [lundi,setlundi]=useState("");
     const [mardi,setmardi]=useState("");
     const [mercredi,setmercredi]=useState("");
     const [jeudi,setjeudi]=useState("");
     const [vendredi,setvendredi]=useState("");
     const [samedi,setsamedi]=useState("");
     const [idtrib,setidtrib]=useState("");
  const [msg, setMsg] = useState('');
  const ajouter = async (e) => {
   e.preventDefault();
   try {
       await Axios.post('http://localhost:5000/addadmi', {
         nom:nom,
         lundi:lundi,
        mardi:mardi,
        mercredi:mercredi,
        jeudi:jeudi,
        vendredi:vendredi,
        samedi:samedi,
        idtrib:idtrib,
       });
       
       setnom("");
       setlundi("");
       setmardi("");
       setmercredi("");
       setjeudi("");
       setvendredi("");
       setsamedi("");
       setidtrib("");
      
   } catch (error) {
       if (error.response) {
           setMsg(error.response.data.msg); } }}
 
   const handleClickOpen = () => {
     setOpen(true); };
   const handleClose = () => {
     setOpen(false); };
 
   return (
     <React.Fragment>
       <Button variant="outlined"  onClick={handleClickOpen}>
         Ajouter  </Button>
       <Dialog open={open} onClose={handleClose}>
       <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "500px",width:"3px"}} >X</Button>
       <form onClick={ajouter}>
         <DialogTitle>Ajouter un collaborateur</DialogTitle>
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
             id="lundi"
             label="lundi"
             type="text"
             fullWidth
             variant="outlined"
             value={lundi}
             onChange={(e) => setlundi(e.target.value)}
           />
             <TextField 
             autoFocus
             margin="dense"
             id="mardi"
             label="mardi"
             type="text"
             fullWidth
             variant="outlined"
             value={mardi}
             onChange={(e) => setmardi(e.target.value)}
           />
             <TextField 
             autoFocus
             margin="dense"
             id="mercredi"
             label="mercredi"
             type="text"
             fullWidth
             variant="outlined"
             value={mercredi}
             onChange={(e) => setmercredi(e.target.value)}
           />
             <TextField 
             autoFocus
             margin="dense"
             id="jeudi"
             label="jeudi"
             type="text"
             fullWidth
             variant="outlined"
             value={jeudi}
             onChange={(e) => setjeudi(e.target.value)}
           />
            <TextField 
             autoFocus
             margin="dense"
             id="vendredi"
             label="vendredi"
             type="text"
             fullWidth
             variant="outlined"
             value={vendredi}
             onChange={(e) => setvendredi(e.target.value)}
           />
            
             <TextField 
             autoFocus
             margin="dense"
             id="samedi"
             label="samdi"
             type="text"
             fullWidth
             variant="outlined"
             value={samedi}
             onChange={(e) => setsamedi(e.target.value)}
           />
           <TextField 
             autoFocus
             margin="dense"
             id="idtrib"
             label="idtrib"
             type="text"
             fullWidth
             variant="outlined"
             value={props.idn}
             onChange={(e) => setidtrib(props.idn)}
           />
         </DialogContent>
         
         <DialogActions>
           <Button >Ajouter</Button>
         </DialogActions>
         </form>
       </Dialog>    
     </React.Fragment>);}


function Addtrib() {
const [open, setOpen] =useState(false);
const [lieux,setlieux]=useState("");
const [msg, setMsg] = useState('');
const ajouter = async (e) => {
e.preventDefault();
try {
    await Axios.post('http://localhost:5000/adtrib', {
    
        lieux:lieux,
    });
    setlieux("");
   
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
  <React.Fragment>
    <Button variant="outlined" style={{color:'white',width:"200px",borderColor:"#1f4b77"
     ,marginLeft:"5px"}}
     onClick={handleClickOpen}>
      Ajouter  </Button>
    <Dialog open={open} onClose={handleClose}>
    <Button onClick={handleClose} style={{padding: "5px", marginLeft: "500px",width:"3px"}} >X</Button>
   
      <DialogTitle>Ajouter un Tribunaux</DialogTitle>
      <p>{msg}</p>
      <DialogContent>
      
        <TextField 
          autoFocus
          margin="dense"
          id="lieux"
          label="lieux"
          type="text"
          fullWidth
          variant="outlined"
          value={lieux}
          onChange={(e) => setlieux(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={ajouter}>Ajouter</Button>
      </DialogActions>
      
    </Dialog>
   
  </React.Fragment>
);
}
function Supptrib(props) {
const [open, setOpen] =useState(false);
const [id,setid]=useState("");
const [msg, setMsg] = useState('');
const supprimer = async (e) => {
 e.preventDefault();
 try {
     await Axios.post('http://localhost:5000/suptrib', {
         id:props.idM,
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
   setid(props.idM);
 };
 const handleClose = () => {
   setOpen(false);
 };

 return (
   <React.Fragment>
     <Button variant="outlined" style={{color:'white',width:"100px",backgroundColor:"#1f4b77"
     ,marginLeft:"15px"}}
      onClick={handleClickOpen}>
       Supprimer  </Button>
     <Dialog open={open} onClose={handleClose}>
     <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "500px",width:"3px"}} >X</Button>
  
       <DialogTitle>Supprimer un Tribunaux</DialogTitle>
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
                          <Button type='submit'  onClick={handleClose}    style={{color:'white',width:"180px",backgroundColor:"#1f4b77"
                    ,marginLeft:"4px"}} >Supprimer</Button></form>
       </DialogActions>
      
     </Dialog>
    
   </React.Fragment>
 );
}
function Modiftirb(props) {
const [open, setOpen] =useState(false);
const [id,setid]=useState("");
const [lieux,setlieux]=useState("");
const [msg, setMsg] = useState('');
const modifier= async (e) => {
 e.preventDefault();
 try {
     await Axios.post('http://localhost:5000/modiftrib', {
         id:props.idM,
         lieux:lieux,
     });
     setid("");
     setlieux("");
    
 } catch (error) {
     if (error.response) {
         setMsg(error.response.data.msg);
     }
 }
}
 const handleClickOpen = () => {
   setOpen(true);
   setlieux(props.lM)
 };
 const handleClose = () => {
   setOpen(false);
 };

 return (
   <React.Fragment>
     <Button variant="outlined" style={{color:'white',width:"100px",backgroundColor:"#1f4b77"
     ,marginLeft:"25px"}} onClick={handleClickOpen}>
       Modifier  </Button>
     <Dialog open={open} onClose={handleClose}>
     <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "500px",width:"3px"}} >X</Button>
  
       <DialogTitle>Modifier un Tribunaux</DialogTitle>
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
          <TextField 
           autoFocus
           margin="dense"
           id="lieux"
           label="lieux"
           type="text"
           fullWidth
           variant="outlined"
           value={lieux}
           onChange={(e) => setlieux(e.target.value)}
         />
       </DialogContent>
       <DialogActions>
       <form onSubmit={modifier}>
                          <Button type='submit'  onClick={handleClose}    style={{color:'white',width:"180px",backgroundColor:"#1f4b77"
                    ,marginLeft:"4px"}} >Modifier</Button></form>
       </DialogActions>
    
     </Dialog>
    
   </React.Fragment>
 );
}

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}
const headCells = [
  {
    id: 'id',
    numeric: false,
    disablePadding: true,
    label: 'id',
   innerWidth:50,
  },
  {
    id: 'lieux',
    numeric: true,
    disablePadding: false,
    label: 'lieux',
  innerWidth:50,
  },
  
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'left' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const columns = [
  
  { id: 'id', label: 'ID', minWidth: 70 },
  { id: 'lieux', label: 'Lieux', minWidth: 90 },]


function createData(id,lieux) {
  return { id,lieux};
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [isActivec, setIsActivec] = useState(false);
  const [isActivea, setIsActivea] = useState(false);

  const handleCourses = () => {
  
    setIsActivec(current => !current);

    
  };
  const handleAudience = () => {
  
    setIsActivea(current => !current);

    
  };
  const [lieux, setlieux] = useState([]);
useEffect(() => {   
  Axios.get("http://localhost:5000/gettrib").then((response) => {
    setlieux(response.data); 
   // console.log("hi");
    //console.log(lieux)  ;
    //console.log(response.data) ;   
  });
},[lieux]);
const [utilList, setutilList] = useState([]);

useEffect(() => {   
  Axios.get("http://localhost:5000/getadmi").then((response) => {
    setutilList(response.data); 
    console.log(utilList) ; 
  });
},[utilList]);
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [idM, setid] = React.useState([]);
  const [lM, setlieu] = React.useState([]);
  const [country, setCountry] = useState([]);
  const [state, setState] = useState([]);

  useEffect(() => {
    setutilList(lieux);
  }, []);
  const isSelected = (id) => selected.indexOf(id) !== -1;

  const handleClick = (event, id,lieux) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];
  let lModif=[];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
      lModif=lieux;
      setid(newSelected[0]);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
      
    }

    const dt = utilList.filter((x) => x.idtrib === newSelected[0]);
    
    setState(dt);
  setid(newSelected[0]);
  setlieu(lModif);
    //alert(newSelected[0]);
    setSelected(newSelected);
   
  };
  


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const recoit =idM;
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - lieux.length) : 0;

    const handleM = lM;
    const handle = idM;
  return (
    <React.Fragment>
      <table> 
        <thead>
      <tr >
          <td style={{alignItems:"center" }}>
          <p id="parent-modal-description"></p>
       <DialogTitle style={{color:'#1f4b77', fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"25px"}} >Liste  Tribunaux </DialogTitle>
          </td>
          <td>
          <p id="parent-modal-description"> </p>
        <DialogTitle style={{color:'#1f4b77', fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"25px"}} >Liste Services</DialogTitle>
          </td>
          </tr></thead>
          <tbody>
          <tr>
          
            <td>
    
            <Box style={{
   
   height: "500px",
   padding: "50px ",
  width:"400px", 
 }}>
<Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
       
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                rowCount={lieux.length}
              />
  

              <TableBody>
                {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
                {stableSort(lieux, getComparator(order, orderBy))
                  //.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.id);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.id,row.lieux)}
                        //  onChange={(e) => handleCountry()}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.id}
                        selected={isItemSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            //onChange={(e) => handleCountry()}
                            color="primary"
                            checked={isItemSelected}
                            inputProps={{
                              'aria-labelledby': labelId,
                            }}
                          />
                        </TableCell>

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
            
            </Table>
            
            </TableContainer>
        
 
  
        </Paper>
       </Box>
    

      </td>
      <td>
      <Checkbox    
        onClick={handleAudience} color="success" defaultChecked/>jour d'audience 
         <Checkbox    
        onClick={handleCourses}color="secondary" defaultChecked />Jours des Courses
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 800,marginBottom:"300px" }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
              
              <TableCell align="right" style={{ fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"15px"}} >id</TableCell>
                <TableCell style={{ fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"15px"}} >nom</TableCell>
                <TableCell align="right"  style={{ fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"15px"}}>lundi</TableCell>
                <TableCell align="right" style={{ fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"15px"}}>mardi</TableCell>
                <TableCell align="right"style={{ fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"15px"}} >mercredi</TableCell>
                <TableCell align="right"style={{ fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"15px"}} >jeudi</TableCell>
                <TableCell align="right"style={{ fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"15px"}} >vendredi</TableCell>
                <TableCell align="right" style={{ fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"15px"}}>samdi</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {state.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right"style={{ fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"15px"}} >{row.nom}</TableCell>
                  <TableCell align="right"style={{ fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"15px" , backgroundColor: isActivea&&row.lundi=="oui" ? 'green' : isActivec&&row.lundi=="non" ? '#DA70D6':'',
       }} >{row.lundi}</TableCell>
                  <TableCell align="right"style={{ fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"15px", backgroundColor: isActivea&&row.mardi=="oui" ? 'green' : isActivec&&row.mardi=="non" ? '#DA70D6':'', }} >{row.mardi}</TableCell>
                  <TableCell align="right"style={{ fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"15px", backgroundColor: isActivea&&row.mercredi=="oui" ? 'green' : isActivec&&row.mercredi=="non" ? '#DA70D6':'', }} >{row.mercredi}</TableCell>
                  <TableCell align="right"style={{ fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"15px", backgroundColor: isActivea&&row.jeudi=="oui" ? 'green' : isActivec&&row.jeudi=="non" ? '#DA70D6':'',}} >{row.jeudi}</TableCell>
                  <TableCell align="right"style={{ fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"15px" , backgroundColor: isActivea&&row.vendredi=="oui" ? 'green' : isActivec&&row.vendredi=="non" ? '#DA70D6':'',}} >{row.vendredi}</TableCell>
                  <TableCell align="right"style={{ fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"15px", backgroundColor: isActivea&&row.samedi=="oui" ? 'green' : isActivec&&row.samedi=="non" ? '#DA70D6':'',}} >{row.samedi}</TableCell>
                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </td>
      </tr>
      </tbody>
      <tfoot>
      <tr>
                <td> <Button style={{color:'white',width:"100px",backgroundColor:"#1f4b77"
     ,marginLeft:"50px"}} ><Addtrib /></Button>
                 <Supptrib idM={handle}/>
              <Modiftirb idM={handle} lM={handleM} /> </td> 
                <td> <Button style={{width:"200px"}}> <Addliste idn={recoit}/></Button> 
                 <Button style={{width:"200px"}} ><Suppadmi />  </Button>
                <Button style={{width:"200px"}} ><Modifadmi idn={recoit}/> </Button></td> 
            </tr>
            </tfoot>
      </table>
    </React.Fragment>
  );
}




