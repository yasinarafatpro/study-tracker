import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import BaseEntity from "./BaseEntity";
import { Log } from "./Log";
import Target from "./Target";
import Topic from "./Topic";
import User from "./User";

@Entity()
export default class Subject extends BaseEntity {
    
    @Column()
    name: string;

    @Column()
    discription: string;

    @ManyToOne(() => User, (user) => user.subjects,{onDelete:'CASCADE'})
    user: User;

    @OneToMany(()=>Topic,(topics)=>topics.subject,{onDelete:'CASCADE'})
    topics:Topic[];
    
    // @OneToMany(()=>Target,(targets)=>targets.subject,{cascade:true})
    // targets:Target[];

    // @OneToMany(()=>Log,(logs)=>logs.subject,{cascade:true})
    // logs:Log[];

}