import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { UserController } from '../users/user.controller';
import { RandomController } from '../controllers/random.controller';
import { AppService } from '../services/app.service';
import { UserService } from '../users/user.service';
import { RandomService } from '../services/random.service';

@Module({
  imports: [],
  controllers: [AppController, UserController, RandomController],
  providers: [AppService, UserService, RandomService],
})
export class AppModule {}
