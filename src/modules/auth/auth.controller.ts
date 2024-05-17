import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { SignUpDto } from './dtos';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Auth")
@Controller("auth")
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Get('/google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {}

  @Get('/google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req: Request): Promise<any> {
    return await this.service.googleLogin(req);
  }

  @Post("/sign-up")
  async register(@Body() payload: SignUpDto): Promise<any>{
    console.log(payload)
  }
}
