require('dotenv').config();
const http=require('http');
import { createConnection } from 'typeorm';
import app from './src/app';
import 'reflect-metadata';
import Subject from './src/entity/subject';
import Topic from './src/entity/Topic';
import Target from './src/entity/Target';
import { Log } from './src/entity/Log';
import User from './src/entity/User';

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
            entities: [User,Subject,Topic,Target,Log],
            synchronize: true,
            logging: false,
        });
    }
)();
server.listen(5000,()=>{
    console.log('server is running at port 5000');
});