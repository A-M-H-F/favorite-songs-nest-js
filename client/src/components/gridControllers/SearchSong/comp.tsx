import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { Input } from 'antd'
import { useAppDispatch } from '../../../state/store'
import queriesHelper from '@helpers/queries'

const { Search } = Input

interface ISearchSong {
  setSearchInput: React.Dispatch<React.SetStateAction<string | undefined>>
  searchInput: string | undefined
}

const SearchSong: React.FC<ISearchSong> = ({ searchInput, setSearchInput }) => {
  const [search, setSearch] = useSearchParams([])
  const dispatch = useAppDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
    queriesHelper.onSearchChange(dispatch, e, search, setSearch)
  }

  return (
    <Search
      placeholder="search your favorite song"
      value={searchInput}
      onChange={handleChange}
      // onSearch={onSearchChange}
      allowClear
      defaultValue={search.get('search') || ''}
      id="search-filter-fav-input"
    />
  )
}

export default SearchSong
