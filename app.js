// import express from 'express';
import db from './db/db';

// var db = require('./db/db');
var express=require('express');
const app= express();



app.get('/api/v1/dbase/:id',(req,res)=>{
    const id = parseInt(req.params.id,10);
    db.map((dbase)=>{
        if(dbase.id==id){
            return res.status(200).send({
                success:"true",
                message:'Todo retrieved successfully',
                // dbase:db.get("default"),
                dbase:db[id-1],
                
            });
        }
    });
    return res.status(404).send({
        success:'false',
        message:'Not Found',
        
    });
});


app.get('/api/v1/dbase',(req,res)=>{
    res.status(200).send({
        success:'true',
        message : 'dbase retreived successfully',
        db
         
        
    })
});

app.post('/api/v1/dbase',(req,res)=>{
    res.status(400).send({
        success:'true',
        message : 'dbase retreived not success',
        db
         
        
    })
});
app.put('/api/v1/dbase',(req,res)=>{
    res.status(400).send({
        success:'true',
        message : 'dbase retreived not success',
        db
         
        
    })
});
app.delete('/api/v1/dbase',(req,res)=>{
    res.status(400).send({
        success:'true',
        message : 'dbase retreived not success',
        db
         
        
    })
});
const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`sever running on port ${PORT}`);
});