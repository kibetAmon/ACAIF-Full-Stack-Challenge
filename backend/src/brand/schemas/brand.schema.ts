import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Brand extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  contactNumber: string;

  @Prop({ required: true })
  brandType: string; // E.g., SME, Large Corporation, etc.

  @Prop({ required: true, type: Types.ObjectId, ref: 'Campaign' })
  campaigns: string[]; // List of campaign IDs that the brand is associated with
}

export const BrandSchema = SchemaFactory.createForClass(Brand);
