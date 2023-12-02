import { changeSongsStatus, fetchSongs } from '@features/songs/songsSlice'
import { AnyAction, Dispatch, ThunkDispatch } from '@reduxjs/toolkit'
import { IQueryParams } from '@utils/types/queryParams'
import { ISongData } from '@utils/types/song'
import { debounce } from 'lodash'
import React from 'react'
import { SetURLSearchParams } from 'react-router-dom'

const allQueryParams = ['search', 'title_sort', 'date_sort', 'page', 'size']

const queriesHelper = {
  // get current query value
  getQuery: (
    queryKey: string,
    location: URLSearchParams
  ): string | undefined => {
    return location.get(queryKey) || undefined
  },

  // check the updated field
  checkFieldType: (updatedField: string, field: string) => {
    return updatedField === field
  },

  // for search update, using debounce
  getAllQueries: (location: URLSearchParams, field: string, value: string) => {
    const mapping = Object.fromEntries(
      allQueryParams.map((updatedOne) => [
        updatedOne,
        queriesHelper.checkFieldType(field, updatedOne)
          ? value
          : queriesHelper.getQuery(updatedOne, location) || undefined
      ])
    )

    // console.log('mapping: ', mapping)
    return mapping
  },

  // check if 1 or more query enabled for Reset All Queries Button
  checkQueries: (queryParam: IQueryParams): boolean => {
    return Object.values(queryParam).some((value) => value !== undefined)
  },

  // get all defined quires with values
  getDefinedQueries: (queryParam: IQueryParams): Record<string, string> => {
    const filteredEntries = Object.entries(queryParam).filter(
      ([, value]) => value !== undefined
    )

    return Object.fromEntries(filteredEntries)
  },

  // set the query and replace it
  setQueryAndReplace: (
    param: URLSearchParams,
    setParam: SetURLSearchParams,
    field: string,
    value: string
  ) => {
    param.set(field, value)
    setParam(param, { replace: true })
  },

  // remove query from url
  deleteQuery: (
    param: URLSearchParams,
    setParam: SetURLSearchParams,
    field: string
  ) => {
    param.delete(field)
    setParam(param, { replace: true })
  },

  // handle page and page size event change
  handlePageNumberAndPageSize: (
    queries: URLSearchParams,
    setQueries: SetURLSearchParams,
    dispatch: Dispatch,
    page: number,
    pageSize: number
  ) => {
    queries.set('page', String(page))
    queries.set('size', String(pageSize))
    setQueries(queries, { replace: true })
    dispatch(changeSongsStatus())
  },

  // handle search event filter
  onSearchChange: debounce(
    (
      dispatch: ThunkDispatch<
        {
          songsData: ISongData
        },
        undefined,
        AnyAction
      >,
      e: React.ChangeEvent<HTMLInputElement>,
      search: URLSearchParams,
      setSearch: SetURLSearchParams
    ) => {
      const { value } = e.target

      if (value.length === 0) {
        queriesHelper.deleteQuery(search, setSearch, 'search')

        const queries = queriesHelper.getAllQueries(search, 'search', value)
        dispatch(fetchSongs(queries))
      } else {
        queriesHelper.setQueryAndReplace(search, setSearch, 'search', value)

        const queries = queriesHelper.getAllQueries(search, 'search', value)
        // console.log(queries)

        dispatch(fetchSongs(queries))
      }
    },
    350
  )
}

export default queriesHelper
