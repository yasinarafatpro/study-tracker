import { EntityRepository, Repository } from 'typeorm';
import Subject from '../entity/subject';

@EntityRepository(Subject)
export class SubjectRepository extends Repository<Subject>{
    [x: string]: any;
    createSubject(subject){
        return this.save(subject);
    };
    
    /**
   *
   * @param {subjectId} Subject Id
   * @param {userId} User Id
   * @returns {Promise} Typeorm
   */
  isUserAssociated(subjectId, userId) {
    return this.findOneOrFail({
      where: {
        id: subjectId,
        user: userId,
      },
    });
  }
};