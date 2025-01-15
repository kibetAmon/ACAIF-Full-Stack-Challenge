// src/posts/schemas/post.schema.ts
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Influencer } from 'src/influencer/schema/influencer.schema';
import { Campaign } from 'src/campaigns/schemas/campaign.schema';

@Schema()
export class Post extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Influencer', required: true })
  influencer: Influencer;

  @Prop({ type: Types.ObjectId, ref: 'Campaign', required: true })
  campaign: Campaign;

  @Prop({ required: true })
  content: string;  // e.g., URL to a TikTok post, text, or media link

  @Prop({ required: true })
  submissionDate: Date;

  @Prop({ default: 0 })
  likes: number;

  @Prop({ default: 0 })
  shares: number;

  @Prop({ default: 0 })
  comments: number;

  @Prop({ default: 'pending' })
  status: string;  // e.g., "pending", "approved", "rejected"
}

export const PostSchema = SchemaFactory.createForClass(Post);

