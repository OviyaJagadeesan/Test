const mysql = require('mysql');
const express=require('express');

const app=express();

const DB=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Password@1",
    database:"sparrowdemo",
})

DB.connect(function(err){
    if(err){
        return console.log(err+"Error");
    }
    return console.log("Server connected");
});

app.listen(3005,()=>{
    console.log("Server Run");
})