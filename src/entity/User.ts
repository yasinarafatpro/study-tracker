import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import BaseEntity from "./BaseEntity";
import { Log } from "./Log";
import Subject from "./subject";
import Target from "./Target";
import Topic from "./Topic";

@Entity()
export default class User extends BaseEntity{

    @Column()
    name: string;

    @Column()
    password: string;

    @Column({
        unique:true
    })
    email: string;

    @OneToMany(() => Subject, (subject) => subject.user,{cascade:true})
    subjects: Subject[];

    @OneToMany(()=>Topic,(topic)=>topic.user,{cascade:true})
    topics:Topic[];

    @OneToMany(()=>Target,(target)=>target.user,{cascade:true})
    targets:Target[];

    @OneToMany(()=>Log,(log)=>log.user,{cascade:true})
    logs:Log[];
};