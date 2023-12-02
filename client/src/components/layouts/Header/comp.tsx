import { useWindowDimensions } from '@hooks/useWindowDimensions'
import { Layout, Typography } from 'antd'
import React from 'react'

const { Header: AntDHeader } = Layout

const headerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  maxHeight: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#fff'
}

const Header: React.FC = () => {
  const { mobileScreen } = useWindowDimensions()

  const titleStyle: React.CSSProperties = {
    fontSize: mobileScreen ? '20px' : '26px'
  }

  return (
    <AntDHeader style={headerStyle}>
      <Typography.Title style={titleStyle}>
        Your Favorite Songs
      </Typography.Title>
    </AntDHeader>
  )
}

export default Header
