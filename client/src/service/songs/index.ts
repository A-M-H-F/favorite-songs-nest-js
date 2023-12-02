import apiService from '@helpers/api'
import queriesHelper from '@helpers/queries'
import { IQueryParams } from '@utils/types/queryParams'
import { MessageInstance } from 'antd/es/message/interface'
import axios, { AxiosResponse } from 'axios'

const songsService = {
  // get songs list & pagination
  getSongs: async (params: IQueryParams) => {
    const filteredEntries = queriesHelper.getDefinedQueries(params)

    // console.log(filteredEntries)

    // Convert the filteredEntries object to a query string
    const queryString = Object.entries(filteredEntries)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join('&')

    // console.log(queryString)

    const { data } = await apiService.GET(`/songs?${queryString}`)

    // console.log('Data: ', data)

    return data
  },

  // add new song
  addNewSong: async (title: string, messageApi: MessageInstance) => {
    try {
      const body = { title }
      const { data }: AxiosResponse = await apiService.POST('/songs', body)

      return data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        messageApi.open({
          type: 'error',
          content: error?.response?.data?.message
        })

        throw new Error()
      }
    }
  },

  // update song
  updateSong: async (songId: string, title: string, messageApi: MessageInstance) => {
    try {
      const body = { title }
      const { data }: AxiosResponse = await apiService.PUT(`/songs/${songId}`, body)

      return data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        messageApi.open({
          type: 'error',
          content: error?.response?.data?.message
        })

        throw new Error()
      }
    }
  },

  // delete song
  deleteSong: async (songId: string, messageApi: MessageInstance) => {
    try {
      const { data }: AxiosResponse = await apiService.DELETE(`/songs/${songId}`)

      return data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        messageApi.open({
          type: 'error',
          content: error?.response?.data?.message
        })

        throw new Error()
      }
    }
  }
}

export default songsService
