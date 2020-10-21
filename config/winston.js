const { level } = require('winston');
const winston=require('winston');
// const DailyRotateFile=require('winston-daily-rotate-file');
var d=new Date();
var shortDate=d.toLocaleDateString();
const logPath="./logs";
const logger=new winston.createLogger({
    level:'info',
    format:winston.format.combine(
        winston.format.timestamp(),
        winston.format.prettyPrint(),
       winston.format.colorize()
    ),
    transports:[
        new winston.transports.Console(),
        //new winston.transports.File({filename:'./logs/error.log',level:'error'}),
        //new winston.transports.File({filename:'./logs/info.log',level:'info'}),
        new winston.transports.File({filename:logPath+'/'+shortDate+'/combined.log'}),
        
    ],
    exceptionHandlers:[
        new winston.transports.File({filename:logPath+'/'+shortDate+'/exceptions.log'})
    ],
    exitOnError:false
});
logger.stream={
    write:function(message,encoding){
        logger.info(message); //for printing morgan logs in file instead of console.
    }
};
module.exports=logger;

//transports .file self handles the existing file folder condition