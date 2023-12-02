import { IsMongoId, IsString } from 'class-validator';

export class MongoObjectIdDto {
  @IsString()
  @IsMongoId()
  id: string;
}
