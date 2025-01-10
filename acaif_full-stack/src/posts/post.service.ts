// src/posts/post.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from './schemas/post.schema';

@Injectable()
export class PostService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

  // Fetch all posts by an influencer for a specific campaign
  async getPostsByInfluencerAndCampaign(
    influencerId: string,
    campaignId: string,
  ): Promise<Post[]> {
    return this.postModel
      .find({ influencer: influencerId, campaign: campaignId })
      .exec();
  }

  // Create a new post
  async createPost(
    influencerId: string,
    campaignId: string,
    content: string,
  ): Promise<Post> {
    const post = new this.postModel({
      influencer: influencerId,
      campaign: campaignId,
      content,
      submissionDate: new Date(),
    });

    return post.save();
  }

  // Update the post's engagement metrics (likes, shares, comments)
  async updatePostEngagement(
    postId: string,
    likes: number,
    shares: number,
    comments: number,
  ): Promise<Post> {
    return this.postModel.findByIdAndUpdate(
      postId,
      { likes, shares, comments },
      { new: true },
    );
  }
}
