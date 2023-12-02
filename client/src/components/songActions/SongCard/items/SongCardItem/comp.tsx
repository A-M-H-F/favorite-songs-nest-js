import { DeleteSong } from '@components/songActions/DeleteSong'
import { UpdateSong } from '@components/songActions/UpdateSong'
import { Card } from 'antd'
import React from 'react'
import { SongSkeletonItem } from '../SongSkeletonItem'

interface ISongCardItem {
  title: string
  _id: string
}

const SongCardItem: React.FC<ISongCardItem> = ({ title, _id }) => {
  return (
    <Card
      hoverable
      bordered
      style={{ width: 'auto', marginBottom: '1em' }}
      actions={[
        <UpdateSong songId={_id} oldTitle={title} />,
        <DeleteSong songId={_id} />
      ]}
    >
        <SongSkeletonItem title={title} />
    </Card>
  )
}

export default SongCardItem
