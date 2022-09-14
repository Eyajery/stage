import * as React from 'react';
import Avocat from '../../image/14.png'
import Button from '@mui/material/Button';
import Axios from 'axios' ;
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import Dialog from '@mui/material/Dialog';
import {useReactToPrint} from 'react-to-print'
import { useState,useRef ,useEffect} from "react";
//import DatePicker from 'react-date-picker';
import SendSharpIcon from '@mui/icons-material/SendSharp';
import { v4 as uuidv4 } from "uuid";

import { Checkbox, TextField } from '@mui/material';
export default function Factures() {
  const [open, setOpen] =useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
 
 
 
  const componentRef=useRef();
  const handleprint=useReactToPrint({
   content:()=>componentRef.current,
   documentTitle:'dossier',
   
  })
 
        const [value, setValue] = React.useState(new Date());
        const [select, setselect]= useState([]);
        useEffect( ()=>{
          const getcountrydata= async()=>{
            const reqData= await fetch("http://localhost:5000/getdossier");
            const resData= await reqData.json();
           setselect(await resData);
          }
          getcountrydata();
          setmatricule("");
          setadress("");
          settel("");
          setemail("");
        },[]);
        
       
        const [searchraison, setSearchraison] = useState("");
        const [matricule, setmatricule] = useState("")
        const [adress, setadress] = useState("")
        const [tel, settel] = useState("")
        const [email, setemail] = useState("")
        const table = select.find((obj) => {
          if (obj.client=== searchraison) {
            
            return true;
          }
          
          return false;
        });
   
      const[s1,sets1]=useState('')
      const[s2,sets2]=useState('')

      const [rows,setrows] = useState([]);
      const [facture,setfacture] = useState([]);

useEffect(() => { 
  const fetchData =async()=>{
  const result =await Axios(
    "http://localhost:5000/paramgeneral",
  );
  await timeout(1000);
  setrows(result.data);
 };
fetchData();
})
function timeout(ms){
  return new Promise((resolve)=>setTimeout(resolve,ms))
}
useEffect(() => { 
  const fetchData =async()=>{
  const result =await Axios(
    "http://localhost:5000/facture",
  );
  await timeout(1000);
  setfacture(result.data);
 };
fetchData();
})
const[v1,setv1]=useState('');
const[v2,setv2]=useState('');
const[v3,setv3]=useState('');
const[v4,setv4]=useState('');
const[v5,setv5]=useState('');
const[id,setid]=useState('');
const[msg,setMsg]=useState('');
const[num_affaire,setnum_affaire]=useState('');
const[emailclient,setemailclient]=useState('');
const[emailavocat,setemailavocat]=useState('');
const ajoutfacture= async (e) => {
  e.preventDefault();
  try {
      await Axios.post('http://localhost:5000/addfacture', {
          id:id,
      num_affaire:num_affaire,
      emailavocat:emailavocat,
      emailclient:table.email||emailclient,
      });
      setid("");
      
     
  } catch (error) {
      if (error.response) {
          setMsg(error.response.data.msg);
      }
  }
}
Axios.defaults.withCredentials = true;
const [file, setFile] = useState(null);

async function handleSend(event) {
  event.preventDefault(); 
  try {
    await Axios.post('http://localhost:5000/modifemail', {
       emailclient:emailclient,
       emailavocat:emailavocat,
    })
} catch (error) {
    if (error.response) {
        setMsg(error.response.data.msg);
 }
} 
let fd = new FormData();
fd.append('myfile', file);
  fetch('http://localhost:5000/sendmail', {
    method: 'POST', body: fd
  }).catch(err => {
    console.error(err);
  });
}


 
  return (
    <div>
      <Button onClick={handleOpen} style={{borderColor:"transparent",height:"50px",width:"150px",marginLeft:"0px",color:"white", fontSize:"12px"}} > Factures</Button>
        <Dialog  fullScreen open={open} onClose={handleClose} maxWidth="lg" >
        <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "1290px",width:"3px"
        , backgroundColor:"#c72120", color:"white",height:"25px"}}>X</Button>
   
        <table ref={componentRef}  >
          <thead>
          <table    >
            <thead >
                <tr  >
                   <td>
                    <div>
                    <img src={Avocat} style={{width:"500px",height:"300px",marginLeft:"-100px",marginTop:"-20px"}}></img></div>
                    </td> 
                    
               <textarea style={{fontStyle:"italic",fontSize:"20px",border:"none" }}  
       
       cols={70} rows={11}></textarea>
                
                </tr>
                <tr>
                <td> 
                    <h2 style={{marginLeft:"50px"}} >Email: <input type="email" style={{width:"250px",fontStyle:"italic",fontSize:"15px",height:"50px",border:"none"}} value={emailavocat}   onChange={e =>setemailavocat(e.target.value)} />
       
        
       </h2>
                    
                    </td>
                        
                    <td> 
                  
                   
                    <h2 style={{marginLeft:"450px"}} >{ new Date().getFullYear() + '/' +(new Date().getMonth()+1)+ '/' + new Date().getDate() }  تونس في</h2>
                    </td>
                    
                </tr>
            </thead>
          </table >
          </thead>
          <tbody>
          <table border="2px" style={{marginLeft:"0px",width:"1180px"}}  >
            <tr style={{alignContent:"center"}}>
                <th colSpan={2}  >
                    <h2>{new Date().getFullYear()}/ {(facture.length+1) }   مذكرة أتعاب محاماة فاتورة عدد  </h2>
                </th>
            </tr>
            <tr >
              <td>
              <table style={{marginLeft:"0px",width:"300px"}} >
                
              </table>
              </td>
                <td className='colone' > <h2  >
                      <select style={{height:"50px",width:"200px",fontStyle:"italic",fontSize:"20px",border:"none"}} 
       
               value={searchraison}
               onChange={(e) => setSearchraison(e.target.value)}
               
              >
                
                <option value="" hidden>
                  --Select--
                
                </option>
                {select.map((item) => {
                  return (
                    <option key={uuidv4()} value={item.client}>
                      {item.client}
                    </option>
                  );
                })}
              </select> الحريف</h2>
                <h2  > <input
                type="text"
                style={{height:"50px",width:"200px",fontStyle:"italic",fontSize:"20px",border:"none"}}
                value={ table && table.cin || matricule}
                onChange={e =>setmatricule(e.target.value)}
              /> المعرّف الجبائي</h2>
                <h2 ><input
                type="text"
                style={{height:"50px",width:"200px",fontStyle:"italic",fontSize:"20px",border:"none"}}
                value={ table && table.adress || adress}
                onChange={e =>setadress(e.target.value)}
              /> العنوان</h2>
                <h2  > <input
                type="text"
                style={{height:"50px",width:"200px",fontStyle:"italic",fontSize:"20px",border:"none"}}
                value={ table && table.tel || tel}
                onChange={e =>settel(e.target.value)}
              /> الهاتف</h2>
                <h2  > <input 
                type="text"
                style={{fontStyle:"italic",fontSize:"20px",border:"none",height:"50px",width:"250px" }}
                value={ table && table.email|| emailclient}
                onChange={e =>setemailclient(e.target.value)}
              /> البريد الإلكتروني</h2>
               
                </td>
             
            </tr>
         
          </table>
          </tbody>
          <table border="2px" style={{marginLeft:"0px",width:"1180px"}}>
            <tr><th><h2>    المبلغ خارج الضريبة بالمليم</h2>   </th>
            <th><h2>   المرجع </h2></th>
            <th> <h2>   الموضوع </h2></th>
            <th> <h2>  رقم  </h2></th></tr>
            <tr>
              <td  className='colone'><input style={{border:"none",height:"50px",width:"200px",fontStyle:"italic",fontSize:"20px" }} type="number" value={s1}  onChange={e =>sets1(+e.target.value)}></input></td>
              <td className='colone'><h2>{new Date().getFullYear()}/{table&&table.num_affaire}قضية عدد </h2> </td>
              <td  className='colone' > <textarea style={{border:"none",width:"300px",fontStyle:"italic",fontSize:"20px" }} ></textarea></td>
              <td className='colone' ><h2>01</h2>
              
              </td>
            </tr>
            <tr>
              <td  className='colone'><input style={{border:"none",height:"50px",width:"200px",fontStyle:"italic",fontSize:"20px" }}  type="number" value={s2}  onChange={e =>sets2(+e.target.value)}></input></td>
              <td className='colone'><h2>{ new Date().getFullYear() + '/' +(new Date().getMonth()+1)+ '/' + new Date().getDate() }مطلب مودع بتاريخ</h2> </td>
              <td  className='colone' > <textarea style={{border:"none",width:"300px",height:"50px",fontStyle:"italic",fontSize:"20px" }}  ></textarea></td>
              <td className='colone' ><h2>02</h2>
              
              </td>
            </tr>
            <tr><th className='colone' ><input style={{border:"none",height:"50px",width:"200px", fontStyle:"italic",fontSize:"20px" }} value={s1+s2}           onChange={e =>setv1(e.target.value)} ></input> </th>
            <th> <h2>   المجموع</h2></th>
            <th></th>
            <th></th></tr>
            <tr>
           
             <td className='colone' ><input style={{border:"none",height:"50px",width:"200px",fontStyle:"italic",fontSize:"20px" }} value={(s1+s2)*rows.map((item) => {
                 
                   
                 return item.id?  item.tva:''}
                 
                
              ) /100}            onChange={e =>setv2(e.target.value)}></input> </td>
            <td  > <h3 className='colone' >الأداء على القيمة المضافة</h3> </td>
            <td colSpan={2} rowSpan={3} ><h3 className='colone'>طريقة التسديد
           <br/> شيك <Checkbox/>
           <br/> كمبيالة <Checkbox/>
           <br/> إيداع بنكي<Checkbox/>
           <br/>    خلافه <Checkbox/>
              </h3> </td>
           
           </tr>
            <tr>
            <td className='colone' ><input style={{border:"none",height:"50px",width:"200px",fontStyle:"italic",fontSize:"20px"}} value={((s1+s2)+((s1+s2)*rows.map((item) => {
                 
                   
                 return  item.id==1? item.tva:''}
                 
                
              ) /100))*0.03}  onChange={e =>setv3(e.target.value)} ></input></td>
            <td> <h3 className='colone'>الخصم من المورد </h3> </td>
           
           </tr>
           <tr>
            <td className='colone' ><input style={{border:"none",height:"50px",width:"200px" ,fontStyle:"italic",fontSize:"20px"  }} 
            value={ rows.map((item) => {
                 
                   
           return item.id?  item.timbrefiscale:''}

          
        )}            onChange={e =>setv4(e.target.value)}  ></input></td>
            <td> <h3 className='colone' >الطابع الجبائي </h3></td>
            
           </tr>
           
          
          
          
           <tr><th className='colone' > <input style={{border:"none",height:"50px",width:"200px",fontStyle:"italic",fontSize:"20px" }} value={(s1+s2)+((s1+s2)*rows.map((item) => {
                 
                   
                 return item.id==1?  item.tva:''}
                 
                
              ) /100 )+(parseInt(rows.map((item) => {
                 
                   
              return item.id==1? item.timbrefiscale:''}
              
             
           )))-(((s1+s2)+((s1+s2)*rows.map((item) => {
                 
                   
            return  item.id==1? item.tva:''}
            
           
         ) /100))*0.03)}           onChange={e =>setv5(e.target.value)} ></input></th>
            <th> <h2>      المبلغ الصافي  بالمليم </h2> </th>
            <th> </th>
            <th></th></tr>
         <tr>
      <td colSpan={4} row={4} > <pre><h2 className='colone'>    تقدر هذه الفاتورة على مبلغ قدره    { parseFloat((s1+s2)+((s1+s2)*rows.map((item) => {
                 
                   
                 return item.id==1?  item.tva:''}
                 
                
              ) /100 )+(parseInt(rows.map((item) => {
                 
                   
              return item.id==1?  item.timbrefiscale:''}
              
             
           )))-(((s1+s2)+((s1+s2)*rows.map((item) => {
                 
                   
            return  item.id==1? item.tva:''}
            
           
         ) /100))*0.03))      } مليم   </h2> </pre> 
        
      <h2> الإمضاء</h2><br/>

      <br/>
      <br/>

      <br/>
      </td> 
         </tr>
          </table>
          <tfoot>
            <textarea  style={{border:"none", fontStyle:"italic",fontSize:"20px"}}  cols={105} rows={5}></textarea>
          </tfoot>
          </table>
         <table>
        <tr> 
          <td> <form onSubmit={ajoutfacture}>
          <  Button type='submit'  onClick= {  handleprint}  variant="outlined"  style={{color:'white',width:"180px",backgroundColor:"#1f4b77"
     ,marginLeft:"30px"}} >
        Imprimer  </Button></form></td>
       
       
      <td>  <Email/>
        </td></tr>
       
        </table>
       </Dialog>
    </div>
    
  );
}
function Email() {
  const [open, setOpen] =useState(false);
  const [file, setFile] = useState(null);
  const[emailclient,setemailclient]=useState('');
  const[emailavocat,setemailavocat]=useState('');
  async function handleSend(event) {
    event.preventDefault(); 
    try {
      await Axios.post('http://localhost:5000/modifemail', {
         emailclient:emailclient,
         emailavocat:emailavocat,
      })
  } catch (error) {
      if (error.response) {
          setMsg(error.response.data.msg);
   }
  } 
  let fd = new FormData();
  fd.append('myfile', file);
    fetch('http://localhost:5000/sendmail', {
      method: 'POST', body: fd
    }).catch(err => {
      console.error(err);
    });
  }
  
  
  const [msg, setMsg] = useState('');
  
   const handleClickOpen = () => {
     setOpen(true);
   };
   const handleClose = () => {
     setOpen(false);
   };
 
   return (
     <React.Fragment>
      <Button variant="outlined" style={{color:'white',width:"180px",backgroundColor:"#1f4b77"
      ,marginLeft:"4px"}} onClick={handleClickOpen}>
         Envoyer email  </Button>
       <Dialog open={open} onClose={handleClose} maxWidth="xs">
      
       <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "370px",width:"3px"
         , backgroundColor:"#c72120", color:"white",height:"25px"}} >X</Button>
      
        
        <div> <p>{msg}</p> </div>
      
          
         <DialogActions>
       
         </DialogActions>
         <form onSubmit= {  handleSend }>
         <input type='email' required placeholder=" Email de client" style={{width:"300px",height:"30px",marginLeft:"30px"}}value={emailclient} onChange={e =>setemailclient(e.target.value)}></input>
          <input className='email' type="file"
      onChange={(e) => setFile(e.target.files[0])}  style={{marginLeft:"20px"}} />
       <Button type='submit' variant="outlined" style={{color:'white',width:"80px",backgroundColor:"#1f4b77"
     ,marginLeft:"10px"}} ><SendSharpIcon></SendSharpIcon>
        </Button>
        </form>
       </Dialog>
      
     </React.Fragment>
   );
 }