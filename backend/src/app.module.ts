import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// local modules
import { InfluencerModule } from './influencer/influencer.module';
import { CampaignModule } from './campaigns/campaign.module';
import { PostModule } from './posts/post.module';
import { BrandModule } from './brand/brand.module';

@Module({
  imports: [
    // Database Connection
    MongooseModule.forRoot(
      process.env.MONGODB_URI || 'mongosh "mongodb+srv://amonclusters.am8ze.mongodb.net/campaign_submission" --apiVersion 1 --username amonkibetsigei --password DlOXucFUw2bk1Lha',
    ),
    // Register other modules
    InfluencerModule, // Register Influencer Module
    CampaignModule,   // Register Campaign Module
    PostModule,       // Register Post Module
    BrandModule,      // Register Brand Module
  ],
})
export class AppModule {}
