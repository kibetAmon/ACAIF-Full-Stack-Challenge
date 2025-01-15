// Brand module to handle logic for creating and managing brands

// src/brands/brand.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BrandService } from './brand.service';
import { BrandController } from './brand.controller';
import { Brand, BrandSchema } from './schemas/brand.schema';
import { CampaignModule } from '../campaigns/campaign.module'; // Import CampaignModule
import { InfluencerModule } from '../influencer/influencer.module'; // Ensure InfluencerModule is imported

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Brand.name, schema: BrandSchema }]),
    CampaignModule,
    InfluencerModule,  // Ensure the InfluencerModule is imported
  ],
  providers: [BrandService],
  controllers: [BrandController],
})
export class BrandModule {}

