import { SetURLSearchParams } from 'react-router-dom'
import { URLSearchParams } from 'url'

const maxPageSize: number = 100

const gridHelper = {
  setTitleSearchQuery: (
    setTitleSearchQuery: URLSearchParams,
    setTitleSort: SetURLSearchParams
  ) => {
    const param = setTitleSearchQuery.get('title_sort')
    // console.log(param)

    if (param === 'desc') {
      setTitleSearchQuery.delete('title_sort')
      setTitleSort(setTitleSearchQuery, { replace: true })
    } else if (param === 'asc') {
      setTitleSearchQuery.set('title_sort', 'desc')
      setTitleSort(setTitleSearchQuery, { replace: true })
    } else {
      setTitleSearchQuery.set('title_sort', 'asc')
      setTitleSort(setTitleSearchQuery, { replace: true })
    }
  },

  getTitleSortTooltipTitle: (query: string | null): string => {
    const sortTitles: Record<string, string> = {
      undefined: 'Click to sort ascending',
      asc: 'Click to sort descending'
    }

    return query
      ? sortTitles[query] || 'Click to cancel sorting'
      : 'Click to sort ascending'
  },

  validateRequestedPageSize: (size: string | null): number => {
    return Number(size) > maxPageSize ? maxPageSize : Number(size)
  },

  getMaxPageSize: (totalSongs: number): number => {
    return Math.min(
      totalSongs > maxPageSize ? maxPageSize : totalSongs,
      maxPageSize
    )
  },

  getPageSizeOptions: (totalSongs: number): number[] => {
    const result = gridHelper.getMaxPageSize(totalSongs)
    const pageSizeOptions: number[] = Array.from(
      { length: result / 10 },
      (_, index) => (index + 1) * 10
    )

    if (!pageSizeOptions.includes(totalSongs) && totalSongs <= result) {
      pageSizeOptions.push(totalSongs)
    }

    // console.log(pageSizeOptions)

    return pageSizeOptions
  },

}

export default gridHelper
