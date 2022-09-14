
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

import Tabrecherche from './Tabrecherche';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const [open, setOpen] = React.useState(false);
const defaut="5";
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handle = defaut ;

  return (
    <div>
      <Button variant="outlined"  style={{borderColor:"transparent",height:"50px",width:"150px",marginLeft:"-2px",color:"white", fontSize:"12px"}} onClick={handleClickOpen}>
      Recherche
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}  style={{background:"#1f4b77"}}>
          <Toolbar>
           
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            Liste des Dossiers
            </Typography>


            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              style={{width:"10px"}}
            >
              <CloseIcon />
            </IconButton>

          </Toolbar>
        </AppBar>
        <List>      <Tabrecherche/>   <Divider /> </List>
         
      
      </Dialog>
    </div>
  );
}