const express= require('express');
const env=require('./config/environment');

const app=express();
const port=8000;

const view_helper=require('./config/view-helpers');
view_helper.display(app);

const expressLayouts=require('express-ejs-layouts');

app.use(express.static(env.asset_path));
app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.set('view engine','ejs');
app.set('views', './views');

app.use('/',require('./routes')); //this load router instance exported elsewhere, from this path. 

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }else{
        console.log(`server is up and running at port ${port}`);
    }
});


