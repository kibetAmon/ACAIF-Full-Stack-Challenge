// src/influencers/influencer.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Influencer } from './schema/influencer.schema';
import { Campaign } from '../campaigns/schemas/campaign.schema';
import { CreateInfluencerDto } from './dto/create-influencer.dto';

@Injectable()
export class InfluencerService {
    constructor(
      @InjectModel(Influencer.name) private influencerModel: Model<Influencer>,
      @InjectModel(Campaign.name) private campaignModel: Model<Campaign>,  // Inject CampaignModel
    ) {}

    // Method to create an influencer
    async createInfluencer(createInfluencerDto: CreateInfluencerDto): Promise<Influencer> {
        const newInfluencer = new this.influencerModel(createInfluencerDto);
        return await newInfluencer.save();
      }

  // Fetch the influencer's information by their ID
  async getInfluencerById(influencerId: string): Promise<Influencer> {
    return this.influencerModel.findById(influencerId).exec();
  }


  // Fetch all campaigns the influencer has joined
  async getInfluencerCampaigns(influencerId: string): Promise<Campaign[]> {
    const influencer = await this.influencerModel
      .findById(influencerId)
      .populate<{ campaigns: Campaign[] }>('campaigns') 
      .exec();
      
    return influencer?.campaigns || [];
  }

  // Add a campaign to the influencer's list of campaigns
  async addCampaignToInfluencer(influencerId: string, campaignId: string): Promise<Influencer> {
    return this.influencerModel.findByIdAndUpdate(
      influencerId,
      { $push: { campaigns: campaignId } },
      { new: true },
    );
  }

  // Fetch performance metrics for the influencer
  async getPerformanceMetrics(influencerId: string): Promise<any> {
    // Logic to calculate performance metrics, such as total posts, engagement, etc.
    const influencer = await this.influencerModel.findById(influencerId).exec();


  }
}
