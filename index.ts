require('dotenv').config();
const http=require('http');
import { createConnection } from "typeorm";
import app from "./src/app";
import 'reflect-metadata';
import User from "./src/entity/User";

const server=http.createServer(app);

(
    async function(){
        await createConnection({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: '12',
            database: 'nodetsdb',
            entities: [User],
            synchronize: true,
            logging: false,
        });
    }
)();
server.listen(5000,()=>{
    console.log('server is listening at port 5000');
});