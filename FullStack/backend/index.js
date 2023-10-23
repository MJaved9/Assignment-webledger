const express = require("express");
const bodyParser = require("body-parser");
const PORT=process.env.PORT || 8080

require("dotenv").config();


const {UserController}=require("./Routes/user.routes");
const connection = require("./Config/db");


const cors = require("cors");
const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(express.json());
app.use("/user",UserController)

app.listen(PORT,async()=>{
    try{
        await connection
        console.log("Connected To Database.")
    }
    catch(er){
        console.log("Error in Database")
        console.log(er)
    }
    console.log(`Listning on ${PORT}`)
})