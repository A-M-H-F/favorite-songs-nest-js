import { Form } from 'antd'
import React from 'react'
import { ExtraFormItems } from '../ExtraFormItems'
import { TitleInput } from '../TitleInput'
import { ITileState } from '../../../handlers/data'

interface IUpdateSongForm {
  songData: ITileState
  setSongData: React.Dispatch<React.SetStateAction<ITileState>>
}

const UpdateSongForm: React.FC<IUpdateSongForm> = ({
  songData,
  setSongData
}) => {
  const { title } = songData

  return (
    <Form layout="vertical">
      <TitleInput title={title} state={songData} setState={setSongData} name='title' />
      <ExtraFormItems />
    </Form>
  )
}

export default UpdateSongForm
