import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SongDocument = HydratedDocument<Song>;

@Schema({ timestamps: true })
export class Song {
  @Prop({ type: String, required: true, unique: true })
  title: string;
}

export const SongSchema = SchemaFactory.createForClass(Song);
