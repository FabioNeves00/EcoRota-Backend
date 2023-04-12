import { PaymentMethodsType } from './../../../@types/index.d';
import { Package } from "src/modules/packages/entities/package.entity";
import { Order } from "../entities/order.entity";
import { IsBoolean, IsDecimal, IsEmail, IsIn, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, Min } from "class-validator";

export class CreateOrderDto {
  @IsUUID()
  package: Package["id"];
  
  @IsString()
  @IsNotEmpty()
  name: string;
  
  @IsEmail()
  email: string;

  @IsDecimal()
  price: number;

  @IsNumber()
  @Min(1)
  quantity: number;

  @IsIn(["Credit card", "Debit card", "Pix", "Bank Payment Slip"])
  paymentMethod: Order["paymentMethod"];

  @IsOptional()
  @IsBoolean()
  hasDiscount: boolean;
}
