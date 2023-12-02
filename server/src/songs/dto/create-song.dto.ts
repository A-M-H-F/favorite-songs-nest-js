import { IsString, MinLength } from 'class-validator';

export class CreateSongDto {
  @IsString()
  @MinLength(3)
  title: string;
}
