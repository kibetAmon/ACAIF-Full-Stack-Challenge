// src/posts/post.controller.ts
import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { PostService } from './post.service';
import { Post as PostModel } from './schemas/post.schema';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  // Fetch posts for a specific influencer and campaign
  @Get(':influencerId/campaign/:campaignId')
  async getPostsByInfluencerAndCampaign(
    @Param('influencerId') influencerId: string,
    @Param('campaignId') campaignId: string,
  ): Promise<PostModel[]> {
    return this.postService.getPostsByInfluencerAndCampaign(influencerId, campaignId);
  }

  // Create a new post
  @Post('create')
  async createPost(
    @Body('influencerId') influencerId: string,
    @Body('campaignId') campaignId: string,
    @Body('content') content: string,
  ): Promise<PostModel> {
    return this.postService.createPost(influencerId, campaignId, content);
  }

  // Update post engagement metrics (likes, shares, comments)
  @Put('update/:postId')
  async updatePostEngagement(
    @Param('postId') postId: string,
    @Body('likes') likes: number,
    @Body('shares') shares: number,
    @Body('comments') comments: number,
  ): Promise<PostModel> {
    return this.postService.updatePostEngagement(postId, likes, shares, comments);
  }
}
