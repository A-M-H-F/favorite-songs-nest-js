import { songsSelector } from '@features/songs/songsSlice'
import gridHelper from '@helpers/grid'
import { Pagination as AntdPagination } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { useAppDispatch } from '../../../state/store'
import queriesHelper from '@helpers/queries'

const GridPagination: React.FC = () => {
  const totalSongs = useSelector(songsSelector).pagination.totalSongs
  const dispatch = useAppDispatch()
  const [queries, setQueries] = useSearchParams()

  return (
    <AntdPagination
      showSizeChanger
      pageSizeOptions={gridHelper.getPageSizeOptions(totalSongs || 0)}
      current={Number(queries.get('page')) || 1}
      total={totalSongs || 0}
      pageSize={gridHelper.validateRequestedPageSize(queries.get('size')) || 10}
      onChange={(page, pageSize) =>
        queriesHelper.handlePageNumberAndPageSize(
          queries,
          setQueries,
          dispatch,
          page,
          pageSize
        )
      }
      disabled={!totalSongs || totalSongs <= 0}
      // style={{
      //   marginBottom: '0.5em',
      //   color: 'black'
      //   // boxShadow: 'rgb(11 223 166) -20px 0px 20px 12px inset'
      // }}
    />
  )
}

export default GridPagination
