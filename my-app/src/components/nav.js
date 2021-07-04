const express= require("express");

const app = express();

app.post("/login_button", function(req,res){

    console.log("Posted Successfully");
    res.redirect("/signup")
    
})


app.listen(3001);