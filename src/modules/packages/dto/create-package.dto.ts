import { IsBoolean, IsDate, IsDecimal, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from "class-validator";

export class CreatePackageDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsDate()
  dueDate: Date;
  
  @IsDecimal()
  price: number;

  @IsNumber()
  @Min(1)
  durationInHours: number;

  @IsString()
  @IsNotEmpty()
  image: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsOptional()
  discount: number;

  @IsOptional()
  @IsBoolean()
  hasCoticoPartnership: boolean;

  @IsOptional()
  @IsBoolean()
  hasRestaurantsIncluded: boolean;

  @IsOptional()
  @IsBoolean()
  hasTransportIncluded: boolean;
}
