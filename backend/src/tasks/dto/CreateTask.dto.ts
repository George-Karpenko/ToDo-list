import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsOptional()
  @IsString()
  @MinLength(4)
  title: string;
}
