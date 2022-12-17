import { Module } from '@nestjs/common';
import { AppController } from './infra/app.controller';
import { PacketSecurityService } from './infra/packet-security.service';
import { PrismaService } from './infra/prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService, PacketSecurityService],
})
export class AppModule {}
