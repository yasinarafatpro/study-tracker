import { EntityRepository, Repository } from 'typeorm';
import Topic from '../entity/Topic';

@EntityRepository(Topic)
export class TopicRepository extends Repository<Topic>{
    createTopic(topic){
        return this.save(topic);
    }
 /**
   *
   * @param {topicId} Subject Id
   * @param {userId} User Id
   * @returns {Promise} Typeorm
   */
  isUserAssociated(topicId, userId) {
    return this.findOneOrFail({
      where: {
        id: topicId,
        user: userId,
      },
    });
  }
    
}