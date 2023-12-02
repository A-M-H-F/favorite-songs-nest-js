import { UpdateSongForm } from '@components/forms/UpdateSongForm'
import { Modal, App as AntDApp } from 'antd'
import React, { useState } from 'react'
import { songsSelector } from '@features/songs/songsSlice'
import { EditOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'
import songHelper from '@helpers/songs'
import { useAppDispatch } from '../../../state/store'
import { ITileState } from '../../../handlers/data'

interface IUpdateSong {
  oldTitle: string
  songId: string
}

const UpdateSong: React.FC<IUpdateSong> = ({ oldTitle, songId }) => {
  // modal
  const [isModalOpen, setIsModalOpen] = useState(false)
  const showModal = () => setIsModalOpen(true)
  const handleCancel = () => setIsModalOpen(false)
  const { message: messageApi } = AntDApp.useApp()

  // loading state
  const [loading, setLoading] = useState(false)

  // get songs
  const dispatch = useAppDispatch()
  const songs = useSelector(songsSelector).songs

  const initialState: ITileState = {
    title: oldTitle
  }

  // state
  const [songData, setSongData] = useState<ITileState>(initialState)
  const { title } = songData

  const handleUpdate = async () => {
    try {
      setLoading(true)

      const data = await songHelper.updateSong(
        songId,
        title,
        oldTitle,
        messageApi,
        songs,
        dispatch
      )

      if (data) {
        setLoading(false)
        setSongData({ ...songData, [title]: title })
        setIsModalOpen(false)
      }
    } catch (error) {
      setLoading(false)
    }
  }

  return (
    <>
      <EditOutlined onClick={showModal} key="Update Song" />
      <Modal
        title="Add Your Favorite Song"
        open={isModalOpen}
        onOk={handleUpdate}
        onCancel={handleCancel}
        centered
        okText={'Save Song'}
        confirmLoading={loading}
      >
        <UpdateSongForm songData={songData} setSongData={setSongData} />
      </Modal>
    </>
  )
}

export default UpdateSong
