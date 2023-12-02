import { type IWindowDimensions } from '@utils/types/hooks'
import { useState, useEffect } from 'react'

const compareScreenSize = (width: number, size1: number, size2: number): boolean => {
  return width >= size1 && width < size2
}

const getWindowDimensions = (): IWindowDimensions => {
  const { innerWidth: width } = window

  const screenSizes = {
    xs: width < 576,
    sm: compareScreenSize(width, 576, 768),
    md: compareScreenSize(width, 768, 992),
    lg: compareScreenSize(width, 992, 1200),
    xl: compareScreenSize(width, 1200, 1600),
    xxl: width >= 1600
  }

  const mobileScreen = screenSizes.xs || screenSizes.sm || screenSizes.md

  return {
    ...screenSizes,
    mobileScreen
  }
}

const useWindowDimensions = (): IWindowDimensions => {
  const [windowDimensions, setWindowDimensions] = useState<IWindowDimensions>(
    getWindowDimensions()
  )

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    // window.addEventListener('scroll', handleResize)
    window.addEventListener('resize', handleResize)

    return () => {
      // window.removeEventListener('scroll', handleResize)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowDimensions
}

export default useWindowDimensions
