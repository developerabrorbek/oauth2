import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GoogleStrategy } from './google.strategy';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma';

@Module({
  imports: [PassportModule, JwtModule.register({secret: "secret key"})],
  controllers: [AuthController],
  providers: [AuthService, GoogleStrategy, JwtService, PrismaService],
})
export class AuthModule {}
