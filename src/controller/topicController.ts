import { getCustomRepository, getRepository } from 'typeorm';
import Topic from '../entity/Topic';
import { SubjectRepository } from '../repositorys/subject-Repository';
import { TopicRepository } from '../repositorys/topic-Repository';
const createError=require('http-errors');

export const addTopic=async(req,res,next)=>{
    try{
        const {name,discription,subject}=req.body;
        //check association of user and subject
        if(subject){
            await getCustomRepository(SubjectRepository)
              .isUserAssociated(subject,req.requesterUserId);
        }
        const newTopic=new Topic();
        newTopic.name=name;
        newTopic.discription=discription;
        newTopic.user=req.requesterUserId;
        newTopic.subject=subject ? subject:null;
        const topicRepository=getCustomRepository(TopicRepository);
        const createUserTopic=await topicRepository.createTopic(newTopic);
        return res.status(201).send({
            data:createUserTopic
        })
    }catch(err){
        if(err.name='EntityNotFound'){
            return next(new createError.BadRequest(err.message));
        }
        console.log(err.name);
        return next(new createError.InternalServerError(err.message));
    }
}