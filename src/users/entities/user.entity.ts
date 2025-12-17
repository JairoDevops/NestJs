/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Distributor } from '../../distributors/entities/distributor.entity';
@Entity()

export class User {
    @PrimaryGeneratedColumn()    
    id: number;
    @Column()
    name: string;
    @Column()    
    code: string;
    @Column()    
    email: string;
    @Column({ nullable: true })
    phone: string
    @Column()    
    password: string;

      @OneToOne(() => Distributor, distributor => distributor.user, {
    cascade: true,
    })
    distributor: Distributor;


}
