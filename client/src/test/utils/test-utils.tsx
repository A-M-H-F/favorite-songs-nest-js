import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../state/store'

// eslint-disable-next-line react-refresh/only-export-components
const ProviderAndRouterWrapper = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: ProviderAndRouterWrapper, ...options })

export { customRender as render }
