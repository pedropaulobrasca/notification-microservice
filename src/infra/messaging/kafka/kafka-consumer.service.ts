import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  // Server is a Consumer and Client is a Producer
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['robust-kiwi-7745-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'cm9idXN0LWtpd2ktNzc0NSS53YH-vcOy2VgSfKtMQXbAGqtKtZTwMk1FFdLCJeo',
          password:
            'bNnA-RbolWsJaQPVvUbaGF1rMqEdxuWRdYB6gZ8sNICO9FrftoTgRQyOGErn3z72XIDsHg==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
