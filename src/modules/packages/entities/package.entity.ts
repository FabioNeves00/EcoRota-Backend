import type { PackageType } from "@app/types";
import { Order } from "../../orders/entities/order.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "packages" })
export class Package implements PackageType {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('character varying')
  title: string;

  @Column('date')
  dueDate: Date;

  @OneToMany(() => Order, (_order) => _order.package)
  orders: Order[];

  @Column('float')
  price: number;

  @Column('int')
  durationInHours: number;

  @Column('character varying', { array: true })
  image: string[];

  @Column('character varying')
  description: string;

  @Column('float')
  discount: number;

  @Column({ default: false })
  hasCoticoPartnership: boolean;

  @Column({ default: false })
  hasRestaurantsIncluded: boolean;

  @Column({ default: false })
  hasTransportIncluded: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

}
