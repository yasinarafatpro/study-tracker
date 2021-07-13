import { EntityRepository, Repository } from "typeorm";
import Target from "../entity/Target";

@EntityRepository(Target)
export class TaretRepository extends Repository<Target>{
    createTarget(target){
        return this.save(target);
    }
}