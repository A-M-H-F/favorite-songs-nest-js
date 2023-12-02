import { Injectable } from '@nestjs/common';
import {
  IPrepareQuery,
  ISearchFilter,
  ISortOptions,
} from '../types/song.types';
import { GetSongsQueryDto } from '../dto/get-songs.dto';

@Injectable()
export class SongsHelper {
  // get sort options
  getSort(
    sort: string | undefined,
    field: string,
  ): Record<string, 1 | -1> | null {
    const ISortOptions: ISortOptions = {
      asc: 1,
      desc: -1,
    };

    return !sort && field === 'createdAt'
      ? { [field]: -1 }
      : ISortOptions[sort as keyof ISortOptions]
        ? { [field]: ISortOptions[sort as keyof ISortOptions] }
        : null;
  }

  getSearchFilters(search: string | undefined): ISearchFilter {
    return search ? { title: { $regex: new RegExp(search, 'i') } } : {};
  }

  validatePageSize(size: number): number {
    // check if page size greater than the max default size
    const maxSize: number = 100;
    return size && size > maxSize ? maxSize : size;
  }

  // get page size skip value
  getSkipValue(pageNumber: number, size: number): number {
    const skipValue = (pageNumber - 1) * size;

    // If skipValue is 0 or less, return 0; otherwise, return the calculated skipValue
    return skipValue <= 0 ? 0 : skipValue;
  }

  PrepareQuery(options: GetSongsQueryDto): IPrepareQuery {
    const {
      search,
      date_sort: dateSort,
      title_sort: titleSort,
      page,
      size,
    } = options;

    const validatePageSize: number = this.validatePageSize(size);

    const sortOptions = [
      this.getSort(dateSort, 'createdAt'),
      this.getSort(titleSort, 'title'),
    ].filter(Boolean) as Array<Record<string, 1 | -1>>;

    const query: IPrepareQuery = {
      search,
      page,
      validatePageSize,
      sortOptions,
    };

    return query;
  }
}
