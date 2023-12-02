import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { IQueryParams } from '@utils/types/queryParams'
import { ISongData } from '@utils/types/song'
import songsService from '../../service/songs'

const initialState: ISongData = {
  pagination: {
    totalSongs: 0,
    count: 0,
    totalPages: 0,
    page: 1
  },
  songs: [],
  error: undefined,
  status: 'idle', // true | false
}

interface ISongsDataState {
  songsData: ISongData
}

export const fetchSongs = createAsyncThunk<ISongData, IQueryParams>(
  'songs/fetchSongs',
  async (params) => {
    // console.log(params)
    const data = await songsService.getSongs(params)

    // console.log(data)

    return data as unknown as ISongData
  }
)

export const songsSlice = createSlice({
  name: 'songsData',
  initialState,
  reducers: {
    getSongsAction: (state, action) => {
      state.status = 'succeed'
      state.songs = action.payload
      // console.log(sate)
      // console.log(action.payload)
      return state
    },
    changeSongsStatus: (state) => {
      state.status = 'idle'
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchSongs.pending, (state) => {
        // console.log(state)
        state.status = 'loading'
      })
      .addCase(
        fetchSongs.fulfilled,
        (state, action: PayloadAction<ISongData>) => {
          // console.log('fulfilled')
          state.status = 'succeed'
          state.songs = action.payload.songs
          state.pagination = action.payload.pagination
        }
      )
      .addCase(fetchSongs.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export const songsSelector = (state: ISongsDataState) => state.songsData
export const songsStatus = (state: ISongsDataState) => state.songsData.status

export const { changeSongsStatus, getSongsAction } = songsSlice.actions

export default songsSlice.reducer
