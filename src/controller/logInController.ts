import { getRepository } from "typeorm"
import User from "../entity/User";
import jwtSignToken from "./helper/jwt";
const bcrypt = require('bcrypt');
const createError=require('http-errors')


const login=async(req,res,next)=>{
    try{
        const user=await getRepository(User).findOneOrFail({
        email:req.body.email,
        });
        console.log(user);

    }catch(err){
        return next(createError.InvalidServerError(err.message));
    }
};
export default login;