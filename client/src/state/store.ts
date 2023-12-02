import { configureStore } from '@reduxjs/toolkit'
import songsReducer from '@features/songs/songsSlice'
import { useDispatch } from 'react-redux'

const store = configureStore({
  reducer: {
    songsData: songsReducer,
  }
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch 

export default store
