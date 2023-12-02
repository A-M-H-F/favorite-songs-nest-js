import {
  fetchSongs,
  songsSelector,
  songsStatus
} from '@features/songs/songsSlice'
import { useQueryParams } from '@hooks/useQueryParams'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../../state/store'
import { Row } from 'antd'
import { SongsEmpty } from './items/SongsEmpty'
import { SongsListMap } from './items/SongsListMap'

const GridStyle: React.CSSProperties = {
  minHeight: '65vh',
  marginTop: '2em',
  marginBottom: '2.5em'
}

const SongsList: React.FC = () => {
  const dispatch = useAppDispatch()

  const queryParams = useQueryParams()

  const songs = useSelector(songsSelector).songs
  
  const status = useSelector(songsStatus)

  useEffect(() => {
    if (status === 'idle') dispatch(fetchSongs(queryParams))
  }, [queryParams, dispatch, status])

  if (songs.length <= 0) return <SongsEmpty />

  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={GridStyle}>
      <SongsListMap songs={songs} />
    </Row>
  )
}

export default SongsList
