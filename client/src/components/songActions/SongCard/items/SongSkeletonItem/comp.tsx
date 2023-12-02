import { Skeleton } from 'antd'
import React from 'react'
import { SongMetaItem } from '../SongMetaItem'

interface ISongSkeletonItem {
  title: string
}

const SongSkeletonItem: React.FC<ISongSkeletonItem> = ({ title }) => {
  return (
    <Skeleton loading={false} avatar active>
      <SongMetaItem title={title} />
    </Skeleton>
  )
}

export default SongSkeletonItem
