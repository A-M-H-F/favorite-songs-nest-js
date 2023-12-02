import { ResetQueries } from '@components/gridControllers/ResetQueries'
import { useQueryParams } from '@hooks/useQueryParams'
import { Col } from 'antd'
import React from 'react'

interface IResetQueriesColumn{
  setSearchInput: React.Dispatch<React.SetStateAction<string | undefined>>
}

const ResetQueriesColumn: React.FC<IResetQueriesColumn> = ({ setSearchInput }) => {
  const queryParams = useQueryParams()

  return (
    <Col>
      <ResetQueries queryParams={queryParams} setSearchInput={setSearchInput} />
    </Col>
  )
}

export default ResetQueriesColumn
