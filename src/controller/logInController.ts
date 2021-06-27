import console from "console";
import { getRepository } from "typeorm"
import User from "../entity/User";
import {jwtSignToken} from "./helper/jwt";
const bcrypt = require('bcrypt');
const createError=require('http-errors')


const login=async(req,res,next)=>{
    try{
        const user=await getRepository(User).findOneOrFail({
        email:req.body.email,
        });
        console.log(user);
        const match = await bcrypt.compare(req.body.password, user.password);
        if(!match){
            return next(createError.BadRequest('wrong password'));
        }else{
            console.log('yes!! you are login..here is your token bellow..');
            const token=await jwtSignToken({
                id:user.id
            });
            console.log(token);
            res.status(201).send({
                data:{
                    jwtToken:token,
                    user:{
                        id:user.id,
                        name:user.name,
                        email:user.email
                    }
                }
                
            });
        }

    }catch(err){
        return next(createError.InvalidServerError(err.message));
    }
};
export default login;