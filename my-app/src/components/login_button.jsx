import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
//import Radium, { StyleRoot } from 'radium';
import "./login_button.styles.css";
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const myStyle_reg = {
    marginTop : "30px",
    borderRadius : "20px",
    letterSpacing : "2px",
    marginLeft : "70px",
    color : "green",
    border :"1px solid green",

    '@media (max-width: 767px)': {
        marginLeft : "30px",

      },
}


function OutlinedButtons(props) {
  const classes = useStyles();

  return (
    
    <div className= {classes.root} >
      
      <Button variant="outlined" 
      color="primary"
      className="register"
      onClick={event =>  window.location.href='/signup'}
    >
        Register
      </Button>
      
    </div>
    
  );
}
export default OutlinedButtons;