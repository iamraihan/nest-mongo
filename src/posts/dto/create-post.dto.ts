import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty({
    message: 'Title is required',
  })
  @IsString({
    message: 'Title must be a string',
  })
  title!: string;

  @IsNotEmpty({
    message: 'Post type is required',
  })
  @IsString({
    message: 'Post type must be a string',
  })
  postType!: string;

  @IsNotEmpty({
    message: 'Slug is required',
  })
  @IsString({
    message: 'Slug must be a string',
  })
  slug!: string;

  @IsNotEmpty({
    message: 'Status is required',
  })
  @IsString({
    message: 'Status must be a string',
  })
  status!: string;

  @IsString({
    message: 'Content must be a string',
  })
  content?: string;

  @IsString({
    message: 'Feature image URL must be a string',
  })
  featureImageUrl?: string;

  @IsString({
    message: 'Author ID must be a string',
  })
  @IsNotEmpty({
    message: 'Author ID is required',
  })
  authorId!: string;

  @IsNotEmpty({
    message: 'Published date is required',
  })
  @IsString({
    message: 'Published date must be a string',
  })
  publishedAt?: Date;
}
