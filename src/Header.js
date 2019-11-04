 import React from 'react';
  import { makeStyles } from '@material-ui/core/styles';
  import AppBar from '@material-ui/core/AppBar';
  import Toolbar from '@material-ui/core/Toolbar';
  import Typography from '@material-ui/core/Typography';
  import WylandLogo from './images/footer-logo.png';



  
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      textAlign: 'center'
    
    },
    logo: {
      width: '60%'
    }
  }));
  
  export default function Header() {
    const classes = useStyles();
   
  
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
           <div  >
             <img src={WylandLogo} alt='wyland logo' className={classes.logo}/>
           </div>
            <Typography variant="h6" className={classes.title}>
              Wyland Gallery Kauai
            </Typography>
           
          
          </Toolbar>
        </AppBar>
      </div>
    );
  }