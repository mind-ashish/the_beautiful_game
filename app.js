/*
Folder structure---:
-it is sufficient to keeps logs folder empty, winston will make sub folders
-it is sufficient to keep public folders empty, gulp will create sub folder for assets.

Logging---
-using morgan to create winston based logs in file.

-1. not writing morgan http logs in file. They r printed on console only. 
-2. info and error logs gets printed in combined.log
-3. uncaughted exceptions gets printed in exceptions.log
-4. internal server errors(eg for resource not found) are printed on console unless they r identified and put in try catch nd then printed in as error in combined log.log


*/

const express= require('express');
const env=require('./config/environment');

const morgan=require('morgan');
const logger=require('./config/winston');


const app=express();
const port=8000;

app.use(morgan("combined",{stream:logger.stream.write}));
//making morgan and winston logger. basically passing winston logger stream to morgan to write logs. see logger in winston.js 

const view_helper=require('./config/view-helpers');
// view_helper.display(app);
view_helper.pathSetter(app);

const expressLayouts=require('express-ejs-layouts');

const con=require('./config/sql_connection');
//just by requiring the file , makes sure it is compiled by node. even if con variable is never used. So sql connection file runs and makes connection.

const sassMiddleware=require('node-sass-middleware');
const path=require('path');
if(env.name=='development'){ //for scss to css in dev environment using sass middleware instead of gulp 
    app.use(sassMiddleware({
        src: path.join(__dirname,env.asset_path,'scss'),
        dest: path.join(__dirname,env.asset_path,'css') ,
        debug: true,
        outputStyle: 'extended',
        prefix: '/css'
    }));
}
//using sass middleware: conversion takes place at each req, unlike production which is cached
app.use(express.static(env.asset_path));

//possible fix 1: route all req coming to /user/css back to /css
// console.log(express.static(path.join(__dirname,env.asset_path,'/css')));
// app.use('/user/css',express.static(path.join(__dirname,env.asset_path,'/css')));
// app.use('/user/js',express.static(path.join(__dirname,env.asset_path,'/js')));
// app.use('/user/images',express.static(path.join(__dirname,env.asset_path,'/images')));

app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.set('view engine','ejs');
app.set('views', './views');

app.use('/',require('./routes')); //this load router instance exported elsewhere, from this path. 

app.listen(port, function(err){
    if(err){
        //console.log(`Error in running the server: ${err}`);
        logger.log({
            level:'error',
            message:`Error in running the server: ${err}`
        });
    }else{
        //console.log(`server is up and running at port ${port}`);
        logger.log({
            level:'info',
            message:`server is up and running at port ${port}`
        });
    }
});




