/* eslint-disable prettier/prettier */
import { Column, Entity,  JoinColumn,  ManyToOne,  PrimaryGeneratedColumn } from "typeorm";
import { Distributor } from "../../distributors/entities/distributor.entity";
@Entity()
export class ProcessSchedule {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startDate: string;

  @Column()
  endDate: string;

  @ManyToOne(() => Distributor, distributor => distributor.processSchedules)
  @JoinColumn({ name: 'distributorId' })
  distributor: Distributor;
}
