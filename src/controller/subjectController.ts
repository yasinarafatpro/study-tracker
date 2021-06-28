import { getRepository } from "typeorm";
import Subject from "../entity/subject"

const addSubject=async(req,res,next)=>{
    const newsubject=new Subject();
    newsubject.subjectName=req.body.subjectName;
    newsubject.discription=req.body.discription;
    newsubject.user=req.requesterUserId;

    await getRepository(Subject).save(newsubject);
    res.status(201).send();
};
export default addSubject;