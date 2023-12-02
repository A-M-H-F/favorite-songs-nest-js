import { AddNewSong } from '@components/songActions/AddNewSong'
import { Col } from 'antd'
import React from 'react'

const AddNewSongColumn: React.FC = () => {
  return (
    <Col style={{ marginLeft: '1em' }}>
      <AddNewSong />
    </Col>
  )
}

export default AddNewSongColumn
