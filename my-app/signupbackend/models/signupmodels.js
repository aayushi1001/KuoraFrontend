const mongoose = require('mongoose')
//const  SignUp  = require('../../src/components/signup')

const signUpTemplate = {
    firstName :{
        type:String,
        required:true
    },
    lastName :{
        type:String,
        required:true
    },
    email :{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    staff:{
        type:String,
        required:true
    },
    bio:{
        type:String,
        required:true
    }
}

const Signup = mongoose.model("Signup", signUpTemplate)


module.exports=Signup;