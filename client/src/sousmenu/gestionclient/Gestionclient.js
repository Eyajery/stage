import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { useState,useEffect,useRef } from "react";
import Axios from "axios";
import TextField from '@mui/material/TextField';
import { DialogActions } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
function Addclient() {
    const [open, setOpen] =useState(false);
    const[id,setid]=useState("");
    const [raison, setraison] = useState("");
   const [matricule,setmatricule]=useState("");
   const [collaborateur,setcollaborateur]=useState("");
   const [ville,setville]=useState("");
   const [rue,setrue]=useState("");
   const [num,setnum]=useState("");
   const [adress,setadress]=useState("");
   const [code_postale,setcode_postale]=useState("");
   const [activite,setactivite]=useState("");
   const [situation_fiscale,setsituation_fiscale]=useState("");
   const [typeclient, settypeclient] = useState("");
   const[tel,settel]=useState("");
   const[fax,setfax]=useState("");
   const[email,setemail]=useState("");
    const [msg, setMsg] = useState('');
    const ajouter = async (e) => {
     e.preventDefault();
     try {
         await Axios.post('http://localhost:5000/adgestion', {
          id:id,
           raison:raison,
           collaborateur:collaborateur,
           matricule:matricule,
           ville:ville,
           rue:rue,
           num:num,
           adress:adress,
           code_postale:code_postale,
           activite:activite,
           situation_fiscale:situation_fiscale,
           typeclient:typeclient,
           tel:tel,
           fax:fax,
           email:email,
         });
         setid("");
        setraison("");
        setcollaborateur("");
        setmatricule("");
        setville("");
        setrue("");
        setnum("");
        setadress("");
        setcode_postale("");
        setactivite("");
        settypeclient("");
        settel("");
        setfax("");
        setemail("");
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
         <Button variant="outlined"  style={{color:'white',width:"400px",backgroundColor:"#1f4b77"
        ,marginLeft:"30px"}} onClick={handleClickOpen}>
           Ajouter  </Button>
         <Dialog open={open} onClose={handleClose}>
         <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "520px",width:"3px"
          , backgroundColor:"#c72120", color:"white",height:"25px"}}  >X</Button>
        
          <p>{msg}</p>
         <table >
          <tr>
            <td>
                 <label for="nom"> Collaborateur :</label> 
              </td>
              <td>
                  <input type="text"  value={collaborateur}  
                 onChange={(e) => setcollaborateur(e.target.value)} ></input>
              </td>
  
          </tr>
          <tr>
              <td>
                 <label for="nom"> Code Client :</label> 
              </td>
              <td>
                 <pre> <input type="text" value={id}  
                 onChange={(e) => setid(e.target.value)} ></input> / <input type="text" style={{width:"80px"}}></input> </pre>
              </td>
              </tr>
              <tr>
            <td>
                 <label for="nom"> Raison sociale/Nom:</label> 
              </td>
              <td>
                  <input type="text" value={raison}  
                 onChange={(e) => setraison(e.target.value)} ></input>
              </td>
              </tr>
              
              <tr>
                    <td style={{padding:"10px"}}> <label>Type client : </label>  </td>
                    <td style={{padding:"10px"}}><input type="radio" id='personne' name='personne' value={typeclient}
                 onChange={(e) => settypeclient("personne physique")} /> personne physique
          <input type="radio" id='personne' name='personne' value={typeclient}
                 onChange={(e) => settypeclient("personne morale")}/>personne morale</td>
                 </tr>
                    
                    <tr>
        
                    <td style={{padding:"10px"}}> <label>situation fiscale : </label>  </td>
                    <td style={{padding:"10px"}}><input type="radio" id='situation' name='situation' value={situation_fiscale}
                 onChange={(e) => setsituation_fiscale("non assujetie")} /> non assujetie
          <input type="radio" id='situation' name='situation' value={situation_fiscale}
                 onChange={(e) => setsituation_fiscale("assujetie")}/>assujetie
               <input type="radio" id='situation' name='situation' value={situation_fiscale}
                 onChange={(e) => setsituation_fiscale("exonoré")}/>exonoré</td>
                    </tr>
         
         <tr> 
              <td>
                 <label for="nom"> Matricule Fiscale/CIN :</label> 
              </td>
              <td>
                  <input type="text"value={matricule}  
                 onChange={(e) => setmatricule(e.target.value)}  ></input>
              </td> 
            </tr>
            <tr>
            <td>
              <label for="nom"> Adress designé :</label>
            </td>
            <td>
              <fieldset style={{width :"200px"}}>
                <legend> Détail </legend>
                
                  <tr>
                    <td> <label for="nom" > ville:</label> </td>
                    <td> <input type="text"value={ville}  
                 onChange={(e) => setville(e.target.value)} ></input></td>
                  </tr>
                  <tr>
                    <td> <label for="nom"> Rue:</label> </td>
                    <td> <input type="text"value={rue}  
                 onChange={(e) => setrue(e.target.value)} ></input></td>
                  </tr>
                  <tr>
                    <td> <label for="nom"> Numéro:</label> </td>
                    <td> <input type="text"value={num}  
                 onChange={(e) => setnum(e.target.value)} ></input></td>
                  </tr>
                  <tr>
                    <td> <label for="nom"> Code Postale:</label> </td>
                    <td> <input type="text"value={code_postale}  
                 onChange={(e) => setcode_postale(e.target.value)} ></input></td>
                  </tr>
              
              </fieldset>
            
            </td>
          </tr> 
          <tr>
             <td>
              <label> Adress:</label>
              </td> 
              <td>
                  <input type="text" value={adress}  
                 onChange={(e) => setadress(e.target.value)} ></input>
              </td>
              </tr>
           
            <tr>
             <td>
              <label> Activité  Contribuale:</label>
              </td> 
              <td>
                  <input type="text"value={activite}  
                 onChange={(e) => setactivite(e.target.value)} ></input>
              </td>
              </tr>
              <tr>
              <td>
                 <label for="nom"> Tel :</label> 
              </td>
              <td>
                <input type="text"value={tel}  
                 onChange={(e) => settel(e.target.value)} ></input>
              </td>
              </tr>
              <tr>
              <td>
                 <label for="nom"> Fax :</label> 
              </td>
              <td>
                <input type="text"value={fax}  
                 onChange={(e) => setfax(e.target.value)} ></input>
              </td>
              </tr>
              <tr>
              <td>
                 <label for="nom"> Email :</label> 
              </td>
              <td>
                <input type="text"value={email}  
                 onChange={(e) => setemail(e.target.value)} ></input>
              </td>
              </tr>
             
          </table>
          
          <Button onClick={ajouter} style={{color:'white',width:"400px",backgroundColor:"#1f4b77"
       ,marginLeft:"400px"}}> Ajouter</Button>
         
         </Dialog>
         </div>)
        }
        function Modifclient(props) {
          const [open, setOpen] =useState(false);
          const[id,setid]=useState("");
          const [raison, setraison] = useState("");
         const [matricule,setmatricule]=useState("");
         const [collaborateur,setcollaborateur]=useState("");
         const [ville,setville]=useState("");
         const [rue,setrue]=useState("");
         const [num,setnum]=useState("");
         const [adress,setadress]=useState("");
         const [code_postale,setcode_postale]=useState("");
         const [activite,setactivite]=useState("");
         const [situation_fiscale,setsituation_fiscale]=useState("");
         const [typeclient, settypeclient] = useState("");
         const[tel,settel]=useState("");
         const[fax,setfax]=useState("");
         const[email,setemail]=useState("");
          const [msg, setMsg] = useState('');
          const modifier = async (e) => {
           e.preventDefault();
           try {
               await Axios.post('http://localhost:5000/modifgestion', {
                id:props.idM,
                 raison:raison,
                 collaborateur:collaborateur,
                 matricule:matricule,
                 ville:ville,
                 rue:rue,
                 num:num,
                 adress:adress,
                 code_postale:code_postale,
                 activite:activite,
                 situation_fiscale:situation_fiscale,
                 typeclient:typeclient,
                 tel:tel,
                 fax:fax,
                 email:email,
               });
               setid("");
              setraison("");
              setcollaborateur("");
              setmatricule("");
              setville("");
              setrue("");
              setnum("");
              setadress("");
              setcode_postale("");
              setactivite("");
              settypeclient("");
              settel("");
              setfax("");
              setemail("");
           } catch (error) {
               if (error.response) {
                   setMsg(error.response.data.msg);
               }
           }
         }
           const handleClickOpen = () => {
             setOpen(true);
             setid(props.idM)
             setraison(props.lM);
             setcollaborateur(props.lC);
             setmatricule(props.lMa);
             setville(props.lV);
             setrue(props.lR);
             setnum(props.lN);
             setadress(props.lAd)
             setcode_postale(props.lCp);
             setactivite(props.lA);
             settel(props.lTe);
             setfax(props.lF);
             setemail(props.lE);
           };
           const handleClose = () => {
             setOpen(false);
             
           };
         
           return (
             <div>
               <Button variant="outlined"  style={{color:'white',width:"400px",backgroundColor:"#1f4b77"
              ,marginLeft:"30px"}} onClick={handleClickOpen}>
                 Modifier  </Button>
               <Dialog open={open} onClose={handleClose}>
               <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "520px",width:"3px"
                , backgroundColor:"#c72120", color:"white",height:"25px"}}  >X</Button>
               
               <div><p>{msg}</p> </div> 
               <div>
               <table >
                <tr>
                  <td>
                       <label for="nom"> Collaborateur :</label> 
                    </td>
                    <td>
                        <input type="text"  value={collaborateur}  
                       onChange={(e) => setcollaborateur(e.target.value)} ></input>
                    </td>
        
                </tr>
                <tr>
                    <td>
                       <label for="nom"> Code Client :</label> 
                    </td>
                    <td>
                       <pre> <input type="text" value={props.idM}  
                       onChange={(e) => setid(e.target.id)} ></input> / <input type="text" style={{width:"80px"}}></input> </pre>
                    </td>
                    </tr>
                    <tr>
                  <td>
                       <label for="nom"> Raison sociale/Nom:</label> 
                    </td>
                    <td>
                        <input type="text" value={raison}  
                       onChange={(e) => setraison(e.target.value)} ></input>
                    </td>
        
                </tr>
                <tr>
                   
                    <td>
                       <label for="nom"> Type Client :</label> 
                    </td>
                    <td>
                       <pre>  <input type="radio" id='typeclient' name='personne physique' value={typeclient}
                       onChange={(e) => settypeclient("personne physique")}  /> Personne Physique <input type="radio"  id='typeclient' name='personne morale' value={typeclient}
                       onChange={(e) => settypeclient("personne morale")} />  Personne Morale  </pre>
                    </td>
                    </tr>
                    <tr>
        
                    <td>
                       <label for="nom"> Situation Fiscale</label> 
                    </td>
                    <td>
                       <pre>  <input type="radio" id='situation_fiscale' name='non assujetie' value={situation_fiscale}
                       onChange={(e) => setsituation_fiscale("non assujetie")}  /> Non Assujetie <input type="radio" id='situation_fiscale' name='assujetie' value={situation_fiscale}
                       onChange={(e) => setsituation_fiscale("assujetie")} />  Assujetie <input type="radio" id='situation_fiscale' name='exonoré' value={situation_fiscale}
                       onChange={(e) => setsituation_fiscale("exonoré")} /> Exonoré  </pre>
                    </td>
                        
                    </tr>
                    <tr>
                    <td>
                       <label for="nom"> Matricule Fiscale/CIN :</label> 
                    </td>
                    <td>
                        <input type="text"value={matricule}  
                       onChange={(e) => setmatricule(e.target.value)}  ></input>
                    </td> 
                  </tr>
                  <tr>
                  <td>
                    <label for="nom"> Adress designé :</label>
                  </td>
                  <td>
                    <fieldset style={{width :"200px"}}>
                      <legend> Détail </legend>
                      
                        <tr>
                          <td> <label for="nom" > ville:</label> </td>
                          <td> <input type="text"value={ville}  
                       onChange={(e) => setville(e.target.value)} ></input></td>
                        </tr>
                        <tr>
                          <td> <label for="nom"> Rue:</label> </td>
                          <td> <input type="text"value={rue}  
                       onChange={(e) => setrue(e.target.value)} ></input></td>
                        </tr>
                        <tr>
                          <td> <label for="nom"> Numéro:</label> </td>
                          <td> <input type="text"value={num}  
                       onChange={(e) => setnum(e.target.value)} ></input></td>
                        </tr>
                        <tr>
                          <td> <label for="nom"> Code Postale:</label> </td>
                          <td> <input type="text"value={code_postale}  
                       onChange={(e) => setcode_postale(e.target.value)} ></input></td>
                        </tr>
                    
                    </fieldset>
                  
                  </td>
                </tr> 
                <tr>
                   <td>
                    <label> Adress:</label>
                    </td> 
                    <td>
                        <input type="text" value={adress}  
                       onChange={(e) => setadress(e.target.value)} ></input>
                    </td>
                    </tr>
                 
                  <tr>
                   <td>
                    <label> Activité  Contribuale:</label>
                    </td> 
                    <td>
                        <input type="text"value={activite}  
                       onChange={(e) => setactivite(e.target.value)} ></input>
                    </td>
                    </tr>
                    <tr>
                    <td>
                       <label for="nom"> Tel :</label> 
                    </td>
                    <td>
                      <input type="text"value={tel}  
                       onChange={(e) => settel(e.target.value)} ></input>
                    </td>
                    </tr>
                    <tr>
                    <td>
                       <label for="nom"> Fax :</label> 
                    </td>
                    <td>
                      <input type="text"value={fax}  
                       onChange={(e) => setfax(e.target.value)} ></input>
                    </td>
                    </tr>
                    <tr>
                    <td>
                       <label for="nom"> Email :</label> 
                    </td>
                    <td>
                      <input type="text"value={email}  
                       onChange={(e) => setemail(e.target.value)} ></input>
                    </td>
                    </tr>
                   
                </table>
                </div>
                <form onSubmit={modifier}>
                          <Button type='submit'  onClick={handleClose}    style={{color:'white',width:"180px",backgroundColor:"#1f4b77"
                    ,marginLeft:"4px"}} >Modifier</Button></form>
               </Dialog>
               </div>)
              } 
  function Suppclient(props) {
    const [open, setOpen] =useState(false);
    const [id,setid]=useState("");
    const [msg, setMsg] = useState('');
    const supprimer = async (e) => {
     e.preventDefault();
     try {
         await Axios.post('http://localhost:5000/supgestion', {
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
       setid("")
     };
   
     
     return (
       <div>
         <Button variant="outlined"   style={{color:'white',width:"400px",backgroundColor:"#1f4b77"
       ,marginLeft:"30px"}}onClick={handleClickOpen}>
           Supprimer  </Button>
         <Dialog open={open} onClose={handleClose}>
         <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "500px",width:"3px"}} >X</Button>
        
           <DialogTitle>Supprimer un Client</DialogTitle>
          <div><p>{msg}</p> </div> 
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
        
       </div>
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
      id: 'nomdossier',
      numeric: true,
      disablePadding: false,
      label: 'nomdossier',
      innerWidth:50,
    },
    {
  id: 'raison',
  numeric: true,
      disablePadding: false,
      label: 'raison',
      innerWidth:50,
},
{
  id: 'collaborateur',
  numeric: true,
      disablePadding: false,
      label: 'collaborateur',
      innerWidth:50,
},

{
    id: 'matricule',
    numeric: true,
      disablePadding: false,
      label: 'matricule',
      innerWidth:50,
  },
  {
    id: 'ville',
    numeric: true,
    disablePadding: false,
    label: 'ville',
    innerWidth:50,
  },
  {
    id: 'rue',
    numeric: true,
      disablePadding: false,
      label: 'rue',
      innerWidth:50,
  },
  {
    id: 'num',
    numeric: true,
    disablePadding: false,
    label: 'num',
    innerWidth:50,
  },
  

  {
    id: 'code_postale',
    numeric: true,
      disablePadding: false,
      label: 'code_postale',
      innerWidth:50,
  },
  {
    id: 'adress',
    numeric: true,
    disablePadding: false,
    label: 'adress',
    innerWidth:50,
},
 
  {
    id: 'activite',
    numeric: true,
    disablePadding: false,
    label: 'activite',
    innerWidth:50,
},
  
  {
    id: 'situation_fiscale',
    numeric: true,
      disablePadding: false,
      label: 'situation_fiscale',
      innerWidth:50,
  },
 
  {
    id: 'typeclient',
    numeric: true,
      disablePadding: false,
      label: 'typeclient',
      innerWidth:50,
  },
  {
    id: 'tel',
    numeric: true,
    disablePadding: false,
    label: 'tel',
    innerWidth:50,
},
  
  {
    id: 'fax',
    numeric: true,
    disablePadding: false,
    label: 'fax',
    innerWidth:50,
},
  {
    id: 'email',
    numeric: true,
      disablePadding: false,
      label: 'email',
      innerWidth:50,
 
  }

];
    
 
  
  
  
  
 
  const columns = [
    
    { id: 'id', label: 'ID', minWidth: 50 },
    
    
{
  id: 'raison',
   label: 'raison', minWidth: 50 
},
{
  id: 'collaborateur',
  label: 'collaborateur', minWidth: 50 
},

{
    id: 'matricule',
     label: 'matricule', minWidth: 50 
  },
  {
    id: 'ville',
    label: 'ville', minWidth: 50 
  },
  {
    id: 'rue',
     label: 'rue', minWidth: 50 
  },
  {
    id: 'num',
    label: 'num', minWidth: 50 
  },
  

  {
    id: 'code_postale',
     label: 'code_postale', minWidth: 50 
  },
  {
    id: 'activite',
    label: 'activite', minWidth: 50 
  },
  
  {
    id: 'situation_fiscale',
    label: 'situation_fiscale', minWidth: 50 
  },
  {
    id: 'typeclient',
    label: 'typeclient', minWidth: 50 
  },
  {
    id: 'tel',
    label: 'tel', minWidth: 50 
  },
  {
    id: 'adress',
    label: 'adress', minWidth: 50 
  },
 
  {
    id: 'fax',
    label: 'fax', minWidth: 50 
  },
  {
    id: 'email',
    label: 'email', minWidth: 50 
  },


]
  
    
  
  
  
  export default function EnhancedTable() {
    const [open, setOpen] =useState(false);
   
    const [users, setUsers] = useState([]);
    //const [page, setPage] = useState(0);
    //const [limit, setLimit] = useState(10);
    //const [pages, setPages] = useState(0);
    const [rows, setRows] = useState(0);
    const [keyword, setKeyword] = useState("");
    const [query, setQuery] = useState("");
    const [msg, setMsg] = useState("");
    function timeout(ms){
      return new Promise((resolve)=>setTimeout(resolve,ms))
    }
   
    useEffect(() => {
    
        getUsers();
    },  
     [users, keyword]);
  
    const getUsers = async () => {
      const response = await Axios.get(
        `http://localhost:5000/search?search_query=${keyword}`
      );
      await timeout(1000);
      setUsers(response.data.result);
    
      setRows(response.data.totalRows);
    };
    const searchData = (e) => {
      e.preventDefault();
      //setPage(0);
      setMsg("");
      setKeyword(query);
    };
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
 
    const [idM, setid] = React.useState([]);
    const [lM, setraison] = React.useState([]);
   
    const [lC, setraison1] = React.useState([]);
    const [lMa, setraison2] = React.useState([]);
    const [lV, setraison3] = React.useState([]);
    const [lE, setraison11] = React.useState([]);
    const [lF, setraison10] = React.useState([]);
    const [lAd, setraison8] = React.useState([]);
    const [lCp, setraison6] = React.useState([]);
    const [lN, setraison5] = React.useState([]);
    const [lR, setraison4] = React.useState([]);
    const [lA, setraison7] = React.useState([]);
    const [lTe, setraison9] = React.useState([]);

   
  
    const handleClick = (event, id,raison,collaborateur,matricule,ville,rue,num,code_postale
      , activite,adress,tel,fax,email) => {
   
    let newSelected = [];
    let lModif=[];
    let lModif1=[];
    let lModif2=[];
    let lModif3=[];
    let lModif4=[];
    let lModif5=[];
    let lModif6=[];
    let lModif7=[];
    let lModif8=[];
    let lModif9=[];
    let lModif10=[];
    let lModif11=[];
 
        newSelected = id;
        lModif=raison;
        lModif1=collaborateur; 
        lModif2=matricule;
        lModif3=ville;
        lModif4=rue;
        lModif5=num;
        lModif6=code_postale;
        lModif7=activite;
        lModif8=adress;
        lModif9=tel;
        lModif10=fax;
       lModif11=email;
      
       
  
  
      
   setid(newSelected);
   
    setraison(lModif);
    setraison1(lModif1);
    setraison2(lModif2);
    setraison3(lModif3);
    setraison4(lModif4);
    setraison5(lModif5);
    setraison6(lModif6);
    setraison7(lModif7);
    setraison8(lModif8);
    setraison9(lModif9);
    setraison10(lModif10);
    setraison11(lModif11);
   

    
    };
   
      const handleM = lM;   
      const handle = idM;
      const handleC = lC;
      const handleMa = lMa;
      const handleV = lV;
      const handleR = lR;
      const handleN = lN;
      const handleCp =lCp;
      const handleA= lA;
      const handleAd = lAd;
      const handleTe = lTe;
      const handleF = lF;
      const handleE = lE;
  
      const handleOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };
     
    return (
      <div >
  
          <Button onClick={handleOpen} style={{borderColor:"transparent",height:"50px",width:"150px",marginLeft:"0px",color:"white", fontSize:"12px"}}>Gestion client</Button>
        <Dialog  fullScreen open={open} onClose={handleClose} maxWidth="lg" style={{backgroundColor:"#CCF9F3"}}>
        <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "1290px",width:"3px"
        , backgroundColor:"#c72120", color:"white",height:"25px"}}>X</Button>
          
        <table  > 
          <thead>
        <tr >
            <td style={{alignItems:"center" }}>
            
            <DialogTitle style={{color:'#6e5244' , marginLeft:"350px", fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"30px"}} >
            Liste des clients
            </DialogTitle>
            </td>
            
            </tr></thead>
            <tbody>
            <tr>
            
              <td>
      
              <TextField 
            autoFocus
            margin="dense"
            id="recherche"
            label="recherche"
            type="text"
            fullWidth
            variant="outlined"
            size='small'
            sx={{ m:0.5, width: 500,marginLeft:50 }}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            />
     <Button onClick={searchData} style={{width:"20px" }}> <SearchIcon  /></Button>   
  <Paper sx={{ width: '100%', overflow: 'hidden' }}>
       
          <Table  stickyHeader aria-label="sticky table">
          
                <TableHead>
                    <TableCell> </TableCell>
                    <TableCell style={{color:"#1f4b77" , marginLeft:"350px", fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"15px"}} > Code client</TableCell>
                    
                <TableCell style={{color:"#1f4b77" , marginLeft:"350px", fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"15px"}}>Raison</TableCell>
                <TableCell style={{color:"#1f4b77" , marginLeft:"350px", fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"15px"}} >Collaborateur</TableCell>
                <TableCell style={{color:"#1f4b77" , marginLeft:"350px", fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"15px"}} >Matricule</TableCell>
                <TableCell style={{color:"#1f4b77" , marginLeft:"350px", fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"15px"}}>Ville</TableCell>
                <TableCell style={{color:"#1f4b77" , marginLeft:"350px", fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"15px"}} >Rue</TableCell>
                <TableCell style={{color:"#1f4b77" , marginLeft:"350px", fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"15px"}} >Num</TableCell>
                <TableCell style={{color:"#1f4b77" , marginLeft:"350px", fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"15px"}} >Code_postale</TableCell>
                <TableCell style={{color:"#1f4b77" , marginLeft:"350px", fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"15px"}} >Activité</TableCell>
                <TableCell style={{color:"#1f4b77" , marginLeft:"350px", fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"15px"}} >Situation_fiscale</TableCell>
                <TableCell style={{color:"#1f4b77" , marginLeft:"350px", fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"15px"}}>Type client</TableCell>
                <TableCell style={{color:"#1f4b77" , marginLeft:"350px", fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"15px"}}>Adress</TableCell>
                <TableCell style={{color:"#1f4b77" , marginLeft:"350px", fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"15px"}} >Tel</TableCell>
                <TableCell style={{color:"#1f4b77" , marginLeft:"350px", fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"15px"}} >Fax</TableCell>
                <TableCell style={{color:"#1f4b77" , marginLeft:"350px", fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"15px"}} >Email</TableCell>
              

                </TableHead>
    
  
                <TableBody>
                  {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                   rows.slice().sort(getComparator(order, orderBy)) */}
                  {stableSort(users, getComparator(order, orderBy))
                    //.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                    
                      const labelId = `enhanced-table-checkbox-${index}`;
  
                      return (
                        
                        <TableRow
                          hover
                          onClick={(event) => handleClick(event, row.id,row.raison,row.collaborateur,row.matricule,row.ville,row.rue,row.num,row.code_postale
                           , row.activite, row.adress,row.tel,row.fax,row.email)}
                          //  onChange={(e) => handleCountry()}
                          role="checkbox"
                       
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
        
          </Paper>
         
        </td>
        </tr>
  
        </tbody>
        </table>
        <DialogActions>
        <Addclient/> <Suppclient   idM={handle} /> 
        <Modifclient idM={handle} lM={handleM} lC={handleC} lMa={handleMa} lV={handleV}
         lR={handleR}   lN={handleN} lCp={handleCp} 
           lAd={handleAd} lA={handleA}  lTe={handleTe}   lF={handleF} lE={handleE} />
 
       </DialogActions>   

        </Dialog>

        </div>
    );
                }