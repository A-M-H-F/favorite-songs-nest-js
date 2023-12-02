import { SearchSong } from '@components/gridControllers/SearchSong'
import { TitleSortController } from '@components/gridControllers/TitleSortController'
import { Col } from 'antd'
import React from 'react'

interface ISearchAndSortColumn {
  setSearchInput: React.Dispatch<React.SetStateAction<string | undefined>>
  searchInput: string | undefined
}

const SearchAndSortColumn: React.FC<ISearchAndSortColumn> = ({ setSearchInput, searchInput }) => {
  return (
    <Col style={{ display: 'flex' }}>
      <SearchSong setSearchInput={setSearchInput} searchInput={searchInput} />
      <TitleSortController />
    </Col>
  )
}

export default SearchAndSortColumn
