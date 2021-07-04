const express= require("express");
const router = express.Router()
const Signup = require ('../models/signupmodels');


router.route("/app").post((req, res)=>{
    const firstName=req.body.firstName;
    const lastName=req.body.lastName;
    const email=req.body.email;
    const password=req.body.password;
    const staff=req.body.staff;
    const bio=req.body.bio;

    const newRecord = new Signup({
        firstName,
        lastName,
        email,
        password,
        staff,
        bio
    });

    newRecord.save();
})

module.exports=router;