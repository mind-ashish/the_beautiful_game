// module.exports.display=function(app){
//     app.locals.displayText="hello world";
// }

const environment=require('./environment');
const fs=require('fs');
const path=require('path');
module.exports.pathSetter=function(app){      //to modify app.locals , passing app as an arguement to exported fn.
    app.locals.path=function(filePath){   //making path fn in app.locals
        
        if(environment.name=='development'){
            return filePath; //assetpath is given in app.js , so filepath is wrt to it
        }else{
            const data=fs.readFileSync(path.join(__dirname,'../','public','rev-manifest.json'),'utf8');
            //reading rev-manifest.json file from public folder and giving path from json key-value
            var obj=JSON.parse(data);
            // console.log(filePath);
            if(filePath.indexOf('./')>-1){
                filePath=filePath.substring(2);
            }
            return './'+obj[filePath];
        }
    }
}


