import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsBoolean, IsDecimal, IsEmail, IsIn, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, Min } from "class-validator";
import { Package } from "../../packages/entities/package.entity";
import { Order } from "../entities/order.entity";

export class CreateOrderDto {
  @IsUUID()
  @ApiProperty({ type: "UUID" })
  package: Package;
  
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;
  
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsDecimal()
  @ApiProperty()
  price: number;

  @IsNumber()
  @Min(1)
  @ApiProperty()
  quantity: number;

  @IsIn(["Credit card", "Debit card", "Pix", "Bank Payment Slip"])
  @ApiProperty({ enum: ["Credit card", "Debit card", "Pix", "Bank Payment Slip"] })
  paymentMethod: Order["paymentMethod"];

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional({ default: false })
  hasDiscount?: boolean;
}
