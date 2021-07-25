import { EntityRepository, Repository } from 'typeorm';
import User from '../entity/User';

@EntityRepository(User)
export class signRepository extends Repository<User> {
        createSignUser(user){
            return this.save(user);
        };
    };