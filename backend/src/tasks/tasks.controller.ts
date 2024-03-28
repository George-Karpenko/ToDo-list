import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  Get,
  Param,
  HttpException,
  Patch,
  Delete,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import mongoose from 'mongoose';
import { UpdateTaskDto } from './dto/UpdateTask.dto';
import { CreateTaskDto } from './dto/CreateTask.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async createTask(@Body() createTaskDto: CreateTaskDto) {
    const newTask = await this.tasksService.create(createTaskDto);
    return newTask;
  }

  @Get()
  getTasks() {
    return this.tasksService.findAll();
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  async updateTask(
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Invalid ID', 400);
    const updatedTask = await this.tasksService.update(id, updateTaskDto);
    if (!updatedTask) throw new HttpException('Task Not Found', 404);
    return updatedTask;
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Invalid ID', 400);
    const deletedTask = await this.tasksService.delete(id);
    if (!deletedTask) throw new HttpException('Task Not Found', 404);
    return;
  }
}
