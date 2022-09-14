import React from "react";
import Axios from 'axios';
import {useState , useEffect} from "react";
import{BrowserRouter as Routes,Switch, Route,Link} from "react-router-dom";
import Register from "./Register";
import{useNavigate} from 'react-router-dom';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import BalanceIcon from '@mui/icons-material/Balance';


const Login = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [msg, setMsg] = useState('');
    const history = useNavigate();

    const inscrire = async (e) => {
        e.preventDefault();
        try {
            await Axios.post('http://localhost:5000/login', {
                email: email,
                password: password
            });
            history("/menu");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    return (
        <div className="App">
           <div className="avocat">  <h2> <pre> Avocat <BalanceIcon style={{fontSize:"50px"}}/> </pre></h2> </div>
         <form onSubmit={inscrire}>
        <div className='form'>
      
          <h1>Bienvenue </h1> 
        
        <input type ="email" name="login" required ="required" value={email}   placeholder=" Email" onChange={(e) =>{
          setemail( e.target.value);}}/>
          <input type ="password" name="password" required="required"value={password}  placeholder=" Mot de passe"onChange={(e) =>{
            setpassword(e.target.value)
          }}
          /> 
          <p>{msg?<div>{msg}< SentimentVeryDissatisfiedIcon/></div>:<div></div>}</p>
          <div id ="connecter">
          <button  > se connecter
          </button>
          </div>
          <h3>Vous n'avez pas un compte ? <Link to='/register' className="link" >s'inscrire</Link> 
 </h3>
      
          </div>
          </form>
          </div>
    )
}

export default Login
