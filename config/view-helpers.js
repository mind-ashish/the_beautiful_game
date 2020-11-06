// module.exports.display=function(app){
//     app.locals.displayText="hello world";
// }

const environment=require('./environment');
const fs=require('fs');
const path=require('path');
const logger = require('./winston');
module.exports.pathSetter=function(app){      //to modify app.locals , passing app as an arguement to exported fn.
    app.locals.path=function(filePath){   //making path fn in app.locals
        
        if(environment.name=='development'){
            return filePath; //asset path is given in app.js , so filepath is wrt to it
        }else{
            try{
                logger.log({
                    level:'info',
                    message:`Input file path is : ${filePath}`
                });
                if(filePath.indexOf('./')>-1){
                    filePath=filePath.substring(2);
                }
                var base=filePath.substring(0,filePath.indexOf('/'));
                var data=fs.readFileSync(path.join(__dirname,'../public/assets/',base,'/rev-manifest.json'),'utf8');
                 //reading rev-manifest.json file from public folder and giving path from json key-value
                var obj=JSON.parse(data);
                // console.log(filePath);
                
                logger.log({
                    level:'info',
                    message:`returned file path is : ${obj[filePath]}`
                });
                return './'+obj[filePath];
            }catch(err){
                logger.log({
                    level:'error',
                    message:'manifest file not found exception, build again...'
                });
            }
            
        
        }
    }
}


