import { Row } from 'antd'
import React from 'react'
import { ResetQueriesColumn } from '../columns/ResetQueriesColumn'
import { AddNewSongColumn } from '../columns/AddNewSongColumn'

interface IGridRowTwo {
  setSearchInput: React.Dispatch<React.SetStateAction<string | undefined>>
}

const GridRowTwo: React.FC<IGridRowTwo> = ({ setSearchInput }) => {
  return (
    <Row justify={'end'}>
      <ResetQueriesColumn setSearchInput={setSearchInput} />

      <AddNewSongColumn />
    </Row>
  )
}

export default GridRowTwo
