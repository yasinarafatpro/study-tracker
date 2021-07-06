
const jwt = require('jsonwebtoken');
const createError=require('http-errors')

export const jwtSignToken=(data)=>{
    return new Promise((resolve,reject)=>{
        jwt.sign(data,process.env.JWT_SECRET, function(err, token) {
            //console.log(token);
            if(err) reject(err);
            resolve(token);
          });
    });
};
export const verify=(token)=>{
    return new Promise((resolve,reject)=>{
        jwt.verify(token,process.env.JWT_SECRET, function(err,decoded){
            if(err) reject(err)
            resolve(decoded)
        });
    });
};
export const isAuthorized=async(req,res,next)=>{
    try {
        if (!req.headers.authorization) {
          return next(
              
              createError.Forbidden('authorization token is required'));
        }
        let getToken = req.headers.authorization || req.cookies.authorization;
        getToken = getToken.split(' ')[1];
        const decoded : any = await verify(getToken);
        req.requesterUserId = decoded['id'];
        return next();
      } catch (err) {
        return next(createError.Forbidden(err.message));
      }
};