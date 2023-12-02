import { useWindowDimensions } from '@hooks/useWindowDimensions'
import { ISong } from '@utils/types/song'
import { Col } from 'antd'
import React from 'react'
import { SongCardItem } from './items/SongCardItem'

interface ISongCard {
  song: ISong
}

const SongCard: React.FC<ISongCard> = ({ song }) => {
  const { mobileScreen } = useWindowDimensions()

  return (
    <Col className="gutter-row" span={mobileScreen ? 24 : 6}>
      <SongCardItem title={song.title} _id={song._id} />
    </Col>
  )
}

export default SongCard
