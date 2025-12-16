/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn,   ForeignKey, ManyToOne, JoinColumn  } from 'typeorm';
import { Distributor } from '../../distributors/entities/distributor.entity';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    code: string;
    @Column()
    description: string;
    
    @Column('decimal')
    price: number;

    @JoinColumn({ name: 'distributor_id' })
    @ManyToOne(() => Distributor, distributor => distributor.products, {
    eager: true,
  })
  distributor: Distributor;
}