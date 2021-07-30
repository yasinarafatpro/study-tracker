import { EntityRepository, Repository } from 'typeorm';
import { Log } from '../entity/Log';

@EntityRepository(Log)
export class logRepository extends Repository<Log>{
    createLog(log){
        return this.save(log);
    }
    
}