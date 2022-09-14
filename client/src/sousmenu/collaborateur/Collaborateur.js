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








function Addcollab() {
  const [open, setOpen] =useState(false);
  const[id,setid]=useState("");
  const [nom, setnom] = useState("");
 const [matricule,setmatricule]=useState("");
 const [part,setpart]=useState("");
 const [cin,setcin]=useState("");
 const [ville,setville]=useState("");
 const [rue,setrue]=useState("");
 const [num,setnum]=useState("");
 const [adress,setadress]=useState("");
 const [code_postale,setcode_postale]=useState("");
 const [activite,setactivite]=useState("");
 const [mode_reglement,setmode_reglement]=useState("");
 const [type_reglement, settype_reglement] = useState("");
 const[tel,settel]=useState("");
 const[fax,setfax]=useState("");
 const[email,setemail]=useState("");
  const [msg, setMsg] = useState('');
  const ajouter = async (e) => {
   e.preventDefault();
   try {
       await Axios.post('http://localhost:5000/addcollab', {
        id:id,
         nom:nom,
         part:part,
         matricule:matricule,
         ville:ville,
         rue:rue,
         num:num,
         adress:adress,
         code_postale:code_postale,
         activité:activite,
         mode_reglement:mode_reglement,
         type_reglement:type_reglement,
         tel:tel,
         fax:fax,
         email:email,
         cin:cin,
       });
       setid("");
      setnom("");
      setpart("");
      setmatricule("");
      setville("");
      setrue("");
      setnum("");
      setadress("");
      setcode_postale("");
      setactivite("");
      settype_reglement("");
      setcin("");
      settel("");
      setfax("");
      setemail("");
      setmode_reglement("");
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
               <label for="nom">Code collaborateur :</label> 
            </td>
            <td>
                <input type="text"  value={id}  
               onChange={(e) => setid(e.target.value)} ></input>
            </td>

        </tr>
        <tr>
            <td>
               <label for="nom"> Nom:</label> 
            </td>
            <td>
               <pre> <input type="text" value={nom}  
               onChange={(e) => setnom(e.target.value)} ></input>  </pre>
            </td>
            </tr>
            <tr>
          <td>
               <label for="nom"> cin:</label> 
            </td>
            <td>
                <input type="text" value={cin}  
               onChange={(e) => setcin(e.target.value)} ></input>
            </td>
            </tr>
            
            <tr>
                  <td style={{padding:"10px"}}> <label>mode_reglement : </label>  </td>
                  <td style={{padding:"10px"}}><input type="radio" id='personne' name='personne' value={mode_reglement}
               onChange={(e) => setmode_reglement("sur dossier")} /> sur dossier
        <input type="radio" id='personne' name='personne' value={mode_reglement}
               onChange={(e) => setmode_reglement("mensuel")}/>Mensuel</td>
               </tr>
                  
                  <tr>
      
                  <td style={{padding:"10px"}}> <label> type_reglement : </label>  </td>
                  <td style={{padding:"10px"}}><input type="radio" id='situation' name='situation' value={type_reglement}
               onChange={(e) => settype_reglement("pourcentage")} /> Pourcentage
        <input type="radio" id='situation' name='situation' value={type_reglement}
               onChange={(e) => settype_reglement("forfait")}/>Forfait
             </td>
                  </tr>
       
       <tr> 
            <td>
               <label for="nom"> Matricule :</label> 
            </td>
            <td>
                <input type="text"value={matricule}  
               onChange={(e) => setmatricule(e.target.value)}  ></input>
            </td> 
          </tr>
          <tr>
          <td>
            <label for="nom"> Adress  :</label>
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
            <label> Activite:</label>
            </td> 
            <td>
                <input type="text" value={activite}  
               onChange={(e) => setactivite(e.target.value)} ></input>
            </td>
            </tr>
         
          <tr>
           <td>
            <label> part collaborateur:</label>
            </td> 
            <td>
                <input type="text"value={part}  
               onChange={(e) => setpart(e.target.value)} ></input>
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
        
        <Button onClick={ajouter} style={{color:'white',width:"200px",backgroundColor:"#1f4b77"
     ,marginLeft:"400px"}}> Ajouter</Button>
       
       </Dialog>
       </div>)
      }
      function Modifcolab(props) {
        const [open, setOpen] =useState(false);
        const[id,setid]=useState("");
        const [nom, setnom] = useState("");
       const [matricule,setmatricule]=useState("");
       const [part,setpart]=useState("");
       const [cin,setcin]=useState("");
       const [ville,setville]=useState("");
       const [rue,setrue]=useState("");
       const [num,setnum]=useState("");

       const [code_postale,setcode_postale]=useState("");
       const [activite,setactivite]=useState("");
       const [mode_reglement,setmode_reglement]=useState("");
       const [type_reglement, settype_reglement] = useState("");
       const[tel,settel]=useState("");
       const[fax,setfax]=useState("");
       const[email,setemail]=useState("");
        const [msg, setMsg] = useState('');
        const ajouter = async (e) => {
         e.preventDefault();
         try {
             await Axios.post('http://localhost:5000/modifcollab', {
              id:props.idM,
               nom:nom,
               part:part,
               matricule:matricule,
               ville:ville,
               rue:rue,
               num:num,
              
               code_postale:code_postale,
               activité:activite,
               mode_reglement:mode_reglement,
               type_reglement:type_reglement,
               tel:tel,
               fax:fax,
               email:email,
               cin:cin,
             });
             setid("");
            setnom("");
            setpart("");
            setmatricule("");
            setville("");
            setrue("");
            setnum("");
        
            setcode_postale("");
            setactivite("");
            settype_reglement("");
            setcin("");
            settel("");
            setfax("");
            setemail("");
            setmode_reglement("");
         } catch (error) {
             if (error.response) {
                 setMsg(error.response.data.msg);
             }
         }
       }
         const handleClickOpen = () => {
           setOpen(true);
           setid(props.idM);
           setnom(props.lN);
           setpart(props.lP);
           setmatricule(props.lM);
           setville(props.lV);
           setrue(props.lR);
           setnum(props.lNum);
           setcode_postale(props.lCo);
           setactivite(props.lA);
           setcin(props.lC);
           settel(props.lT);
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
            
              <p>{msg}</p>
             <table >
              <tr>
                <td>
                     <label for="nom">Code collaborateur :</label> 
                  </td>
                  <td>
                      <input type="text"  value={props.idM}  
                     onChange={(e) => setid(e.target.value)} ></input>
                  </td>
      
              </tr>
              <tr>
                  <td>
                     <label for="nom"> Nom:</label> 
                  </td>
                  <td>
                     <pre> <input type="text" value={nom}  
                     onChange={(e) => setnom(e.target.value)} ></input>  </pre>
                  </td>
                  </tr>
                  <tr>
                <td>
                     <label for="nom"> cin:</label> 
                  </td>
                  <td>
                      <input type="text" value={cin}  
                     onChange={(e) => setcin(e.target.value)} ></input>
                  </td>
                  </tr>
                  
                  <tr>
                        <td style={{padding:"10px"}}> <label>mode_reglement : </label>  </td>
                        <td style={{padding:"10px"}}><input type="radio" id='personne' name='personne' value={mode_reglement}
                     onChange={(e) => setmode_reglement("sur dossier")} /> sur dossier
              <input type="radio" id='personne' name='personne' value={mode_reglement}
                     onChange={(e) => setmode_reglement("mensuel")}/>Mensuel</td>
                     </tr>
                        
                        <tr>
            
                        <td style={{padding:"10px"}}> <label> type_reglement : </label>  </td>
                        <td style={{padding:"10px"}}><input type="radio" id='situation' name='situation' value={type_reglement}
                     onChange={(e) => settype_reglement("pourcentage")} /> Pourcentage
              <input type="radio" id='situation' name='situation' value={type_reglement}
                     onChange={(e) => settype_reglement("forfait")}/>Forfait
                   </td>
                        </tr>
             
             <tr> 
                  <td>
                     <label for="nom"> Matricule :</label> 
                  </td>
                  <td>
                      <input type="text"value={matricule}  
                     onChange={(e) => setmatricule(e.target.value)}  ></input>
                  </td> 
                </tr>
                <tr>
                <td>
                  <label for="nom"> Adress  :</label>
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
                  <label> Activite:</label>
                  </td> 
                  <td>
                      <input type="text" value={activite}  
                     onChange={(e) => setactivite(e.target.value)} ></input>
                  </td>
                  </tr>
               
                <tr>
                 <td>
                  <label> part collaborateur:</label>
                  </td> 
                  <td>
                      <input type="text"value={part}  
                     onChange={(e) => setpart(e.target.value)} ></input>
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
              
              <form onSubmit={ajouter}>
                          <Button type='submit'  onClick={handleClose}    style={{color:'white',width:"180px",backgroundColor:"#1f4b77"
                    ,marginLeft:"4px"}} >Modifier</Button></form>
             </Dialog>
             </div>)
            } 
function Suppcolab(props) {
  const [open, setOpen] =useState(false);
  const [id,setid]=useState("");
  const [msg, setMsg] = useState('');
  const supprimer = async (e) => {
   e.preventDefault();
   try {
       await Axios.post('http://localhost:5000/suppcollab', {
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
       <Button variant="outlined"   style={{color:'white',width:"400px",backgroundColor:"#1f4b77"
              ,marginLeft:"30px"}}onClick={handleClickOpen}>
         Supprimer  </Button>
       <Dialog open={open} onClose={handleClose}>
       <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "500px",width:"3px"}} >X</Button>
       
         <DialogTitle>Supprimer un Client</DialogTitle>
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
      
     </div>
   );
 }
export default function NestedModal() {
  const [open, setOpen] =useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  function timeout(ms){
    return new Promise((resolve)=>setTimeout(resolve,ms))
  }
  const [users, setUsers] = useState([]);
  useEffect(() => { 
    const fetchData =async()=>{
    const result =await Axios(
      "http://localhost:5000/getcollab",
    );
    await timeout(1000);
    setUsers(result.data);
   };
  fetchData();
  })
 

 const [lCo, setcode_postale] = React.useState([]);
 const [lM, setmatricule] = React.useState([]);
 const [lP, setpart] = React.useState([]);
 
  const [idM, setid] = React.useState([]);
    const [lN, setnom] = React.useState([]);
    const [lNum, setnum] = React.useState([]);
    const [lV, setville] = React.useState([]);
    const [lT, settel] = React.useState([]);  
    const [lC, setcin] = React.useState([]);
    const [lR, setrue] = React.useState([]);
    const [lA, setactivite] = React.useState([]);
    const [lF, setfax] = React.useState([]);  
    const [lE, setemail] = React.useState([]);
   

 
  const handleClick = (event,id, nom,cin,ville,rue,num,code_postale,activite,tel,fax,email,matricule,part) => {
    
    let newSelected = [];
    let lModifn=[];
    let lModifv=[];
    let lModifr=[];
    let lModifc=[];
    let lModifco=[];
    let lModifnum=[];
    let lModifa=[];
    let lModiff=[];
    let lModifm=[];
    let lModift=[];
    let lModife=[];


    let lModifp=[];

    newSelected =id;
    lModifn=nom;
    lModifc=cin;
    lModifco=code_postale;
    lModifv=ville;
    lModifr=rue;
    lModifnum=num;
    lModifa=activite;
    lModift=tel;
    lModiff=fax;
    lModife=email;
    lModifm=matricule;

    lModifp=part;

    setid(newSelected);  
    setnom(lModifn);
    setville(lModifv);
    setrue(lModifr);
    setcin(lModifc);
    setcode_postale(lModifco);
    settel(lModift);
    setnum(lModifnum);  
    setfax(lModiff);
 
    setpart(lModifp);

    setemail(lModife);
    setmatricule(lModifm);
    setactivite(lModifa);
  
  };  
    const handleA = lA;   
    const handle = idM;
    const handleC = lC;
    const handleCo = lCo;
    const handleT = lT;   
    const handleN = lN;
    const handleR = lR;
    const handleV = lV;   
    const handleM = lM;
    const handleE = lE;
    const handleF = lF;   
    
    const handleNum = lNum;
    const handleP = lP;
  

  return (
    <div>
   <Button onClick={handleOpen} style={{borderColor:"transparent",height:"50px",width:"150px",marginLeft:"0px",color:"white", fontSize:"12px"}}>Collaborateur</Button>
        <Dialog  fullScreen open={open} onClose={handleClose} maxWidth="lg" style={{backgroundColor:"#CCF9F3"}}>
        <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "1290px",width:"3px"
        , backgroundColor:"#c72120", color:"white",height:"25px"}}>X</Button>
      <table  > 
        <thead>
      <tr >
          <td style={{alignItems:"center" }}>
          
          <DialogTitle style={{color:'#6e5244' , marginLeft:"100px", fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"30px"}} > Liste des collaborateurs</DialogTitle>
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
        , fontWeight:"bold", fontSize:"15px"}} >Nom</TableCell> 
                <TableCell style={{color:"#1f4b77" , marginLeft:"350px", fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"15px"}} >Cin</TableCell>  
            
         <TableCell style={{color:"#1f4b77" , marginLeft:"350px", fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"15px"}} >Ville</TableCell> 
                <TableCell style={{color:"#1f4b77" , marginLeft:"350px", fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"15px"}}>Rue</TableCell>
                   <TableCell style={{color:"#1f4b77" , marginLeft:"350px", fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"15px"}} >Code-Postale</TableCell>
         <TableCell style={{color:"#1f4b77" , marginLeft:"350px", fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"15px"}} >Activité</TableCell>
                <TableCell style={{color:"#1f4b77" , marginLeft:"350px", fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"15px"}} >Num</TableCell>   
         <TableCell style={{color:"#1f4b77" , marginLeft:"350px", fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"15px"}} >Tel</TableCell>         
          <TableCell style={{color:"#1f4b77" , marginLeft:"350px", fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"15px"}} >fax</TableCell>
         <TableCell style={{color:"#1f4b77" , marginLeft:"350px", fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"15px"}} >Email</TableCell>
         <TableCell style={{color:"#1f4b77" , marginLeft:"350px", fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"15px"}} >Maticule</TableCell>  
          <TableCell style={{color:"#1f4b77" , marginLeft:"350px", fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"15px"}} >mode_reglement</TableCell>
         
        <TableCell style={{color:"#1f4b77" , marginLeft:"350px", fontFamily:"cursive"
      , fontWeight:"bold", fontSize:"15px"}} >Part</TableCell>
       <TableCell style={{color:"#1f4b77" , marginLeft:"350px", fontFamily:"cursive"
        , fontWeight:"bold", fontSize:"15px"}} >type_reglement</TableCell> 
                </TableHead>
    
                <TableBody>
                
                  {users.map((row, index) => {
                const labelId = `enhanced-table-checkbox-${index}`;
                      return (
                        
                        <TableRow
                          hover
                          onClick={(event) => handleClick(event,row.id,row.nom,row.cin,row.ville,row.rue,row.num,row.code_postale,
                          row.activité
                            ,row.tel,row.fax,row.email, row.matricule,row.part)}
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
                <TableCell>{(row.cin)}</TableCell>
                <TableCell>{(row.ville)}</TableCell>
                <TableCell>{(row.rue)}</TableCell >   
                 <TableCell>{(row.code_postale)}</TableCell>
                 <TableCell>{(row.activité)}</TableCell>
               <TableCell>{(row.num)}</TableCell>
               <TableCell>{(row.tel)}</TableCell>
               <TableCell>{(row.fax)}</TableCell>
               <TableCell>{(row.email)}</TableCell> 
               <TableCell>{(row.matricule)}</TableCell> 
               <TableCell>{(row.mode_reglement)}</TableCell> 
               <TableCell>{(row.part)}</TableCell>
               <TableCell>{(row.type_reglement)}</TableCell>

               </TableRow>   )})}         
                </TableBody>                       
          </Table>          
          </Paper>
      </tr>       
        </tbody>
        </table>
        <DialogActions>
        <Addcollab/>
          <Modifcolab idM={handle} lN={handleN} lV={handleV}  lC={handleC} lR={handleR} lNum={handleNum}  lA={handleA} lM={handleM} lCo={handleCo} lT={handleT} lF={handleF} lE={handleE}  lP={handleP}  />
          <Suppcolab idM={handle}/>                
       </DialogActions>   
        </Dialog>
    </div>
  );

          
  
}