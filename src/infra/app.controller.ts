import { Controller, Get, Post, Body } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'node:crypto';
import { CreateNotificationBody } from './create-notification-body';
import { PacketSecurityService } from './packet-security.service';

@Controller('notifications')
export class AppController {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly packetSecurityService: PacketSecurityService,
  ) {}

  @Get()
  list() {
    return this.prismaService.notification.findMany();
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { content, category, recipientId } = body;

    await this.prismaService.notification.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipientId,
      },
    });
  }

  @Get('buffer')
  async convertBuffetHexToString() {
    // buffer.readUInt16LE(0);
  }
}
