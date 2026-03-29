import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrajectoryModule } from './trajectory/trajectory.module';

@Module({
  imports: [TrajectoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
