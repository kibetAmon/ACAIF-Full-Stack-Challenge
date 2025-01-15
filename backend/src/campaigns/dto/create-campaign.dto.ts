// src/campaigns/dto/create-campaign.dto.ts
import { IsEnum, IsNotEmpty, IsString, IsMongoId, IsDate } from 'class-validator';
import { Types } from 'mongoose';

export class CreateCampaignDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsEnum(['ongoing', 'completed', 'draft'])
  readonly status: string;

  @IsDate()
  readonly deadline: Date;

  @IsString()
  @IsNotEmpty()
  readonly instructions: string;

  @IsMongoId()
  readonly brandId: Types.ObjectId; // Reference to the brand that owns this campaign
}
