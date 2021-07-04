import React,{ Component , useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import "./signup_login.style.css"
//import jwt_decode from 'jwt-decode';
//import Googleauth from "./google-auth";
//import Route from "react-router-dom/Route";
//import { BrowserRouter as Router } from "react-router-dom";
//import Main from "./main";
//import React,{Component,useState} from 'react'
import GoogleLogin from 'react-google-login'
function Copyright() {
    
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


// *******
const onFailure = (res) =>{
  console.log(res);
}

const onSuccess = (res) =>{
  var p = res.profileObj;
  // var input = document.getElementById ("n");
  // input.placeholder = p.name;
  const newGoogle ={      
    email : p.email,
    
    
  }
  axios.post('http://localhost:3001/login_google_api',newGoogle)
  .then(response => {
      var Google= response.data;
      var token=response.data.token;
      if(Google.code===200){
              var decoded=JSON.parse(atob(token.split('.')[1]));
              console.log(decoded);
              localStorage.setItem('Name',decoded.name);
              localStorage.setItem('email',decoded.email);
              localStorage.setItem('password',decoded.password);
              localStorage.setItem('bio',decoded.bio);
              localStorage.setItem('signupas',decoded.signupas);
              localStorage.setItem('mobno',decoded.mobno);
          window.location.href="main";
      }
      else{
         // alert(x.message);
          document.getElementById("password").setAttribute("error","1");
          //window.location.href="Error";
      }
      //console.log(Google);
  })
}

function SignIn() {
  const classes = useStyles();
  //console.log(p);
  const [input,setInput]= useState({ 
    email :"",
    password : "",
  })
    function handleInput(event){
      const {name, value} = event.target;

      setInput(prevInput => {
        return {
          ...prevInput,
          [name]:value
        }
      })
     
    }
    
  

    function handleSubmit(event){
        event.preventDefault();
        console.log(input);
        const newRecord ={
          
          email : input.email,
          password : input.password
          
        }
        axios.post('http://localhost:3001/login',newRecord)
        .then(response => {
            var x= response.data;
            var token=response.data.token;
            console.log(x);
             
            if(x.code===200){
              var decoded=JSON.parse(atob(token.split('.')[1]));
              console.log(decoded);
              localStorage.setItem('Name',decoded.name);
              localStorage.setItem('email',decoded.email);
              localStorage.setItem('password',decoded.password);
              localStorage.setItem('bio',decoded.bio);
              localStorage.setItem('signupas',decoded.signupas);
              localStorage.setItem('mobno',decoded.mobno);
              localStorage.setItem('pic',"http://localhost:3001/"+decoded.pic);
              localStorage.setItem('postcount',decoded.postcount);
              
              window.location.href="Dashboard";
            }
            else{
               // alert(x.message);
                document.getElementById("check").innerHTML=x.message;

                //window.location.href="Error";
            }
            //console.log(x,y);
        })
    }
    return (
    <Container component="main" maxWidth="xs" id="signin">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <TextField
            value={input.email}
            onChange={handleInput}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            placeholder="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
          error={0}
            value={input.password}
            onChange={handleInput}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            placeholder="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <div id="check" style={{color:"red"}}></div>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>

          {/* *********************************************** */}

            {/* <div> 
            <center><GoogleLogin
            clientId = "879230929023-drituuib54lmr2svuie0vb9alc7nur9r.apps.googleusercontent.com"
            buttonText = "Signin with Google"
            onSuccess = {onSuccess}
            onFailure = {onFailure}
            //cookiePolicy = {'single_host_origin'}
            isSignedIn = {true}
         /></center><br/></div>*/}

        <p id="in"></p>

          {/* ****************************************************** */}


          {/* <Googleauth /> */}
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={4}>
        
      </Box>
    </Container>
  );
}
export default SignIn;
