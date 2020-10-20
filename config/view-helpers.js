// module.exports.display=function(app){
//     app.locals.displayText="hello world";
// }

const environment=require('./environment');
const fs=require('fs');
const path=require('path');
module.exports.pathSetter=function(app){      //to modify app.locals , passing app as an arguement to exported fn.
    console.log(environment.name);
    try{
        
        console.log(path.join(__dirname,'../','public','abc.txt'));

        const data=fs.readFileSync('../public/abc.txt','utf8');
        console.log("Data"+ data);
    }catch(err){
        console.log(err);
    }
    
    
    app.locals.path=function(filePath){   //making path fn in app.locals
        
        if(environment.name=='development'){
            return filePath;
        }else{
            return '/';
        }
    }
}


