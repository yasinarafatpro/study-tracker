import { getRepository } from "typeorm"
import User from "../entity/User";
const bcrypt = require('bcrypt');
const createError=require('http-errprs');


const loginController=async(req,res,next)=>{
    const user=await getRepository(User).findOneOrFail({
        email:req.body.email
    });

    const match = await bcrypt.compare(req.body.password,user.password);

    if(!match) {
        return next(createError.BadRequest('Wrong Password..'));
    }else{
        const token=
    }

    //...
}