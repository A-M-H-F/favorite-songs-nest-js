import { IsString, MinLength } from 'class-validator';

export class UpdateSongDto {
  @IsString()
  @MinLength(3)
  title: string;
}
