import React from 'react'
import { Layout } from 'antd'
import Header from '@components/layouts/Header/comp'
import { AppContent } from '@components/layouts/AppContent'

const { Footer } = Layout

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  backgroundColor: '#fff'
}

const AppLayout: React.FC = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header />

      <AppContent />

      <Footer style={footerStyle}>All Rights Reserved.</Footer>
    </Layout>
  )
}

export default AppLayout
