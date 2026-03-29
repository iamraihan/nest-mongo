import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum PostType {
  POST = 'post',
  PAGE = 'page',
  STORY = 'story',
}

export enum PostStatus {
  DRAFT = 'draft',
  PUBLISHED = 'published',
  ARCHIVED = 'archived',
}

@Schema({ timestamps: true })
export class Post extends Document {
  @Prop({
    type: String,
    required: true,
  })
  title!: string;

  @Prop({
    type: String,
    required: true,
    enum: PostType,
    default: PostType.POST,
  })
  postType!: PostType;

  @Prop({
    type: String,
    required: true,
  })
  slug!: string;

  @Prop({
    type: String,
    required: true,
    enum: PostStatus,
    default: PostStatus.DRAFT,
  })
  status!: PostStatus;

  @Prop({
    type: String,
    required: false,
  })
  content?: string;

  @Prop({
    type: String,
    required: false,
  })
  featureImageUrl?: string;

  @Prop({
    type: Date,
    required: false,
  })
  publishedAt?: Date;
}

export const PostSchema = SchemaFactory.createForClass(Post);
