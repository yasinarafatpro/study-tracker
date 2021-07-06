import { Column, Entity, ManyToOne } from "typeorm";
import BaseEntity from "./BaseEntity";
import { StudyTime } from "./enam/StudyTime";
import Subject from "./subject";
import Target from "./Target";
import Topic from "./Topic";
import User from "./User";

@Entity()
export class Log extends BaseEntity{
    @Column({
        type:'enum',
        enum:StudyTime,
        default:StudyTime.MORNING
    })
    studyTime:StudyTime;
    @Column()
    time:number;
    @Column()
    note:string;

    @ManyToOne(()=>User,(user)=>user.logs,{onDelete:'CASCADE'})
    user:User;

    @ManyToOne(()=>Subject,(subject)=>subject.logs,{onDelete:'CASCADE'})
    subject:Subject;

    @ManyToOne(()=>Target,(target)=>target.logs,{onDelete:'CASCADE'})
    target:Target;

    @ManyToOne(()=>Topic,(topic)=>topic.logs,{onDelete:'CASCADE'})
    topic:Topic;
}