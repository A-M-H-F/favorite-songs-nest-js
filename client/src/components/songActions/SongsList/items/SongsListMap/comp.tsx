import { SongCard } from '@components/songActions/SongCard'
import { ISong } from '@utils/types/song'
import React from 'react'

interface ISongsList {
  songs: ISong[]
}

const SongsListMap: React.FC<ISongsList> = ({ songs }) => {
  return songs.map((song: ISong) => <SongCard key={song._id} song={song} />)
}

export default SongsListMap
