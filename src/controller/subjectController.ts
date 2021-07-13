import { getCustomRepository, getRepository } from 'typeorm';
import Subject from '../entity/subject';
import { SubjectRepository } from '../repositorys/subject-Repository';
const createError =require('http-errors')

const addSubject=async(req,res,next)=>{
    try{
        const newsubject=new Subject();
    newsubject.name=req.body.name;
    newsubject.discription=req.body.discription;
    newsubject.user=req.requesterUserId;
    const sunbjectRepository=getCustomRepository(SubjectRepository);
    const created= await sunbjectRepository.createSubject(newsubject);
    res.status(201).send({
        data:created,
    });
    }catch(err){
        return next(createError.InternalServerError(err.message));
    }
};
export default addSubject;