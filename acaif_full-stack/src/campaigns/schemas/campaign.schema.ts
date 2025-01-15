import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Influencer } from '../../influencer/schema/influencer.schema'; // Assuming path to influencer schema

@Schema({ timestamps: true })
export class Campaign extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true, enum: ['ongoing', 'completed', 'draft'] })
  status: string;

  @Prop({ required: true })
  deadline: Date;

  @Prop({ required: true })
  instructions: string;

  @Prop({ required: true })
  createdAt: Date;

  @Prop({ required: true, type: Types.ObjectId, ref: 'Brand' })
  brandId: Types.ObjectId; // Reference to the brand that owns this campaign

  @Prop({ type: [Types.ObjectId], ref: 'Influencer' })
  influencers: Types.Array<Types.ObjectId>; // List of influencers who joined the campaign
}

export const CampaignSchema = SchemaFactory.createForClass(Campaign);
