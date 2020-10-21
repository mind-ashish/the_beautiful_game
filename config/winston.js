const { level } = require('winston');
const winston=require('winston');
// const DailyRotateFile=require('winston-daily-rotate-file');
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
        new winston.transports.File({filename:'./logs/info.log',level:'info'}),
        
    ],
    exceptionHandlers:[
        new winston.transports.File({filename:'./logs/exceptions.log'})
    ],
    exitOnError:false
});
logger.stream={
    write:function(message,encoding){
        logger.info(message); //for printing morgan logs in file instead of console.
    }
};
module.exports=logger;
