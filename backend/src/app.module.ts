import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './tasks/tasks.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongodb:27017/test'),
    ScheduleModule.forRoot(),
    TasksModule,
  ],
})
export class AppModule {}
