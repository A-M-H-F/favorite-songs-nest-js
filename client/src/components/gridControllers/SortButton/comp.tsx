import { SortDescendingOutlined, SortAscendingOutlined } from '@ant-design/icons'
import gridHelper from '@helpers/grid'
import { Tooltip } from 'antd'
import React from 'react'

interface ISortButton {
  setTitleSearchQuery: URLSearchParams
}

const SortButton: React.FC<ISortButton> = ({
  setTitleSearchQuery,
}) => {
  return (
    <Tooltip title={gridHelper.getTitleSortTooltipTitle(setTitleSearchQuery.get('title_sort'))}>
      Sort {!setTitleSearchQuery.get('title_sort') ? '' : setTitleSearchQuery.get('title_sort') === 'asc' ? <SortAscendingOutlined /> : <SortDescendingOutlined />}
    </Tooltip>
  )
}

export default SortButton
