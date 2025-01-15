// src/brands/dto/create-brand.dto.ts
import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateBrandDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  contactNumber: string;

  @IsString()
  @IsNotEmpty()
  brandType: string;  // E.g., SME, Large Corporation, etc.

  @IsString({ each: true })
  campaigns: string[];  // List of campaign IDs that the brand is associated with
}
