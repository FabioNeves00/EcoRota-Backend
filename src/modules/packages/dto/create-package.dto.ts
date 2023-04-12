import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsArray, IsBoolean, IsDate, IsDecimal, IsNotEmpty, IsNumber, IsOptional, IsString, IsUrl, Min } from "class-validator";

export class CreatePackageDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  title: string;

  @IsDate()
  @ApiProperty()
  dueDate: Date;
  
  @IsDecimal()
  @ApiProperty()
  price: number;

  @IsNumber()
  @Min(1)
  @ApiProperty()
  durationInHours: number;

  @IsArray()
  @IsUrl({}, { each: true })
  @ApiProperty()
  image: string[];

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  description: string;

  @IsOptional()
  @ApiPropertyOptional()
  discount: number;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional({ default: false })
  hasCoticoPartnership: boolean;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional({ default: false })
  hasRestaurantsIncluded: boolean;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional({ default: false })
  hasTransportIncluded: boolean;
}
