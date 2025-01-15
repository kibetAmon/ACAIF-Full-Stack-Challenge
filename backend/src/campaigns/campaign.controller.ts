// src/campaigns/campaign.controller.ts
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CampaignService } from './campaign.service';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { Campaign } from './schemas/campaign.schema';

@Controller('campaigns')
export class CampaignController {
  constructor(private readonly campaignService: CampaignService) {}

  // Endpoint to create a campaign
  @Post()
  async createCampaign(@Body() createCampaignDto: CreateCampaignDto): Promise<Campaign> {
    return this.campaignService.createCampaign(createCampaignDto);
  }

  // Endpoint to fetch all campaigns
  @Get()
  async getAllCampaigns(): Promise<Campaign[]> {
    return this.campaignService.getAllCampaigns();
  }

  // Endpoint to fetch campaigns the influencer has joined
  @Get('influencer/:influencerId')
  async getCampaignsByInfluencer(@Param('influencerId') influencerId: string): Promise<Campaign[]> {
    return this.campaignService.getCampaignsByInfluencer(influencerId);
  }

  // Endpoint to fetch performance metrics for an influencer
  @Get('influencer/:influencerId/performance')
  async getPerformanceMetrics(@Param('influencerId') influencerId: string): Promise<any> {
    return this.campaignService.getPerformanceMetrics(influencerId);
  }
}
