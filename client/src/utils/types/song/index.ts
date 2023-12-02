export interface ISong {
  _id: string
  title: string
  artist?: string
  album?: string
  genre?: string
  rating?: number
}

export interface ISongData {
  pagination: {
    totalSongs?: number
    totalPages?: number
    count?: number
    page?: number
  }
  songs: ISong[] | [],
  status: 'idle' | 'loading' | 'succeed' | 'failed',
  error: undefined | string
}
