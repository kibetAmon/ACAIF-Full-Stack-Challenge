// src/campaigns/campaign.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Campaign } from './schemas/campaign.schema';
import { Influencer } from '../influencer/schema/influencer.schema';
import { CreateCampaignDto } from './dto/create-campaign.dto';


@Injectable()
export class CampaignService {
    constructor(
      @InjectModel(Campaign.name) private campaignModel: Model<Campaign>,
    ) {}
  
    // Method to create a campaign
    async createCampaign(createCampaignDto: CreateCampaignDto): Promise<Campaign> {
      const newCampaign = new this.campaignModel(createCampaignDto);
      return await newCampaign.save();
    }

  // Fetch campaigns the influencer has joined
  async getCampaignsByInfluencer(influencerId: string): Promise<Campaign[]> {
    return this.campaignModel.find({ influencers: influencerId }).exec();
  }

  // Fetch performance metrics (total posts, dates, engagement)
  async getPerformanceMetrics(influencerId: string): Promise<any> {
    // Implement logic to calculate metrics
    return {
      totalPosts: 10, // Sample value
      postingDates: ['2024-01-01', '2024-01-02'],
      engagement: {
        likes: 100,
        shares: 50,
      },
    };
  }
}
