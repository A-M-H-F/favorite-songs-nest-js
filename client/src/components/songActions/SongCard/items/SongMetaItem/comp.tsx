import { Avatar, Rate, Card } from 'antd'
import React from 'react'
import musicAvatar from '@assets/images/avatar.jpg'

const { Meta } = Card

interface ISongMetaItem {
  title: string
}

const SongMetaItem: React.FC<ISongMetaItem> = ({ title }) => {
  return (
    <Meta
      avatar={<Avatar src={musicAvatar} />}
      title={title}
      description={<Rate defaultValue={3} />}
    />
  )
}

export default SongMetaItem
