// module.exports.display=function(app){
//     app.locals.displayText="hello world";
// }

const environment=require('./environment');
module.exports.pathSetter=function(app){      //to modify app.locals , passing app as an arguement to exported fn.
    console.log(environment.name);
    app.locals.path=function(filePath){   //making path fn in app.locals
        
        if(environment.name=='development'){
            return filePath;
        }else{
            return '/';
        }
    }
}


