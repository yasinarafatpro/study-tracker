import { CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export default class{
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createdDate:Date;

    @UpdateDateColumn()
    updatedDate:Date;
    
    @DeleteDateColumn()
    deletedDate:Date;
}