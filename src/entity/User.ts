import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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
};