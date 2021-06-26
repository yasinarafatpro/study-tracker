const bcrypt=require('bcrypt');
import { userInfo } from "os";
import { getRepository } from "typeorm";
import User from "../entity/User";
const saltRounds=10;

const signUp=async(req,res,next)=>{
    const newUser=new User();
    newUser.name=req.body.name;
    newUser.email=req.body.email;
    newUser.password=await bcrypt.hash(req.body.password,saltRounds);
    await getRepository(User).save(newUser);
    res.status(201).send();
};
export default signUp;