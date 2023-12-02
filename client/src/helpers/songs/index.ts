import { ISong, ISongData } from '@utils/types/song'
import { MessageInstance } from 'antd/es/message/interface'
import songsService from '../../service/songs'
import {
  changeSongsStatus,
  fetchSongs,
  getSongsAction
} from '@features/songs/songsSlice'
import { AnyAction, Dispatch, ThunkDispatch } from '@reduxjs/toolkit'
import { IQueryParams } from '@utils/types/queryParams'

const songHelper = {
  // delete song
  deleteSong: async (
    songId: string,
    messageApi: MessageInstance,
    songs: ISong[],
    dispatch: Dispatch
  ) => {
    const data = await songsService.deleteSong(songId, messageApi)

    if (data) {
      messageApi.open({
        type: 'success',
        content: data?.message
      })

      const newSongsList = songs.filter((song) => song._id !== songId)

      dispatch(getSongsAction(newSongsList))
      dispatch(changeSongsStatus())
    }
  },

  // update song
  updateSong: async (
    songId: string,
    title: string,
    oldTitle: string,
    messageApi: MessageInstance,
    songs: ISong[],
    dispatch: Dispatch
  ): Promise<boolean | undefined> => {
    if (title.length < 3 || title === oldTitle) {
      messageApi.open({
        type: 'error',
        content: 'Song title should be unique and a minimum of 3 characters.'
      })
      throw new Error()
    }

    const data = await songsService.updateSong(songId, title, messageApi)
    // console.log(data)

    if (data) {
      messageApi.open({
        type: 'success',
        content: data?.message
      })

      const newSongsList = songs.map((song) => {
        if (song._id === songId)
          return {
            ...song,
            title: title
          }
        return song
      })

      dispatch(getSongsAction(newSongsList))

      return true
    }
  },

  addNewSong: async (
    title: string,
    messageApi: MessageInstance,
    dispatch: ThunkDispatch<
      {
        songsData: ISongData
      },
      undefined,
      AnyAction
    >,
    queryParams: IQueryParams
  ) => {
    if (title.length < 3) {
      messageApi.open({
        type: 'error',
        content: 'Song title should be a minimum of 3 characters.'
      })
      throw new Error()
    }

    const data = await songsService.addNewSong(title, messageApi)
    // console.log(data)

    if (data) {
      messageApi.open({
        type: 'success',
        content: data?.message
      })

      dispatch(fetchSongs(queryParams))

      return true
    } else {
        throw new Error()
    }
  }
}

export default songHelper
