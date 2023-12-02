import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpCode,
  HttpStatus,
  Query,
  BadRequestException,
  UseFilters,
  NotFoundException,
} from '@nestjs/common';
import { GetSongsQueryDto } from './dto/get-songs.dto';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { MongoObjectIdDto } from './dto/mongo.dto';
import { SongsService } from './songs.service';
import { MongoExceptionFilter } from './exceptions/mongo.exception.filter';
import { ISongsData } from './types/song.types';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}

  @Get() // get songs
  @HttpCode(HttpStatus.OK)
  getSongs(@Query() getSongsQueryDto: GetSongsQueryDto): Promise<ISongsData> {
    return this.songsService.getSongs(getSongsQueryDto);
  }

  @Post() // create new song
  @UseFilters(new MongoExceptionFilter())
  async createSong(
    @Body() createSongDto: CreateSongDto,
  ): Promise<{ message: string }> {
    try {
      return await this.songsService.createSong(createSongDto);
    } catch (error) {
      throw new BadRequestException({
        error,
        message: 'Error adding the new song.',
      });
    }
  }

  @Put(':id') // update song
  @HttpCode(HttpStatus.OK)
  @UseFilters(new MongoExceptionFilter())
  async updateSong(
    @Param() params: MongoObjectIdDto,
    @Body() updateSongDto: UpdateSongDto,
  ) {
    try {
      const result = await this.songsService.updateSong(params, updateSongDto);

      if (!result) throw new NotFoundException({ message: 'Song Not Found.' });

      return result;
    } catch (error) {
      throw new BadRequestException({ error, message: 'Error updating song.' });
    }
  }

  @Delete(':id') // delete song
  @HttpCode(HttpStatus.OK)
  @UseFilters(new MongoExceptionFilter())
  async deleteSong(@Param() params: MongoObjectIdDto) {
    const result = await this.songsService.deleteSong(params);

    if (!result) throw new NotFoundException({ message: 'Song Not Found.' });

    return result;
  }
}
