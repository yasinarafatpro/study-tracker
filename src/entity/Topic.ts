import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import BaseEntity from './BaseEntity';
import { Log } from './Log';
import Subject from './subject';
import Target from './Target';
import User from './User';

@Entity()
export default class Topic extends BaseEntity{
    
    @Column()
    name: string;

    @Column()
    discription: string;

    @ManyToOne(() => User, (user) => user.topic,{onDelete:'CASCADE'})
    user: User;

    @ManyToOne(()=>Subject,(subject)=>subject.topics,{onDelete:'CASCADE'})
     subject:Subject;

    @OneToMany(()=>Target,(targets)=>targets.topic,{cascade:true})
     targets:Target[];

    //  @OneToMany(()=>Log,(logs)=>logs.topic,{cascade:true})
    //  logs:Log[];
}