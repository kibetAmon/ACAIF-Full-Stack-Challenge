// src/app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// local modules
import { InfluencerModule } from './influencer/influencer.module';
import { CampaignModule } from './campaigns/campaign.module';
import { PostModule } from './posts/post.module';
import { BrandModule } from './brand/brand.module';

@Module({
  imports: [
    //Database
    MongooseModule.forRoot('mongodb://localhost:27017/campaign_submission'),
// Database connection
    InfluencerModule, // Register Influencer Module
    CampaignModule,   // Register Campaign Module
    PostModule,       // Register Post Module
    BrandModule,  // Register Brand Module
  ],
})
export class AppModule {}