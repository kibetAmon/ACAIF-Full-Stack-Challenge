import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Campaign } from '../campaigns/schemas/campaign.schema';
import { Influencer } from '../influencer/schema/influencer.schema';
import { CreateBrandDto } from './dto/create-brand.dto';
import { Brand } from './schemas/brand.schema';

@Injectable()
export class BrandService {
  constructor(
    @InjectModel(Brand.name) private brandModel: Model<Brand>,
    @InjectModel(Campaign.name) private campaignModel: Model<Campaign>,  // Inject Campaign model
    @InjectModel(Influencer.name) private influencerModel: Model<Influencer>  // Inject Influencer model if needed
  ) {}

  // Method to create a new brand
  async create(createBrandDto: CreateBrandDto): Promise<Brand> {
    const brand = new this.brandModel(createBrandDto);
    return brand.save();
  }

  // Fetch list of influencers for a specific campaign
  async getInfluencersByCampaign(campaignId: string) {
    const campaign = await this.campaignModel
      .findById(campaignId)
      .populate('influencers')  // Assuming you store influencers in the campaign schema
      .exec();

    if (!campaign) {
      throw new Error('Campaign not found');
    }

    return campaign.influencers;
  }

  // Method to fetch all brands
  async findAll(): Promise<Brand[]> {
    return this.brandModel.find().exec();
  }
}
