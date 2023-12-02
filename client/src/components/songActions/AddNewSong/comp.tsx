import { NewSongForm } from '@components/forms/NewSongForm'
import { Button, Modal, App as AntDApp } from 'antd'
import React, { useState } from 'react'
import { useQueryParams } from '@hooks/useQueryParams'
import { useAppDispatch } from '../../../state/store'
import songHelper from '@helpers/songs'
import { ITileState } from '../../../handlers/data'

const initialState: ITileState = {
  title: ''
}

const AddNewSong: React.FC = () => {
  // modal
  const [isModalOpen, setIsModalOpen] = useState(false)
  const showModal = () => setIsModalOpen(true)
  const handleCancel = () => setIsModalOpen(false)
  const { message: messageApi } = AntDApp.useApp()

  // loading state
  const [loading, setLoading] = useState(false)

  // get query
  const queryParams = useQueryParams()
  const dispatch = useAppDispatch()

  // state
  const [newSongData, setNewSongData] = useState<ITileState>(initialState)
  const { title } = newSongData

  const handleSave = async () => {
    try {
      setLoading(true)

      const data = await songHelper.addNewSong(
        title,
        messageApi,
        dispatch,
        queryParams
      )

      if (data) {
        setLoading(false)
        setNewSongData(initialState)
        setIsModalOpen(false)
      }
    } catch (error) {
      setLoading(false)
    }
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add New Song
      </Button>
      <Modal
        title="Add Your Favorite Song"
        open={isModalOpen}
        onOk={handleSave}
        onCancel={handleCancel}
        centered
        okText={'Save Song'}
        confirmLoading={loading}
      >
        <NewSongForm
          setNewSongData={setNewSongData}
          newSongData={newSongData}
        />
      </Modal>
    </>
  )
}

export default AddNewSong
