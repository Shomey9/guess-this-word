import { Module } from '@nestjs/common';
import { ServerController } from './server.controller';
import { RandomWordService } from './server/src/endpoints/random-word/random-word.service';
import { RandomWordController } from './server/src/endpoints/random-word/random-word.controller';

@Module({
  imports: [],
  controllers: [
    RandomWordController,
    ServerController
  ],
  providers: [RandomWordService],
})
export class ServerModule {}
