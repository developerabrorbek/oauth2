import { IsEmail, IsString } from 'class-validator';
import { SignUpRequest } from '../interfaces';
import { ApiProperty } from '@nestjs/swagger';

export class SignUpDto implements SignUpRequest {
  @ApiProperty()
  @IsEmail()
  @IsString()
  email: string;

  @ApiProperty()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsString()
  lastName: string;
}
