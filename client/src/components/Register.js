import '../App.css';
import Axios from 'axios'
import{BrowserRouter as Router,Switch, Route,Routes,Link} from "react-router-dom";
import React,{useState , useEffect} from "react";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import BalanceIcon from '@mui/icons-material/Balance';
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [nom, setnom] = useState('');
  const [prenom, setprenom] = useState('');
  const [domaine, setdomaine] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [msg, setMsg] = useState('');
  const Navigate = useNavigate();

  const Register = async (e) => {
      e.preventDefault();
      try {
          await Axios.post('http://localhost:5000/register', {
              nom:nom,
              prenom:prenom,
              domaine:domaine,
              email: email,
              password: password,
              confPassword: confPassword
          });
          Navigate("/");
      } catch (error) {
          if (error.response) {
              setMsg(error.response.data.msg);
          }
      }
  }
 
    
  return (
    <div className="App">
      <form onSubmit={Register}>
      <div className="avocat">  <h2> <pre> Avocat <BalanceIcon style={{fontSize:"50px"}}/> </pre></h2> </div>
    <div className='form'>
      
      <h3 id="saisir">Veuillez saisir vos coordonnées </h3>
     
      <input type ="text" name="nom" required ="required" value={nom}  placeholder=" Nom" onChange={(e) =>{
      setnom( e.target.value);
      }}/>
      <input type ="text" name="prenom" required ="required" value={prenom} placeholder=" Prenom"onChange={(e) =>{
      setprenom( e.target.value);}}/>
      <input type ="text" name="domaine"required ="required" placeholder=" domaine" value={domaine}  onChange={(e) =>{
        setdomaine( e.target.value);
    }}/>
    <input type ="email" name="email" required ="required" value={email} placeholder=" Email"onChange={(e) =>{
      setemail( e.target.value);}}/>
      <input type ="password" name="password" required ="required"value={password}  placeholder=" Mot de passe"onChange={(e) =>{
        setpassword(e.target.value)
      }}
      />
      <input type ="password" name="password1" value={confPassword} placeholder=" Verifier Mot de passe" onChange={(e) =>{setConfPassword(e.target.value)}}
     />
      <p>{msg?<div>{msg}< SentimentVeryDissatisfiedIcon/></div>:<div></div>}</p>
      <button >s'inscrire</button>
       
      <h3>Vous avez un compte ? <Link to='/' className='link' >se connecter</Link> 
</h3>
      

    </div>
    </form>
    </div>
    
  );
}
export default Register
