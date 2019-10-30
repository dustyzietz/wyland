import React,{useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {StateContext} from './context/context.state';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    top: 'auto',
    bottom: 0,
    position: 'fixed',
    width: '100%'
  },
});

export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const {changeTab, currentTab} = useContext(StateContext)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root} >
      <Tabs
        value={currentTab}
        onChange={changeTab}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Gallery" />
        <Tab label="Artists" />
        <Tab label="Originals" />
      </Tabs>
    </Paper>
  );
}