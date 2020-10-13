const development={
    name:'development',
    asset_path:'./assets'   //in ref with app.js
}

const production={
    name:process.env.PROJECT_ENVIRONMENT,
    asset_path:process.env.PROJECT_ASSET_PATH
}

var environment=eval(process.env.PROJECT_ENVIRONMENT);
if(environment==undefined){
    module.exports=development;
}else{
    module.exports=production;
}
