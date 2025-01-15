// metrics interface
import { Types } from 'mongoose';

export interface Metric {
  influencerId: Types.ObjectId;
  campaignId: Types.ObjectId;
  totalPostsSubmitted: number;
  postingDates: Date[];
  estimatedEngagement: {
    likes: number;
    shares: number;
    comments: number;
  };
}
