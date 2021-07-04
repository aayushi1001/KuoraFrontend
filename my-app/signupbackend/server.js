const express= require("express")
const app = express()
const mongoose = require('mongoose')
//const routesURL = require('./Routes/routes');
const cors = require('cors')

app.use(cors());
app.use(express.json());

//connect to mongoose
mongoose.connect("mongodb+srv://root:root@cluster0.hun21.mongodb.net/Users?retryWrites=true&w=majority", ()=>console.log("DB connected"))


//req route
app.use("/", require('./Routes/routes'));

app.listen(4000, function(){
    console.log("Server is running");
})