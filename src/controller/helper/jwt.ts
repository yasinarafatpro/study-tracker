const jwt = require('jsonwebtoken');

export const jwtSignToken=(data)=>{
    return new Promise((resolve,reject)=>{
        jwt.sign(data,process.env.JWT_SECRET, function(err, token) {
            console.log(token);
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
export const isAuthorized=(req,res,next)=>{
    console.log(req.headers);
    res.end();
};