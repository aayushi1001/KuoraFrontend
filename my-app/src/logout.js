import React from 'react'
import {GoogleLogin, GoogleLogout} from 'react-google-login';

function Logout(){
    const onSuccess = ()=>{
        alert('Logout made Successfully');
    };
    return (
        <div>
            <GoogleLogout
                clientId = "879230929023-drituuib54lmr2svuie0vb9alc7nur9r.apps.googleusercontent.com"
                buttonText = "Logout"
                onLogoutSuccess = {onSuccess}
            />
        </div>
    )
}

export default Logout;