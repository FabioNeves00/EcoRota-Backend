import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class TicketDto {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsString()
  @IsNotEmpty()
  package: string

  @IsNumber()
  price: number

  @IsNumber()
  quantity: number
}