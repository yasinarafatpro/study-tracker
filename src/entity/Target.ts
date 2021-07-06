import { Column, Entity, ManyToOne } from "typeorm";
import BaseEntity from "./BaseEntity";
import Subject from "./subject";
import Topic from "./Topic";
import User from "./User";

@Entity()
export default class Target extends BaseEntity{
    @Column()
    startDate:Date;
    @Column()
    endDate:Date;
    @Column()
    time:number;
    @Column()
    note:string;

    @ManyToOne(()=>User,(user)=>user.targets,{onDelete:'CASCADE'})
    user:User;
    @ManyToOne(()=>Subject,(subject)=>subject.targets,{onDelete:'CASCADE'})
    subject:Subject;
    @ManyToOne(()=>Topic,(topic)=>topic.targets)
    topic:Topic;
}