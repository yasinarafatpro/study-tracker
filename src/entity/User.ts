import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import BaseEntity from "./BaseEntity";
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
    topic:Topic[];

    @OneToMany(()=>Target,(targets)=>targets.user,{cascade:true})
    targets:Target[];
};