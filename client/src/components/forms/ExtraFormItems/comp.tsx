import { Form, Input, Rate } from 'antd'
import React from 'react'

const ExtraFormItems: React.FC = () => {
  return (
    <>
      <Form.Item label="Artist">
        <Input disabled placeholder="artist" />
      </Form.Item>
      <Form.Item label="Genre">
        <Input disabled placeholder="genre" />
      </Form.Item>

      <Form.Item label="Rating">
        <Rate defaultValue={4} disabled />
      </Form.Item>
    </>
  )
}

export default ExtraFormItems
