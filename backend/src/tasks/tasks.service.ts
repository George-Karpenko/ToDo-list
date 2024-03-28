import { Model } from 'mongoose';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './schemas/tasks.schema';
import { CreateTaskDto } from './dto/CreateTask.dto';
import { UpdateTaskDto } from './dto/UpdateTask.dto';
import { Interval } from '@nestjs/schedule';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const createdTask = new this.taskModel(createTaskDto);
    return createdTask.save();
  }

  async update(id: String, updateTaskDto: UpdateTaskDto): Promise<Task> {
    const updatedTask = await this.taskModel.findByIdAndUpdate(
      id,
      updateTaskDto,
      { new: true },
    );
    return updatedTask;
  }

  async delete(id: String): Promise<Task> {
    const deletedTask = await this.taskModel.findByIdAndDelete(id);
    return deletedTask;
  }

  async findAll(): Promise<Task[]> {
    return this.taskModel.find().sort({ createdAt: 'desc' }).exec();
  }

  @Interval(6000)
  async deletingOverdueTasks() {
    await this.taskModel.deleteMany({
      isDone: false,
      overdueAt: {
        $lte: new Date(),
      },
    });
  }
}
