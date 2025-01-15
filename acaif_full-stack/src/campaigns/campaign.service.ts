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
    @InjectModel(Campaign.name) private readonly campaignModel: Model<Campaign>,
  ) {}

  // Method to create a campaign
  async createCampaign(createCampaignDto: CreateCampaignDto): Promise<Campaign> {
    const newCampaign = new this.campaignModel(createCampaignDto);
    return await newCampaign.save();
  }

  // Method to fetch all campaigns
  async getAllCampaigns(): Promise<Campaign[]> {
    return this.campaignModel
      .find()
      .populate('influencers', 'name email') // Populate influencers with specific fields
      .exec();
  }

  // Fetch campaigns the influencer has joined
  async getCampaignsByInfluencer(influencerId: string): Promise<Campaign[]> {
    return this.campaignModel
      .find({ influencers: influencerId })
      .populate('influencers', 'name email') // Populate influencers
      .exec();
  }

  // Fetch performance metrics for an influencer
  async getPerformanceMetrics(influencerId: string): Promise<any> {
    // Step 1: Find all campaigns the influencer is part of
    const campaigns = await this.campaignModel
      .find({ influencers: influencerId })
      .exec();

    // Step 2: Aggregate performance metrics for the influencer
    const totalPosts = campaigns.length;
    const postingDates = campaigns.map((campaign) =>
      new Date(campaign.createdAt).toISOString(),
    );

    // Example engagement logic (static/dummy values for now)
    const engagement = {
      likes: campaigns.length * 100, // Assume 100 likes per campaign
      shares: campaigns.length * 50, // Assume 50 shares per campaign
    };

    return {
      totalPosts,
      postingDates,
      engagement,
    };
  }
}
