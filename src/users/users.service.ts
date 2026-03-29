import {
  Injectable,
  InternalServerErrorException,
  ConflictException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {}
  public async create(createUserDto: CreateUserDto) {
    try {
      const newUser = new this.userModel(createUserDto);
      return await newUser.save();
    } catch (_error) {
      if ((_error as { code?: number }).code === 11000) {
        throw new ConflictException('User already exists');
      }
      throw new InternalServerErrorException('Failed to create user');
    }
  }

  async findAll() {
    try {
      return await this.userModel.find().exec();
    } catch {
      throw new InternalServerErrorException('Failed to fetch users');
    }
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
