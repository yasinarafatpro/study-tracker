import { getCustomRepository, } from 'typeorm';
import { Log } from '../entity/Log';
import { logRepository } from '../repositorys/log-repository';
import { TaretRepository } from '../repositorys/target-Repository';
const createError=require('http-errors');

export const logController=async(req,res,next)=>{
    try{
        const{studyTime,time,note,target}=req.body;

        await getCustomRepository(TaretRepository)
        .isUserAssociated(target,req.requesterUserId);
        //create new log
        const newLog=new Log();
        newLog.studyTime=studyTime;
        newLog.time=time;
        newLog.note=note;
        newLog.target=target;
        const created= await getCustomRepository(logRepository).createLog(newLog);
        return res.status(201).send({
           data:created,
       });

    }catch(err){
        console.log(err.name);
        if(err.name=='EntityNotFound'){
            return next(new createError.BadRequest('Entity not currect '+err.message));
        }
        return next(new createError.InternalServerError(err.message));
    };
};