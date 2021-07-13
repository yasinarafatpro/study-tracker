import { EntityRepository, Repository } from 'typeorm';
import Topic from '../entity/Topic';

@EntityRepository(Topic)
export class TopicRepository extends Repository<Topic>{
    createTopic(topic){
        return this.save(topic);
    }
}