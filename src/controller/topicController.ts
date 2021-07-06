import { getRepository } from "typeorm";
import Topic from "../entity/Topic";
const createError=require('http-errors');

export const addTopic=async(req,res,next)=>{
    try{
        const newTopic=new Topic();
        newTopic.name=req.body.name;
        newTopic.discription=req.body.discription;
        newTopic.subject=req.body.subject;
        newTopic.user=req.requesterUserId;
        newTopic.subject=req.body.subject ? req.body.subject:null;
        const createTopic=await getRepository(Topic).save(newTopic);
        return res.status(201).send({
            data:createTopic
        })
    }catch(err){
        return next(new createError.InternalServerError(err.message));
    }
}