import { useWindowDimensions } from '@hooks/useWindowDimensions'
import { Empty } from 'antd'
import React from 'react'

const SongsEmpty: React.FC = () => {
  const { mobileScreen } = useWindowDimensions()

  return (
    <Empty
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: mobileScreen ? '14em' : '25em',
        alignItems: 'center'
      }}
    />
  )
}

export default SongsEmpty
