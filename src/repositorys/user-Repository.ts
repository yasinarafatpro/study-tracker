import { EntityRepository, Repository } from "typeorm";
import User from "../entity/User";

@EntityRepository(User)
export class userRepository extends Repository<User>{
    createLoginUser(user){
        return this.save(user);
    }
}