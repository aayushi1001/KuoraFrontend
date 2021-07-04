import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import "./register_button.styles.css";
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const myStyle_log = {
    
}

function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Button 
      variant="contained" 
      color="primary" 
      className="login"
      onClick={event =>  window.location.href='login'}
      >
        Login
      </Button>
    </div>
  );
}

export default ContainedButtons;