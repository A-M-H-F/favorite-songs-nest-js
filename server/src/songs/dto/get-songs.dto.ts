import { Transform } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';

enum SortState {
  ASCENDING = 'asc',
  DESCENDING = 'desc',
}

type SortOptions = 'asc' | 'desc';

export class GetSongsQueryDto {
  @IsOptional()
  @Transform(({ value }) => (value && value.length < 3 ? null : value))
  @IsString()
  search?: string;

  @IsOptional()
  @Transform(({ value }) => Number(value) || 1)
  @IsNumber()
  page?: number = 1;

  @IsOptional()
  @Transform(({ value }) => Number(value) || 10)
  @IsNumber()
  size?: number = 10;

  @IsOptional()
  @IsString()
  @IsEnum(['asc', 'desc'])
  title_sort?: SortOptions;

  @IsOptional()
  @IsString()
  @IsEnum(SortState)
  date_sort?: SortOptions = 'desc';
}
