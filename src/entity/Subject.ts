import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import BaseEntity from "./BaseEntity";
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

    @OneToMany(()=>Subject,(subject)=>subject,{onDelete:'CASCADE'})
    topics:Topic[];
    
    @OneToMany(()=>Target,(targets)=>targets,{cascade:true})
    targets:Target[];

}