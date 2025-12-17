/* eslint-disable prettier/prettier */
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn,  } from "typeorm";
import { Distributor } from "../../distributors/entities/distributor.entity";


@Entity()
export class AuthorizedChannel {

     @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    code: string;

     @ManyToMany(() => Distributor, distributor => distributor.authotized)
     distributors: Distributor;

}
