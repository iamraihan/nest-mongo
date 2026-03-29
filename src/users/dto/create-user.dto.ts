import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString({
    message: 'First name must be a string',
  })
  @IsNotEmpty({
    message: 'First name is required',
  })
  firstName!: string;

  @IsString({
    message: 'Last name must be a string',
  })
  lastName?: string;

  @IsString({
    message: 'Email must be a string',
  })
  @IsNotEmpty({
    message: 'Email is required',
  })
  email!: string;

  @IsString({
    message: 'Password must be a string',
  })
  @IsNotEmpty({
    message: 'Password is required',
  })
  password!: string;
}
