const http=require('http');
import app from "./src/app";
const server=http.createServer(app);

server.listen(5000,()=>{
    console.log('server is listening at port 5000');
});