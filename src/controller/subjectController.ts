import { getRepository } from "typeorm";
import Subject from "../entity/subject"
const createError =require('http-errors')

const addSubject=async(req,res,next)=>{
    try{
        const newsubject=new Subject();
    newsubject.name=req.body.name;
    newsubject.discription=req.body.discription;
    newsubject.user=req.requesterUserId;

    await getRepository(Subject).save(newsubject);
    res.status(201).send();
    }catch(err){
        return next(createError.InternalServerError(err.message));
    }
};
export default addSubject;