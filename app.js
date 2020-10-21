const express= require('express');
const env=require('./config/environment');

const morgan=require('morgan');
const logger=require('./config/winston');


const app=express();
const port=8000;

app.use(morgan("combined",{stream:logger.stream.write}));

const view_helper=require('./config/view-helpers');
// view_helper.display(app);
view_helper.pathSetter(app);

const expressLayouts=require('express-ejs-layouts');

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
            message:'Error in running the server: ${err}'
        });
    }else{
        //console.log(`server is up and running at port ${port}`);
        logger.log({
            level:'info',
            message:'server is up and running at port ${port}'
        });
    }
});


