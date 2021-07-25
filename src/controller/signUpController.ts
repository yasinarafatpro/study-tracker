const bcrypt=require('bcrypt');
import { getCustomRepository, getRepository } from 'typeorm';
import User from '../entity/User';
import { signRepository } from '../repositorys/sign-Repository';
const saltRounds=10;
const createError=require('http-errors')

const signUp=async(req,res,next)=>{
    try{
    const newUser=new User();
    newUser.name=req.body.name;
    newUser.email=req.body.email;
    newUser.password=await bcrypt.hash(req.body.password,saltRounds);
    const signUser=getCustomRepository(signRepository);
    const created= await signUser.createSignUser(newUser);
    res.status(201).send({
        data:{
            name:created.name,
            email:created.email,
            id:created.id,
        },
    });
    }catch(err){
        return next(new createError.BadRequest(err.message));
    }
};
export default signUp;