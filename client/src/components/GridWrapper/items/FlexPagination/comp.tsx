import { GridPagination } from '@components/gridControllers/Pagination'
import { Flex } from 'antd'
import React from 'react'

const FlexPagination: React.FC = () => {
  return (
    <Flex justify="space-between">
      <div></div>
      <GridPagination />
    </Flex>
  )
}

export default FlexPagination
