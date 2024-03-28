import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { addMinutes } from '@/helpers/date';

export type TaskDocument = HydratedDocument<Task>;

function createDate() {}

@Schema()
export class Task {
  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: Boolean, default: false })
  isDone: boolean;

  @Prop({ type: Date, default: () => new Date() })
  createdAt: Date;

  @Prop({ type: Date, default: () => addMinutes(new Date(), 10) })
  overdueAt: Date;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
