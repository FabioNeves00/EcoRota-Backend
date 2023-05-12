import type { OrderType, PaymentMethodsType } from "@app/types";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Package } from "../../packages/entities/package.entity";

@Entity({ name: "orders" })
export class Order implements OrderType {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Package, (_package) => _package.orders)
  package: Package

  @Column('character varying')
  name: string

  @Column('character varying')
  email: string;

  @Column('int')
  price: number;

  @Column('int', { default: 1 })
  quantity: number

  @Column({ enum: ["Credit card", "Debit card", "Pix", "Bank Payment Slip"] })
  paymentMethod: PaymentMethodsType; // Credito, debito, pix e boleto

  @Column('boolean', { default: false })
  hasDiscount: boolean;

  @CreateDateColumn()
  createdAt: Date;
}
