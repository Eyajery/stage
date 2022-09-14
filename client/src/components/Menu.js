
import React, { useState, useEffect,useRef } from 'react'

import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-dom';

import './menu.css';
import Factures from '../sousmenu/factures/Factures';
import {CSSTransition} from 'react-transition-group';
import axios from 'axios';
import Empdossier from '../sousmenu/empdossier/Empdossier';
import Timbre from '../sousmenu/timbre/Timbre'
import Utilisateur from '../sousmenu/utilisateur/Utilisateur';
import Typedossier from '../sousmenu/typedossier/Typedossier';
import Recettefinance from '../sousmenu/recettefinance/Recettefinance';
import Photocopie from '../sousmenu/photocopie/Photocopie';
import Paramgeneral from '../sousmenu/Paramgeneral/Param';
import Greffier from '../sousmenu/Greffier/Greffier';
import { useNavigate } from 'react-router';
import Collaborateur from '../sousmenu/collaborateur/Collaborateur';
import Gestionclient from '../sousmenu/gestionclient/Gestionclient';
import Transport from '../sousmenu/transport/Transport';
import Turbadmi from '../sousmenu/turbadmi/Turbadmi';
import Primegreffier from '../sousmenu/Primegreffier/Primegreff';
import Honoexra from '../sousmenu/honoextra/Honoexra'
import Creation from '../sousmenu/creationdossier/Creation'
import Button  from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';

import EmpDoss from '../sousmenu/Dossier/Emplacement dossier/Emp_doss';
import Recherche from '../sousmenu/Dossiers/Recherche'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';




const Dashboard= () => {
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [users, setUsers] = useState([]);
    const history = useNavigate();

    useEffect(() => {
        refreshToken();
      
    }, []);
    const Logout = async () => {
        try {
            await axios.delete('http://localhost:5000/logout');
        
            history("/");
         
        } catch (error) {
          refreshToken();
        }
      
    }
    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:5000/token');
            
        } catch (error) {
            if (error.response) {
                history("/");
            }
           
        }
    }

    const axiosJWT = axios.create();

    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
            const response = await axios.get('http://localhost:5000/token');
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

   
    return (
        <Navbar>
      
        <NavItems icon='Paramétre'>
          <DropDownParam/>
        </NavItems>
        <NavItems icon='Client'>
          <Client/>
        </NavItems>
        <NavItems icon='Dossier'> 
            <Dossier/>   
        </NavItems>
     
        <NavItems icon='Règlement'> <Facture/></NavItems>
  
        <Button onClick={Logout} style={{width:"80px",marginTop:"12px",marginRight:"20px",} } ><LogoutIcon sx={{ color:"white", fontSize: 35
  }} />    </Button>
       
    
    
      </Navbar>
   
    );
  }
  
  function Navbar(props){
    return(
      <nav className='navbar'>
        <ul className='navbar-nav'>
          {props.children}
        </ul>
  
      </nav>
    );
  }
  
  function NavItems(props){
    const[open, setopen]=useState(false);
  
    return(
      <li className='nav-item'>
        <a href='#' className='icon-button' onClick={()=>setopen(!open)}>
          {props.icon}
        </a>
  
      {open && props.children}
      </li>
    );
  }

  
  function DropDownParam(){
  
    const [activeMenu, setActiveMenu]= useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);
  
    useEffect(() => {
      setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, []);
  
    function calcHeight(el) {
      const height = el.offsetHeight;
      setMenuHeight(height);
    };
  
    function DropDownItem(props){
      return(
      <a className='menu-item' onClick={()=>props.goToMenu && setActiveMenu(props.goToMenu)}>
        {props.children}
      </a>
      );
    }
  
   
    return(
      
      <div className='dropdown' style={{ height: menuHeight }} ref={dropdownRef}>
        <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={500} classNames="parametres"
        onEnter={calcHeight}>
          <div className='menu'>
            <DropDownItem>
          
              <Paramgeneral/>
            </DropDownItem>
            <DropDownItem>
         
              <Honoexra/>
            </DropDownItem>
            <div style={{marginLeft:"30px"}}    >
            <DropDownItem goToMenu="debours"   >
              Debours  <pre> <KeyboardDoubleArrowRightIcon sx={{ color:"white", fontSize: 22}}/></pre>
            </DropDownItem>
            </div>
            <DropDownItem>
          
              <Empdossier/>
            </DropDownItem>
            <DropDownItem>
           
              <Turbadmi/>
            </DropDownItem>
            <DropDownItem>
              
               <Typedossier/>
            </DropDownItem>
            <DropDownItem>
          
              <Utilisateur/>
            </DropDownItem>
           
            <DropDownItem>
             
              <Collaborateur/>
            </DropDownItem>
            <DropDownItem>
             
              <Greffier/>
            </DropDownItem>
            <DropDownItem>
              
              <Primegreffier/>
            </DropDownItem>
            
          </div>
        </CSSTransition>
  
        <CSSTransition
          in={activeMenu === 'debours'}
          timeout={500}
          classNames="parametres-secondary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropDownItem goToMenu="main">
            <pre><KeyboardDoubleArrowLeftIcon sx={{ color:"white", fontSize: 22}}/> </pre> Debours
            </DropDownItem>
            <DropDownItem>
             
              <Timbre/>
            </DropDownItem>
            <DropDownItem>
              <Photocopie/>
            </DropDownItem>
            <DropDownItem>
              <Transport/>
            </DropDownItem>
            <DropDownItem>
             
                                 <Recettefinance/>
            </DropDownItem>
          </div>
        </CSSTransition>
      </div>
    );
  }
  
  
  
  function Client(){
  
    const [activeMenu, setActiveMenu]= useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);
  
    useEffect(() => {
      setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, []);
  
    function calcHeight(el) {
      const height = el.offsetHeight;
      setMenuHeight(height);
    };
  
    function DropDownItem(props){
      return(
      <a className='menu-item' onClick={()=>props.goToMenu && setActiveMenu(props.goToMenu)}>
        {props.children}
      </a>
      );
    }
  
   
    return(
      
      <div className='dropdown' style={{ height: menuHeight }} ref={dropdownRef}>
        <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={500} classNames="parametres"
        onEnter={calcHeight}>
          <div className='menu'>
            
            
            
            <DropDownItem>
             
             <Gestionclient/> 
            </DropDownItem>
          
          </div>
        </CSSTransition>
  
       
  
          
      </div>
    );
  }
  function Dossier(){
  
    const [activeMenu, setActiveMenu]= useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);
  
    useEffect(() => {
      setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, []);
  
    function calcHeight(el) {
      const height = el.offsetHeight;
      setMenuHeight(height);
    };
  
    function DropDownItem(props){
      return(
      <a className='menu-item' onClick={()=>props.goToMenu && setActiveMenu(props.goToMenu)}>
        {props.children}
      </a>
      );
    }
  
   
    return(
      
      <div className='dropdown' style={{ height: menuHeight }} ref={dropdownRef}>
        <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={500} classNames="parametres"
        onEnter={calcHeight}>
          <div className='menu'>
            <DropDownItem>
             
             <Recherche/>
            </DropDownItem>
            <DropDownItem>
           
              <EmpDoss/>
            </DropDownItem>
            <DropDownItem>
         
            <Creation/>
            </DropDownItem>
         
          </div>
        </CSSTransition>
  
       
      </div>
    );
  }
  function Facture(){
  
    const [activeMenu, setActiveMenu]= useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);
  
    useEffect(() => {
      setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, []);
  
    function calcHeight(el) {
      const height = el.offsetHeight;
      setMenuHeight(height);
    };
  
    function DropDownItem(props){
      return(
      <a className='menu-item' onClick={()=>props.goToMenu && setActiveMenu(props.goToMenu)}>
        {props.children}
      </a>
      );
    }
  
   
    return(
      
      <div className='dropdown' style={{ height: menuHeight }} ref={dropdownRef}>
        <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={500} classNames="parametres"
        onEnter={calcHeight}>
          <div className='menu'>
            <DropDownItem>
        
             <Factures/>
            </DropDownItem>
            
          </div>
        </CSSTransition>
  
       
      </div>
    );
  }
  
  /*function DropDownMenu(){
  
    const [activeMenu, setActiveMenu]= useState('client');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);
  
    useEffect(() => {
      setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])
  
    function calcHeight(el) {
      const height = el.offsetHeight;
      setMenuHeight(height);
    }
  
    function DropDownItem(props){
      return(
      <a href='#' className='menu-item' onClick={()=>props.goToMenu && setActiveMenu(props.goToMenu)}>
        {props.children}
      </a>
      );
    }
  
    return(
      
      <div className='dropdown' style={{ height: menuHeight }} ref={dropdownRef}>
        <CSSTransition in={activeMenu === 'client'} unmountOnExit timeout={500} classNames="parametres">
          <div className='menu'>
          <DropDownItem>
              Gestion client
                                      < Gestionclient/>
          </DropDownItem>
          <DropDownItem>
            Fiche Signalitique
          </DropDownItem>
          </div>
        </CSSTransition>
      </div>
      
     
    );
  }*/
   


export default Dashboard;
