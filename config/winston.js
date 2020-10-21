const winston=require('winston');

const logger=new winston.createLogger({
    level:'info',
    format:winston.format.combine(
        winston.format.timestamp(),
        winston.format.prettyPrint()
    ),
    transports:[
        new winston.transports.File({filename:'./logs/error.log',level:'error'}),
        new winston.transports.File({filename:'./logs/info.log',level:'info'}),
    ],
    exceptionHandlers:[
        new winston.transports.File({filename:'./logs/exceptions.log'})
    ],
    exitOnError:false
});
module.exports=logger;
