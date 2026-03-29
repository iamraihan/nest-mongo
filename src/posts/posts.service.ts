import {
  Injectable,
  ConflictException,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { Model } from 'mongoose';
import { Post } from './schemas/post.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post.name)
    private readonly postModel: Model<Post>,
  ) {}

  public async create(createPostDto: CreatePostDto) {
    try {
      const newPost = new this.postModel(createPostDto);
      return await newPost.save();
    } catch (_error) {
      const error = _error as { code?: number; name?: string };
      if (error.code === 11000) {
        throw new ConflictException('Post with this slug already exists');
      }
      if (error.name === 'ValidationError') {
        throw new BadRequestException('Invalid post data');
      }
      throw new InternalServerErrorException('Failed to create post');
    }
  }

  findAll() {
    return `This action returns all posts`;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} post`;
  // }

  // update(id: number, updatePostDto: UpdatePostDto) {
  //   return `This action updates a #${id} post`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} post`;
  // }
}
