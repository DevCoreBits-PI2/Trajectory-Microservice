import { Module } from '@nestjs/common';
import { TrajectoryService } from './trajectory.service';
import { TrajectoryController } from './trajectory.controller';

@Module({
  controllers: [TrajectoryController],
  providers: [TrajectoryService],
})
export class TrajectoryModule {}
