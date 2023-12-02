import { SongsList } from '@components/songActions/SongsList'
import { songsStatus } from '@features/songs/songsSlice'
import { Spin } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'

const SpinnerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const SongsListWithSpinner: React.FC = () => {
  const status = useSelector(songsStatus)

  return (
    <Spin spinning={status === 'loading'} style={SpinnerStyle}>
      <SongsList />
    </Spin>
  )
}

export default SongsListWithSpinner
