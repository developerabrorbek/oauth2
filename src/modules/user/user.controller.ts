import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("User")
@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get('/all')
  async getUsers(): Promise<any> {
    return await this.service.getUsers();
  }
}
