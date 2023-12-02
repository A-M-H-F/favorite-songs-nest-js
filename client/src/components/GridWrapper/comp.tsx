import { GridController } from '@components/gridControllers/GridController'
import React from 'react'
import { SongsListWithSpinner } from './items/SongsListWithSpinner'
import { FlexPagination } from './items/FlexPagination'

const GridWrapperStyle: React.CSSProperties = {
  marginLeft: '0.6em',
  marginRight: '0.6em',
  marginTop: '0.6em'
}

const GridWrapper: React.FC = () => {
  return (
    <div style={GridWrapperStyle}>
      <GridController />

      <SongsListWithSpinner />

      <FlexPagination />
    </div>
  )
}

export default GridWrapper
