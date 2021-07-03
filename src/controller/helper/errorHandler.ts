export default function(err,req,res,next){
    console.log(err);
    res.status(err.status).send({
        error:{
            name:err.name,
            message:err.message,
            statusCode:err.statusCode,
        },
    });
    res.end();
};