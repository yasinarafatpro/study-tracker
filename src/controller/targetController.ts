import { getCustomRepository, getRepository } from 'typeorm';
import Target from '../entity/Target'
import { TaretRepository } from '../repositorys/target-Repository';
import { TopicRepository } from '../repositorys/topic-Repository';
const createError=require('http-errors')

export const addTarget=async(req,res,next)=>{
    try{
    const {startDate,endDate,time,note,topic} =req.body; 
        await getCustomRepository(TopicRepository)
        .isUserAssociated(topic,req.requesterUserId)
    const newTarget=new Target();
    newTarget.startDate=startDate;
    newTarget.endDate=endDate;
    newTarget.time=time;
    newTarget.note=note;
    newTarget.user=req.requesterUserId;
    newTarget.topic=topic
    const targetRepository=getCustomRepository(TaretRepository);
    const created=await targetRepository.createTarget(newTarget);
    res.status(201).send({
        data:created
    });
    }catch(err){
        if(err.name=='EntityNotFound'){
            return next(new createError.BadRequest(err.message));
        }
        return next(createError.InternalServerError(err.message));
    };
};