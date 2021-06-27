import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Subject from "./subject";

@Entity()
export default class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    password: string;

    @Column({
        unique:true
    })
    email: string;

    // @OneToMany(()=>Subject,(subject)=>subject.user)
    // subjects:Subject[];
};