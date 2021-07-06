import { getRepository } from "typeorm";
import Target from "../entity/Target"
const createError=require('http-errors')

export const addTarget=async(req,res,next)=>{
    try{
        const newTarget=new Target();
    newTarget.startDate=req.body.startDate;
    newTarget.endDate=req.body.endDate;
    newTarget.time=req.body.time;
    newTarget.note=req.body.note;

    const created=await getRepository(Target).save(newTarget);
    res.status(201).send({
        data:created
    });
    }catch(err){
        return next(createError.InternalServerError(err.message));
    };
};