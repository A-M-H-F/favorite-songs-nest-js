import { GridWrapper } from '@components/GridWrapper'
import React from 'react'
import { Layout } from 'antd'

const { Content } = Layout

const contentStyle: React.CSSProperties = {
  minHeight: '100vh',
  marginTop: '0em',
  marginLeft: '0em',
  marginRight: '0em',
  backgroundColor: '#fff',
  // backgroundImage: `url(${bgMusic})`,
  // backgroundSize: 'cover',
}

const AppContent: React.FC = () => {
  return (
    <Content style={contentStyle}>
      <GridWrapper />
    </Content>
  )
}

export default AppContent
