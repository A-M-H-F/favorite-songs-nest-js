import { Form } from 'antd'
import React from 'react'
import { ExtraFormItems } from '../ExtraFormItems'
import { TitleInput } from '../TitleInput'
import { ITileState } from '../../../handlers/data'

interface INewSongForm {
  newSongData: ITileState
  setNewSongData: React.Dispatch<React.SetStateAction<ITileState>>
}

const NewSongForm: React.FC<INewSongForm> = ({
  newSongData,
  setNewSongData
}) => {
  const { title } = newSongData

  return (
    <Form layout="vertical">
      <TitleInput title={title} setState={setNewSongData} state={newSongData} name='title' />

      <ExtraFormItems />
    </Form>
  )
}

export default NewSongForm
