// influencer.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InfluencerService } from './influencer.service';
import { InfluencerController } from './influencer.controller';
import { Influencer, InfluencerSchema } from './schema/influencer.schema';
import { CampaignModule } from '../campaigns/campaign.module';  // Ensure CampaignModule is imported

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Influencer.name, schema: InfluencerSchema }]),
    CampaignModule,  // Import CampaignModule to make CampaignModel available
  ],
  providers: [InfluencerService],
  controllers: [InfluencerController],
  exports: [MongooseModule], // Export MongooseModule to make the model available in other modules
})
export class InfluencerModule {}
