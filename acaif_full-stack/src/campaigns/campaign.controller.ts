// src/campaigns/campaign.controller.ts
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CampaignService } from './campaign.service';
import { CreateCampaignDto } from './dto/create-campaign.dto';

@Controller('campaigns')
export class CampaignController {
  constructor(private readonly campaignService: CampaignService) {}

    // Endpoint to create a campaign
    @Post()
    async createCampaign(@Body() createCampaignDto: CreateCampaignDto) {
      return this.campaignService.createCampaign(createCampaignDto);
    }

  // Endpoint to fetch campaigns the influencer has joined
  @Get('influencer/:influencerId')
  async getCampaignsByInfluencer(@Param('influencerId') influencerId: string) {
    return this.campaignService.getCampaignsByInfluencer(influencerId);
  }

  // Endpoint to fetch performance metrics
  @Get('performance/:influencerId')
  async getPerformanceMetrics(@Param('influencerId') influencerId: string) {
    return this.campaignService.getPerformanceMetrics(influencerId);
  }
}
