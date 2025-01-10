import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';  // Make sure to import Document here

@Schema()
export class Performance extends Document {
  @Prop()
  influencer: string;

  @Prop()
  campaign: string;

  @Prop()
  totalPosts: number;

  @Prop()
  estimatedEngagement: number;

  @Prop()
  postedAt: Date;
}

export const PerformanceSchema = SchemaFactory.createForClass(Performance);
