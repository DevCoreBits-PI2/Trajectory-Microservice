import { Injectable } from '@nestjs/common';
import { CreateTrajectoryDto } from './dto/create-trajectory.dto';
import { UpdateTrajectoryDto } from './dto/update-trajectory.dto';

@Injectable()
export class TrajectoryService {
  create(createTrajectoryDto: CreateTrajectoryDto) {
    return 'This action adds a new trajectory';
  }

  findAll() {
    return `This action returns all trajectory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} trajectory`;
  }

  update(id: number, updateTrajectoryDto: UpdateTrajectoryDto) {
    return `This action updates a #${id} trajectory`;
  }

  remove(id: number) {
    return `This action removes a #${id} trajectory`;
  }
}
