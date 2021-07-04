import React , { useState }from 'react';
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
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import axios from 'axios';
import "./signup_login.style.css"
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


function SignUp() {
  const classes = useStyles();
  const [input,setInput]= useState({ 
    email :"",
    password : "",
    name :"",
    bio : "",
    year:"2021",
    signupas:"",
    gender:"non",
    mobno:"",
    tag:"non",
    postcount:0,
    check : ""
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
        if(input.password != input.confirmpassword){
          //alert("Not same");
          document.getElementById("passcheck").innerHTML="Password and Confirm Password does not match";
          document.getElementById("mobcheck").innerHTML="";
        }
        else if((input.mobno).length<10 || (input.mobno).length>10){
          //alert("Invalid mobile no")
          document.getElementById("mobcheck").innerHTML="Mobile no. should be of 10 digits";
          document.getElementById("passcheck").innerHTML="";
        }
        else if(input.password.length <8 ||input. password.length>18){
          document.getElementById("passcheck").innerHTML="Allowed length for password : 8 - 18 chars";
          document.getElementById("mobcheck").innerHTML="";
        }
        else if(input.email.split('@').length<2 || input.email.split('@')[1]!="kiit.ac.in"){
         
          document.getElementById("emailcheck").innerHTML="Email not allowed outside kiit";
        }
        else{
          document.getElementById("mobcheck").innerHTML="";
          document.getElementById("passcheck").innerHTML="";
          document.getElementById("emailcheck").innerHTML="";
        const newRecord ={
          name: input.name,
          email : input.email,
          password : input.password,
          gender : input.lastName,
          bio : input.bio,
          signupas : input.signupas,
          year:input.year,
          mobno:input.mobno,
          //pic:input.pic,
          postcount:input.postcount,
          tag:input.tag
          //check : ""
        }
      
        axios.post('http://localhost:3001/register',newRecord)
        .then(response => {
          var x= response.data;
          var y= response.data.user;
          if(x.code===200){
            localStorage.setItem("Name",y.name);
            localStorage.setItem("email",y.email);
            localStorage.setItem("password",y.password);
            localStorage.setItem("bio",y.bio);
            localStorage.setItem("mobno",y.mobno);
            localStorage.setItem("signupas",y.signupas);
            localStorage.setItem("pic","http://localhost:3001/"+y.pic);
            window.location.href="Dashboard";
          }
          else if(x.code===409){
            document.getElementById("mobcheck").innerHTML="User Already exist!";
           // window.location.href="login";
          }
          else{
            document.getElementById("mobcheck").innerHTML="Data missing !";
          }
          //var y=response.data;
          /*if(x===200){
              window.location.href="main";
          }
          else{
              window.location.href="Error";
          }*/
          console.log(x,y);
      }).catch(()=>{
        document.getElementById("finalcheck").innerHTML="Data missing !";
      })
    }
  }
     return (
       
    <Container component="main" maxWidth="xs" id="signup">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                value={input.name}
                onChange={handleInput}
                autoComplete="fname"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                placeholder="Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={input.email}
                onChange={handleInput}
                variant="outlined"
                required
                fullWidth
                id="email"
                placeholder="Email Address"
                name="email"
                autoComplete="email"
              />
              <div id="emailcheck" style={{color:"red"}}></div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                
                error={0}
                value={input.password}
                onChange={handleInput}
                variant="outlined"
                required
                fullWidth
                name="password"
                placeholder="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                value={input.confirmpassword}
                onChange={handleInput}
                variant="outlined"
                required
                fullWidth
                name="confirmpassword"
                placeholder="Confirm Password"
                type="password"
                id="confirmpassword"
                autoComplete="current-password"
              />
              
            </Grid>
            <Grid item xs={12}>
            <div id="passcheck" style={{color:"red"}}></div>
            </Grid>
            <div id="passcheck" style={{color:"red"}}></div>
            <Grid item xs={12}>
              <TextField
                value={input.mobno}
                onChange={handleInput}
                variant="outlined"
                required
                fullWidth
                id="mobno"
                placeholder="Mobile No"
                name="mobno"
                autoComplete="mobno"
              />
              <div id="mobcheck" style={{color:"red"}}></div>
            </Grid>
            <Grid item xs ={12}>
            
            <FormLabel component="legend"  style={{marginBottom : "15px"}}>Register as -</FormLabel>
                <RadioGroup row aria-placeholder="position"  name="signupas" value = {input.signupas} onChange={handleInput}  defaultValue="top"  style={{marginBottom : "-15px"}}>
                    <FormControlLabel
                    value= "teaching"
                    control={<Radio color="primary" />}
                    label="Teacher"
                    labelPlacement="start"
                    required
                    />
                    <FormControlLabel
                    value="non-teaching"
                    control={<Radio color="primary" />}
                    label="Non-Teaching Staff"
                    labelPlacement="start"
                    required
                    />
                    <FormControlLabel
                    value="student"
                    control={<Radio color="primary" />}
                    label="Student"
                    labelPlacement="start"
                    required
                    />
                </RadioGroup>
    
            </Grid>
            <Grid item xs ={12}>
                <TextField
                value={input.bio}
                onChange={handleInput}
                name="bio"
                id="standard-multiline-static"
                placeholder="Write something about yourself !"
                multiline
                rows={2}
                fullWidth
                autoComplete="Bio"
            />
            </Grid>

            
          </Grid>
          <Button
            onClick={handleSubmit}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <div id="finalcheck" style={{color:"red"}}></div>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={2}>
        
      </Box>
    </Container>
  );
}

export default SignUp; 