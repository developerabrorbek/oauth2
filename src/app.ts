import { Module } from '@nestjs/common';
import { AuthModule, UserModule } from './modules';
import { PrismaModule } from './prisma';

@Module({
  imports: [AuthModule, PrismaModule, UserModule],
})
export class AppModule {}
