import { OrderType, PaymentMethodsType } from "@app/types";
import { Package } from "src/modules/packages/entities/package.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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
