/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn    } from 'typeorm';
import { Product } from '../../products/entities/product.entity';
import { ProcessSchedule } from '../../process_schedule/entities/process_schedule.entity';
import { AuthorizedChannel } from '../../authorized_channels/entities/authorized_channel.entity';
import { User } from '../../users/entities/user.entity';


@Entity()
export class Distributor {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    code: string;
    @Column()
    email_notifications: string;    
    @Column()
    email_alert: string;


     @OneToOne(() => User, user => user.distributor, { eager: true })
    @JoinColumn({ name: 'user_id' })
    user: User;


      @OneToMany(() => Product, product => product.distributor, { cascade: true })
      products: Product[];

      @OneToMany(() => ProcessSchedule, schedule => schedule.distributor, { cascade: true })
        processSchedules: ProcessSchedule[];

     @ManyToMany
     (() => AuthorizedChannel, authotized => authotized.distributors, { cascade: true })
       @JoinTable({
        name: 'distributor_channels'
       })
        authotized: AuthorizedChannel[];
}
