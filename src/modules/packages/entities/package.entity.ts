import { Order } from "src/modules/orders/entities/order.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "packages" })
export class Package {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('character varying')
  title: string;

  @Column('datetime')
  dueDate: Date;

  @OneToMany(() => Order, (_order) => _order.package)
  orders: Order[];

  @Column('float')
  price: number;

  @Column('int')
  durationInHours: number;

  @Column('character varying')
  image: string;

  @Column('character varying')
  description: string;

  @Column('float')
  discount: number;

  @Column()
  hasCoticoPartnership: boolean;

  @Column()
  hasRestaurantsIncluded: boolean;

  @Column()
  hasTransportIncluded: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

}
