const jwt = require('jsonwebtoken');

const jwtSignToken=(data)=>{
    return new Promise((resolve,reject)=>{
        jwt.sign(data.process.JWT_SECRET, function(err, token) {
            console.log(token);
            if(err) reject(err);
            resolve(token);
          });
    });
};
export default jwtSignToken;