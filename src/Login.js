import React, { Component,useState} from 'react'
import GoogleLogin from 'react-google-login'
//import {refreshTokenSetup} from '../utils/refreshToken';
import './log.css'
function Login(){

  const onSuccess = (res) =>{
    var p = res.profileObj;
    console.log(p);
    console.log(p.name);
    console.log(p.email);
    console.log(p.imageUrl);
    //refreshTokenSetup(res);

    var input = document.getElementById ("n");
    input.placeholder = p.name;
    var input = document.getElementById ("e");
    input.placeholder = p.email;
    var n = p.email;
    if(!n.includes("kiit.ac.in")){
      document.getElementById("in").innerHTML = "Invalid email";
    }
    else{
      document.getElementById("in").innerHTML = "";
    }
  }

  const onFailure = (res) =>{
    console.log(res);
  }

  // const refreshTokenSetup = (res) =>{
  //   let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60)*1000;
  //   const refreshToken = async () => {
  //     const newAuthRes = await res.reloadAuthResponse();
  //     refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60)*1000;
  //     console.log('newAuthRes : ',newAuthRes);
  //     console.log('new auth Token',newAuthRes.id_token);
  //     setTimeout( refreshToken, refreshTiming);
  //   };
  //   setTimeout(refreshToken , refreshTiming);
  // };

    return (
      <div>
        <GoogleLogin
        clientId = "879230929023-drituuib54lmr2svuie0vb9alc7nur9r.apps.googleusercontent.com"
        buttonText = "Login"
        onSuccess = {onSuccess}
        onFailure = {onFailure}
        cookiePolicy = {'single_host_origin'}
        isSignedIn = {true}
        />
        <div>
          <form>
            <input type="text" disabled placeholder="Your Name" id="n" name="n"></input> 
            <input type="email" disabled placeholder = "Your college Email" id="e" name = "e"></input>
            <p id="in"></p>
          </form>
        </div>
      </div>
    );
}

export default Login;

