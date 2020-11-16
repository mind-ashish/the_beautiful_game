const development={
    name:'development',
    asset_path:'./assets',   //in ref with app.js,
    db_name:process.env.PROJECT_DB_NAME,
    db_host:process.env.PROJECT_DB_HOST,
    db_user:process.env.PROJECT_DB_USER,
    db_password:process.env.PROJECT_DB_PASSWORD
}

const production={
    name:process.env.PROJECT_ENVIRONMENT,
    asset_path:process.env.PROJECT_ASSET_PATH,
    db_name:process.env.PROJECT_DB_NAME,
    db_host:process.env.PROJECT_DB_HOST,
    db_user:process.env.PROJECT_DB_USER,
    db_password:process.env.PROJECT_DB_PASSWORD
}

var environment=eval(process.env.PROJECT_ENVIRONMENT);
if(environment==undefined){
    module.exports=development;
}else{
    module.exports=production;
}
