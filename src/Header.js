 import React, {useContext }from 'react';
  import { makeStyles } from '@material-ui/core/styles';
  import AppBar from '@material-ui/core/AppBar';
  import Toolbar from '@material-ui/core/Toolbar';
  import Typography from '@material-ui/core/Typography';
  import WylandLogo from './images/footer-logo.png';
import {StateContext} from './context/context.state';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AddForm from './AddForm';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';


  
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
    const {toggleAddForm, addFormOn, adminOn, toggleAdmin} = useContext(StateContext);
  
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
            <FormGroup>
  <FormControlLabel
    control={<Switch checked={adminOn} onChange={toggleAdmin} />}
    label="Admin"
  />
</FormGroup>
           {adminOn && <Button onClick={toggleAddForm}>Add Painting</Button>}
            <Dialog open={addFormOn} onClose={toggleAddForm} aria-labelledby="form-dialog-title">
            <AddForm/>
            </Dialog>
          </Toolbar>
        </AppBar>
      </div>
    );
  }