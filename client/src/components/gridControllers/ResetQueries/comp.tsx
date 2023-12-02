import queriesHelper from '@helpers/queries'
import { IQueryParams } from '@utils/types/queryParams'
import { Button } from 'antd'
import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useAppDispatch } from '../../../state/store'
import { changeSongsStatus } from '@features/songs/songsSlice'

interface IResetQueries {
  queryParams: IQueryParams
  setSearchInput: React.Dispatch<React.SetStateAction<string | undefined>>
}

const resetQueryStyle: React.CSSProperties = {
  marginLeft: '1em'
}

const ResetQueries: React.FC<IResetQueries> = ({ queryParams, setSearchInput }) => {
  const [, setSearchParams] = useSearchParams()
  const dispatch = useAppDispatch()

  const handleReset = (): void => {
    setSearchParams({})
    setSearchInput('')

    dispatch(changeSongsStatus())
  }

  return (
    <Button
      style={resetQueryStyle}
      onClick={handleReset}
      disabled={!queriesHelper.checkQueries(queryParams)}
    >
      Clear filters and sorters
    </Button>
  )
}

export default ResetQueries
