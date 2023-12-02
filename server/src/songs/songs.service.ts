import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, PipelineStage } from 'mongoose';
import { Song } from './schemas/song.schema';
import { GetSongsQueryDto } from './dto/get-songs.dto';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { MongoObjectIdDto } from './dto/mongo.dto';
import { SongsHelper } from './helpers/songs.helper';
import { ISongsData } from './types/song.types';

@Injectable()
export class SongsService {
  constructor(
    @InjectModel(Song.name) private songModel: Model<Song>,
    private songsHelper: SongsHelper,
  ) {}

  // get songs
  async getSongs(getSongsQueryDto: GetSongsQueryDto): Promise<ISongsData> {
    try {
      const { search, page, validatePageSize, sortOptions } =
        this.songsHelper.PrepareQuery(getSongsQueryDto);

      const pipeline: PipelineStage[] = [
        {
          $match: this.songsHelper.getSearchFilters(search),
        },
        {
          $facet: {
            pagination: [
              {
                $count: 'totalSongs',
              },
              {
                $addFields: {
                  page: page,
                  totalPages: {
                    $ceil: { $divide: ['$totalSongs', validatePageSize] },
                  },
                },
              },
            ],
            songs: [
              ...sortOptions.map((sortOption) => ({ $sort: sortOption })),
              {
                $skip: this.songsHelper.getSkipValue(page, validatePageSize),
              },
              {
                $limit: validatePageSize,
              },
              {
                $project: {
                  title: 1,
                },
              },
            ],
          },
        },
      ];

      const data = await this.songModel.aggregate(pipeline);

      const result = {
        pagination: { ...data[0].pagination[0], count: data[0].songs.length },
        songs: data[0].songs,
      };

      return result;
    } catch (error) {
      return null;
    }
  }

  // create new song
  async createSong(createSongDto: CreateSongDto): Promise<{ message: string }> {
    await this.songModel.create({
      title: createSongDto.title,
    });

    return { message: 'Song added successfully.' };
  }

  // update song
  async updateSong(
    params: MongoObjectIdDto,
    updateSongDto: UpdateSongDto,
  ): Promise<{ message: string }> {
    const result = await this.songModel.findByIdAndUpdate(params.id, {
      title: updateSongDto.title,
    });

    return result ? { message: 'Song update successfully.' } : null;
  }

  // delete song
  async deleteSong(params: MongoObjectIdDto): Promise<{ message: string }> {
    const result = await this.songModel.findByIdAndDelete(params.id);

    return result ? { message: 'Song deleted successfully.' } : null;
  }
}
