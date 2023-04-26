import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Chat {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    sender: string;

    @Column()
    recipient: string;

    @Column()
    content: string;

    @Column()
    createdAt: String;
}