import { Row } from 'antd'
import React from 'react'
import { SearchAndSortColumn } from '../columns/SearchAndSortColumn'

interface IGridRowOne {
  setSearchInput: React.Dispatch<React.SetStateAction<string | undefined>>
  searchInput: string | undefined
}

const GridRowOne: React.FC<IGridRowOne> = ({ setSearchInput, searchInput }) => {
  return (
    <Row style={{ marginBottom: '0.5em' }}>
      <SearchAndSortColumn setSearchInput={setSearchInput} searchInput={searchInput} />
    </Row>
  )
}

export default GridRowOne
