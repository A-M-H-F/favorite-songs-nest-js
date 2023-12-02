import { DeleteOutlined } from '@ant-design/icons'
import { App as AntDApp, Popconfirm } from 'antd'
import React from 'react'
import {
  songsSelector
} from '@features/songs/songsSlice'
import { useAppDispatch } from '../../../state/store'
import { useSelector } from 'react-redux'
import songHelper from '@helpers/songs'

interface IDeleteSong {
  songId: string
}

const DeleteSong: React.FC<IDeleteSong> = ({ songId }) => {
  const { message: messageApi } = AntDApp.useApp()

  // get songs
  const dispatch = useAppDispatch()
  const songs = useSelector(songsSelector).songs

  // confirm delete
  const confirm = async () => {
    await songHelper.deleteSong(songId, messageApi, songs, dispatch)
  }

  return (
    <>
      <Popconfirm
        title="Delete the song"
        description="Are you sure to delete this song?"
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <DeleteOutlined style={{ color: 'red' }} key={'delete'} />
      </Popconfirm>
    </>
  )
}

export default DeleteSong
