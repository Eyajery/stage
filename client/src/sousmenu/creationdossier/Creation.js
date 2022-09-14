import * as React from 'react';
import PropTypes from 'prop-types';
//import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';


import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Tabclient from './Tabclient';
import Tabdonneé from './Tabdonneé';
import Tabtache from './Tabtache';
import SearchIcon from '@mui/icons-material/Search';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddIcon from '@mui/icons-material/Add';
import Axios from 'axios';
import { useState,useEffect } from 'react';
import Tabreglement from './Tabreglement';

import DialogContent from '@mui/material/DialogContent';
import { v4 as uuidv4 } from "uuid";
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';



function Suppreglement(){
  const [open, setOpen] = React.useState(false);
  const [montant,setmontant]=useState("");
  const [msg, setMsg] = useState('');
  const supprimer = async (e) => {
   e.preventDefault();
   try {
       await Axios.post('http://localhost:5000/suppreglement', {
           montant:montant,
       });
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
     <React.Fragment>
       <Button variant="outlined" style={{color:"blue",width:"200px"}} onClick={handleClickOpen}>
       Retirer Réglement</Button>
       <Dialog open={open}  maxWidth="xs" onClose={handleClose}>
       <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "300px",width:"3px"}} >X</Button>
         <h3 style={{color:"red"}}> Retirer Réglement</h3>
         <p>{msg}</p>
      
      <table>
          <tr>
          <td>
             <label > montant :</label> 
          </td>
          <td>
              <input type="number" value={montant} onChange={(e) => setmontant(e.target.value)} ></input>
          </td>
          </tr>
         </table>
         <Button onClick={supprimer} > Retirer</Button>
        
        </Dialog>
        </React.Fragment>
        )  
}


function Ajouterreglement(){
  const [montant, setmontant] = useState("");
  const [type,settype]=useState("");
  const [baré,setbaré]=useState("");
  const [operation,setoperation]=useState("");
  const [banque,setbanque]=useState("");
  const [echeance,setecheance]=useState("");
  const [msg, setMsg] = useState('');
  const ajouter = async (e) => {
    e.preventDefault();
    try {
        await Axios.post('http://localhost:5000/adreglement', {
          montant:montant,
          type:type,
          baré:baré,
          operation:operation,
          banque:banque,
          echeance:echeance,
        });
       setmontant("");
       settype("");
       setbaré("");
       setoperation("");
       setbanque("");
       setecheance("");
      
    } catch (error) {
        if (error.response) {
            setMsg(error.response.data.msg);
        }
    }
  }
  const [open, setOpen] = React.useState(false);
   const handleClickOpen = () => {
     setOpen(true);
   };
   const handleClose = () => {
     setOpen(false);
   };
 
   return (
     <React.Fragment>
       <Button variant="outlined" style={{color:"blue",width:"200px"}} onClick={handleClickOpen}>
       Ajouter Réglement</Button>
       <Dialog open={open} maxWidth="xl" onClose={handleClose}>
       <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "450px",width:"3px"}} >X</Button>
         <h3 style={{color:"red"}}> Ajouter Réglement</h3>
         <p>{msg}</p>
         
         <table>
          <tr>
          <td>
             <label > Montant :</label> 
          </td>
          <td>
              <input type="number"value={montant} onChange={(e) => setmontant(e.target.value)} ></input>
          </td>
          </tr>
          <tr>
          <td>
             <label > type:</label> 
          </td>
          <td>
              <input type="text" value={type} onChange={(e) => settype(e.target.value)} ></input>
          </td>
          </tr>
          <tr>
          <td>
             <label > Baré:</label> 
          </td>
          <td>
              <input type="text" value={baré} onChange={(e) => setbaré(e.target.value)} ></input>
          </td>
          </tr>
          <tr>
          <td>
             <label > N°opertion:</label> 
          </td>
          <td>
           
              <input type="text"value={operation} onChange={(e) => setoperation(e.target.value)}  ></input>  
           
          
           </td>
         </tr>
         <tr>
          <td>
             <label > Banque:</label> 
          </td>
          <td>
           
              <input type="text"value={banque} onChange={(e) => setbanque(e.target.value)}  ></input>  
           
          
           </td>
         </tr>
         
         <tr>
          <td>
             <label > Echeance:</label> 
          </td>
          <td>
          <input type="text"value={echeance} onChange={(e) => setecheance(e.target.value)} ></input>
           </td>
         </tr>
        
       
         </table>
         <Button onClick={ajouter}> Ajouter</Button>
        
        </Dialog>
        </React.Fragment>
        )  
}
/*function Réglement(props) {

  const [net,setnet]=useState("eeee");
  const [honoraire,sethonoraire]=useState("rrr");
  const [total,settotal]=useState("eeee");
  const [reste,setreste]=useState("hhh");
   return (
     <React.Fragment>
        <table>
          <thead>
          <tr>
            <td>
              <label > Honoraire Avocat:</label>
            </td>
            <td> <input type="text"  value={honoraire}
             onChange={(e) => sethonoraire(e.target.value)} ></input></td>
            <td>
              <label > Net à payer:</label>
            </td>
            <td> <input type="text"  value={net}
             onChange={(e) => setnet(e.target.value)} ></input></td>
          </tr>
          </thead>
          <tfoot>
          <tr>
              <td> <Ajouterreglement/> </td>
              <td> <Suppreglement/> </td>
          </tr>
          </tfoot>
      </table>
    <div>  <Tabreglement/></div>
     <table>
      <thead>
     <tr>
     <td>
              <label > Total payé:</label>
            </td>
            <td> <input type="text"   value={total}
             onChange={(e) => settotal(e.target.value)}></input></td>
            <td>
              <label > Reste à payé:</label>
            </td>
            <td> <input type="text"  value={reste}
             onChange={(e) => setreste(e.target.value)} ></input></td>
     </tr>
     </thead>
     </table>
     </React.Fragment>
   );
 }*/

 
  
//tache
function Supptache() {
  const [open, setOpen] =useState(false);
  const [tache,settache]=useState("");
  const [msg, setMsg] = useState('');
  const supprimer = async (e) => {
   e.preventDefault();
   try {
       await Axios.post('http://localhost:5000/supptache', {
           tache:tache,
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

  return (
    <React.Fragment>
     <div> <Button variant="outlined" style={{color:"blue",width:"200px"}} onClick={handleClickOpen}>
      Retirer Tache</Button></div>
      <Dialog open={open}  maxWidth="xs" onClose={handleClose}>
      <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "300px",width:"3px"}} >X</Button>
        <h3 style={{color:"red"}}> Retirer Tache</h3>
        <p>{msg}</p>
        
     <table>
      <tbody>
         <tr>
         <td>
            <label > tache :</label> 
         </td>
         <td>
             <input type="text" value={tache} onChange={(e) => settache(e.target.value)} ></input>
         </td>
         </tr></tbody>
        </table>
        <div><Button onClick={supprimer} > Retirer</Button></div>
        
       </Dialog>
       </React.Fragment>
       )
}
function Ajoutertache(){
    const [open, setOpen] = React.useState(false);
    const [tache,settache]=useState("");
    const [date_critique,setdatecritique]=useState("");
    const [date_rappel,setdaterappel]=useState("");

    const [personne_chargé,setpersonne]=useState("");
    const [resolu,setresolu]=useState("");
    
    const [date_audience,setdateaudience]=useState("");
    const [date_echeance,setdateecheance]=useState("");
    const [greffier,setgreffier]=useState("");
    const [course,setcourse]=useState("");
    const [service,setservice]=useState("");
    const [lieux,setlieux]=useState("");
    const [msg, setMsg] = useState('');
    const ajouter = async (e) => {
     e.preventDefault();
    try {
         await Axios.post('http://localhost:5000/addtache', {
        tache:tache,    
         date_critique:date_critique,
        date_rappel:date_rappel,
        resolu:resolu,
        personne_chargé:personne_chargé,
        greffier:greffier,
        course:course,
        lieux:lieux,
        service:service,
        date_audience:date_audience,
        date_echeance:date_echeance,   
         });
        settache("");
        setdatecritique("");
        setdaterappel("");
        setresolu("");
        setpersonne("");
        setgreffier("");
        setcourse("");
        setlieux("");
        setservice("");
        setdateaudience("");
        setdateecheance("");
       
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
        <div> <Button variant="outlined" style={{color:"blue",width:"200px"}} onClick={handleClickOpen}>
         Ajouter Tache</Button></div>
         <Dialog open={open} maxWidth="xl" onClose={handleClose}>
         <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "450px",width:"3px"}} >X</Button>
           <h3 style={{color:"red"}}> Ajouter tache</h3>
                           
           <DialogTitle>Ajouter une tache :</DialogTitle>
           <p>{msg}</p>
           <DialogContent>
           
              <table  >
                <tbody>
                <tr>
                  <td style={{padding:"10px"}}><label>Tache:</label></td>
                  <td style={{padding:"10px"}}>      <TextField 
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
                  <td style={{padding:"10px"}}><input type="radio" id='resolu' name='resolu' value={resolu}
               onChange={(e) => setresolu("oui")} /> oui
        <input type="radio" id='resolu' name='resolu' value={resolu}
               onChange={(e) => setresolu("non")}/>non</td>
                </tr>
                <tr>
                  <td style={{padding:"10px"}}> <label>Personne chargée : </label> </td>
                  <td style={{padding:"10px"}}><input type="radio" id='personne_chargé' name='rad' value={personne_chargé}
               onChange={(e) => setpersonne("collaborateur")} /> Collaborateur
        <input type="radio" id='personne_chargé' name='rad' value={personne_chargé}
               onChange={(e) => setpersonne("greffier")}/>Greffier</td>
                </tr>
                <tr>
                  <td style={{padding:"10px"}}> Greffier :</td>
                  <td style={{padding:"10px"}}>   <TextField
               autoFocus
               margin="dense"
               id="greffier"
               label="greffier"
               type="text"
               fullWidth
               variant="outlined"
               value={greffier}
               onChange={(e) => setgreffier(e.target.value)}        /></td>
                </tr>
                <tr>
                  <td style={{padding:"10px"}}> course :</td>
                  <td style={{padding:"10px"}}>   <TextField 
               autoFocus
               margin="dense"
               id="course"
               label="course"
               type="text"
               fullWidth
               variant="outlined"
               value={course}
               onChange={(e) => setcourse(e.target.value)}        /></td>
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
               onChange={(e) => setlieux(e.target.value)}    /></td>
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
                </tr></tbody>
                </table>      
           </DialogContent>       
           
           <div>  <Button onClick={ajouter}>Ajouter</Button></div>
         </Dialog>
          </React.Fragment>
          )  }



/*function Tache() {
    const [open, setOpen] = React.useState(false);
     const handleClickOpen = () => {
       setOpen(true);
     };
     const handleClose = () => {
       setOpen(false);
     };
   
     return (
       <React.Fragment>
        <div> <Button variant="outlined" style={{color:"white",width:"200px",borderColor:"#1f4b77"}} onClick={handleClickOpen}>
         Tache(s)</Button></div>
         <Dialog open={open}  maxWidth="lg" onClose={handleClose}>
         <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "1000px",width:"3px"}} >X</Button>
          <table>
            <tbody>
            <tr>
                <td><Ajoutertache/></td>
                <td><Supptache/> </td>
            </tr></tbody>
        </table>
       <div> <Tabtache/></div>
       
         </Dialog>
        
       </React.Fragment>
     );
   }*/
function Tache(){
  return(
    <div>
    <table>
    <tbody>
    <tr>
        <td><Ajoutertache/></td>
        <td><Supptache/> </td>
    </tr></tbody>
</table>
<div> <Tabtache/></div>
</div>
  )
};
   
  
   






//client
function Suppclient(){
    const [open, setOpen] = React.useState(false);
    const [nom,setnom]=useState("");
    const [msg, setMsg] = useState('');
    const supprimer = async (e) => {
     e.preventDefault();
     try {
         await Axios.post('http://localhost:5000/suppdemandeur', {
             nom:nom,
         });
         setnom("");
        
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
        <div> <Button variant="outlined" style={{color:"blue",width:"200px"}} onClick={handleClickOpen}>
         Retirer Demandeur</Button></div>
         <Dialog open={open}  maxWidth="xs" onClose={handleClose}>
       <div>  <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "300px",width:"3px"}} >X</Button>
           <h3 style={{color:"red"}}> Retirer Demandeur</h3></div>
           <p>{msg}</p>
           
        <table>
          <tbody>
            <tr>
            <td>
               <label > Nom :</label> 
            </td>
            <td>
                <input type="text" value={nom} onChange={(e) => setnom(e.target.value)} ></input>
            </td>
            </tr></tbody>
           </table>
          <div><Button onClick={supprimer}> Retirer</Button></div> 
        
          </Dialog>
          </React.Fragment>
          )  
}
function Ajouterclient(){
  const [nom, setnom] = useState("");
  const [cin,setcin]=useState("");
  const [adress,setadress]=useState("");
  const [adress_designé,setadress_designé]=useState("");
  const [tel,settel]=useState("");
  const [fax,setfax]=useState("");
  const [email,setemail]=useState("");
   const [msg, setMsg] = useState('');
  const ajouter = async (e) => {
    e.preventDefault();
    try {
        await Axios.post('http://localhost:5000/addemandeur', {
          nom:nom,
            cin:cin,
            adress:adress,
            adress_designé:adress_designé,
            tel:tel,
            fax:fax,
            email:email,
           
        });
       setnom("");
       setcin("");
       setadress("");
       setadress_designé("");
       settel("");
       setfax("");
       setemail("");
    } catch (error) {
        if (error.response) {
            setMsg(error.response.data.msg);
        }
    }
  }
    const [open, setOpen] = React.useState(false);
     const handleClickOpen = () => {
       setOpen(true);
     };
     const handleClose = () => {
       setOpen(false);
     };
   
     return (
       <React.Fragment>
        <div> <Button variant="outlined" style={{color:"blue",width:"200px"}} onClick={handleClickOpen}>
         Ajouter Demandeur</Button></div>
         <Dialog open={open}  maxWidth="xs" onClose={handleClose}>
         <div><Button onClick={handleClose} style={{ padding: "5px", marginLeft: "300px",width:"3px"}} >X</Button></div>
           <h3 style={{color:"red"}}> Ajouter Demandeur</h3>
           
           <p>{msg}</p>
        <table>
          <tbody>
            <tr>
            <td>
               <label > Nom :</label> 
            </td>
            <td>
                <input type="text"  value={nom} onChange={(e) => setnom(e.target.value)} ></input>
            </td>
            </tr>
            <tr>
            <td>
               <label > CIN :</label> 
            </td>
            <td>
                <input type="text" value={cin} onChange={(e) => setcin(e.target.value)} ></input>
            </td>
            </tr>
            <tr>
            <td>
               <label > Adress :</label> 
            </td>
            <td>
                <input type="text" value={adress} onChange={(e) => setadress(e.target.value)}></input>
            </td>
            </tr>
            <tr>
            <td>
               <label > adress designé:</label> 
            </td>
            <td>
                <input type="text" value={adress_designé} onChange={(e) => setadress_designé(e.target.value)}></input>
            </td>
            </tr>
            <tr>
            <td>
               <label > Tel :</label> 
            </td>
            <td>
                <input type="text" value={tel} onChange={(e) => settel(e.target.value)}></input>
            </td>
            </tr>
            <tr>
            <td>
               <label > Fax :</label> 
            </td>
            <td>
                <input type="text" value={fax} onChange={(e) => setfax(e.target.value)}></input>
            </td>
            </tr>
            <tr>
            <td>
               <label > Email :</label> 
            </td>
            <td>
                <input type="email" value={email} onChange={(e) => setemail(e.target.value)} ></input>
            </td>
            </tr></tbody>
           </table>
           
          <div> <Button onClick={ajouter}> Ajouter</Button></div>
          
          </Dialog>
          </React.Fragment>
          )  
}

//donnees
   
   function Suppdonneé(){
    const [open, setOpen] = React.useState(false);
    const [nom,setnom]=useState("");
    const [msg, setMsg] = useState('');
    const supprimer = async (e) => {
     e.preventDefault();
     try {
         await Axios.post('http://localhost:5000/suppadversaire', {
             nom:nom,
         });
         setnom("");
        
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
        <div> <Button variant="outlined" style={{color:"blue",width:"200px"}} onClick={handleClickOpen}>
         Retirer Adversaire</Button></div>
         <Dialog open={open}  maxWidth="xs" onClose={handleClose}>
        <div> <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "300px",width:"3px"}} >X</Button></div>
           <h3 style={{color:"red"}}> Retirer Adversaire</h3>
           <p>{msg}</p>
           
        <table>
          <tbody>
            <tr>
            <td>
               <label > Nom :</label> 
            </td>
            <td>
                <input type="text" value={nom} onChange={(e) => setnom(e.target.value)}></input>
            </td>
            </tr></tbody>
           </table>
           <div><Button onClick={supprimer}> Retirer</Button></div>
           
          </Dialog>
          </React.Fragment>
          )  
}













function TabPanel(props) {
  const { children, value, index, ...other } = props;
 
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

 
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export default function Creation() {
    const [open, setOpen] = React.useState(false); 
    const theme = useTheme();
    const [value, setValue] = React.useState(1);
    const [net,setnet]=useState("");
      const [honoraire,sethonoraire]=useState("");
      const [total,settotal]=useState("");
      const [reste,setreste]=useState("");
      const [mission,setmission]=useState("");
      const [num_affaire,setnum_affaire]=useState("");
     
      
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = (index) => {
      setValue(index);
    };
    const [select, setselect]= useState([]);
     useEffect( ()=>{
       const getcountrydata= async()=>{
         const reqData= await fetch("http://localhost:5000/gestion");
         const resData= await reqData.json();
        setselect(await resData);
       }
       getcountrydata();
     },[]);
     
    
     const [searchraison, setSearchraison] = useState();
     const [matricule, setmatricule] = useState()
     const [raison, setraison] = useState()
     const [tel, settel] = useState()
     const [situation_fiscale, setsituation_fiscale] = useState()
     const [client, settypeclient] = useState()
     const [Activite, setactivite] = useState()
     const table = select.find((obj) => {
       if (obj.raison=== searchraison) {
         return true;
       }
       return false;
     });
    
     const[searchterm,setsearchterm]=useState("");
  const handleSearch=(e)=>{
    let value=e.target.value;
    setsearchterm(value);
  }
  const [select_t, setselect_t]= useState([]);
  useEffect( ()=>{
    const getcountrydata= async()=>{
      const reqData= await fetch("http://localhost:5000/typedossier");
      const resData= await reqData.json();
     setselect_t(await resData);
    }
    getcountrydata();
  },[]);
  const[nomdossier,setnomdossier]=useState()
  const[searchnom,setsearchnom]=useState()
  const tablenom = select_t.find((obj) => {
    if (obj.nomdossier=== searchnom) {
      return true;
    }
    return false;
  });
  const [select_e, setselect_e]= useState([]);
  useEffect( ()=>{
    const getcountrydata= async()=>{
      const reqData= await fetch("http://localhost:5000/empdossier");
      const resData= await reqData.json();
     setselect_e(await resData);
    }
    getcountrydata();
  },[]);

  const [select_l, setselect_l]= useState([]);
  useEffect( ()=>{
    const getcountrydata= async()=>{
      const reqData= await fetch("http://localhost:5000/gettrib");
      const resData= await reqData.json();
     setselect_l(await resData);
    }
    getcountrydata();
  },[]);
  const [selectc, setselectc]= useState([]);
  useEffect( ()=>{
    const getcountrydata= async()=>{
      const reqData= await fetch("http://localhost:5000/empdossier");
      const resData= await reqData.json();
     setselectc(await resData);
    }
    getcountrydata();
  },[]);
  
 
  const [searchcode, setSearchcode] = useState();
  const [nom, setnom] = useState()
  const [date, setdate] = useState()
 
  const tablec = selectc.find((obj) => {
    if (obj.nomdossier=== searchcode) {
      return true;
    }
    return false;
  });
  const [selecto, setselecto]= useState([]);
  useEffect( ()=>{
    const getcountrydata= async()=>{
      const reqData= await fetch("http://localhost:5000/getcollab");
      const resData= await reqData.json();
     setselecto(await resData);
    }
    getcountrydata();
  },[]);
  
 
  const [searchcodec, setSearchcodec] = useState();
  const [nomc, setnomc] = useState()
  const [cin, setcin] = useState()
  const [part, setpart] = useState()
  const [mode, setmode] = useState()
  const [type_reglement, settype_reglement] = useState()
  const [tel1, settel1] = useState()
  const [num, setnum] = useState()
  const [rue, setrue] = useState()
  const [code_postale, setcode_postale] = useState()
  const [vile, setville] = useState()
  const [Activite1, setactivite1] = useState()
  const [emplacement, setemplacement] = useState()
  const [adress, setadress] = useState()
  const[email,setemail]=useState()
  const tableo = selecto.find((obj) => {
    if (obj.nom=== searchcodec) {
      return true;
    }
    return false;
  });
  const[lieux,setlieux]=useState()
  const [msg, setMsg] = useState('');
  const ajouter = async (e) => {
    e.preventDefault();
    try {
        await Axios.post('http://localhost:5000/adddossier', {
        
          client:searchraison,
          tel:table.tel||tel,
          cin:table.matricule||matricule,
          mission:mission,
          num_affaire:num_affaire,
          reste:reste,
          emplacement:emplacement,
          adversaire:nomad,
          email:table.email||email,
          adress:table.adress||adress,
        });
        setraison("");
        settel("");
        setmatricule("");
        setmission("");
        setnum_affaire("");
        setemplacement("");
        setreste("");
        searchraison("");
        setnomad("");
        setemail("");
        setadress("");
          } catch (error) {
        if (error.response) {
            setMsg(error.response.data.msg);
        }
    }
  }
  const [nomad, setnomad] = useState("");
  function Ajouterdonneé(){
    const [open, setOpen] = React.useState(false);
    const [nom, setnom] = useState("");
    const [registre,setregistre]=useState("");
    const [adresse,setadresse]=useState("");
    const [adresse_designé,setadresse_designé]=useState("");
    const [avocat,setavocat]=useState("");
    const [adresse_avocat,setadresse_avocat]=useState("");
    const [msg, setMsg] = useState('');

    const ajouter = async (e) => {
      e.preventDefault();
  
      try {
          await Axios.post('http://localhost:5000/addadversaire', {
              nom:nom,
              registre: registre,
              adresse:adresse,
              adresse_designé:adresse_designé,
              avocat: avocat,
              adresse_avocat: adresse_avocat
          });
          setnomad(nom);
         setnom("");
         setregistre("");
         setadresse("");
         setadresse_designé("");
         setavocat("");
         setadresse_avocat("");
     
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
        <div> <Button variant="outlined" style={{color:"blue",width:"200px",}} onClick={handleClickOpen}>
       Ajouter Adversaire</Button></div>
       <Dialog open={open}  maxWidth="xs" onClose={handleClose}>
       <div><Button onClick={handleClose} style={{ padding: "5px", marginLeft: "300px",width:"3px"}} >X</Button></div>
         <h3 style={{color:"red"}}> Ajouter Adversaire</h3>
         
         <p>{msg}</p>
      <table>
        <tbody>
          <tr>
          <td>
             <label  > Nom :</label> 
          </td>
          <td>
              <input type="text" value={nom} onChange={(e) => setnom(e.target.value)}></input>
          </td>
          </tr>
          <tr>
          <td>
             <label > Registre de commerce :</label> 
          </td>
          <td>
              <input type="text" value={registre} onChange={(e) => setregistre(e.target.value)}></input>
          </td>
          </tr>
          <tr>
          <td>
             <label > Adresse :</label> 
          </td>
          <td>
              <input type="text" value={adresse} onChange={(e) => setadresse(e.target.value)}></input>
          </td>
          </tr>
          <tr>
          <td>
             <label > Adresse designé:</label> 
          </td>
          <td>
              <input type="text" value={adresse_designé} onChange={(e) => setadresse_designé(e.target.value)}></input>
          </td>
          </tr>
          <tr>
          <td>
             <label > avocat :</label> 
          </td>
          <td>
              <input type="text" value={avocat} onChange={(e) => setavocat(e.target.value)} ></input>
          </td>
          </tr>
          <tr>
          <td>
             <label > Adresse avocat :</label> 
          </td>
          <td>
            <input type="text" value={adresse_avocat} onChange={(e) => setadresse_avocat(e.target.value)}></input>
          </td>
          </tr></tbody>
         </table>
        <div> <Button onClick={ajouter}> Ajouter</Button></div>
         
        </Dialog>
        </React.Fragment>
        )  
}
    return (
      <div>
     <Button variant="outlined"  onClick={handleClickOpen} style={{borderColor:"transparent",height:"50px",width:"150px",marginLeft:"-2px",color:"white", fontSize:"12px"}} >   Creation
        </Button>
       
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >   
        <Box sx={{ bgcolor: 'background.paper' }}>
      <AppBar position="static">
      
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
    <IconButton 
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            style={{width:"100px"}}
            >
              <CloseIcon />
            </IconButton>
          <Tab label="Client/Domendeur" {...a11yProps(1)} />
          <Tab label="Données dossiers" {...a11yProps(2)} />
          <Tab label="Taches" {...a11yProps(3)} />
         
          
          <Tab label="reglement" {...a11yProps(4)} />
          <Tab label="Collaborateurs" {...a11yProps(5)} />
          <Tab label="sous dossier" {...a11yProps(6)} />
          
        </Tabs>
      </AppBar>
    
        <TabPanel value={value} index={1} dir={theme.direction}>
        <div> 
        <table>
          <tbody>
            <tr>
            <td>
               <label > Code Client :</label> 
            </td>
            <td>
            <input type="text" placeholder='recherche dans la select'  onChange={handleSearch}/> <Button style={{width:"20px" }}>  <SearchIcon  /></Button> 
            </td>
            
            <td>
            <select 
               value={searchraison}
               onChange={(e) => setSearchraison(e.target.value)}
               style={{width:"180px"}}
              >
                
                <option value="" hidden>
                  --Select--
                
                </option>
                {select.filter((val)=>{
                   return val.raison.includes(searchterm)
                }).map((item) => {
                  return (
                    <option   >
                      {item.raison}
                    </option>
                  );
                })}
              </select>
            </td>
            </tr>
            <tr>
            <td>
               <label > Matricule Fiscale/CIN :</label> 
            </td>
            <td>
            <input
                type="text"
                
                value={ table && table.matricule || matricule}
                onChange={e =>setmatricule(e.target.value)}
              />
              </td>
            <td>
               <label > Raison Sociale/Nom  :</label> 
            </td>
            <td>
           < input
                type="text"
                
                value={ table&& table.raison }
                onChange={e =>setraison(e.target.value )}
              />
            </td>
            </tr>
           
            <tr>
            <td>
               <label> Situation Fiscale</label> 
            </td>
        <td>
            < input
                type="text"             
                value={ table && table.situation_fiscale|| ""}
                onChange={e =>setsituation_fiscale(e.target.value)}
              />
            </td>    
           <td>
            <label> Activité  Contribuale:</label>
            </td> 
            <td>
            <input
                type="text"          
                value={ table && table.activite || ""}
                onChange={e =>setactivite(e.target.value)}
              />
            </td>
            </tr>
            <tr>
            <td>
               <label > Type Client :</label> 
            </td>
            <td>
            <input
                type="text"
                value={ table && table.typeclient || ""}
                onChange={e =>settypeclient(e.target.value)}
              />
            </td> 
            <td>
               <label > Tel :</label> 
            </td>
            <td>
            <input
                type="text"
               value={table&&table.tel||tel}
                onChange={e =>settel(e.target.value)}
              />
            </td>
            </tr>
            <tr>
                <td><div><Ajouterclient/></div></td>
                <td> <div><Suppclient/></div></td>
            </tr></tbody>
        </table>
      <div>  <Tabclient/></div>  
         </div>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <table>
        <tbody>
          <tr>
          <td>
             <label > Type de dossier :</label> 
          </td>
          <td>
          <select  value={searchnom}
               onChange={(e) => setsearchnom(e.target.value)}
               style={{width:"180px"}}  >
              <option value="" hidden>
                --Select--
              </option>
              {select_t.map((item) => {
                return (
                  <option value={item.nomdossier}>
                    {item.nomdossier}
                  </option>
                );
              })} 
            </select>
          </td>
          <td>
             <label  > Code Dossier :</label> 
          </td>
          <td><pre>  <input
                type="text"
                
                value={ tablenom && tablenom.id || nomdossier}
                onChange={e =>setnomdossier(e.target.value)}
              /> /  <input type="text" style={{width:"50px"}}/> <input type="radio"/> Saisie Manuel  </pre> 
          </td>
          </tr>
          <tr>
          <td>
             <label >Mission :</label> 
          </td>
          <td colSpan={3} >
              <input type="text" style={{width:"900px"}} value={ mission}
                onChange={e =>setmission(e.target.value)} ></input>
          </td> 
          </tr>
          <tr>
          <td>
             <label > Emplacement: </label> 
          </td>
          <td>
          <select style={{width:"180px"}} value={emplacement} onChange={(e) => setemplacement(e.target.value)}>
              <option  >
                --Select--
              </option>
              {select_e.map((item) => {
                return (
                 
                  <option    >
                    {item.nomdossier}
                  </option>
                );
              })} 
            </select>
          </td>
         
          <td>
             <label > Num Affaire :</label> 
         </td>
          <td>
          <input type="text"value={ num_affaire}
                onChange={e =>setnum_affaire(e.target.value)} ></input>
          </td>
         
          
         </tr> 
         <tr>
         <td>
             <label > Lieux: </label> 
          </td>
          <td>
         <pre><input type="text" style={{width:"70px"}}></input> <select style={{width:"180px"}}  value={lieux}
               onChange={(e) => setlieux(e.target.value)} >
              <option value="" hidden>
                --Select--
              </option>
              {select_l.map((item) => {
                return (
                  <option  value={item.lieux}>
                    {item.lieux}
                  </option>
                );
              })} 
            </select></pre>
          </td>
          <td>
          <label > Service : </label> 
          </td>
          <td>
              <input type="text"></input>
          </td>
         </tr>
          <tr>
          <td>
             <label > Observation :</label> 
          </td>
          <td>
              <input type="text"></input>
          </td> 
          <td>
             <label > Date Creation :</label> 
          </td>
          <td>
            <input type="date"></input>
          </td>
          </tr>
          <tr>
              <td> <div><Ajouterdonneé/></div> </td>
             <td> <div><Suppdonneé/></div>  </td> 
          </tr>
          </tbody>
      </table>
  <div>   <Tabdonneé/></div>
     
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
        <Tache/>
        </TabPanel>
       
        <TabPanel value={value} index={4} dir={theme.direction}>
        <table>
              <thead>
              <tr>
                <td>
                  <label > Honoraire Avocat:</label>
                </td>
                <td> <input type="text"  value={honoraire}
                 onChange={(e) => sethonoraire(e.target.value)} ></input></td>
                <td>
                  <label > Net à payer:</label>
                </td>
                <td> <input type="text"  value={net}
                 onChange={(e) => setnet(e.target.value)} ></input></td>
              </tr>
              </thead>
              <tfoot>
              <tr>
                  <td> <Ajouterreglement/> </td>
                  <td> <Suppreglement/> </td>
              </tr>
              </tfoot>
          </table>
        <div>  <Tabreglement/></div>
         <table>
          <thead>
         <tr>
         <td>
                  <label > Total payé:</label>
                </td>
                <td> <input type="text"   value={total}
                 onChange={(e) => settotal(e.target.value)}></input></td>
                <td>
                  <label > Reste à payé:</label>
                </td>
                <td> <input type="text"  value={reste}
                 onChange={(e) => setreste(e.target.value)} ></input></td>
         </tr>
         </thead>
         </table>
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
    
        <table>
         <tbody>
         <tr>
              <td>
                <label >Code collaborateur :</label>
              </td>
              <td> <select
                 value={searchcodec}
                 onChange={(e) => setSearchcodec(e.target.value)}
                 style={{width:"180px"}}
                >
                  
                  <option value="" hidden>
                    --Select--
                  
                  </option>
                  {selecto.map((item) => {
                    return (
                      <option key={uuidv4()} value={item.nom}>
                        {item.id}
                      </option>
                    );
                  })}
                </select></td>
              <td>
                <label >Mode Réglement :</label>
              </td>
              <td>
   
               
                < pre><input
                  type="text"
                  
                  value={ tableo && tableo.mode_reglement|| ""}
                  onChange={e =>setmode(e.target.value)}
                /> </pre>
               
             
               </td>
              
          </tr>
          <tr>
            <td>
              <label > Nom et Prenom :</label>
            </td>
            <td>
            <input
                  type="text"
                  
                  value={ tableo && tableo.nom|| ""}
                  onChange={e =>setnomc(e.target.value)}
                />
            </td>
            <td>
              <label > Part Collaborateur :</label>
            </td>
            <td>
            <input
                  type="text"
                  
                  value={ tableo && tableo.part|| ""}
                  onChange={e =>setpart(e.target.value)}
                />
            </td>
          </tr>
          <tr>
            <td>
              <label > CIN :</label>
            </td>
            <td>
            <input
                  type="text"
                  
                  value={ tableo && tableo.cin|| ""}
                  onChange={e =>setcin(e.target.value)}
                />
            </td>
            <td><label > Type Réglement :</label></td>
            <td>
            
                  
              <pre> <input
                  type="text"
                  
                  value={ tableo && tableo.type_reglement|| ""}
                  onChange={e =>settype_reglement(e.target.value)}
                /> </pre>
               
               
               </td>
          </tr>
          <tr>
            <td>
              <label > Adress :</label>
            </td>
            <td>
              <fieldset style={{width :"200px"}}>
                <legend> Détail </legend>
                <table>
                  <tbody>
                  <tr>
                    <td> <label > ville:</label> </td>
                    <td> <input
                  type="text"
                  
                  value={ tableo && tableo.ville|| ""}
                  onChange={e =>setville(e.target.value)}
                /></td>
                  </tr>
                  <tr>
                    <td> <label > Rue:</label> </td>
                    <td> <input
                  type="text"
                  
                  value={ tableo && tableo.rue|| ""}
                  onChange={e =>setrue(e.target.value)}
                /></td>
                  </tr>
                  <tr>
                    <td> <label > Numéro:</label> </td>
                    <td> <input
                  type="text"
                  
                  value={ tableo && tableo.num|| ""}
                  onChange={e =>setnum(e.target.value)}
                /></td>
                  </tr>
                  <tr>
                    <td> <label > Code Postale:</label> </td>
                    <td> <input
                  type="text"
                  
                  value={ tableo && tableo.code_postale|| ""}
                  onChange={e =>setcode_postale(e.target.value)}
                /></td>
                  </tr></tbody>
                </table>
              </fieldset>
            
            </td>
          </tr>
           
          <tr>
                    <td> <label > Activité:</label> </td>
                    <td> <input
                  type="text"
                  
                  value={ tableo && tableo.activité|| ""}
                  onChange={e =>setactivite1(e.target.value)}
                /></td>
            </tr>
            <tr>
                    <td> <label > Tel:</label> </td>
                    <td> <input
                  type="text"
                  
                  value={ tableo && tableo.tel|| ""}
                  onChange={e =>settel1(e.target.value)}
                /></td>
                  </tr>
                  </tbody>
        </table>
       
        </TabPanel>
        <TabPanel value={value} index={6} dir={theme.direction}>   
        <table>
         <tbody>
         <tr>
              <td>
                <label >Code Dossier:</label>
              </td>
              <td> <pre><select
                 value={searchcode}
                 onChange={(e) => setSearchcode(e.target.value)}
                 style={{width:"180px"}}
                >
                  
                  <option value="" hidden>
                    --Select--
                  
                  </option>
                  {selectc.map((item) => {
                    return (
                      <option key={uuidv4()} value={item.nomdossier}>
                        {item.id}
                      </option>
                    );
                  })}
                </select>  <Button style={{width:"20px" }}>  <SearchIcon  /></Button>   <Button style={{width:"20px"}}>  <DeleteForeverIcon sx={{ color:"red"}} /> </Button>   <Button style={{width:"20px"}}>  <AddIcon sx={{ color:"green"}} /> </Button></pre> </td> 
            
              <td>
                <label >Date de creation :</label>
              </td>
              <td>
              
              <input
                  type="text"
                  
                  value={ tablec && tablec.created_at || ""}
                  onChange={e =>setdate(e.target.value)}
                />
               
               </td>
              
          </tr>
          <tr>
            <td>
              <label > Mission :</label>
            </td>
            <td colSpan={3}>
              <textarea cols={100} rows={3}></textarea>
            </td>
            
          </tr>
          <tr>
            <td>
              <label> Emplacement:</label>
            </td>
            <td>
            <input
                  type="text"
                  
                  value={ tablec && tablec.nomdossier || ""}
                  onChange={e =>setnom(e.target.value)}
                />
            </td>
            <td><label > Num Affaire :</label></td>
            <td>
             
                  <input type="text"></input>
               </td>
  
             
          </tr>
          <tr>
            <td>
              <label > Observation :</label>
            </td>
            <td colSpan={3}>
              <textarea cols={100} rows={3}></textarea>
            </td>  
            </tr></tbody>
        </table>
        </TabPanel>
      
    </Box>
   
  
          <Button  id="submit" type='submit'style={{width: 1300,align:'center',height:100, marginLeft:"100px", fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"20px"}}  onClick={ajouter}>Valider dossier</Button>
        </Dialog>   
      </div>
    );
  }
