// src/influencers/influencer.controller.ts
import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { InfluencerService } from './influencer.service';
import { Influencer } from './schema/influencer.schema';
import { CreateInfluencerDto } from './dto/create-influencer.dto';

@Controller('influencers')
export class InfluencerController {
  constructor(private readonly influencerService: InfluencerService) {}

  // Endpoint to create an influencer
  @Post()
  async createInfluencer(@Body() createInfluencerDto: CreateInfluencerDto) {
    return this.influencerService.createInfluencer(createInfluencerDto);
  }

  // Endpoint to get an influencer's details by their ID
  @Get(':influencerId')
  async getInfluencerById(@Param('influencerId') influencerId: string): Promise<Influencer> {
    return this.influencerService.getInfluencerById(influencerId);
  }

  // Endpoint to get all campaigns the influencer has joined
  @Get(':influencerId/campaigns')
  async getInfluencerCampaigns(@Param('influencerId') influencerId: string) {
    return this.influencerService.getInfluencerCampaigns(influencerId);
  }

  // Endpoint to fetch performance metrics for the influencer
  @Get(':influencerId/performance')
  async getPerformanceMetrics(@Param('influencerId') influencerId: string) {
    return this.influencerService.getPerformanceMetrics(influencerId);
  }

  // Endpoint to add a campaign to an influencer's campaigns list
  @Post(':influencerId/campaigns')
  async addCampaignToInfluencer(
    @Param('influencerId') influencerId: string,
    @Body('campaignId') campaignId: string,
  ) {
    return this.influencerService.addCampaignToInfluencer(influencerId, campaignId);
  }
}
