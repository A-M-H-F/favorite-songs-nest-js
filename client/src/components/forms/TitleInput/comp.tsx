import { Form, Input } from 'antd'
import React from 'react'
import dataHandler, { ITileState } from '../../../handlers/data'

interface ITitleInput {
  title: string
  state: ITileState
  setState: React.Dispatch<React.SetStateAction<ITileState>>
  name: string
}

const TitleInput: React.FC<ITitleInput> = ({ title, state, setState, name }) => {
  return (
    <Form.Item label="Song Title" required>
      <Input
        minLength={3}
        maxLength={100}
        onChange={(e) => dataHandler.onDataChange(setState, state, e)}
        value={title}
        name={name}
        placeholder="title"
      />
    </Form.Item>
  )
}

export default TitleInput
