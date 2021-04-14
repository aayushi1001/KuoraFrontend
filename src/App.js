import React, { Component,useState} from 'react'
import GoogleLogin from 'react-google-login'
import './App.css';

function Login(){

  responseGoogle=(response) =>{
    console.log(response);
    console.log(response.profileObj);
    console.log(response.profileObj.name);
  }
    return (
      <div>
        <GoogleLogin
        clientId = "879230929023-drituuib54lmr2svuie0vb9alc7nur9r.apps.googleusercontent.com"
        buttonText = "Login"
        onSuccess = {this.responseGoogle}
        onFailure = {this.responseGoogle}
        cookiePolicy = {'single_host_origin'}
        isSignedIn = {true}
        />
        <div>
          <form>
            <input type="text" disabled placeholder="Your Name" value = {this.state.user}></input> 
            <input type="email" disabled placeholder = "Your college Email" value = {this.state.email}></input>
          </form>
        </div>
      </div>
    );
}

export default Login;

