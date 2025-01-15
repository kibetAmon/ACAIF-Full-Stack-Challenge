import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Submission extends Document {
  @Prop()
  influencer: string;

  @Prop()
  campaign: string;

  @Prop()
  contentUrl: string;

  // Explicitly define the type for engagementMetrics
  @Prop({ type: Object })
  engagementMetrics: {
    likes: number;
    shares: number;
  };

  @Prop()
  postedAt: Date;
}

export const SubmissionSchema = SchemaFactory.createForClass(Submission);
