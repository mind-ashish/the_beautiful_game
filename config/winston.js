const winston=require('winston');
// const DailyRotateFile=require('winston-daily-rotate-file');
var d=new Date();
var shortDate=d.toLocaleDateString(); //to convert to short format
const logPath="./logs";
const logger=new winston.createLogger({
    level:'info',
    format:winston.format.combine(
        winston.format.timestamp(),  //giving format to logs
        winston.format.prettyPrint(),
       winston.format.colorize()
    ),
    transports:[
        new winston.transports.Console(),  //printing logs on console
        //new winston.transports.File({filename:'./logs/error.log',level:'error'}),
        //new winston.transports.File({filename:'./logs/info.log',level:'info'}),
        new winston.transports.File({filename:logPath+'/'+shortDate+'/combined.log'}), //printing on file
        
    ],
    exceptionHandlers:[
        new winston.transports.File({filename:logPath+'/'+shortDate+'/exceptions.log'})  //this if for writing logs of unhandles exception which r not cptured in logger.error / logger.log(level:error)
    ],
    exitOnError:false  //true means exit the process in case of error, so keeping it false.
});
logger.stream={
    write:function(message,encoding){
        logger.info(message); //for printing morgan logs in file instead of console. so passing messages of morgan in logger.info. And this stream is passed to morgan in app.js
    }
};
module.exports=logger;

//transports .file self handles the existing file folder condition and also write in end of existing. if folder/file doesn't exist
//it makes by own 