// src/influencers/schemas/influencer.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Campaign } from '../../campaigns/schemas/campaign.schema';

@Schema()
export class Influencer extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ type: [Types.ObjectId], ref: 'Campaign' })
  campaigns: Campaign[];
}

export const InfluencerSchema = SchemaFactory.createForClass(Influencer);
