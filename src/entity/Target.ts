import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import BaseEntity from "./BaseEntity";
import { Log } from "./Log";
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
    // @ManyToOne(()=>Subject,(subject)=>subject.targets,{onDelete:'CASCADE'})
    // subject:Subject;
    @ManyToOne(()=>Topic,(topic)=>topic.targets,{onDelete:'CASCADE'})
    topic:Topic;

    @OneToMany(()=>Log,(logs)=>logs.target,{cascade:true})
    logs:Log[];
}