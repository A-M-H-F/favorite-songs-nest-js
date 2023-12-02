import { Song } from '../schemas/song.schema';

export interface IPrepareQuery {
  search: string | undefined;
  page: number;
  validatePageSize: number;
  sortOptions: Array<Record<string, 1 | -1>>;
}

export interface ISearchFilter {
  title?: { $regex: RegExp };
}

export interface ISortOptions {
  asc: 1;
  desc: -1;
}

export interface ISongsData {
  pagination: [
    {
      totalSongs?: number;
      page?: number;
      totalPages?: number;
      count?: number;
    },
  ];
  songs: Song[] | [];
}
