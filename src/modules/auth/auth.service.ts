import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma';
import { SignUpRequest } from './interfaces';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
  ) {}

  async googleLogin(req: any): Promise<any> {
    if (!req.user) {
      return 'No user found';
    }

    const newUser = await this.prisma.user.create({
      data: {
        email: req.user.email,
        firstName: req.user.firstName,
        lastname: req.user.lastName,
        accessToken: req.user.accessToken,
        refreshToken: req.user.refreshToken,
        image: req.user.image,
      },
    });

    return {
      message: 'Yaratildi',
      profile: newUser,
    };
  }

  async signUp(payload: SignUpRequest): Promise<any> {
    const newUser = await this.prisma.user.create({
      data: {
        email: payload.email,
        firstName: payload.firstName,
        lastname: payload.lastName,
      },
    });

    const accessToken = this.jwt.sign({ id: newUser.id }, { expiresIn: 5000 });
    const refreshToken = this.jwt.sign({ id: newUser.id }, { expiresIn: '3d' });

    const updatedUser = await this.prisma.user.update({
      where: { id: newUser.id },
      data: {
        accessToken,
        refreshToken,
      },
    });

    return {
      message: 'Yaratildi',
      profile: updatedUser,
    };
  }
}
