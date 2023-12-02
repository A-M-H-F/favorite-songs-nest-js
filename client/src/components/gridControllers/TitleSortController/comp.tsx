import { SortButton } from '@components/gridControllers/SortButton'
import { changeSongsStatus, songsSelector } from '@features/songs/songsSlice'
import gridHelper from '@helpers/grid'
import { Button } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

const TitleSortController: React.FC = () => {
  const [setTitleSearchQuery, setTitleSort] = useSearchParams()
  const totalSongs = useSelector(songsSelector).pagination.totalSongs
  const dispatch = useDispatch()

  return (
    <Button
      onClick={() => {
        gridHelper.setTitleSearchQuery(setTitleSearchQuery, setTitleSort)
        dispatch(changeSongsStatus())
      }}
      disabled={!totalSongs || totalSongs <= 0}
      style={{ marginLeft: '0.2em' }}
    >
      <SortButton setTitleSearchQuery={setTitleSearchQuery} />
    </Button>
  )
}

export default TitleSortController
