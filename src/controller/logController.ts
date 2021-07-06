import { getRepository } from 'typeorm';
import { Log } from "../entity/Log"
const createError=require('http-errors');

export const logController=async(req,res,next)=>{
    try{
        const newLog=new Log();
        newLog.studyTime=req.body.studyTime;
        newLog.time=req.body.time;
        newLog.note=req.body.note;
        newLog.subject=req.body.subject;
        newLog.topic=req.body.topic;
        newLog.target=req.body.target;

       const created= await getRepository(Log).save(newLog);
       res.status(201).send({
           data:created,
       });

    }catch(err){
        return next(new createError.InternalServerError(err.message));
    };
};