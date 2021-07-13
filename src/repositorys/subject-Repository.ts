import { EntityRepository, Repository } from 'typeorm';
import Subject from '../entity/subject';

@EntityRepository(Subject)
export class SubjectRepository extends Repository<Subject>{
    createSubject(subject){
        return this.save(subject);
    };
};