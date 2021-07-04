import React,{Component,useState} from 'react'
import GoogleLogin from 'react-google-login'

const Googleauth = () => {

    const onSuccess = (res) =>{
        var p = res.profileObj;
        console.log(p);
        console.log(p.name);
        console.log(p.email);
        console.log(p.imageUrl);
        // var input = document.getElementById ("n");
        // input.placeholder = p.name;
        var input = document.getElementById ("email");
        // input.placeholder = p.email;
        input.label = p.email;
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
        </div>
    )
}

export default Googleauth


