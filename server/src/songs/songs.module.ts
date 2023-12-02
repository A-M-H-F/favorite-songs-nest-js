import { Module } from '@nestjs/common';
import { SongsService } from './songs.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SongsController } from './songs.controller';
import { Song, SongSchema } from './schemas/song.schema';
import { SongsHelper } from './helpers/songs.helper';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Song.name, schema: SongSchema }]),
  ],
  providers: [SongsService, SongsHelper],
  controllers: [SongsController],
})
export class SongsModule {}
