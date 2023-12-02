import queriesHelper from '@helpers/queries'
import { IQueryParams } from '@utils/types/queryParams'
import { useSearchParams } from 'react-router-dom'

export const useQueryParams = (): IQueryParams => {
  const [location] = useSearchParams()
  return {
    search: queriesHelper.getQuery('search', location),
    page: queriesHelper.getQuery('page', location),
    size: queriesHelper.getQuery('size', location),
    date_sort: queriesHelper.getQuery('date_sort', location),
    title_sort: queriesHelper.getQuery('title_sort', location)
  }
}
