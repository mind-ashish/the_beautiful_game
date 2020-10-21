const winston=require('winston');

const logger=new winston.createLogger({
    level:'info',
    transports:[
        new winston.transports.File({filename:'error.log',level:'error'}),
        new winston.transports.File({filename:'info.log',level:'info'}),
        new winston.transports.File({filename:'combined.log'})
    ],
    exitOnError:false
});
module.exports=logger;
